const openSearch = document.querySelector('#open-search');
const searchBar = document.querySelector('#search_bar');
const showSubMenu = document.querySelector('.menu-item-has-children');
const navBtn = document.querySelector('.nav-btn');
const mainMenu = document.querySelector('.main-menu');
const body = document.querySelector('body');
const btnClose = document.querySelector('.nav-btn--close');
const searchBtnClose = document.querySelector('.search_bar__close');
const btnBell = document.querySelector('button.icon-bell');
const notificationBox = document.querySelector('.notification-box');

openSearch.addEventListener('click', toggleSearchBar);
showSubMenu.addEventListener('click', toggleDropDown);
navBtn.addEventListener('click', toggleNav);
btnClose.addEventListener('click', toggleNav);
searchBtnClose.addEventListener('click', toggleSearchBar);
window.addEventListener('resize', checkScreenSize);
btnBell.addEventListener('click', togglenotification);

function togglenotification() {
    notificationBox.classList.toggle('active');
}

function toggleSearchBar() {
    searchBar.classList.toggle('active');
}

function toggleDropDown() {
    showSubMenu.classList.toggle('open');
}

function toggleNav() {
    mainMenu.classList.toggle('active');
    body.classList.toggle('active');
}

function checkScreenSize() {
    if (window.innerWidth < 990) {
        mainMenu.classList.remove('active');
        body.classList.remove('active');
    } else {
        mainMenu.classList.add('active');
        body.classList.add('active');
    }
}

checkScreenSize();

document.addEventListener('click', function(e) {
    if (!e.target.closest('.notification-wrapper')) {
        notificationBox.classList.remove('active');
    } else {
        return;
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        if ( notificationBox.classList.contains('active')) {
            notificationBox.classList.remove('active');
        }

        if (searchBar.classList.contains('active')) {
            searchBar.classList.remove('active');
        }
    }
});