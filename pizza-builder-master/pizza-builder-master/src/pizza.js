// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){
	var currentPrice = 10;
	// 
	// var pep = '<section class="pep "></section>';
	$('.btn.btn-pepperonni').on('click', function(){
/*			$('.pep').toggleClass('hide');
			$(this).toggleClass('active');
			updatePrice();*/
			handleClick($(this), 'pep', 'hide',  1);
	})
	$('.btn.btn-mushrooms').on('click', function(){
/*			$('.mushroom').toggleClass('hide');
			$(this).toggleClass('active');
			updatePrice();*/
			handleClick($(this), 'mushroom', 'hide', 1);
	})
	$('.btn.btn-green-peppers').on('click', function(){
/*			$('.green-pepper').toggleClass('hide');
			$(this).toggleClass('active');
			updatePrice();*/
			handleClick($(this), 'green-pepper', 'hide', 1);
	})

	$('.btn-crust').on('click', function  () {
/*		$('.crust').toggleClass('crust-gluten-free');
		$(this).toggleClass('active');
		updatePrice();*/
		handleClick($(this), 'crust','crust-gluten-free', 3);
	})
	$('.btn-sauce').on('click', function  () {
/*		$('.sauce').toggleClass('sauce-white');
		$(this).toggleClass('active');
		updatePrice();*/
		handleClick($(this), 'sauce', 'sauce-white', 5);
	})

	function handleClick(button, special, ingredient, price){
		if (button.hasClass('active')){
			price *= -1;
		}
		$('.'+special).toggleClass(ingredient);
		$('#'+special).toggleClass('hide');
		button.toggleClass('active');
		updatePrice(price);
	}

	function updatePrice(price){
		currentPrice += price;
		$('.panel.price strong').text("$"+currentPrice);
	}
});
