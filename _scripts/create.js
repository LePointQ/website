const TOML = require('toml');
const fetch = require('node-fetch');
const Entities = require('html-entities').Html5Entities;
const entities = new Entities();

const { readFilePromise } = require('./utils');
const { typografix } = require('./typografix');

const API_KEY = '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';

const createCampaign = async () => {
	return await new Promise(async (resolve, reject) => {
		if (process.argv.length < 3)
			reject('No slug specified');

		const slug = process.argv[2];

		const listId = process.argv.length > 3 ? process.argv[3] : 3;

		const { text: markdown } = await readFilePromise(`./content/newsletters/${slug}.md`);
		const data = TOML.parse(markdown.replace(/\+\+\+/g, ''));

		const { text: html } = await readFilePromise(`./_newsletters/${slug}.html`);

		const response = await fetch('https://api.sendinblue.com/v3/emailCampaigns', {
			method: 'POST',
			headers: {
				'accept': 'application/json',
				'content-type': 'application/json',
				'api-key': API_KEY
			},
			body: JSON.stringify({
				name: `Le Point Q #${data.numero}`,
				sender: {
					name: 'Le Point Q',
					email: 'lepointq.newsletter@gmail.com'
				},
				subject: `${entities.decode(typografix(data.title))} - Le Point Q #${data.numero}`,
				htmlContent: html,
				recipients: { listIds: [listId] }
			})
		});
		const {id } = await response.json();

		console.log(`Preview: https://my.sendinblue.com/camp/preview/id/${id}`);
		console.log(`To send a test: npm run test ${id}`);
		console.log(`To send for real: npm run send ${id}`);

		resolve();
	});
}

createCampaign()
	.then(() => process.exit(0))
	.catch((e) => {
		throw new Error(e);
		process.exit(1);
	});
