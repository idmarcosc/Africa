function menuShow() {
    let menuMobile = document.querySelector('.navBar');
    let iconMenu = document.getElementById("icon-menu").innerHTML;
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
    if (iconMenu == 'menu') {
        document.getElementById("icon-menu").innerHTML = "close";
    } else {
        document.getElementById("icon-menu").innerHTML = "menu";
    }
}
