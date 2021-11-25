
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

function scrollAppear() {

    var introText = document.querySelector('.gay-slogan');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if (introPosition < screenPosition) {
        introText.classList.add('load');
    }



    var introText1 = document.querySelector('.nintendo-slogan');
    var introPosition1 = introText1.getBoundingClientRect().top;
    var screenPosition1 = window.innerHeight / 2;

    if (introPosition1 < screenPosition1) {
        introText1.classList.add('load1');
    }

    var introText2 = document.querySelector('.main-text-1');
    var introPosition2 = introText2.getBoundingClientRect().top;
    var screenPosition2 = window.innerHeight / 2;

    if (introPosition2 < screenPosition2) {
        introText1.classList.add('animation');
    }
    
    var introText3 = document.querySelector('.main-text-2');
    var introPosition3 = introText3.getBoundingClientRect().top;
    var screenPosition3 = window.innerHeight / 2;

    if (introPosition3 < screenPosition3) {
        introText1.classList.add('animation1');
    }

  
}

window.addEventListener('scroll', scrollAppear);