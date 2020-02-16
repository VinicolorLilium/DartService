$(function(){

	//превью видео
	$('.header__video--overlay').on('click', function() {
		$(this).slideToggle(300);
	});

	//адаптивное меню
	$('.header__drop-menu').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('drop-menu__active');
		$('.header__menu').toggleClass('header__menu--active');
	});
	$('.services__conteiner .services__header-link').on('click', f_acc);

	//акардеон
	function f_acc(){
		//скрываем все кроме того, что должны открыть
		$('.services__conteiner .services__inner').not($(this).next()).slideUp(1000);
		// открываем или скрываем блок под заголовком, по которому кликнули
		$(this).next().slideToggle(500);
	}

	//слайдер в customers
	$(".customers-slider").slick({
		infinite: false,
		dots: false,
		slidesToShow: 2,
		arrows: true,
		vertical: true,
		verticalSwiping: true
	});

	//вкладки в блоке team
		$("#team-content .team__item").hide(); // Скрываем содержание
		$("#team-tub-link li:first").attr("id","current"); // Активируем первую закладку
		$("#team-content .team__item:first").fadeIn(); // Выводим содержание

		$('#team-tub-link a').click(function(e) {
			e.preventDefault();        
	        $("#team-content .team__item").hide(); //Скрыть все сожержание
	        $("#team-tub-link li").attr("id",""); //Сброс ID
	        $(this).parent().attr("id","current"); // Активируем закладку
	        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
	    });

	   //плавная прокрутка до якоря
    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });	
})