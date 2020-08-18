(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _webglPlot = require("webgl-plot");

var _webglPlot2 = _interopRequireDefault(_webglPlot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.AudioContext = window.AudioContext || window.webkitAudioContext; /*
                                                                        Real Time Pitch Tracking via Auto-Correclate Algorithm
                                                                        
                                                                        RetroCirce 2020.7.19
                                                                        */

var analyser = null;
var audioStream = null;
var freq_text = null;
var audioContext = null;
var buflen = 1024;
var buf = new Float32Array(buflen);
var rafID = null;
var MAX_SIZE = null;
var khz = 5000;
var threshold = 0.02;
var autocorTh = 0.97;
var isRecord = false;
var pitch_index = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var max_freq = 1300;
var min_freq = 55;

var canv = null;
var devicePixelRatio = null;
var numX = null;
var color = null;
var line = null;
var wglp = null;
var wglp_x = null;

var canv_spec = null;
var devicePixelRatio_spec = null;
var numX_spec = null;
var color_spec = null;
var line_spec = null;
var wglp_spec = null;
var wglp_x_spec = null;

var y_bar_canv = null;
var ctx = null; //y_bar_canv.getContext("2d");

function getPixelRatio(context) {
    var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
}

function drawTextfromNote(note) {
    note = note + 9;
    var pitch = pitch_index[note % 12];
    var degree = Math.floor(note / 12) + 1;
    var name = pitch.toString() + '-' + degree.toString();
    var max_h = y_bar_canv.height;
    var max_w = y_bar_canv.width;
    ctx.fillText(name, max_w * 0.8, 0.9 * max_h * (1 - (note - 9) / getNotefromFreq(max_freq)) + 4);
}

function add_grid(y) {
    var gridLine = new _webglPlot.WebglLine(new _webglPlot.ColorRGBA(0.2, 0.2, 0.2, 1), 100);
    gridLine.lineSpaceX(-1, 2 / 100);
    for (var i = 0; i < 100; ++i) {
        gridLine.setY(i, y);
    }
    gridLine.offsetY = -0.8;
    wglp.addLine(gridLine);
}

function getNotefromFreq(freq) {
    if (freq == 0 || freq == -1 || freq > max_freq || freq < min_freq) return 0;
    return 12 * (Math.log(freq / 440.0) / Math.log(2)) - 12 * (Math.log(min_freq / 440.0) / Math.log(2));
}

window.onload = function () {
    freq_text = document.getElementById("show-freq");

    $('#record').click(function (e) {

        y_bar_canv = document.getElementById("y_bar");
        ctx = y_bar_canv.getContext("2d");
        var ratio = getPixelRatio(ctx);

        y_bar_canv.style.width = window.innerWidth * 0.08 + 'px';
        y_bar_canv.style.height = y_bar_canv.height + 'px';

        y_bar_canv.width = window.innerWidth * 0.08 * ratio;
        y_bar_canv.height = y_bar_canv.height * ratio;

        ctx.font = "12px Georgia";
        ctx.fillStyle = "white";
        // ctx.fillText("Hello World", 10, 100);
        // console.log(ratio);


        canv = document.getElementById("my_canvas");
        canv_spec = document.getElementById("spec");

        devicePixelRatio = window.devicePixelRatio || 1;
        devicePixelRatio_spec = window.devicePixelRatio || 1;

        numX = 300; //Math.round(canv.clientWidth * devicePixelRatio);
        color = new _webglPlot.ColorRGBA(1, 1, 0, 1);
        line = new _webglPlot.WebglLine(color, numX);
        wglp = new _webglPlot2.default(canv);
        wglp_x = 0;
        line.lineSpaceX(-1, 2 / numX);
        line.offsetY = -0.8;
        line.scaleX = -1;
        for (var i = 0; i < Math.floor(getNotefromFreq(max_freq)); ++i) {
            add_grid(1.8 * i / getNotefromFreq(max_freq));
            drawTextfromNote(i);
        }
        wglp.addLine(line);

        numX_spec = buflen;
        color_spec = new _webglPlot.ColorRGBA(1, 1, 1, 1);
        line_spec = new _webglPlot.WebglLine(color_spec, numX_spec);
        wglp_spec = new _webglPlot2.default(canv_spec);
        line_spec.lineSpaceX(-1, 2 / numX_spec);
        wglp_spec.addLine(line_spec);

        beginRecord();
    });
};

function get_pitch(freq) {
    if (freq == null || freq == -1 || freq == 0) return "No Pitch";
    var pitch = 12 * (Math.log(freq / 440) / Math.log(2));
    pitch = Math.round(pitch) + 69;
    var stand_freq = 440 * Math.pow(2, (pitch - 69) / 12);
    var cents = Math.floor(1200 * Math.log(freq / stand_freq) / Math.log(2));
    var degree = Math.floor(pitch / 12) - 1;
    var note = pitch % 12;
    return pitch_index[note] + "-" + degree.toString() + " " + cents.toString() + " cents";
}

function get_frequency(buf, fs) {
    var bufsize = buf.length;
    var MAX_S = Math.floor(bufsize / 2);
    var best_offset = -1;
    var best_cor = 0;
    var rms = 0;
    var isGoodCor = false;
    var cors = new Array(MAX_S);

    for (var i = 0; i < bufsize; ++i) {
        rms += buf[i] * buf[i];
    }
    rms = Math.sqrt(rms / bufsize);
    if (rms < threshold) return -1;

    var corTemp = 1;
    for (var j = 0; j < MAX_S; ++j) {
        var cor = 0;
        for (var i = 0; i < MAX_S; ++i) {
            cor += Math.abs(buf[i] - buf[i + j]);
        }
        cor = 1 - cor / MAX_S;
        cors[j] = cor;
        if (cor > autocorTh && cor > corTemp) {
            isGoodCor = true;
            if (cor > best_cor) {
                best_cor = cor;
                best_offset = j;
            }
        } else if (isGoodCor) {
            var shift = (cors[best_offset + 1] - cors[best_offset - 1]) / cors[best_offset];
            return fs / (best_offset + (MAX_SIZE - 1) * shift);
        }
        corTemp = cor;
    }
    if (best_cor > 0.2) {
        return fs / best_offset;
    }
    return -1;
}

function getStream(stream) {
    audioContext = new AudioContext();
    console.log(audioContext.sampleRate);
    MAX_SIZE = Math.max(4, Math.floor(audioContext.sampleRate / khz));
    audioStream = audioContext.createMediaStreamSource(stream);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    audioStream.connect(analyser);
    update();
}

function error() {
    alert('Record Failed!');
}

function beginRecord() {
    if (isRecord) {
        if (!window.cancelAnimationFrame) window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
        window.cancelAnimationFrame(rafID);
        analyser = null;
        audioStream = null;
        audioContext = null;
        isRecord = false;
        $("#record").innerHTML = "Click Here to Start Record";
    } else {
        try {
            isRecord = true;

            $("#record").innerHTML = "Click Here to Stop Record";
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            navigator.getUserMedia({
                "audio": {
                    "mandatory": {
                        "googEchoCancellation": "false",
                        "googAutoGainControl": "false",
                        "googNoiseSuppression": "false",
                        "googHighpassFilter": "false"
                    },
                    "optional": []
                }
            }, getStream, error);
        } catch (e) {
            alert('get media failed' + e);
        }
    }
}

function update() {
    analyser.getFloatTimeDomainData(buf);
    var freq = get_frequency(buf, audioContext.sampleRate);
    if (freq < 0) freq = null;
    if (freq > max_freq || freq < min_freq) freq = null;
    // console.log(pitch);
    freq_text.innerHTML = get_pitch(freq);
    line.shiftAdd([1.8 * getNotefromFreq(freq) / getNotefromFreq(max_freq)]);

    for (var i = 0; i < buflen; ++i) {
        line_spec.setY(i, buf[i]);
    }
    wglp_spec.update();
    wglp.update();
    // wglp_x += 1;
    // if (wglp_x > numX) {
    //     for(var i = 0;i < numX;++i) {
    //         line.setY(i,0);
    //     }
    //     wglp_x = 0;
    // }
    // console.log(buf);
    if (!window.requestAnimationFrame) window.requestAnimationFrame = window.webkitRequestAnimationFrame;
    rafID = window.requestAnimationFrame(update);
}

},{"webgl-plot":2}],2:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.WebGLPlot = {}));
}(this, (function (exports) { 'use strict';

    class ColorRGBA {
        constructor(r, g, b, a) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
    }

    /**
     * Baseline class
     */
    class WebglBaseLine {
        /**
         * @internal
         */
        constructor() {
            this.scaleX = 1;
            this.scaleY = 1;
            this.offsetX = 0;
            this.offsetY = 0;
            this.loop = false;
            this._vbuffer = 0;
            this._prog = 0;
            this._coord = 0;
            this.visible = true;
            this.intensity = 1;
        }
    }

    /**
     * The standard Line class
     */
    class WebglLine extends WebglBaseLine {
        /**
         * Create a new line
         * @param c - the color of the line
         * @param numPoints - number of data pints
         * @example
         * ```typescript
         * x= [0,1]
         * y= [1,2]
         * line = new WebglLine( new ColorRGBA(0.1,0.1,0.1,1), 2);
         * ```
         */
        constructor(c, numPoints) {
            super();
            this.webglNumPoints = numPoints;
            this.numPoints = numPoints;
            this.color = c;
            this.xy = new Float32Array(2 * this.webglNumPoints);
        }
        /**
         * Set the X value at a specific index
         * @param index - the index of the data point
         * @param x - the horizontal value of the data point
         */
        setX(index, x) {
            this.xy[index * 2] = x;
        }
        /**
         * Set the Y value at a specific index
         * @param index : the index of the data point
         * @param y : the vertical value of the data point
         */
        setY(index, y) {
            this.xy[index * 2 + 1] = y;
        }
        /**
         * Get an X value at a specific index
         * @param index - the index of X
         */
        getX(index) {
            return this.xy[index * 2];
        }
        /**
         * Get an Y value at a specific index
         * @param index - the index of Y
         */
        getY(index) {
            return this.xy[index * 2 + 1];
        }
        /**
         * Make an equally spaced array of X points
         * @param start  - the start of the series
         * @param stepSize - step size between each data point
         *
         * @example
         * ```typescript
         * //x = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8]
         * const numX = 10;
         * line.lineSpaceX(-1, 2 / numX);
         * ```
         */
        lineSpaceX(start, stepSize) {
            for (let i = 0; i < this.numPoints; i++) {
                // set x to -num/2:1:+num/2
                this.setX(i, start + stepSize * i);
            }
        }
        /**
         * Set a constant value for all Y values in the line
         * @param c - constant value
         */
        constY(c) {
            for (let i = 0; i < this.numPoints; i++) {
                // set x to -num/2:1:+num/2
                this.setY(i, c);
            }
        }
        /**
         * Add a new Y values to the end of current array and shift it, so that the total number of the pair remains the same
         * @param data - the Y array
         *
         * @example
         * ```typescript
         * yArray = new Float32Array([3, 4, 5]);
         * line.shiftAdd(yArray);
         * ```
         */
        shiftAdd(data) {
            const shiftSize = data.length;
            for (let i = 0; i < this.numPoints - shiftSize; i++) {
                this.setY(i, this.getY(i + shiftSize));
            }
            for (let i = 0; i < shiftSize; i++) {
                this.setY(i + this.numPoints - shiftSize, data[i]);
            }
        }
    }

    /**
     * The step based line plot
     */
    class WebglStep extends WebglBaseLine {
        /**
         * Create a new step line
         * @param c - the color of the line
         * @param numPoints - number of data pints
         * @example
         * ```typescript
         * x= [0,1]
         * y= [1,2]
         * line = new WebglStep( new ColorRGBA(0.1,0.1,0.1,1), 2);
         * ```
         */
        constructor(c, num) {
            super();
            this.webglNumPoints = num * 2;
            this.numPoints = num;
            this.color = c;
            this.xy = new Float32Array(2 * this.webglNumPoints);
        }
        /**
         * Set the Y value at a specific index
         * @param index - the index of the data point
         * @param y - the vertical value of the data point
         */
        setY(index, y) {
            this.xy[index * 4 + 1] = y;
            this.xy[index * 4 + 3] = y;
        }
        getX(index) {
            return this.xy[index * 4];
        }
        /**
         * Get an X value at a specific index
         * @param index - the index of X
         */
        getY(index) {
            return this.xy[index * 4 + 1];
        }
        /**
         * Make an equally spaced array of X points
         * @param start  - the start of the series
         * @param stepSize - step size between each data point
         *
         * @example
         * ```typescript
         * //x = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8]
         * const numX = 10;
         * line.lineSpaceX(-1, 2 / numX);
         * ```
         */
        lineSpaceX(start, stepsize) {
            for (let i = 0; i < this.numPoints; i++) {
                // set x to -num/2:1:+num/2
                this.xy[i * 4] = start + i * stepsize;
                this.xy[i * 4 + 2] = start + (i * stepsize + stepsize);
            }
        }
        /**
         * Set a constant value for all Y values in the line
         * @param c - constant value
         */
        constY(c) {
            for (let i = 0; i < this.numPoints; i++) {
                // set x to -num/2:1:+num/2
                this.setY(i, c);
            }
        }
        /**
         * Add a new Y values to the end of current array and shift it, so that the total number of the pair remains the same
         * @param data - the Y array
         *
         * @example
         * ```typescript
         * yArray = new Float32Array([3, 4, 5]);
         * line.shiftAdd(yArray);
         * ```
         */
        shiftAdd(data) {
            const shiftSize = data.length;
            for (let i = 0; i < this.numPoints - shiftSize; i++) {
                this.setY(i, this.getY(i + shiftSize));
            }
            for (let i = 0; i < shiftSize; i++) {
                this.setY(i + this.numPoints - shiftSize, data[i]);
            }
        }
    }

    class WebglPolar extends WebglBaseLine {
        constructor(c, numPoints) {
            super();
            this.webglNumPoints = numPoints;
            this.numPoints = numPoints;
            this.color = c;
            this.intenisty = 1;
            this.xy = new Float32Array(2 * this.webglNumPoints);
            this._vbuffer = 0;
            this._prog = 0;
            this._coord = 0;
            this.visible = true;
            this.offsetTheta = 0;
        }
        /**
         * @param index: index of the line
         * @param theta : angle in deg
         * @param r : radius
         */
        setRtheta(index, theta, r) {
            //const rA = Math.abs(r);
            //const thetaA = theta % 360;
            const x = r * Math.cos((2 * Math.PI * (theta + this.offsetTheta)) / 360);
            const y = r * Math.sin((2 * Math.PI * (theta + this.offsetTheta)) / 360);
            //const index = Math.round( ((theta % 360)/360) * this.numPoints );
            this.setX(index, x);
            this.setY(index, y);
        }
        getTheta(index) {
            //return Math.tan
            return 0;
        }
        getR(index) {
            //return Math.tan
            return Math.sqrt(Math.pow(this.getX(index), 2) + Math.pow(this.getY(index), 2));
        }
        setX(index, x) {
            this.xy[index * 2] = x;
        }
        setY(index, y) {
            this.xy[index * 2 + 1] = y;
        }
        getX(index) {
            return this.xy[index * 2];
        }
        getY(index) {
            return this.xy[index * 2 + 1];
        }
    }

    /**
     * Author Danial Chitnis 2019
     *
     * inspired by:
     * https://codepen.io/AzazelN28
     * https://www.tutorialspoint.com/webgl/webgl_modes_of_drawing.htm
     */
    /**
     * The main class for the webgl-plot library
     */
    class WebGLPlot {
        /**
         * Create a webgl-plot instance
         * @param canv - the HTML canvas in which the plot appears
         *
         * @example
         * ```typescript
         * const canv = dcoument.getEelementbyId("canvas");
         * const webglp = new WebGLplot(canv);
         * ```
         */
        constructor(canv) {
            const devicePixelRatio = window.devicePixelRatio || 1;
            // set the size of the drawingBuffer based on the size it's displayed.
            canv.width = canv.clientWidth * devicePixelRatio;
            canv.height = canv.clientHeight * devicePixelRatio;
            const webgl = canv.getContext("webgl", {
                antialias: true,
                transparent: false,
            });
            this.lines = [];
            this.webgl = webgl;
            this.gScaleX = 1;
            this.gScaleY = 1;
            this.gXYratio = 1;
            this.gOffsetX = 0;
            this.gOffsetY = 0;
            // Enable the depth test
            webgl.enable(webgl.DEPTH_TEST);
            // Clear the color and depth buffer
            webgl.clear(webgl.COLOR_BUFFER_BIT || webgl.DEPTH_BUFFER_BIT);
            // Set the view port
            webgl.viewport(0, 0, canv.width, canv.height);
        }
        /**
         * updates and redraws the content of the plot
         */
        update() {
            const webgl = this.webgl;
            this.lines.forEach((line) => {
                if (line.visible) {
                    webgl.useProgram(line._prog);
                    const uscale = webgl.getUniformLocation(line._prog, "uscale");
                    webgl.uniformMatrix2fv(uscale, false, new Float32Array([
                        line.scaleX * this.gScaleX,
                        0,
                        0,
                        line.scaleY * this.gScaleY * this.gXYratio,
                    ]));
                    const uoffset = webgl.getUniformLocation(line._prog, "uoffset");
                    webgl.uniform2fv(uoffset, new Float32Array([line.offsetX + this.gOffsetX, line.offsetY + this.gOffsetY]));
                    const uColor = webgl.getUniformLocation(line._prog, "uColor");
                    webgl.uniform4fv(uColor, [line.color.r, line.color.g, line.color.b, line.color.a]);
                    webgl.bufferData(webgl.ARRAY_BUFFER, line.xy, webgl.STREAM_DRAW);
                    webgl.drawArrays(line.loop ? webgl.LINE_LOOP : webgl.LINE_STRIP, 0, line.webglNumPoints);
                }
            });
        }
        clear() {
            // Clear the canvas  //??????????????????
            //this.webgl.clearColor(0.1, 0.1, 0.1, 1.0);
            this.webgl.clear(this.webgl.COLOR_BUFFER_BIT || this.webgl.DEPTH_BUFFER_BIT);
        }
        /**
         * adds a line to the plot
         * @param line - this could be any of line, linestep, histogram, or polar
         *
         * @example
         * ```typescript
         * const line = new line(color, numPoints);
         * wglp.addLine(line);
         * ```
         */
        addLine(line) {
            line._vbuffer = this.webgl.createBuffer();
            this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, line._vbuffer);
            this.webgl.bufferData(this.webgl.ARRAY_BUFFER, line.xy, this.webgl.STREAM_DRAW);
            const vertCode = `
      attribute vec2 coordinates;
      uniform mat2 uscale;
      uniform vec2 uoffset;

      void main(void) {
         gl_Position = vec4(uscale*coordinates + uoffset, 0.0, 1.0);
      }`;
            // Create a vertex shader object
            const vertShader = this.webgl.createShader(this.webgl.VERTEX_SHADER);
            // Attach vertex shader source code
            this.webgl.shaderSource(vertShader, vertCode);
            // Compile the vertex shader
            this.webgl.compileShader(vertShader);
            // Fragment shader source code
            const fragCode = `
         precision mediump float;
         uniform highp vec4 uColor;
         void main(void) {
            gl_FragColor =  uColor;
         }`;
            const fragShader = this.webgl.createShader(this.webgl.FRAGMENT_SHADER);
            this.webgl.shaderSource(fragShader, fragCode);
            this.webgl.compileShader(fragShader);
            line._prog = this.webgl.createProgram();
            this.webgl.attachShader(line._prog, vertShader);
            this.webgl.attachShader(line._prog, fragShader);
            this.webgl.linkProgram(line._prog);
            this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, line._vbuffer);
            line._coord = this.webgl.getAttribLocation(line._prog, "coordinates");
            this.webgl.vertexAttribPointer(line._coord, 2, this.webgl.FLOAT, false, 0, 0);
            this.webgl.enableVertexAttribArray(line._coord);
            this.lines.push(line);
        }
        removeLine(index) {
            //to be implemented
        }
        /**
         * Change the WbGL viewport
         * @param a
         * @param b
         * @param c
         * @param d
         */
        viewport(a, b, c, d) {
            this.webgl.viewport(a, b, c, d);
        }
    }

    exports.ColorRGBA = ColorRGBA;
    exports.WebglLine = WebglLine;
    exports.WebglPolar = WebglPolar;
    exports.WebglStep = WebglStep;
    exports.default = WebGLPlot;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}]},{},[1]);
