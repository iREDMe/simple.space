/**
 * @typedef {object} ClientOptions The options supplied on instantiating the client.
 * @property {string} [botToken=null] The bot's API token from the site. Required for most endpoints.
 * @property {string} [botID=null] The bot's ID.
 * @property {string} [userToken=null] Your site API token. Required for most endpoints.
 * @property {boolean} [cache=false] Whether or not to cache bots/users on fetch.
 * @property {number} [version=1] The default version of the API to use when fetching and posting.
 */
exports.ClientOptions = {
	botToken: null,
	botID: null,
	userToken: null,
	cache: false,
	version: 1
};

/**
 * @typedef {object} FetchOptions Options available to pass when fetching something, etc. a bot.
 * @property {boolean} [cache=this.options.cache] When set to true, caches the fetched object into a Store/Set value.
 * Corrosponds to {@link ClientOptions#cache} when not present while fetching.
 * @property {boolean} [version=this.options.version] The version to use to fetch an endpoint.
 * @property {boolean} [raw=false] When set to true, returns the raw fetched object.
 * @property {string} [userToken=this.options.userToken] Your authorization token given from the site.
 * @property {string} [botToken=this.options.botToken] One of your bot's authorization token from the site.
 */
exports.FetchOptions = {
	cache: false,
	raw: false,
	version: 1,
	userToken: null,
	botToken: null,
};

/**
 * @typedef {object} MultiFetchOptions Options when a given output is an array.
 * @property {boolean} [cache=this.options.cache] When set to true, caches the fetched object into a Store/Set value.
 * Corrosponds to {@link ClientOptions#cache} when not present while fetching.
 * @property {boolean} [raw=false] When set to true, returns the raw fetched object.
 * @property {boolean} [version=this.options.version] The version to use to fetch an endpoint.
 * @property {boolean} [mapify=true] When set to true, the fetched value will be in a Store, mapped by their IDs.
 * @property {string} [userToken=this.options.userToken] Your authorization token given from the site.
 * @property {string} [botToken=this.options.botToken] One of your bot's authorization token from the site.
 * @property {number} [page=1] The section of the endpoint to take.
 */
exports.MultiFetchOptions = {
	...exports.FetchOptions,
	mapify: true,
	page: 1
};

/**
 * @typedef {object} PostOptions Options when POSTing bot count.
 * @property {number | number[]} [countOrShards=null] The server count/array of shards that the bot currently has.
 * @property {string} [botToken=this.options.botToken] The bot authorization token to use for authenticating the POST.
 * Must be the token corrosponding. Uses {@link ClientOptions#botToken} if omitted.
 * @property {boolean} [version=this.options.version] The version to use to fetch an endpoint.
 */
exports.PostOptions = {
	countOrShards: null,
	botToken: null,
	version: 1
};