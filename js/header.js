const navigationChangeTheme = () => {
    const header = document.querySelector('#header')
    const className = 'header';

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            header.classList.add(className)
        } else {
            header.classList.remove(className)
        }
    })
}


(function() {
    const burger = document.getElementById('burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());