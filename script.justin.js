"use strict";

(function(){
    
    // Make the informative box move
    const infoBox = document.getElementById("info-box");
    const pauseNotice = document.getElementById("pauseNotice");
    let messageNum = 0;

    const messages = [
        'In case you did not know, since April 2022 it has become much more difficult to purchase Sriracha hot sauce around the world, including in the United States.<span class="clickMore">(Click for more)</span>',
        'The root cause of the reduced supply stems from difficulty in obtaining the peppers used to give the sauce its spice. <span class="clickMore">(Click for more)</span>',
        'The peppers are sourced from California, New Mexico and Mexico. These regions have experienced a shortage of peppers due to drought and poor weather, meaning fewer peppers and less sauce.<span class="clickMore">(Click for more)</span>',
        'The company also recently changed from their original long-time pepper supplier due to a disagreement and resulting legal battle[2]. <span class="clickMore">(Click for more)</span>',
        'Throughout 2023, due to the shortage  it has become considerably more difficult to find the sauce. Prices for online orders have skyrocketed, with individual bottles having sold for over 30-50 dollars each. <span class="clickMore">(Click to Read Again)</span>'
    ]

    function pauseAnimation(){
        animateOn++;
        if (animateOn % 2 == 0){
            sriracha.classList.remove("rotate"); 
        } else{
            sriracha.classList.add("rotate");
        }
    }

    infoBox.addEventListener("click", function(){
        messageNum = ++messageNum % messages.length;

        let nextMessage = document.createElement('p');
        nextMessage.className = "fadeinimg";
        nextMessage.innerHTML = messages[messageNum];
        infoBox.appendChild(nextMessage);
        if (infoBox.children.length > 2) {
            infoBox.removeChild(infoBox.children[0]);
        }
    })
    
    
    // Click to pause the bottle animation
    const bottle = document.getElementById("sriracha");
    let animateOn = 1;

    pauseNotice.addEventListener("click", pauseAnimation)

    sriracha.addEventListener("click", pauseAnimation);

})()