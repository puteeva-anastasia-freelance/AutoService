'use strict';

/**
 * Этот класс будет хранить в себе информацию о конкретной услуге
 */
class ServiceDTO {
	/**
	 * @param {number} id уникальный идентификатор каждой услуги
	 * @param {string} name название услуги
	 * @param {string} description описание услуги
	 * @param {string} image название файла с картинкой
	 */
	constructor(id, name, description, image) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.image = image;
	}
}