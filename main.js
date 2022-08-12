// querySelectors
const navBtn = document.querySelector('.nav-btn');
const Burger = document.querySelector('.nav-btn span');
const navMenu = document.querySelector('.nav-menu');
const subMenu = document.querySelectorAll('.sub-menu');


const mediaSize = 768; //in px

// delay and duration time
const delay = '.2s';
const duration = '.1s';


// set transition delay only for desktop
if (window.innerWidth >= mediaSize) {
    subTransition();
} 

//set transitions again when resized
window.addEventListener('resize', subTransition)

function subTransition() {
    for (let i = 0; i < subMenu.length; i++) {
        subMenu[i].style.transitionDelay = delay;
        subMenu[i].style.transitionDuration = duration;
    }  
}




// menu functionality for mobile
let showMenu = false;
navBtn.addEventListener('click', toggleNav);
function toggleNav() {

    if (!showMenu) {
        navMenu.classList.add('open');
        Burger.classList.add('open');
        showMenu = true;
    }

    else {
        navMenu.classList.remove('open');
        Burger.classList.remove('open');
        collapseSubFinal();
        showMenu = false;
    }
}


// sub-menu in mobile
navMenu.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-toggle') && window.innerWidth <= mediaSize) {

        const menuItemWithSub = event.target.parentElement;

        // collapse by clicking again
        if (menuItemWithSub.classList.contains('active')) {
            collapseSub();
        }
        else {
            // collapse expanded sub
            if (navMenu.querySelector('.menu-item-with-sub.active')) {
                collapseSub();
            }      
            
            // expand sub
            menuItemWithSub.classList.add('active');
            const subMenu = menuItemWithSub.querySelector('.sub-menu');
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
    } 
});

function collapseSub(){
    navMenu.querySelector('.menu-item-with-sub.active .sub-menu').removeAttribute('style');
    navMenu.querySelector('.menu-item-with-sub.active').classList.remove('active');
}

function collapseSubFinal(){
    if (navMenu.querySelector('.menu-item-with-sub.active')) {
        collapseSub();
    }
}