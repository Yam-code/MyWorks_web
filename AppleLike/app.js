const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text1 = intro.querySelector('.line1');
const text2 = intro.querySelector('.line2');

// END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

// Pause the video on page load
video.pause();

// Flag to check if the video has started playing
let videoStarted = false;

window.addEventListener('scroll', () => {
    if (!videoStarted) {
        video.play();
        videoStarted = true;
    }
});


// Check if service workers are supported
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('/sw.js').then(function(registration) {
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }, function(err) {
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }




// Hide the content initially
document.body.style.opacity = 0;

// Event listener to show the content when the video is ready to play through
video.addEventListener('canplaythrough', function() {
    document.body.style.opacity = 1;
});

//ScrollMagic
const controller = new ScrollMagic.Controller();

// Page always starts at the top
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}


function resetScroll() {
    window.scrollTo(0, 0);
    if (history.replaceState) {
        history.replaceState(null, document.title, location.href);
    }
}


// $(document).ready(function() {      
//     $('.dc-menu-trigger').click(function(){
//     $('nav').toggleClass( "dc-menu-open" );
//     $('.menu-overlay').toggleClass( "open" );
//     $('header').toggleClass( "shownav" );
//     }); 
// });

document.addEventListener("DOMContentLoaded", function() {
    var menuTrigger = document.querySelector('.dc-menu-trigger');
    menuTrigger.addEventListener('click', function() {
        var nav = document.querySelector('.dc-menu');
        var menuOverlay = document.querySelector('.menu-overlay');
        var header = document.querySelector('.header1_vart');
        var logo1_horiz = document.querySelector('.logo1_horiz');

        if (nav) {
            nav.classList.toggle("dc-menu-open");
        }
        if (menuOverlay) {
            menuOverlay.classList.toggle("open");
        }
        if (header) {
            header.classList.toggle("shownav");
        }
        if (logo1_horiz) {
            logo1_horiz.classList.toggle("logoshow");
        }
    });
});


const body = document.body;
const btn = document.querySelectorAll('.button');



btn.forEach((target) => {
    target.addEventListener('mouseenter', () => {
        body.classList.add('hover');
        autoScrollEnabled = false;
    });
    
    target.addEventListener('mouseleave', () => {
        body.classList.remove('hover');
        if(scrollToSec == false){
            autoScrollEnabled = true;
        };
        let autoScroll = setInterval(() => {
            if (autoScrollEnabled) {
                window.scrollBy(0, scrollAmount);
            } else {
                clearInterval(autoScroll);
                autoScroll = null;  // autoScrollをクリアして再利用可能にします
            }
        }, interval);
        
    });
});


// 自動スクロールを管理するフラグ
let autoScrollEnabled = true;

let scrollToSec = false;




// スクロールが終了したことを検出するイベントリスナー
// let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
// window.addEventListener('scroll', () => {
//     let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (lastScrollTop === currentScrollTop) {
//         autoScrollEnabled = true;  // スクロールが終了したら自動スクロールを再開する
//     }
//     lastScrollTop = currentScrollTop;
// }, false);

// function scroll_to_sec1() {
//     scrollToSec = true;
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setTimeout(function(){
//         scrollToSec = false;
//         autoScrollEnabled = true;
//         window.scrollTo({ top: 10, behavior: 'smooth' });
//     }, 1000);
    
// }

function scroll_to_sec1() {
    scrollToSec = true;
    gsap.to(window, {duration: 1.5, scrollTo: 0});

    setTimeout(function(){
        scrollToSec = false;
        autoScrollEnabled = true;
        window.scrollTo({ top: 10, behavior: 'smooth' });
    }, 1000);
}

function scroll_to_sec2() {
    scrollToSec = true;
    window.scrollTo({ top: 6600, behavior: 'smooth' });
    setTimeout(function(){
        scrollToSec = false;
        autoScrollEnabled = true;
        window.scrollTo({ top: 6610, behavior: 'smooth' });
    }, 1000);
}

function scroll_to_sec3() {
    scrollToSec = true;
    window.scrollTo({ top: 17200, behavior: 'smooth' });
    setTimeout(function(){
        scrollToSec = false;
        autoScrollEnabled = true;
        window.scrollTo({ top: 17210, behavior: 'smooth' });
    }, 1000);
}

function scroll_to_sec4() {
    scrollToSec = true;
    window.scrollTo({ top: 31000, behavior: 'smooth' });
    setTimeout(function(){
        scrollToSec = false;
        autoScrollEnabled = true;
        window.scrollTo({ top: 31010, behavior: 'smooth' });
    }, 1000);
}



// var scene0 = new ScrollMagic.Scene({
//     triggerElement: '#trigger',
//     triggerHook: 0,
// })
// .setPin('#trigger')
// .addIndicators()
// .addTo(controller);

//Scenes
const scene = new ScrollMagic.Scene({
    duration: 32000, //duration of the scene  video1s = 1000
    triggerElement: intro, //when the scene starts
    triggerHook: 0 //when the scene starts
})
    .addIndicators()
    .setPin(intro) //pin the element
    .addTo(controller);

//Text Animation
//const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 }); //3秒かけてtextのopacityを1から0にする

// Create a GSAP timeline for the text animation
const textAnim1 = gsap.timeline();

// Add the animations to the timeline
textAnim1
    .fromTo(text1, 2, {opacity: 0, visibility: 'hidden'}, {opacity: 1, visibility: 'visible'}) // Fade in over 2 seconds
    //.fromTo(text1, 2,{opacity: 0}, {opacity: 1})  // Fade in over 2 seconds
    .fromTo(text1, 2,{opacity: 1}, {opacity: 1})  // Wait (keep opacity at 1) for 1 second
    .fromTo(text1, 3,{opacity: 1}, {opacity: 0}); // Fade out over 3 seconds

let scene1 = new ScrollMagic.Scene({
    duration: 6000,
    triggerElement: intro,
    triggerHook: 0,
    offset: window.innerHeight * 1 //window.innerHeightは画面の高さを取得する (画面の高さの1.5倍の位置でアニメーションが始まる)
}) 
    .setTween(textAnim1)
    .addTo(controller);


const textAnim2 = gsap.timeline();

// Add the animations to the timeline
textAnim2
    .fromTo(text2, 3, {opacity: 0, visibility: 'hidden'}, {opacity: 1, visibility: 'visible'}) // Fade in over 2 seconds
    //.fromTo(text, 2,{opacity: 0}, {opacity: 1})  // Fade in over 2 seconds
    .fromTo(text2, 2, {x: '-5%'}, {x: '0%', ease: Power2.easeInOut}, "-=2") // Move in from left
    .fromTo(text2, 2,{opacity: 1}, {opacity: 1})  // Wait (keep opacity at 1) for 1 second
    .fromTo(text2, 3,{opacity: 1}, {opacity: 0}); // Fade out over 3 seconds

let scene2 = new ScrollMagic.Scene({
    duration: 10000,
    triggerElement: intro,
    triggerHook: 0,
    offset: window.innerHeight * 8.5 //window.innerHeightは画面の高さを取得する (画面の高さの1.5倍の位置でアニメーションが始まる)
}) 
    .setTween(textAnim2)
    .addTo(controller);


const textAnim3 = gsap.timeline();

// Add the animations to the timeline



//Video Animation

// ページを自動的にスクロール
// ビューポートの高さを取得
let viewportHeight = window.innerHeight;

// スクロールの間隔を計算 (1秒を100等分)
let interval = 16.6; // 1000ms / 60fps = 16.6ms

// 1秒でビューポートの高さ1回分スクロールするためのスクロール量を計算
let scrollAmount = viewportHeight / (1000 / interval);

// ページを自動的にスクロール
let autoScroll = setInterval(() => {
    if (autoScrollEnabled) {
        window.scrollBy(0, scrollAmount);
    } else {
        clearInterval(autoScroll);
        autoScroll = null;  // autoScrollをクリアして再利用可能にします
    }
}, interval);


// スクロールと動画の同期
let accelamount = 0.1; //acceleration amount of the video when scrolling down (１より下にするとスクロールを止めても少しの間動き続ける)
let scrollpos = 0; //scroll position of the scene (scrollposとはscroll positionの略 0で初期化) 
let delay = 0;

// scene.on('update', e => { //updateイベントが発生したら
//     scrollpos = e.scrollPos / 1000; //scroll position of the scene (1000で割ることでscrollposが0.001ずつ増える)
//     console.log(e);
// });

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;

    if (e.scrollPos < e.endPos) {
        // scrollPosがendPosを超えていない時、自動スクロールを実行
        if (!autoScroll) {
            
            // autoScrollが未定義またはクリアされている場合、新しいインターバルを設定します
            autoScroll = setInterval(() => {
                if (autoScrollEnabled) {
                    window.scrollBy(0, scrollAmount);
                } else {
                    clearInterval(autoScroll);
                    autoScroll = null;  // autoScrollをクリアして再利用可能にします
                }
            }, interval);
        }
    } else {
        // scrollPosがendPosを超えた時、自動スクロールを停止
        if (autoScroll) {
            // autoScrollEnabled = false;
            console.log('clear');
            clearInterval(autoScroll);
            autoScroll = null;  // autoScrollをクリアして再利用可能にします
        }
    }

    console.log(e);
});

setInterval(() => { //setIntervalは一定時間ごとに処理を実行する
    delay += (scrollpos - delay) * accelamount; //delayの値を更新 (scrollpos - delay) * accelamountはdelayの値を更新するための計算式 (accelamountは0.1)
    console.log(scrollpos, delay);

    video.currentTime = delay; //videoのcurrentTimeをdelayの値にする
},16.6); //33.3msごとに処理を実行する (30fps) 1000ms / 30fps = 33.3ms (1秒間に30回動く) 1000ms / 60fps = 16.6ms (1秒間に60回動く) 1000ms / 120fps = 8.3ms (1秒間に120回動く)