const getScroll = () => {
    let btnScroll = document.querySelector('main>a');
    btnScroll.addEventListener('click', (e) => {
        e.preventDefault();

        const blockId = btnScroll.getAttribute('href');
        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
}

export default getScroll;