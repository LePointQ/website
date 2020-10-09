const fetch = require('node-fetch');
const pressAnyKey = require('press-any-key');

const API_KEY = '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';

const send = async () => {
	return await new Promise(async (resolve, reject) => {

		const real = process.argv[2] === '--real';

		if (process.argv.length < 4)
			reject('No id specified');

		const id = process.argv[3];

		pressAnyKey(`Sending ${real ? 'for real' : 'a test'}... Press any key to go on, or Ctrl+C to cancel.`, {
			ctrlC: 'reject'
		})
		.then(async () => {
			if (real) {
				const response = await fetch(`https://api.sendinblue.com/v3/emailCampaigns/${id}/sendNow`, {
					method: 'POST',
					headers: {
						'accept': 'application/json',
						'content-type': 'application/json',
						'api-key': API_KEY
					},
				});
				if (response.status === 204) resolve();
				else reject(response)
			}
			else {
				const response = await fetch(`https://api.sendinblue.com/v3/emailCampaigns/${id}/sendTest`, {
					method: 'POST',
					headers: {
						'accept': 'application/json',
						'content-type': 'application/json',
						'api-key': API_KEY
					},
				});
				if (response.status === 204) resolve();
				else reject(response)
			}
		})
		.catch(() => resolve());
	});
}

send()
	.then(() => process.exit(0))
	.catch((e) => {
		throw new Error(e);
		process.exit(1);
	});
