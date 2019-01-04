// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const sampleTemplates = require('../seed/templates.json')

const templates = {}
const landing = {}
const resume = {}
const categories = ['landing', 'resume', 'restaurant', 'fitness', 'realtor', 'lessons']

router.get('/', (req, res) => {
	const selected = categories[0]
	const data = {
		categories: categories,
		templates: [
			{name: 'templates 1'},
			{name: 'templates 2'},
			{name: 'templates 3'}
		],
		landing: [
			{name: 'landing 1'},
			{name: 'landing 2'},
			{name: 'landing 3'}
		],
		resume: [
			{name: 'resume 1'},
			{name: 'resume 2'},
			{name: 'resume 3'}
		],
		restaurant: [
			{name: 'restaurant 1'},
			{name: 'restaurant 2'},
			{name: 'restaurant 3'}
		]

	}


	templates[selected] = sampleTemplates
	data['preloaded'] = JSON.stringify({
		selected: selected,
		templates: templates,
		landing: landing,
		resume: resume
	})

	res.render('index', data)
})

router.get('/landing', (req, res) => {
	res.render('landing', null)
})


router.get('/profile', (req, res)=> {
	res.render('profile', null)
})

router.get('/tables', (req, res)=> {
	res.render('tables', null)
})

module.exports = router
