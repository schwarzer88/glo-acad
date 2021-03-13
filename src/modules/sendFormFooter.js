const sendFormFooter = () => {

    const statusMessage = document.createElement('div');

    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form2');

    statusMessage.style.fontSize = '2rem';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        let inputs = form.querySelectorAll('input');
        if (inputs[0].value.length < 2) {
            statusMessage.textContent = 'Имя должно содержать минимум 2 буквы';
        } else if (inputs[1].value.length < 3) {
            statusMessage.textContent = 'Введите корректную почту';
        } else if (inputs[2].value.length < 8 ||
            inputs[2].value.length > 12) {
            statusMessage.textContent = 'Введите корректный номер телефона';
        } else if (inputs[3].value.length < 10) {
            statusMessage.textContent = 'Сообщение должно содержать минимум 10 символов';
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
                    }, 3000);
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
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
    };
}

export default sendFormFooter;