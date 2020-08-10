const humberger = document.querySelector('.wrapper .humberger');
const sideMenu = document.querySelector('.nav-list');


humberger.addEventListener('click', function(){
    sideMenu.classList.toggle("activ-m");
    humberger.classList.toggle('activ-h');

})
