// Получаем доступ к главному объекту Telegram
const tg = window.Telegram.WebApp;

// Получаем элементы со страницы
const clickButton = document.getElementById('clickButton');
const sendDataButton = document.getElementById('sendDataButton');
const counterElement = document.getElementById('counter');

let count = 0;

// При загрузке приложения говорим Telegram, что оно готово к показу
tg.ready();

// Обработчик нажатия на основную кнопку
clickButton.addEventListener('click', () => {
    count++;
    counterElement.innerText = count;
});

// Обработчик нажатия на кнопку "Отправить"
sendDataButton.addEventListener('click', () => {
    // Формируем данные для отправки
    const dataToSend = JSON.stringify({ clicks: count });

    // Отправляем данные боту
    tg.sendData(dataToSend);

    // Закрываем приложение после отправки
    // tg.close(); // Можно раскомментировать, если хотите, чтобы окно закрывалось
});

// Пример использования данных пользователя
const user = tg.initDataUnsafe?.user;
if (user) {
    const h1 = document.querySelector('h1');
    // h1.innerText = `Привет, ${user.first_name}!`; // Можно раскомментировать для персонализации
}