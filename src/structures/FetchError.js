/**
 * FetchError
 * @class
 * @extends {Error}
 */
class FetchError extends Error {
    /**
     * @param {object} error The error body.
     * @param {string} name The item not found.
     */
    constructor(error, name) {
        super(error);
        this.message = `${error.code} ${error.code === 404 ? `${name || '?'} Not Found` : error.message}`;
        Object.defineProperty(this, 'name', { value: 'FetchError' });

        if (Error.captureStackTrace) Error.captureStackTrace(this, FetchError);
    }

    toString() {
        return this.message;
    }
}

exports.FetchError = FetchError;