(function(t){function e(e){for(var a,s,o=e[0],c=e[1],d=e[2],l=0,u=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(u.length)u.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},r=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var h=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=i("8c4f"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{color:"primary",dark:"",dense:"",app:""}},[i("v-toolbar-title",[t._v("音高识别-Pitch Detection")]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:t.switchToHome}},[i("v-icon",[t._v("mdi-home")])],1)],1),i("v-main",[i("router-view")],1),i("v-footer",{attrs:{absolute:"",dense:"",app:""}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" RetroCirce@2020 ")])],1)],1)},s=[],o={name:"App",components:{},data:function(){return{}},methods:{switchToHome:function(){"/"!=this.$router.currentRoute.fullPath&&this.$router.push("/")}}},c=o,d=i("2877"),h=i("6544"),l=i.n(h),u=i("7496"),p=i("40dc"),f=i("8336"),m=i("62ad"),v=i("553a"),g=i("132d"),y=i("f6c4"),C=i("2fa4"),b=i("2a7f"),_=Object(d["a"])(c,r,s,!1,null,null,null),w=_.exports;l()(_,{VApp:u["a"],VAppBar:p["a"],VBtn:f["a"],VCol:m["a"],VFooter:v["a"],VIcon:g["a"],VMain:y["a"],VSpacer:C["a"],VToolbarTitle:b["a"]});var x=i("f309");a["a"].use(x["a"]);var R=new x["a"]({}),S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"text-center"},[i("v-col",[i("h2",[t._v("麦克风测试")]),i("br"),i("p",[t._v("请单击录制按钮")])])],1),i("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[i("v-btn",{attrs:{small:"",color:"primary"},on:{click:t.recordAction}},[t.isRecording?i("span",[t._v("结束录制")]):i("span",[t._v("开始录制")])])],1),t.recordings.length>0?i("v-layout",{attrs:{column:"",wrap:""}},[i("h4",{staticClass:"mt-3"},[t._v("已保存录音")]),t._l(t.recordings,(function(e,a){return i("div",{key:e.ts},[i("v-card",[i("v-card-title",{attrs:{"primary-title":""}},[i("v-layout",{attrs:{column:"",wrap:""}},[i("div",{staticStyle:{fontSize:"0.8em"}},[t._v(" 录音-"+t._s(a+1)+" ")]),i("div",{staticClass:"ml-3"},[i("div",[i("audio",{attrs:{src:e.blobUrl,type:e.mimeType,controls:"true"}})]),i("div",{staticStyle:{fontSize:"0.5em"}},[t._v(" 大小: "+t._s(e.size)+", 类型: "+t._s(e.mimeType)+" ")])])])],1)],1),a!==t.recordings.length-1?i("v-divider"):t._e()],1)}))],2):t._e()],1)},M=[],N=(i("4160"),i("d3b7"),i("ac1f"),i("25f0"),i("3ca3"),i("5319"),i("159b"),i("ddb0"),i("2b3d"),i("d4ec")),k=i("bee2"),A=(i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),function(){var t=2,e=[];function i(i){for(var a=i.length,n=new Uint8Array(a*t),r=0;r<a;r++){var s=r*t,o=i[r];o>1?o=1:o<-1&&(o=-1),o*=32768,n[s]=o,n[s+1]=o>>8}e.push(n)}function a(i){var a=e.length?e[0].length:0,n=e.length*a,r=new Uint8Array(44+n),s=new DataView(r.buffer);s.setUint32(0,1380533830,!1),s.setUint32(4,36+n,!0),s.setUint32(8,1463899717,!1),s.setUint32(12,1718449184,!1),s.setUint32(16,16,!0),s.setUint16(20,1,!0),s.setUint16(22,1,!0),s.setUint32(24,i,!0),s.setUint32(28,i*t,!0),s.setUint16(32,t,!0),s.setUint16(34,8*t,!0),s.setUint32(36,1684108385,!1),s.setUint32(40,n,!0);for(var o=0;o<e.length;o++)r.set(e[o],o*a+44);e=[];var c=[r.buffer];postMessage(c,[c[0]])}self.onmessage=function(t){"encode"===t.data[0]?i(t.data[1]):"dump"===t.data[0]?a(t.data[1]):"close"===t.data[0]&&self.close()}}),T=(i("cfc3"),i("8b09"),function(){var t=1,e=128,i=null,a=1152,n=[];function r(a){importScripts(a.baseUrl+"/workers/encoders/lame.min.js"),i=new lamejs.Mp3Encoder(t,a.sampleRate,e)}function s(t,e){for(var i=0;i<t.length;i++){var a=Math.max(-1,Math.min(1,t[i]));e[i]=a<0?32768*a:32767*a}}function o(t){var e=new Float32Array(t),i=new Int16Array(t.length);return s(e,i),i}function c(t){for(var e=o(t),r=e.length,s=0;r>=0;s+=a){var c=e.subarray(s,s+a),d=i.encodeBuffer(c);n.push(d),r-=a}}function d(){var t=i.flush();t.length>0&&n.push(t),postMessage(n),n=[]}onmessage=function(t){"encode"===t.data[0]?c(t.data[1]):"dump"===t.data[0]?d(t.data[1]):"init"===t.data[0]?r(t.data[1]):"close"===t.data[0]&&self.close()}}),V=function(){var t=1,e=.4,i=null,a=[];function n(a){importScripts(a.baseUrl+"/workers/encoders/OggVorbisEncoder.js"),i=new OggVorbisEncoder(a.sampleRate,t,e)}function r(t){var e=i.encode([t]);a.push(e)}function s(){var t=i.finish("audio/ogg");postMessage(t),a=[]}onmessage=function(t){"encode"===t.data[0]?r(t.data[1]):"dump"===t.data[0]?s(t.data[1]):"init"===t.data[0]?n(t.data[1]):"close"===t.data[0]&&self.close()}},E="https://retrocirce.github.io/dist",G=function(){function t(e){Object(N["a"])(this,t),this.baseUrl=e,window.AudioContext=window.AudioContext||window.webkitAudioContext,this.em=document.createDocumentFragment(),this.state="inactive",this.chunks=[],this.chunkType="",this.encoderMimeType="audio/wav",this.config={broadcastAudioProcessEvents:!1,createAnalyserNode:!1,createDynamicsCompressorNode:!1,forceScriptProcessor:!1,manualEncoderId:"wav",micGain:1,processorBufferSize:2048,stopTracksAndCloseCtxWhenFinished:!0,usingMediaRecorder:"undefined"!==typeof window.MediaRecorder,enableEchoCancellation:!1}}return Object(k["a"])(t,[{key:"createWorker",value:function(t){var e=t.toString().replace(/^function\s*\(\)\s*{/,"").replace(/}$/,""),i=new Blob([e]);return new Worker(URL.createObjectURL(i))}},{key:"startRecording",value:function(t){var e=this;if("inactive"===this.state){if(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){this.audioCtx=new AudioContext,this.micGainNode=this.audioCtx.createGain(),this.outputGainNode=this.audioCtx.createGain(),this.config.createDynamicsCompressorNode&&(this.dynamicsCompressorNode=this.audioCtx.createDynamicsCompressor()),this.config.createAnalyserNode&&(this.analyserNode=this.audioCtx.createAnalyser()),(this.config.forceScriptProcessor||this.config.broadcastAudioProcessEvents||!this.config.usingMediaRecorder)&&(this.processorNode=this.audioCtx.createScriptProcessor(this.config.processorBufferSize,1,1)),this.audioCtx.createMediaStreamDestination?this.destinationNode=this.audioCtx.createMediaStreamDestination():this.destinationNode=this.audioCtx.destination,this.config.usingMediaRecorder||("mp3"===this.config.manualEncoderId?(this.encoderWorker=this.createWorker(T),this.encoderWorker.postMessage(["init",{baseUrl:E,sampleRate:this.audioCtx.sampleRate}]),this.encoderMimeType="audio/mpeg"):"ogg"===this.config.manualEncoderId?(this.encoderWorker=this.createWorker(V),this.encoderWorker.postMessage(["init",{baseUrl:E,sampleRate:this.audioCtx.sampleRate}]),this.encoderMimeType="audio/ogg"):(this.encoderWorker=this.createWorker(A),this.encoderMimeType="audio/wav"),this.encoderWorker.addEventListener("message",(function(t){var i=new Event("dataavailable");"ogg"===e.config.manualEncoderId?i.data=t.data:i.data=new Blob(t.data,{type:e.encoderMimeType}),e._onDataAvailable(i)})));var i={audio:{echoCancellation:this.config.enableEchoCancellation,noiseSuppression:!1,autoGainControl:!1}};return this.config.deviceId&&(i.audio.deviceId=this.config.deviceId),navigator.mediaDevices.getUserMedia(i).then((function(i){e._startRecordingWithStream(i,t)})).catch((function(t){alert("Error with getUserMedia: "+t.message),console.log(t)}))}alert("Missing support for navigator.mediaDevices.getUserMedia")}}},{key:"setMicGain",value:function(t){this.config.micGain=t,this.audioCtx&&this.micGainNode&&this.micGainNode.gain.setValueAtTime(t,this.audioCtx.currentTime)}},{key:"_startRecordingWithStream",value:function(t,e){var i=this;this.micAudioStream=t,this.inputStreamNode=this.audioCtx.createMediaStreamSource(this.micAudioStream),this.audioCtx=this.inputStreamNode.context,this.onGraphSetupWithInputStream&&this.onGraphSetupWithInputStream(this.inputStreamNode),this.inputStreamNode.connect(this.micGainNode),this.micGainNode.gain.setValueAtTime(this.config.micGain,this.audioCtx.currentTime);var a=this.micGainNode;this.dynamicsCompressorNode&&(this.micGainNode.connect(this.dynamicsCompressorNode),a=this.dynamicsCompressorNode),this.state="recording",this.processorNode?(a.connect(this.processorNode),this.processorNode.connect(this.outputGainNode),this.processorNode.onaudioprocess=function(t){return i._onAudioProcess(t)}):a.connect(this.outputGainNode),this.analyserNode&&a.connect(this.analyserNode),this.outputGainNode.connect(this.destinationNode),this.config.usingMediaRecorder?(this.mediaRecorder=new MediaRecorder(this.destinationNode.stream),this.mediaRecorder.addEventListener("dataavailable",(function(t){return i._onDataAvailable(t)})),this.mediaRecorder.addEventListener("error",(function(t){return i._onError(t)})),this.mediaRecorder.start(e)):(this.outputGainNode.gain.setValueAtTime(0,this.audioCtx.currentTime),e&&(console.log("Time slicing without MediaRecorder is not yet supported. The resulting recording will not be playable."),this.slicing=setInterval((function(){"recording"===this.state&&this.encoderWorker.postMessage(["dump",this.context.sampleRate])}),e)))}},{key:"_onAudioProcess",value:function(t){this.config.broadcastAudioProcessEvents&&this.em.dispatchEvent(new CustomEvent("onaudioprocess",{detail:{inputBuffer:t.inputBuffer,outputBuffer:t.outputBuffer}})),this.config.usingMediaRecorder||"recording"===this.state&&(this.config.broadcastAudioProcessEvents?this.encoderWorker.postMessage(["encode",t.outputBuffer.getChannelData(0)]):this.encoderWorker.postMessage(["encode",t.inputBuffer.getChannelData(0)]))}},{key:"stopRecording",value:function(){"inactive"!==this.state&&(this.config.usingMediaRecorder?(this.state="inactive",this.mediaRecorder.stop()):(this.state="inactive",this.encoderWorker.postMessage(["dump",this.audioCtx.sampleRate]),clearInterval(this.slicing)))}},{key:"_onDataAvailable",value:function(t){if(this.chunks.push(t.data),this.chunkType=t.data.type,"inactive"===this.state){var e=new Blob(this.chunks,{type:this.chunkType}),i=URL.createObjectURL(e),a={ts:(new Date).getTime(),blobUrl:i,mimeType:e.type,size:e.size};this.chunks=[],this.chunkType=null,this.destinationNode&&(this.destinationNode.disconnect(),this.destinationNode=null),this.outputGainNode&&(this.outputGainNode.disconnect(),this.outputGainNode=null),this.analyserNode&&(this.analyserNode.disconnect(),this.analyserNode=null),this.processorNode&&(this.processorNode.disconnect(),this.processorNode=null),this.encoderWorker&&(this.encoderWorker.postMessage(["close"]),this.encoderWorker=null),this.dynamicsCompressorNode&&(this.dynamicsCompressorNode.disconnect(),this.dynamicsCompressorNode=null),this.micGainNode&&(this.micGainNode.disconnect(),this.micGainNode=null),this.inputStreamNode&&(this.inputStreamNode.disconnect(),this.inputStreamNode=null),this.config.stopTracksAndCloseCtxWhenFinished&&(this.micAudioStream.getTracks().forEach((function(t){return t.stop()})),this.micAudioStream=null,this.audioCtx.close(),this.audioCtx=null),this.em.dispatchEvent(new CustomEvent("recording",{detail:{recording:a}}))}}},{key:"_onError",value:function(t){console.log("error",t),this.em.dispatchEvent(new Event("error")),alert("error:"+t)}}]),t}(),U={name:"MicTest",data:function(){return{echoCancel:!1,isRecording:!1,mimeTypes:[],recordings:[],micGain:1,cleanup:!0,dynamicCompress:!1}},methods:{recordAction:function(){this.isRecording?this.stopRecording():this.startRecording()},startRecording:function(){var t=this;this.recorder.config.stopTracksAndCloseCtxWhenFinished=this.cleanup,this.recorder.config.createDynamicsCompressorNode=this.dynamicCompress,this.recorder.config.enableEchoCancellation=this.echoCancel,this.recorder.startRecording().then((function(){t.isRecording=!0})).catch((function(t){console.error("Recording Failed: "+t),alert("Recording Failed: "+t.message)}))},stopRecording:function(){this.recorder.stopRecording(),this.isRecording=!1},onNewRecording:function(t){this.recordings.push(t.detail.recording)}},created:function(){var t=this;this.recorder=new G,this.recorder.em.addEventListener("recording",(function(e){return t.onNewRecording(e)}))}},D=U,W=i("b0af"),q=i("99d9"),B=i("a523"),j=i("ce7e"),O=i("a722"),P=i("0fd9"),F=Object(d["a"])(D,S,M,!1,null,null,null),z=F.exports;l()(F,{VBtn:f["a"],VCard:W["a"],VCardTitle:q["a"],VCol:m["a"],VContainer:B["a"],VDivider:j["a"],VLayout:O["a"],VRow:P["a"]});var I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"6"}},[i("h2",[t._v("音高识别")]),i("v-btn",{staticClass:"mt-2",attrs:{small:"",color:"primary"},on:{click:t.recordAction}},[t.isRecording?i("span",[t._v("结束录制")]):i("span",[t._v("开始录制")])])],1),i("v-col",{attrs:{cols:"6"}},[i("v-avatar",{staticClass:"white--text",attrs:{tile:"",color:"primary",size:"6em"}},[i("div",{staticStyle:{fontSize:"3em",position:"absolute"},attrs:{id:"pitch_name"}},[t._v(t._s(t.pitch_name))]),i("div",{staticClass:"ml-15 mb-15",staticStyle:{fontSize:"1em",position:"absolute"},attrs:{id:"degree_name"}},[t._v(t._s(t.degree))]),i("div",{staticClass:"mt-15",staticStyle:{fontSize:"1em",position:"absolute"},attrs:{id:"cents_name"}},[t._v(t._s(t.cents))])])],1)],1),i("span",{staticStyle:{fontSize:"1em",position:"absolute"}},[t._v(t._s(t.db))]),i("v-layout",{staticClass:"mx-2 my-1",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("h4",{staticClass:"mt-3"},[t._v("实时音频")]),i("v-divider")],1),i("v-flex",{attrs:{xs12:""}},[i("canvas",{staticStyle:{border:"1px solid black",width:"100%",height:"10em"},attrs:{id:"audio_canvas"}})])],1),i("v-layout",{staticClass:"mt-1 mx-2",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("h4",{staticClass:"mt-3"},[t._v("音高曲线")]),i("v-divider")],1),i("v-flex",{attrs:{xs12:""}},[i("canvas",{staticStyle:{border:"1px solid black",width:"100%",height:"28em"},attrs:{id:"pitch_canvas"}})])],1),t.recordings.length>0?i("v-layout",{attrs:{column:"",wrap:""}},[i("h4",{staticClass:"mt-3"},[t._v("已保存录音")]),t._l(t.recordings,(function(e,a){return i("div",{key:e.ts},[i("v-card",[i("v-card-title",{attrs:{"primary-title":""}},[i("v-layout",{attrs:{column:"",wrap:""}},[i("div",{staticStyle:{fontSize:"0.8em"}},[t._v(" 录音-"+t._s(a+1)+" ")]),i("div",{staticClass:"ml-3"},[i("div",[i("audio",{attrs:{src:e.blobUrl,type:e.mimeType,controls:"true"}})]),i("div",{staticStyle:{fontSize:"0.5em"}},[t._v(" 大小: "+t._s(e.size)+", 类型: "+t._s(e.mimeType)+" ")])])])],1)],1),a!==t.recordings.length-1?i("v-divider"):t._e()],1)}))],2):t._e()],1)},L=[],$=i("1157"),H=i.n($),X=function(){function t(){Object(N["a"])(this,t)}return Object(k["a"])(t,[{key:"get_frequency",value:function(t,e){for(var i=Math.max(4,Math.floor(e/5e3)),a=.02,n=.97,r=2e3,s=t.length,o=Math.floor(s/2),c=-1,d=0,h=0,l=!1,u=new Array(o),p=0;p<s;++p)h+=t[p]*t[p];if(h=Math.sqrt(h/s),h<a)return[-1,0];for(var f=1,m=0;m<o;++m){for(var v=0,g=0;g<o;++g)v+=Math.abs(t[g]-t[g+m]);if(v=1-v/o,u[m]=v,v>n&&v>f)l=!0,v>d&&(d=v,c=m);else if(l){var y=(u[c+1]-u[c-1])/u[c],C=e/(c+(i-1)*y);return C<0&&(C=0),C>r&&(C=r),[C,h]}f=v}return[-1,0]}},{key:"get_pitch",value:function(t){var e=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];if(-1==t)return["N","0","0"];var i=Math.log(t/440)/Math.log(2)*12;i=Math.round(i)+69;var a=440*Math.pow(2,(i-69)/12),n=Math.floor(1200*Math.log(t/a)/Math.log(2)),r=Math.floor(i/12)-1,s=i%12;return[e[s],r.toString(),n.toString()]}}]),t}(),J=new X,K=.9,Q=2048,Y={name:"PitchDetect",data:function(){return{echoCancel:!1,isRecording:!1,mimeTypes:[],recordings:[],micGain:1,cleanup:!0,fs:44100,dynamicCompress:!1,pitch_name:"A",cents:"0",degree:"4",maxFreq:90,pitchMaxX:300,pitchSeq:[],pitchColor:[],curPos:0,isCalc:!0,db:0}},methods:{recordAction:function(){this.isRecording?this.stopRecording():this.startRecording()},startRecording:function(){var t=this;this.recorder.config.stopTracksAndCloseCtxWhenFinished=this.cleanup,this.recorder.config.createDynamicsCompressorNode=this.dynamicCompress,this.recorder.config.enableEchoCancellation=this.echoCancel,this.recorder.config.micGain=this.micGain,this.recorder.startRecording().then((function(){t.isRecording=!0,t.analyser=t.recorder.analyserNode,t.audioCtx=t.recorder.audioCtx,t.fs=t.analyser.context.sampleRate,t.analyser.minDecibels=-140,t.analyser.maxDecibels=0,t.freqs=new Uint8Array(t.analyser.frequencyBinCount),t.times=new Uint8Array(t.analyser.frequencyBinCount),t.audio_canvas=H()("#audio_canvas").get(0),t.audio_canvasWidth=t.audio_canvas.width,t.audio_canvasHeight=t.audio_canvas.height,t.pitch_canvas=H()("#pitch_canvas").get(0),t.pitch_canvasWidth=t.pitch_canvas.width,t.pitch_canvasHeight=t.pitch_canvas.height,window.requestAnimationFrame(t.draw.bind(t))})).catch((function(t){console.error("Recording Failed: "+t),alert("Recording Failed: "+t.message)}))},stopRecording:function(){this.recorder.stopRecording(),this.isRecording=!1},onNewRecording:function(t){this.recordings.push(t.detail.recording)},draw:function(){this.analyser.smoothingTimeConstant=K,this.analyser.fftSize=Q,this.analyser.getByteFrequencyData(this.freqs),this.analyser.getByteTimeDomainData(this.times);for(var t=new Array,e=new Array,i=0;i<this.analyser.frequencyBinCount;++i)t.push(this.times[i]/256-.5),e.push(this.freqs[i]/256-.5);var a=J.get_frequency(t,this.fs),n=J.get_pitch(a[0]),r=this.audio_canvas,s=r.getContext("2d"),o=this.audio_canvasWidth,c=this.audio_canvasHeight;s.clearRect(0,0,o,c);for(var d=0;d<this.analyser.frequencyBinCount;d++){var h=this.freqs[d]/256,l=c*h,u=c-l-1,p=o/this.analyser.frequencyBinCount,f=d/this.analyser.frequencyBinCount*360;s.fillStyle="hsl("+f+", 100%, 50%)",s.fillRect(d*p,u,p,l)}s.fillStyle="gray";for(var m=0;m<this.analyser.frequencyBinCount;m++){var v=this.times[m]/256,g=c*v,y=c-g-1,C=o/this.analyser.frequencyBinCount;s.fillRect(m*C,y,1,2)}r=this.pitch_canvas,s=r.getContext("2d"),o=this.pitch_canvasWidth,c=this.pitch_canvasHeight,s.clearRect(0,0,o,c);for(var b=this.pitchSeq.length-1;b>0;--b)this.pitchSeq[b]=this.pitchSeq[b-1],this.pitchColor[b]=this.pitchColor[b-1];this.pitchSeq[0]=a[0],this.db=a[1];for(var _=0;_<this.pitchMaxX-1;_+=2){s.fillStyle="red";var w=(Math.log(this.pitchSeq[_]/440)/Math.log(2)*12+40)/this.maxFreq,x=c*w,R=c-x-1,S=o/this.pitchMaxX*2,M=12*Math.abs(Math.log((this.pitchSeq[_]+1.1)/440)/Math.log(2)-Math.log((this.pitchSeq[_+1]+1.1)/440)/Math.log(2));M>1e4?(console.log(M),s.fillStyle="white"):this.isCalc&&(this.pitch_name=n[0],this.degree=n[1],this.cents=n[2]),s.fillRect(Math.floor(_/2)*S,R,S,1)}this.isRecording&&window.requestAnimationFrame(this.draw.bind(this))}},created:function(){var t=this;this.recorder=new G,this.recorder.config.createAnalyserNode=!0,this.recorder.em.addEventListener("recording",(function(e){return t.onNewRecording(e)})),this.curPos=0;for(var e=0;e<this.pitchMaxX;++e)this.pitchSeq[e]=0,this.pitchColor[e]="rgba(255, 0, 0,1)"}},Z=Y,tt=i("8212"),et=i("0e8f"),it=Object(d["a"])(Z,I,L,!1,null,null,null),at=it.exports;l()(it,{VAvatar:tt["a"],VBtn:f["a"],VCard:W["a"],VCardTitle:q["a"],VCol:m["a"],VContainer:B["a"],VDivider:j["a"],VFlex:et["a"],VLayout:O["a"],VRow:P["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"2"}},[a("v-img",{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"100%"}})],1)],1),a("v-row",{staticClass:"text-center"},[a("v-col",[a("h2",[t._v("欢迎来到音高识别")]),a("br"),a("p",[t._v("跟随此程序")]),a("p",[t._v("可以帮助你在电脑/手机浏览器上完成歌唱音高识别")]),a("p",[t._v("你可以在第一个流程中测试你的麦克风")]),a("p",[t._v("麦克风测试成功后，在第二个流程中进行音高识别")])])],1),a("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{small:"",color:"primary"},on:{click:t.testMic}},[t._v("测试麦克风")])],1)]),a("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{small:"",color:"primary"},on:{click:t.startPitchDetect}},[t._v("音高识别")])],1)])],1)},rt=[],st={name:"Tutorial",data:function(){return{}},methods:{testMic:function(){this.$router.push("/mictest")},startPitchDetect:function(){this.$router.push("/pitchdetect")}},mounted:function(){},created:function(){}},ot=st,ct=i("adda"),dt=Object(d["a"])(ot,nt,rt,!1,null,null,null),ht=dt.exports;l()(dt,{VBtn:f["a"],VCol:m["a"],VContainer:B["a"],VImg:ct["a"],VRow:P["a"]}),a["a"].config.productionTip=!1,a["a"].use(n["a"]),a["a"].prototype.showHome=!0;var lt=new n["a"]({routes:[{path:"/",name:"tutorial",component:ht},{path:"/mictest",name:"mictest",component:z},{path:"/pitchdetect",name:"pitchdetect",component:at}]});new a["a"]({vuetify:R,router:lt,render:function(t){return t(w)}}).$mount("#app")},"9b19":function(t,e,i){t.exports=i.p+"img/logo.c8c59542.svg"}});
//# sourceMappingURL=app.aa81590f.js.map