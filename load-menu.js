document.addEventListener('DOMContentLoaded', function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById('menu-container');
            if (container) {
                container.innerHTML = data;
            }
        })
        .catch(error => console.error('Ошибка загрузки меню:', error));
});
