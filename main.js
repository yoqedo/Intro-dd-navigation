
const arrowDownBtn1 = document.querySelector('.arrow-down-btn1');
const arrowDownBtn2 = document.querySelector('.arrow-down-btn2');
const iconMenu = document.querySelector('.icon-menu');
const iconClose = document.querySelector('.icon-close');
const overlay = document.querySelector('.overlay')

const ddFeature = document.querySelector('.dd-feature');
const ddCompany = document.querySelector('.dd-company');
const menu = document.querySelector('.mobile-menu');

/* Dropdown Settings */
arrowDownBtn1.addEventListener('click', function () {
    if (ddFeature.classList.contains('active')) {
        ddFeature.classList.remove('active')
    } else {
        ddFeature.classList.add('active')
    }
})

arrowDownBtn2.addEventListener('click', function () {
    if (ddCompany.classList.contains('active')) {
        ddCompany.classList.remove('active')
    } else {
        ddCompany.classList.add('active')
    }
})

iconMenu.addEventListener('click', function () {
    menu.style.display = 'block'
    overlay.style.display = 'block'
})

iconClose.addEventListener('click', function () {
    menu.style.display = 'none'
    overlay.style.display = 'none'
})
