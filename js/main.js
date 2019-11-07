// Select DOM Items

const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu_nav');
const menuBranding = document.querySelector('.menu_branding');

const navItems = document.querySelectorAll('.nav_item');

//Set Initial State Of Menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));
    
        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        //Set Menu State
        showMenu = false;
    }
}

//Count up

$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },

        {

            duration: 4000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });



});