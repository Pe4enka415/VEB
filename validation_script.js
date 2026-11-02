document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');

    form.addEventListener('submit', function(event) {
        // Отменяем отправку формы
        event.preventDefault();
        
        // Скрываем предыдущий результат
        resultDiv.style.display = 'none';
        resultContent.innerHTML = '';

        // Получаем поля формы
        let name = document.getElementById('username');
        let pass = document.getElementById('password');
        let confirmPass = document.getElementById('confirmPassword');
        let email = document.getElementById('email');
        let message = document.getElementById('message');

        // 1. Проверка: заполнено ли поле имени
        if (name.value.trim() === '') {
            alert('Заполните поле "Ваше имя"!');
            name.focus();
            return;
        }

        // 2. Проверка: пароль введен и содержит больше 4 символов (используем length)
        if (pass.value.length <= 4) {
            alert('Пароль должен содержать больше 4 символов!');
            pass.focus();
            return;
        }

        // 3. Проверка: совпадают ли пароли
        if (pass.value !== confirmPass.value) {
            alert('Пароли не совпадают!');
            confirmPass.focus();
            return;
        }

        // 4. Проверка: заполнен ли email и содержит ли символ @
        if (email.value.trim() === '' || email.value.indexOf('@') === -1) {
            alert('Введите корректный электронный адрес (должен содержать @)!');
            email.focus();
            return;
        }

        // 5. Проверка: заполнено ли сообщение и содержит ли больше 10 символов
        if (message.value.trim().length <= 10) {
            alert('Сообщение должно содержать больше 10 символов!');
            message.focus();
            return;
        }

        // Если все проверки пройдены
        resultDiv.style.display = 'block';
        resultContent.innerHTML = '<p><b>Успешно!</b> Все данные введены корректно.</p>';
    });

    // Очистка результата при нажатии "Очистить"
    form.addEventListener('reset', function() {
        resultDiv.style.display = 'none';
        resultContent.innerHTML = '';
    });
});
