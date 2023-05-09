var express = require('express');
var router = express.Router();

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
	,
	{
		text: "What's up!",
		user: 'Liam',
		added: new Date(),
	},
];

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Mini message board', messages: messages });
});

module.exports = router;
