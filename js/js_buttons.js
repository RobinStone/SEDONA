//---------------   цвет фона у ценников  ---------------------




//---------------   изменение фона у родителя  ---------------------

$('.services-item a').on('focus', function(){
   $(this).css('background-color', 'rgba(129, 179, 210, 0.34)');
});

$('.services-item a').on('blur', function(){
   $(this).css('background-color', 'white');
});

//---------------   блокировка дефолной карты ---------------------- 
$('.map img').css('display', 'none');

//---------------   поиск гостиницы в седоне . кнопка -------------- 

$('.search-button').on('click', function(evt){
    evt.preventDefault();
    $('.search-form').toggleClass('not-visible');
});

//---------------   кнопки в popap --------------------------------- 

$('#plusAdults').on('click', function(){
    var i=$('#adults').val();
    i++;
    if(i>10){
        i--;
        alert('ТАКИМ ТАБУНОМ ВАС В СЕДОНУ - НЕ ПУСТЯТ ! \nДЕБИЛЫ...');
    }
    $('#adults').val(i);
});

$('#minusAdults').on('click', function(){
    var i=$('#adults').val();
    i--;
    if (i < 0) {i=0;}
    $('#adults').val(i);
});


$('#plusChildren').on('click', function(){
    var i=$('#children').val();
    i++;
    if(i>10){
        i--;
        document.location.href = "https://naturae.ru/ekologiya/ekologicheskie-problemy/perenaselenie.html";
    }
    $('#children').val(i);
});

$('#minusChildren').on('click', function(){
    var i=$('#children').val();
    i--;
    if (i < 0) {i=0;}
    $('#children').val(i);
});


















