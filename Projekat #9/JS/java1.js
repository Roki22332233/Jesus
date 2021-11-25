
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

function scrollAppear() {

    var introText = document.querySelector('.main-text-1');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (introPosition < screenPosition) {
        introText.classList.add('animation');
    }
    
    var introText2 = document.querySelector('.main-text-2');
    var introPosition2 = introText2.getBoundingClientRect().top;
    var screenPosition2 = window.innerHeight / 1.5;

    if (introPosition2 < screenPosition2) {
        introText2.classList.add('animation1');
    }

  
}

window.addEventListener('scroll', scrollAppear);