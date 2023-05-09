const express = require('express');
const router = express.Router();

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
router.get('/', function (req, res) {
	res.render('index', { title: 'Mini message board', messages: messages });
});

router.post('/new', (req, res) => {
	messages.push({
		user: req.body.user,
		text: req.body.text,
		added: new Date(),
	});
	res.redirect('/');
});

module.exports = router;
