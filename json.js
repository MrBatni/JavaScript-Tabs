
let message = {
    loading: 'Загрузка...',
    success: 'Спасибо, данные отправлены!',
    failure: 'Что то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
    email = document.getElementById('form')

    statusMessage.classList.add('status');

    sendForm = function (element){
    element.addEventListener('submit', function(event){
    event.preventDefault();
    form.appendChild(statusMessage);

let request = new XMLHttpRequest();
    request.open('POST', 'server.php', true);
    request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');
    
let formData = new FormData(element);
    request.send(formData);  
        })
    };
sendForm(form); 
sendForm(email); 