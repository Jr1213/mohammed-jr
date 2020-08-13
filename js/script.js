const humberger = document.querySelector('.wrapper .humberger');
const sideMenu = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.link');

humberger.addEventListener('click', function () {
    sideMenu.classList.toggle("activ-m");
    humberger.classList.toggle('activ-h');
    navLink.forEach(element => {
        element.addEventListener('click', () => {
            sideMenu.classList.remove('activ-m');
            humberger.classList.remove('activ-h');

        })
    });

})