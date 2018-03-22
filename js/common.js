function call() {
  var msg   = $('#form').serialize();
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: msg,
        success: function(data) {
          $('#results').html(data);
        },
        error:  function(xhr, str){
    alert('Возникла ошибка: ' + xhr.responseCode);
        }
      });
    $('#name').val('');
    $('#email').val('');
    $('#topic').val('');
    $('#sms').val('');
  }

$(document).ready(function(){

    $("#menu").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();



        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),



        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;



        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1500);

    });

});
