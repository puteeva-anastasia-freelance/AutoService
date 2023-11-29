(function () {
	"use strict";

	/**
	 * Класс управляет всплывающими окнами
	 */
	class PopUp {
		constructor() {
			this.buttonFeedbackElems = document.querySelectorAll('.button__feedback');
			this.popUpOverlayEl = document.querySelector('.pop-up__overlay');
			this.acceptedEl = document.querySelector('.accepted');
			this.mobileMenuEl = document.querySelector('.main-header__mobile-menu');
			this.mobileBurgerEl = document.querySelector('.main-header__mobile-burger');
			this.mainHeaderEl = document.querySelector('.main-header');
		}

		/**
		 * Метод добавляет кнопкам "Обратной связи" слушатель события клика
		 */
		addButtonsFeedbackClickListener() {
			this.buttonFeedbackElems.forEach((button) => {
				button.addEventListener('click', () => {
					let nameForm = this.getNameForm(button);
					let formFeedback = this.getFormFeedback(button.textContent, nameForm);
					this.popUpOverlayEl.classList.add('active-pop-up');
					this.acceptedEl.insertAdjacentHTML('beforebegin', formFeedback);
					this.addMaskPhone();
					this.addCloseElemsClickListener();
					this.addButtonsPopUpClickListener();
					this.addPopUpElemsClickListener();
					this.closeMobileMenu();
				});
			});
		}

		/**
		 * Метод закрывает мобильное меню
		 */
		closeMobileMenu() {
			this.popUpOverlayEl.classList.remove('active-mobile-menu');
			this.mobileMenuEl.classList.remove('active');
			this.mobileBurgerEl.classList.remove('cross');
			this.mainHeaderEl.classList.remove('active');
		}

		/**
		 * Метод получает название формы
		 * @param {HTMLButtonElement} button кнопка, на которую нажали
		 * @returns {string} название формы
		 */
		getNameForm(button) {
			return button.dataset.value;
		}

		/**
		 * Метод получает форму для отправки заявки
		 * @param {string} textButton текст кнопки
		 * @param {string} nameForm название формы
		 * @returns {string} html-разметка формы для отправки заявки
		 */
		getFormFeedback(textButton, nameForm) {
			return `<div class="pop-up">
			<div class="pop-up__container">
				<div class="pop-up__body" style="background: linear-gradient(90.92deg, #FFFFFF 0.79%, rgba(217, 217, 217, 0) 99.28%), right top / cover no-repeat url(img/dist/bg-pop-up.webp);">
					<h6 class="pop-up__title">Обратная связь</h6>
					<p class="txt pop-up__txt">Заполните форму и&nbsp;мы&nbsp;свяжемся с&nbsp;Вами!</p>
					<form class="pop-up__form form-application">
						<input type="hidden" name="name-form" value="${nameForm}">
						<div class="pop-up__name">
							<input type="text" class="pop-up__input" placeholder="Укажите Ваше имя" name="name">
						</div>
						<div class="pop-up__phone">
							<input required class="pop-up__input mask-phone" type="text" placeholder="Укажите Ваш номер телефона" name="phone">
						</div>
						<p class="txt pop-up__error-phone">Для отправки формы, пожалуйста, укажите Ваш номер телефона</p>
						<button type="submit" class="button button__red pop-up__button">${textButton}</button>
					</form>
					<button type="button" class="pop-up__close">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="pop-up__close-svg">
							<path d="M1.2915 1.29163L16.7082 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.7082 1.29163L1.2915 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</button>
				</div>
			</div>
		</div>`;
		}

		/**
		 * Метод добавляет кнопкам отправки формы слушатель события клика
		 */
		addButtonsPopUpClickListener() {
			let popUpButtonElems = document.querySelectorAll('.pop-up__button');
			popUpButtonElems.forEach((button) => {
				let popUpEl = button.closest('.pop-up');
				let popUpInputPhoneEl = popUpEl.querySelector('.mask-phone');
				let popUpErrorPhoneEl = popUpEl.querySelector('.pop-up__error-phone');

				button.addEventListener('click', () => {
					if (popUpInputPhoneEl.value == '') {
						popUpErrorPhoneEl.style.display = 'block';
					} else {
						popUpErrorPhoneEl.style.display = 'none';
					}
				});
			});
		}

		/**
		 * Метод добавляет "Крестикам" слушатель события клика
		 */
		addCloseElemsClickListener() {
			let popUpCloseElems = document.querySelectorAll('.pop-up__close');

			popUpCloseElems.forEach((popUpCloseEl) => {
				popUpCloseEl.addEventListener('click', () => {
					let popUpEl = popUpCloseEl.closest('.pop-up');
					this.popUpOverlayEl.classList.remove('active-pop-up');
					popUpEl.style.display = 'none';
				});
			});
		}

		/**
		 * Метод добавляет маску телефона
		 */
		addMaskPhone() {
			let countDigits = 0;
			$('.mask-phone').mask('+375 (99) 999-99-99');

			$('.pop-up .mask-phone').on("keyup", function () {
				countDigits = $(this).val().match(/\d+/g).join('').length;
				if (countDigits == 12) {
					$('.pop-up__error-phone').css('display', 'none');
				}
			});
		}

		/**
		 * При клике на затемненный фон всплывающее окно закрывается
		 */
		addPopUpElemsClickListener() {
			let popUpElems = document.querySelectorAll('.pop-up');
			popUpElems.forEach((popUpEl) => {
				popUpEl.addEventListener('click', (event) => {
					let popUpContainerEl = popUpEl.querySelector('.pop-up__container');
					if (event.target == popUpContainerEl) {
						this.popUpOverlayEl.classList.remove('active-pop-up');
						popUpEl.style.display = 'none';
					}
				})
			});
		}
	}

	window.addEventListener('load', () => {
		let popUp = new PopUp();
		popUp.addButtonsFeedbackClickListener();
	});
})();