
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
}

window.addEventListener('scroll', scrollAppear);
