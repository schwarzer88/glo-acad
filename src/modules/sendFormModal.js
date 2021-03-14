const sendFormModal = () => {
    const statusMessage = document.createElement('div');

    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form3');

    statusMessage.style.color = 'white';
    statusMessage.style.fontSize = '2rem';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let inputs = form.querySelectorAll('input');
        if (inputs[0].value.length < 2) {
            statusMessage.textContent = 'Имя должно содержать минимум 2 буквы';
        } else if (inputs[1].value.length < 8 ||
            inputs[1].value.length > 12) {
            statusMessage.textContent = 'Введите корректный номер телефона!(от 8 до 11 цифр)';
        } else if (!regEmail.test(inputs[2].value)) {
            statusMessage.textContent = 'Введите корректную почту';
        } else {
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            let body = {};

            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            }
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                    setInterval(() => {
                        statusMessage.textContent = '';
                        const popup = document.querySelector('.popup');
                        popup.style.display = 'none';
                    }, 3000);
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                    setInterval(() => {
                        statusMessage.textContent = '';
                        const popup = document.querySelector('.popup');
                        popup.style.display = 'none';
                    }, 3000);
                });
            inputs.forEach((item) => {
                item.value = '';
            });
        }
    });


    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
}

export default sendFormModal;