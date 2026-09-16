// Находим форму и блок для вывода
const form = document.getElementById('surveyForm');
const resultDiv = document.getElementById('result');
const resultContent = document.getElementById('resultContent');

// Слушаем событие отправки формы
form.addEventListener('submit', function(event) {
    // Предотвращаем перезагрузку страницы (стандартное поведение формы)
    event.preventDefault();

    // Собираем данные из полей
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const about = document.getElementById('about').value;
    
    // Собираем выбранный пол (радиокнопки)
    let gender = "Не указан";
    const genderRadios = document.getElementsByName('gender');
    for (let radio of genderRadios) {
        if (radio.checked) {
            gender = radio.value;
            break;
        }
    }

    // Собираем выбранные языки (чекбоксы)
    let languages = [];
    const langCheckboxes = document.getElementsByName('lang');
    for (let checkbox of langCheckboxes) {
        if (checkbox.checked) {
            languages.push(checkbox.value);
        }
    }
    // Если ничего не выбрано, пишем "Нет"
    const langString = languages.length > 0 ? languages.join(', ') : 'Не выбрано';

    // Формируем HTML для вывода
    // Используем textContent или экранирование, чтобы избежать XSS, но для примера сойдет и innerHTML
    resultContent.innerHTML = `
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Пол:</strong> ${gender}</p>
        <p><strong>Курс:</strong> ${course}</p>
        <p><strong>Языки программирования:</strong> ${langString}</p>
        <p><strong>О себе:</strong> ${about}</p>
    `;

    // Показываем блок с результатом
    resultDiv.style.display = 'block';

    // Опционально: можно очистить форму после отправки
    // form.reset(); 
    // Но обычно при сбросе результаты пропадают, поэтому оставим как есть или раскомментируем по желанию.
});

// Обработка кнопки сброса (опционально, чтобы скрыть блок результата при сбросе)
form.addEventListener('reset', function() {
    resultDiv.style.display = 'none';
    resultContent.innerHTML = '';
});