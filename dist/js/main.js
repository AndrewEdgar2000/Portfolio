//Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set init state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set Menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}



//Cursor Animation

(() => { 

    const cursor = document.querySelector('.cursor');
 
    document.addEventListener('mousemove', e => {
       cursor.setAttribute('style', `top:  ${e.pageY - 10}px; left: ${e.pageX -10}px;`);
    });
 
    document.addEventListener('click', () => { 
       console.log("%c Click...!!!", "font-size: 20px; color:mediumspringgreen;");
 
       cursor.classList.add('cursor--expand');
       console.log(cursor.classList);
    
       setTimeout(() => {
          cursor.classList.remove('cursor--expand');
       }, 500);
    });
 })();