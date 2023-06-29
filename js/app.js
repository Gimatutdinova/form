const xhr = new XMLHttpRequest();

$('#button').on('click', () => {
    let val = {
        select_1: $('#select_1 option:selected').text(),
        select_2: $('#select_2 option:selected').text(),
        select_3: $('#select_3 option:selected').text(),
        select_4: $('#select_4 option:selected').text(),
        select_5: $('#select_5 option:selected').text(),
        textarea_1: $('#textarea_1').val(),
        textarea_2: $('#textarea_2').val(),
    }
    $('#form_value').replaceWith('<div class="form__value" id="form_value">'.concat(JSON.stringify(val)),'</div>')

    xhr.open('GET', 'https://gimatutdinova.github.io/form/', true);
    xhr.send(null);
});

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            alert("Данные дошли")
        }
    }
}

