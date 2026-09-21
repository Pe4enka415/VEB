let form = document.getElementById('surveyForm');
let resultDiv = document.getElementById('result');
let resultContent = document.getElementById('resultContent');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let course = document.getElementById('course').value;
    let about = document.getElementById('about').value;

    let gender = "Не указан";
    let genderInputs = document.getElementsByName('gender');
    if (genderInputs[0].checked) {
        gender = genderInputs[0].value;
    } else if (genderInputs[1].checked) {
        gender = genderInputs[1].value;
    }

    let languages = [];
    let langInputs = document.getElementsByName('lang');
    for (let i = 0; i < langInputs.length; i++) {
        if (langInputs[i].checked) {
            languages.push(langInputs[i].value);
        }
    }

    let langText = languages.join(', ');
    if (languages.length === 0) {
        langText = 'Не выбрано';
    }

    resultContent.innerHTML = 
        '<p><b>Имя:</b> ' + name + '</p>' +
        '<p><b>Пол:</b> ' + gender + '</p>' +
        '<p><b>Курс:</b> ' + course + '</p>' +
        '<p><b>Языки:</b> ' + langText + '</p>' +
        '<p><b>О себе:</b> ' + about + '</p>';

    resultDiv.style.display = 'block';
});

form.addEventListener('reset', function() {
    resultDiv.style.display = 'none';
    resultContent.innerHTML = '';
});