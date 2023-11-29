'use strict';

/**
 * Этот класс будет хранить в себе информацию о стоимости конкретной услуги
 */
class PriceDTO {
	/**
	 * @param {number} id уникальный идентификатор
	 * @param {string} name название услуги
	 * @param {number} minPrice минимальная цена услуги
	 */
	constructor(id, name, minPrice) {
		this.id = id;
		this.name = name;
		this.minPrice = minPrice;
	}
}