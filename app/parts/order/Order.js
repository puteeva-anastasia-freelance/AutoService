(function () {
	"use strict";

	/**
	 * Класс управляет блоком "Обратная связь"
	 */
	class Order {
		constructor() {
			this.buttonEl = document.querySelector('.order__button');
			this.inputPhoneEl = document.querySelector('.order .mask-phone');
			this.errorPhone = document.querySelector('.order__error-phone');
		}

		/**
		 * Метод добавляет кнопке отправки формы слушатель события клика
		 */
		addButtonClickListener() {
			this.buttonEl.addEventListener('click', () => {
				if (this.inputPhoneEl.value == '') {
					this.errorPhone.style.display = 'block';
				} else {
					this.errorPhone.style.display = 'none';
				}
			});
		}

		/**
		 * Метод добавляет маску телефона
		 */
		addMaskPhone() {
			$('.order .mask-phone').mask('+375 (99) 999-99-99');

			$('.order .mask-phone').on("keyup", function () {
				let countDigits = ($('.order .mask-phone').val().match(/\d+/g).join('')).length;
				if (countDigits == 12) {
					$('.order__error-phone').css('display', 'none');
				}
			});
		}
	}

	window.addEventListener('load', () => {
		let order = new Order();
		order.addButtonClickListener();
		order.addMaskPhone();
	});
})();