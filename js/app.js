let val = {}; // Объект для сохранение данных формы
let str; // Переменная для сохранения данных формы в формате JSON

// Получение данных 

function getData() {
    $('.form').find('select, textarea').each(function() {
        val[this.id] = this.value;
        str = JSON.stringify(val);
        $('.form__value').text(str);
    });
};

// Отправка данных

function sendData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://gimatutdinova.github.io/form/', true);
    xhr.send(str);
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Данные дошли")
        }
    };
};

$('#button').on('click', () => {
    getData();
    sendData();    
});