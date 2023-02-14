const forecastButton = document.querySelector('.forecast-btn');
const currentForecastContainer = document.querySelector('.current-forecast');
const currentForecast = currentForecastContainer.querySelector('h1');
const currentForecastParagraph = currentForecastContainer.querySelector('p');

forecastButton.addEventListener('click', generateForecast);

function generateForecast() {
    const variationForecast = Math.floor(Math.random() * 5);
    if (variationForecast === 1) {
        currentForecast.textContent = 'Ты скоро встретишь свою вторую половинку'; 
    } else if (variationForecast === 2) {
        currentForecast.textContent = 'То, что ты хочешь уже долго время, скоро произойдет';
    } else if (variationForecast === 3) {
        currentForecast.textContent = 'Хорошего дня тебе!';
    } else if (variationForecast === 4) {
        currentForecast.textContent = 'Скоро ты окажешься в том месте, о котором долго мечтала';
    }
    
    const numberParagraph = Math.floor(Math.random() * 101);
    currentForecastParagraph.textContent = `Вероятность ${numberParagraph}%`;
}

const forecasts = document.querySelector('.forecasts');
const forecastItem = document.querySelector('#forecast-item');

forecastButton.addEventListener('click', function() {
    const newForecast = forecastItem.content.cloneNode(true);
    const oldForecast = document.createElement('div');
    oldForecast.classList.add('.forecast-item');
    newForecast.querySelector('h3').textContent = currentForecast.textContent;
    newForecast.querySelector('p').textContent = currentForecastParagraph.textContent;
    forecasts.append(newForecast);
})

/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
