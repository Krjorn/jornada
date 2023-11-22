const headerMenuBtn = document.querySelector('[data-header-menu]');
const headerNav = document.querySelector('[data-header-nav]');

headerMenuBtn.addEventListener('click', function(e) {
    e.stopPropagation();

    if(this.ariaExpanded === 'false') {
        this.ariaExpanded = true;
        this.ariaLabel = 'Esconder menu de navegação';
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

function closeHeaderNav() {
    headerMenuBtn.ariaExpanded = false;
    headerMenuBtn.ariaLabel = 'Exibir menu de navegação';
}