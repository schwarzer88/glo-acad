const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        mainHeader = document.querySelector('.main-header'),
        menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    }

    menu.addEventListener('click', (e) => {
        let target = e.target;
        target = target.classList.contains('close-btn');
        if (target) {
            handlerMenu();
        } else {
            target = e.target.closest('a');
            if (target) {
                handlerMenu();
            } else {
                return;
            }
        }
    });
    btnMenu.addEventListener('click', handlerMenu);
};

export default toggleMenu;