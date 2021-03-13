const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            let nowPx = -40;
            let widthPhone = document.documentElement.clientWidth;
            popupContent.style.top = '-40%';
            if (widthPhone <= 768) {
                popup.style.display = 'block';
                popupContent.style.display = 'block';
                popupContent.style.top = null;
            } else {
                let anim = setInterval(() => {
                    let height = Math.ceil(document.documentElement.clientHeight);
                    popupContent.style.position = 'relative';
                    if (nowPx === Math.ceil(30)) {
                        nowPx = 0;
                        clearInterval(anim);
                    } else {
                        nowPx++;
                        popupContent.style.top = `${nowPx}%`;
                    }
                }, 8);
            }
        });
        popup.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });
    });
};

export default togglePopUp;