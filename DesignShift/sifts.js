// JavaScript
const switchButtons = document.querySelectorAll(".switchButton")



switchButtons.forEach(function(target){
    target.addEventListener('click', function(event) {
        console.log("Switch Design button clicked!");
        const design1 = document.getElementById('design1');
        const design2 = document.getElementById('design2');

        const effect = document.getElementsByClassName('wave-effect');
        const color = effect.backgroundcolor;

        const buttonRect = this.getBoundingClientRect(); // ボタンの位置情報を取得
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;// ボタンに対する相対的なX位置
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;// ボタンに対する相対的なY位置
        const relativeX = event.clientX - buttonCenterX; 
        const relativeY = event.clientY - buttonCenterY; 

        const wave = document.createElement('div');
        console.log("Wave effect created:", wave);
        wave.className = 'wave-effect';
        wave.style.left = (relativeX + buttonCenterX - 50) + 'px'; 
        wave.style.top = (relativeY + buttonCenterY - 50) + 'px'; 
        wave.style.backgroundColor = color; // Color of design2 or any other property
        document.body.appendChild(wave);

        // Disable the animation on page leave
        window.skipOnLeaveAnimation = true;
        
        // After the animation completes, switch the designs
        setTimeout(function() {
            // Your existing logic to switch between design1 and design2
            if (design1.classList.contains('active')) {
                console.log("Switching from design1 to design2");
                design1.classList.remove('active');
                design2.classList.add('active');

                //Able the animation on page leave
                window.skipOnLeaveAnimation = false;
            } else if (design2.classList.contains('active')) {
                console.log("Switching from design2 to design1");
                /*Scrolling to the section with the anchor link `firstSlide` and to the 2nd Slide */
                fullpage_api.silentMoveTo('page1');
                fullpage_api.destroy("all");
                design2.classList.remove('active');
                design1.classList.add('active');

                //Able the animation on page leave
                window.skipOnLeaveAnimation = false;

            }
            

            document.body.removeChild(wave); // Remove the wave effect
        }, 1000); // Assuming 1s for the animation
    });
});
