let deadline = '2020-12-22'; // 1 шаг задаем дедлайн
function getTimeRemaning(endtime) { // узнать промежуток между сейчас и дедлайном
    let t = Date.parse(endtime) - Date.parse(new Date), // Вычитаем из объекта дата и метод парс для привращения в милисекунды время сейчас.
        seconds = Math.floor(0+(t/1000) % 60), // превращаем мс в секунды
        minutes = Math.floor((t/1000/60) % 60), // превращаем мс в минуты
        hours = Math.floor((t/(1000*60*60))); // превращаем мс в часы

        return { // создаем новый объект и вносим туда ключ: значения
            'total' : t,
            'hours' : hours,
            'minutes': minutes,
            'seconds': seconds    
        };
}
function setClock(id, endtime){ // создает переменные которые берет со страницы html
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'), // получаем из переменной
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() { // функция обновления каждую секунду
            let t = getTimeRemaning(endtime); // получает разницу между временем и возвращает объект
            hours.textContent = ('0'+ (t.hours)).slice(-3);
            minutes.textContent = ('0'+ (t.minutes)).slice(1);
            seconds.textContent = ('0'+ (t.seconds)).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }


}

setClock('timer', deadline); // определение параметров функции
