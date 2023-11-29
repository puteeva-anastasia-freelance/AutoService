(function () {
	"use strict";

	/**
	 * Класс управляет блоком "Узнать стоимость ремонта автомобиля"
	 */
	class Calculator {
		constructor() {
			this.buttonEl = document.querySelector('.calculator__button');
			this.inputPhoneEl = document.querySelector('.calculator .mask-phone');
			this.errorPhone = document.querySelector('.calculator__error-phone');
			this.brandEmptyEl = document.querySelector('.brand-empty');
			this.defectEmptyEl = document.querySelector('.defect-empty');
		}

		/**
		 * Инициализация блока
		 * @param {BrandDTO[]} brands массив брендов автомобилей из файла brands.js
		 * @param {ServiceDTO[]} services массив услуг из файла services.js
		 */
		init(brands, services) {
			this.addButtonClickListener();
			this.addMaskPhone();
			this.loadBrandsInSelect(brands);
			this.loadDefectsInSelect(services);
			this.addSelectizeBrandAndDefect();
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
			$('.calculator .mask-phone').mask('+375 (99) 999-99-99');

			$('.calculator .mask-phone').on("keyup", function () {
				let countDigits = ($('.calculator .mask-phone').val().match(/\d+/g).join('')).length;
				if (countDigits == 12) {
					$('.calculator__error-phone').css('display', 'none');
				}
			});
		}

		/**
		 * Метод загружает бренды автомобиля в выпадающий список
		 * @param {BrandDTO[]} brands массив брендов автомобилей из файла brands.js
		 */
		loadBrandsInSelect(brands) {
			let brandsMarkup = '';

			for (let brand of brands) {
				brandsMarkup += `<option value="${brand.name}">${brand.name}</option>`
			}

			this.brandEmptyEl.insertAdjacentHTML('afterend', brandsMarkup);
		}

		/**
		 * Метод загружает неисправности автомобиля в выпадающий список
		 * @param {ServiceDTO[]} services массив услуг из файла services.js
		 */
		loadDefectsInSelect(services) {
			let defectsMarkup = '';

			for (let service of services) {
				defectsMarkup += `<option value="${service.name}">${service.name}</option>`
			}

			this.defectEmptyEl.insertAdjacentHTML('afterend', defectsMarkup);
		}

		/**
		 * Метод добавляет плагин selectize выпадающим спискам: марке автомобиля и неисправности
		 */
		addSelectizeBrandAndDefect() {
			$('#brand').selectize({
				placeholder: 'Марка автомобиля'
			});

			$('#defect').selectize({
				placeholder: 'Укажите неисправность'
			});
		}
	}

	window.addEventListener('load', () => {
		let calculator = new Calculator();
		calculator.init(brands, services);
	});
})();