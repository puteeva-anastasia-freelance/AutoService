'use strict';

/**
 * Этот класс будет хранить в себе информацию о конкретном бренде
 */
class BrandDTO {
	/**
	 * @param {number} id уникальный идентификатор каждого бренда
	 * @param {string} name название бренда
	 * @param {string | null} image название файла с картинкой (может не быть картинки)
	 */
	constructor(id, name, image) {
		this.id = id;
		this.name = name;
		this.image = image;
	}
}