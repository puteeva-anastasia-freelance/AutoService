(function () {
	"use strict";

	/**
	 * Класс для отрисовки информации об обслуживании автомобилей
	 */
	class Consultation {
		constructor() {
			this.numberRows = 3;
			this.countBrands = 7;

			this.allBrandsEl = document.querySelector('#all-brands');

			this.pathToBrandsImages = 'img/dist/brands';
		}

		/**
		 * Метод вставляет карточки брендов автомобилей на страницу
		 * @param {BrandDTO[]} brands массив брендов автомобилей из файла brands.js
		 */
		insertBrandsIntoPage(brands) {
			let brandsMarkup = '';
			let rowBrandsMarkup = '';
			let row = 0;
			let count = 0;

			for (let brand of brands) {
				if (row < this.numberRows) {
					if (count < this.countBrands && brand.image != null) {
						rowBrandsMarkup += `<div class="consultation__brand"><img src="${this.pathToBrandsImages}/${brand.image}" alt="${brand.name}" width="100%" height="100%"></div>`
						count++;
					} else if (count == this.countBrands) {
						brandsMarkup += `<div class="consultation__brands">${rowBrandsMarkup}</div>`;

						if (brand.image != null) {
							rowBrandsMarkup = `<div class="consultation__brand"><img src="${this.pathToBrandsImages}/${brand.image}" alt="${brand.name}" width="100%" height="100%" class="consultation__brand"></div>`
						}

						count = 1;
						row++;
					}
				}
			}

			this.allBrandsEl.insertAdjacentHTML('afterbegin', brandsMarkup);
		}

	}

	window.addEventListener('load', () => {
		let consultation = new Consultation();
		consultation.insertBrandsIntoPage(brands);
	});


})();