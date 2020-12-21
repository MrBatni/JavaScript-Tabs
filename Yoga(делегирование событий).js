window.addEventListener('DOMContentLoaded', function() {
    'use strict'; 
    let tab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent'),
    info = document.querySelector('.info-header');

    function hideTabContent(a){ // функция скрывает все элементы
        for (let i = a; i < tabContent.length; i++) { 
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1); // остается первый табконтент

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            
        }
    }
    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { // проверяем действительно ли клик по info-header-tab элементу
            for (let i = 0; i < tab.length; i++) { // перебираем все tab(ы)
                if (target == tab[i]) { // сравниваем таб и кликнувшый элемент если они совпадаю то действие выполняется 
                    hideTabContent(0); // 0 в качестве аргумента чтоб скрыть все элементы
                    showTabContent(i); // передаем i в кач аргумента из tab[i] 
                    break; // после выполнения выходим из функции
                }
            }
        }
    });
});