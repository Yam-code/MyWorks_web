// HLS.jsライブラリをインポート
// import Hls from './HLSgit/hls.js';

var videoElement = document.getElementById('video');
var hls = new Hls();

// HLSストリームのURLを指定
var videoSrc = './segments/output.m3u8';

// HLSストリームをロード
hls.loadSource(videoSrc);

// 従来のmp4形式の動画ファイルは、ファイル全体をダウンロードしてから再生を行うため、再生開始までに時間がかかったり、再生中に途中で再生が止まることがある
// HLSはとはライブストリーミング技術であり、動画ファイルをセグメント化して、段階的にダウンロードして再生することで、
// 再生開始までの待ち時間を短縮し、途中で再生が止まることを防ぐ技術

// 再生側では、初めに取得したインデックスファイル(.m3u8)を基に、段階的にセグメント化された動画を受信し、再生を行っていく
// これにより、すべてのファイルをダウンロードせずとも、ダウンロードしたファイルから順に再生できる
// また、受信側の端末の容量が少なくても再生可能になるメリットもある

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
