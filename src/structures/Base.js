/**
 * The universal base for all classes.
 */
class Base {
	/**
	 * @param {object} obj
	 */
	constructor(obj) {
		/**
		 * The raw object used to create the class and gave class values.
		 * @readonly
		 * @type {object}
		 * @name Base#raw
		 */
		Object.defineProperty(this, 'raw', { get: () => obj, enumerable: true });
	}
}

module.exports = Base;