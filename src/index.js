const Client = require('./Client.js');
const Bot = require('./structures/Bot.js');
const User = require('./structures/User.js');
const Upvote = require('./structures/Upvote.js');
const Stats = require('./structures/Stats.js');
const { Ratelimit, FetchError } = require('./structures/errors.js');

module.exports = {
	get version() { return require('../package.json').version; },
	Client,
	Bot,
	User,
	Upvote,
	Stats,
	Ratelimit,
	FetchError,
};