(function () {
	'use strict';

	/**
	 * Класс для отрисовки карточек услуг
	 */
	class Service {
		constructor() {
			this.pathToServicesImages = 'img/dist/services';
			this.wrapEl = document.querySelector('.service__wrap');
		}

		/**
		 * Метод вставляет карточки услуг на страницу
		 * @param {ServiceDTO[]} services массив услуг из файла services.js
		 */
		insertServicesIntoPage(services) {
			let servicesMarkup = '';

			for (let service of services) {
				servicesMarkup += this.getServiceMarkup(service);
			}

			this.wrapEl.insertAdjacentHTML('beforeend', servicesMarkup);

			this.addWindowResizeListener();
		}

		/**
		 * Метод получает разметку одной карточки услуги
		 * @param {ServiceDTO} service объект с информацией об услуге
		 * @returns {string} html-разметка карточки услуги
		 */
		getServiceMarkup(service) {
			return `
			<div class="service__item">
				<div class="service__flipper">
					<div class="service__front"
						style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${this.pathToServicesImages}/${service.image}) center / cover no-repeat ;">
						<h3 class="h5 service__subtitle">${service.name}</h3>
					</div>
					<div class="service__back"
						style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${this.pathToServicesImages}/${service.image}) center / cover no-repeat ;">
						<div class="service__inner">
							<h3 class="h5">${service.name}</h3>
							<p class="service__txt">${service.description}</p>
							<button type="button" class="button service__button button__feedback"
								data-value="Оставить заявку: ${service.name}">Оставить заявку</button>
						</div>
					</div>
				</div>
			</div>
			`;
		}

		/**
		 * Метод добавляет окну браузера слушатель события изменения размеров окна браузера
		 */
		addWindowResizeListener() {
			this.setHeightCards();

			window.addEventListener('resize', () => {
				this.setHeightCards();
			});
		}

		/**
		 * Метод устанавливает высоту карточкам
		 */
		setHeightCards() {
			let itemElems = document.querySelectorAll('.service__item');

			itemElems.forEach((itemEl) => {
				let widthItemEl = itemEl.offsetWidth;
				itemEl.style.height = `${widthItemEl * 1.035}px`;
			});
		}
	}

	window.addEventListener('load', () => {
		let service = new Service();
		service.insertServicesIntoPage(services);
	});
})();