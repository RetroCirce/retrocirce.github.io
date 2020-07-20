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
var threshold = 0.01;
var autocorTh = 0.9;
var isRecord = false;
var pitch_index = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var max_freq = 2000;
var canv = null;
var devicePixelRatio = null;
var numX = null;
var color = null;
var line = null;
var wglp = null;
var wglp_x = null;

window.onload = function () {
    freq_text = document.getElementById("show-freq");

    $('#record').click(function (e) {
        canv = document.getElementById("my_canvas");
        devicePixelRatio = window.devicePixelRatio || 1;
        numX = Math.round(canv.clientWidth * devicePixelRatio);
        color = new _webglPlot.ColorRGBA(Math.random(), Math.random(), Math.random(), 1);
        line = new _webglPlot.WebglLine(color, numX);
        wglp = new _webglPlot2.default(canv);
        wglp_x = 0;
        line.lineSpaceX(-1, 2 / numX);
        wglp.addLine(line);
        beginRecord();
    });
};

function get_pitch(freq) {
    if (freq == -1) return "No Pitch";
    var pitch = 12 * (Math.log(freq / 440) / Math.log(2));
    pitch = Math.round(pitch) + 69;
    var stand_freq = 440 * Math.pow(2, (pitch - 69) / 12);
    cents = Math.floor(1200 * Math.log(freq / stand_freq) / Math.log(2));
    degree = Math.floor(pitch / 12) - 1;
    note = pitch % 12;
    return pitch_index[note] + "-" + degree.toString() + " " + cents.toString() + " cents &#9837";
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
    if (best_cor > 0.01) {
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
    freq = get_frequency(buf, audioContext.sampleRate);
    if (freq < 0) freq = 0;
    if (freq > max_freq) freq = max_freq;
    // console.log(pitch);
    freq_text.innerHTML = get_pitch(freq);
    line.setY(wglp_x, freq);
    wglp.update();
    wglp_x += 1;
    // console.log(buf);
    if (!window.requestAnimationFrame) window.requestAnimationFrame = window.webkitRequestAnimationFrame;
    rafID = window.requestAnimationFrame(update);
}
