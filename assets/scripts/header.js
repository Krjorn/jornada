const headerMenuBtn = document.querySelector('[data-header-menu]');
const headerNav = document.querySelector('[data-header-nav]');
const navItems = document.querySelectorAll('[data-nav-item]');

headerMenuBtn.addEventListener('click', function(e) {
    e.stopPropagation();

    if(this.ariaExpanded === 'false') {
        this.ariaExpanded = true;
        this.ariaLabel = 'Esconder menu de navegação';
        navItems[0].focus();
    } else {
        closeHeaderNav();
    }
});

headerNav.addEventListener('keydown', function(e) {
    if(window.innerWidth < 1440) {
        if(e.code === 'Escape') {
            closeHeaderNav();
            headerMenuBtn.focus();
        }
    }
});

headerNav.addEventListener('click', e => {
    e.stopPropagation();
});

document.addEventListener('click', closeHeaderNav);
document.addEventListener('keyup', e => {
    if(e.code === 'Tab') {
        if(!navIsActive()) {
            closeHeaderNav();
        }
    }
});

function closeHeaderNav() {
    headerMenuBtn.ariaExpanded = false;
    headerMenuBtn.ariaLabel = 'Exibir menu de navegação';
}

function navIsActive() {
    let active = false;

    navItems.forEach(item => {
        if(item === document.activeElement) {
            active = true;
        }
    });

    return active;
}