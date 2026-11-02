document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');

    form.addEventListener('submit', function(event) {
        // Предотвращаем стандартную отправку формы
        event.preventDefault();
        
        // Сбрасываем предыдущие результаты
        resultDiv.style.display = 'none';
        resultContent.innerHTML = '';

        // Получаем значения полей
        let name = document.getElementById('username');
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirmPassword');
        let email = document.getElementById('email');
        let message = document.getElementById('message');

        // 1. Проверка: заполнено ли поле имени
        if (name.value.trim() === '') {
            alert('Пожалуйста, введите ваше имя.');
            name.focus(); // Устанавливаем курсор в поле имени
            return;
        }

        // 2. Проверка: введен ли пароль и содержит ли он больше 4-х символов
        if (password.value.length <= 4) {
            alert('Пароль должен содержать более 4 символов.');
            password.focus(); // Устанавливаем курсор в поле пароля
            return;
        }

        // 3. Проверка: совпадают ли значения паролей
        if (password.value !== confirmPassword.value) {
            alert('Пароли не совпадают.');
            confirmPassword.focus(); // Устанавливаем курсор в поле подтверждения пароля
            return;
        }

        // 4. Проверка: заполнено ли поле email и содержит ли оно символ @
        if (email.value.trim() === '' || email.value.indexOf('@') === -1) {
            alert('Введите корректный электронный адрес (должен содержать @).');
            email.focus(); // Устанавливаем курсор в поле email
            return;
        }

        // 5. Проверка: заполнено ли поле сообщения и содержит ли оно больше 10 символов
        if (message.value.trim().length <= 10) {
            alert('Сообщение должно содержать более 10 символов.');
            message.focus(); // Устанавливаем курсор в поле сообщения
            return;
        }

        // Если все проверки пройдены
        resultDiv.style.display = 'block';
        resultContent.innerHTML = '<p style="color: green;"><b>Успешно!</b> Все данные введены корректно.</p>';
        
        // Опционально: можно вывести введенные данные
        /*
        resultContent.innerHTML += 
            '<p><b>Имя:</b> ' + name.value + '</p>' +
            '<p><b>Email:</b> ' + email.value + '</p>' +
            '<p><b>Тема:</b> ' + document.getElementById('subject').value + '</p>' +
            '<p><b>Сообщение:</b> ' + message.value + '</p>';
        */
    });

    // Очистка результатов при сбросе формы
    form.addEventListener('reset', function() {
        resultDiv.style.display = 'none';
        resultContent.innerHTML = '';
    });
});
