/* eslint-disable curly */

exports.edit = options => {
	if (typeof options.botToken !== 'string' && options.botToken !== null)
		throw new TypeError('options.botToken must be a string.');
	else if (typeof options.botID !== 'string' && options.botID !== null)
		throw new TypeError('options.botID must be a string.');
	else if (typeof options.cache !== 'boolean')
		throw new TypeError('options.cache must be boolean.');
	else if (typeof options.version !== 'number')
		throw new TypeError('options.version must be a number.');
	else
		return options;
};

exports.fetch = options => {
	if (typeof options.cache !== 'boolean')
		throw new TypeError('options.cache must be boolean.');
	else if (typeof options.raw !== 'boolean')
		throw new TypeError('options.cache must be boolean.');
	else if (typeof options.version !== 'number')
		throw new TypeError('options.version must be a number.');
	else if (typeof options.botToken !== 'string' && options.botToken !== null)
		throw new TypeError('options.botToken must be a string.');
	else
		return options;
};

exports.multi = options => {
	exports.fetch(options);

	if (typeof options.mapify !== 'boolean')
		throw new TypeError('options.mapify must be boolean.');
	else if (typeof options.page !== 'number')
		throw new TypeError('options.page must be a number.');
	else if (typeof options.reverse !== 'boolean')
		throw new TypeError('options.reverse must be boolean.');
	else if (typeof options.sortBy !== 'string' && options.sortBy !== null)
		throw new TypeError('options.sortBy must be a string.');
	else
		return options;
};

exports.post = options => {
	if (typeof options.botToken !== 'string' && options.botToken !== null)
		throw new TypeError('options.botToken must be a string.');
	else if (typeof options.version !== 'number')
		throw new TypeError('options.version must be a number.');
	else if (!Array.isArray(options.countOrShards) && typeof options.countOrShards !== 'number')
		throw new TypeError('options.version must be a number or an array of numbers.');
	else
		return options;
};