const hero = document.querySelector(".hero")
const slider = document.querySelector(".slider")
const logo = document.querySelector(".logo")
const hamburger = document.querySelector(".hamburger")
const headline = document.querySelector(".headline")
const ul = document.querySelector(".ul")
const fpoverfrow = document.querySelector(".fp-overfrow")


// 最初の読み込み時に内容とclass属性を保存
if (!sessionStorage.getItem("originalHTML")) {
    sessionStorage.setItem("originalHTML", document.body.innerHTML);
}


// 監視対象の要素のコレクションを取得
var targets = document.querySelectorAll('.design-content');

// コールバック関数を定義
var callback = function(mutationsList, observer) {
    for (var mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            var targetElement = mutation.target;
            var oldClassValue = mutation.oldValue; // 変更前のクラスの値
            var newClassValue = targetElement.getAttribute('class'); // 変更後のクラスの値

            // 変更前と変更後のクラスを配列として取得
            var oldClasses = oldClassValue ? oldClassValue.split(' ') : [];
            var newClasses = newClassValue.split(' ');

            // 新しく追加されたクラスを取得
            var addedClasses = newClasses.filter(className => !oldClasses.includes(className));


            // 新たなクラスが追加された場合の処理
            if (addedClasses.includes('active') && oldClasses.includes('D2')) {
                console.log('新たなクラスが追加されました:', addedClasses);
                console.log('このクラスに:', oldClasses);
                //document.body.innerHTML = sessionStorage.getItem("originalHTML");

                

                // ここで任意の関数や処理を実行
                    new fullpage("#fullpage", {
                        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
                        autoScrolling: true,
                        navigation: false,
                        

                        afterRender: function(){
                            const tl = new TimelineMax();
                            tl.fromTo(
                                hero,
                                1, 
                                {height:"0%"},
                                {height:"80%", ease: Power2.easeInOut},
                                "+=1.0"
                            ).fromTo(
                                hero,
                                1.2, 
                                {width:"100%"},
                                {width:"80%", ease: Power2.easeInOut},
                            ).fromTo(
                                slider,
                                1.2,
                                {x: "-100%"},
                                {x:"0%", ease: Power2.easeInOut},
                                "-=1.2"
                            ).fromTo(
                                logo,
                                0.5,
                                {opacity:0, x:30},
                                {opacity:1, x:0},
                                "-=0.5"
                            ).fromTo(
                                hamburger,
                                0.5,
                                {opacity:0, x:30},
                                {opacity:1, x:0},
                                "-=0.5"
                            ).fromTo(
                                ul,
                                0.5,
                                {opacity:0, x:30},
                                {opacity:1, x:0},
                                "-=0.5"
                            ).fromTo(
                                headline,
                                0.5,
                                {opacity:0, x:30},
                                {opacity:1, x:0},
                                "-=0.5"
                            );
                        },
                        onLeave: (origin, destination, direction)=>{
                            const section = destination.item;
                            console.log(section);
                            //スイッチ直後(skipOnLeaveAnimation = trueの時)は反応しないようにする
                            if (window.skipOnLeaveAnimation) {
                                return; // onLeaveの処理をスキップ
                            }
                            
                            
                            //全ページ共通のアニメーション
                            const tl = new TimelineMax({delay:0.5});
                            //const title = section.querySelector("h1");
                            //tl.fromTo(title,0.5, {y:"50", opacity:0},{y:0, opacity:1});
                            
                            //1ページ目限定のアニメーション && スイッチ直後は反応しないようにする
                            if(destination.index === 0){
                                //console.log(element.classList);
                                tl.fromTo(
                                    hero,
                                    1, 
                                    {height:"0%"},
                                    {height:"80%", ease: Power2.easeInOut},
                                    //"+=1.0"
                                ).fromTo(
                                    hero,
                                    1.2, 
                                    {width:"100%"},
                                    {width:"80%", ease: Power2.easeInOut}
                                )
                            };

                        
                        }
                    })
            }

            if (addedClasses.includes('active') && oldClasses.includes('D1')) {
                console.log('新たなクラスが追加されました:', addedClasses);
                console.log('このクラスに:', oldClasses);
                //sessionStrageの元htmlを復元
                //document.body.innerHTML = sessionStorage.getItem("originalHTML"); 

                //<body>内の要素を全削除
                //let bodyAttributes = document.body.attributes;
                //for(let i = bodyAttributes.length - 1; i >= 0; i--) {
                    //document.body.removeAttribute(bodyAttributes[i].name);
                //}

                //fullpage_api.destroy("all")
                // ここで任意の関数や処理を実行
                //new fullpage("#fullpage", {
                
            }
        }
    }
};

// オプションを設定
var config = {
    attributes: true,
    attributeOldValue: true
};

// 各要素に対してMutationObserverを設定
targets.forEach(function(target) {
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
});


