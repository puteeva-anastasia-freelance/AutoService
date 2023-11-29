(function () {
	'use strict';

	/**
	 * Класс для управления кнопкой "Посмотреть прайс"
	 */
	class Price {
		constructor() {
			this.buttonPriceEl = document.querySelector('.button__price');
			this.popUpOverlayEl = document.querySelector('.pop-up__overlay');
		}

		/**
		 * Метод добавляет кнопке "Посмотреть прайс" слушатель события клика
		 * @param {PriceDTO[]} prices массив стоимости услуг из файла prices.js
		 */
		addButtonPriceClickListener(prices) {
			this.buttonPriceEl.addEventListener('click', () => {
				let pricesServices = this.getPricesServices(prices);
				this.popUpOverlayEl.classList.add('active-pop-up');
				this.popUpOverlayEl.insertAdjacentHTML('afterend', pricesServices);
				this.addCloseElClickListener();
				this.addPriceElClickListener();
			});
		}

		/**
		 * Метод добавляет "Крестику" слушатель события клика
		 */
		addCloseElClickListener() {
			let closeEl = document.querySelector('.price__close');
			closeEl.addEventListener('click', () => {
				let priceEl = document.querySelector('.price');
				this.popUpOverlayEl.classList.remove('active-pop-up');
				priceEl.style.display = 'none';
			});
		}

		/**
		 * Метод получает название и цену услуги
		 * @param {PriceDTO} price объект с информацией о стоимости конкретной услуги
		 * @returns {string} html-разметка названия и стоимости услуги
		 */
		getNameAndPriceService(price) {
			let priceValueEl = this.getPriceService(price);

			return `
				<div class="price__item">
					<span class="price__name">${price.name}</span>
					${priceValueEl}
				</div>`;
		}

		/**
		 * Метод получает стоимость услуги
		 * @returns {string} стоимость услуги
		 */
		getPriceService(price) {
			if (price.minPrice == 0) {
				return `<span class="price__value">бесплатно</span>`;
			} else {
				return `<span class="price__value">от ${price.minPrice} руб.</span>`;
			}
		}

		/**
		 * Метод получает цены услуг
		 * @param {PriceDTO[]} prices массив стоимости услуг из файла prices.js
		 * @returns {string} html-разметка цен услуг
		 */
		getPricesServices(prices) {
			let namesAndPricesServicesMarkup = '';

			for (let price of prices) {
				namesAndPricesServicesMarkup += this.getNameAndPriceService(price);
			}

			return `
				<div class="price">
					<div class="price__container">
						<div class="price__body">
							<h6 class="price__title">Цены на&nbsp;наши работы</h6>
							<p class="price__txt">Окончательная стоимость работ формируется в&nbsp;зависимости от&nbsp;сложности работы и&nbsp;количества затраченных на&nbsp;это часов</p>
							<div class="price__list">
								${namesAndPricesServicesMarkup}
							</div>
							<button type="button" class="price__close">
								<svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.2915 1.29163L16.7082 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M16.7082 1.29163L1.2915 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			`;
		}

		/**
		 * При клике на затемненный фон всплывающее окно с ценами закрывается
		 */
		addPriceElClickListener() {
			let priceEl = document.querySelector('.price');

			priceEl.addEventListener('click', (event) => {
				let priceContainerEl = priceEl.querySelector('.price__container');
				if (event.target == priceContainerEl) {
					this.popUpOverlayEl.classList.remove('active-pop-up');
					priceEl.style.display = 'none';
				}
			});
		}
	}


	window.addEventListener('load', () => {
		let price = new Price();
		price.addButtonPriceClickListener(prices);
	});
})();