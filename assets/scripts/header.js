const headerMenuBtn = document.querySelector('[data-header-menu]');
const headerNav = document.querySelector('[data-header-nav]');
const navItems = document.querySelectorAll('[data-nav-item]');

headerMenuBtn.addEventListener('click', function(e) {
    e.stopPropagation();

    if(this.ariaExpanded === 'false') {
        this.ariaExpanded = true;
        navItems[0].focus();
    } else {
        headerMenuBtn.ariaExpanded = false;
    }
});

headerNav.addEventListener('keyup', function(e) {
    if(window.innerWidth < 1440) {
        if(e.code === 'Escape') {
            headerMenuBtn.ariaExpanded = false;
            headerMenuBtn.focus();
        }
    }
});

headerNav.addEventListener('click', function(e) {
    e.stopPropagation();
});

document.addEventListener('click', () => {
    headerMenuBtn.ariaExpanded = false;
});
document.addEventListener('keyup', function(e) {
    if(e.code === 'Tab') {
        if(!navIsActive()) {
            headerMenuBtn.ariaExpanded = false;
        }
    }
});

// function closeHeaderNav() {
//     headerMenuBtn.ariaExpanded = false;
// }

function navIsActive() {
    let active = false;

    navItems.forEach(item => {
        if(item === document.activeElement) {
            active = true;
        }
    });

    return active;
}