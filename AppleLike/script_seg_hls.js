// HLS.jsライブラリをインポート
// import Hls from './HLSgit/hls.js';

var videoElement = document.getElementById('video');
var hls = new Hls();

// HLSストリームのURLを指定
var videoSrc = './segments/output.m3u8';

// HLSストリームをロード
hls.loadSource(videoSrc);

// videoエレメントにHLSストリームをアタッチ
hls.attachMedia(videoElement);

hls.on(Hls.Events.MANIFEST_PARSED, function () {
    videoElement.play();
});

// ビデオの再生状態をログに出力
videoElement.addEventListener('loadeddata', function () {
    console.log('Video readyState:', videoElement.readyState);
    console.log('Video networkState:', videoElement.networkState);
});

// ビデオのエラーをログに出力
videoElement.addEventListener('error', function () {
    console.error('Video error:', videoElement.error);
});

// 特定の再生位置にシークする関数
window.seekTo = function(timeInSeconds) {
    videoElement.currentTime = timeInSeconds;
};
