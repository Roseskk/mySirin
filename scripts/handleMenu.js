let rect2 = document.getElementById('ham2')
let rect3 = document.getElementById('ham3')
let mobileMenu = document.querySelector('.mobile__menu__wrapper')
let mobileItems = document.querySelectorAll('.mobile__menu__item')
let flag = false;
function Open() {
    if (!flag) {
        mobileMenu.classList.add('mobile__menu__open')
        console.log(mobileItems)
        rect2.classList.add('ham2_move')
        rect3.classList.add('ham3_move')
        flag = !flag
    } else  {
        rect2.classList.remove('ham2_move')
        rect3.classList.remove('ham3_move')
        mobileMenu.classList.remove('mobile__menu__open')
        flag = !flag
    }
}