const dataAttribute = () => {
    let command = document.querySelectorAll('.command__photo');
    command.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            let source = item.src;
            item.src = item.dataset.img;
            item.dataset.img = source;
        });
        item.addEventListener('mouseleave', () => {
            let source = item.src;
            item.src = item.dataset.img;
            item.dataset.img = source;
        });
    });
};

export default dataAttribute;