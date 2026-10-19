document.addEventListener("DOMContentLoaded", function() {
    let menuDiv = document.getElementById("menu");
    if (menuDiv) {
        menuDiv.innerHTML = `
            <nav>
                <a href="index.html">Главная</a>
                <a href="tables.html">Таблицы</a>
                <a href="survey.html">Анкета</a>
            </nav>
        `;
    }
});
