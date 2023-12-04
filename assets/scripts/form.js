const formInputs = document.querySelectorAll('[data-input]');
formInputs.forEach(input => {
    input.addEventListener('invalid', function() {
        this.parentNode.querySelector('[data-input-error]').style.display = 'block';
        this.style.paddingRight = '32px';
    });
});