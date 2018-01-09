var hamberger = document.querySelector('.wrap__header__nav__right-sp');
var btn = document.querySelector('.wrap__header__nav__right');

hamberger.addEventListener('click', function() {
    btn.classList.toggle('is-active');
});