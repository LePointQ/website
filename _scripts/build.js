const TOML = require('toml');
const md = require('markdown-it')();

const BASE_URL = 'https://lepointq.com';

const TITLES = {
	vu_d_ailleurs: '🌏 Vu d&rsquo;ailleurs',
	on_debunke: '🔎 On débunke&nbsp;!',
	la_bonne_nouvelle: '💡 La bonne nouvelle'
};

const COLORS = {
	'Vrai': 'forestgreen',
	'Faux': 'crimson',
	'Pas exactement': '#F47B67'
};

const { readFilePromise, writeFilePromise } = require('./utils');
const { typografix } = require('./typografix');

const build = async () => {
	return await new Promise(async (resolve, reject) => {
		if (process.argv.length < 3)
			reject("No slug specified");

		const slug = process.argv[2];

		const { text: markdown } = await readFilePromise(`./content/newsletters/${slug}.md`);
		const data = TOML.parse(markdown.replace(/\+\+\+/g, ''));

		const { text: html } = await readFilePromise('./_scripts/template.html');

		let output = html
			.replace(/{{ BASE_URL }}/g, BASE_URL)
			.replace(/{{ TITLE }}/g, typografix(data.title))
			.replace('{{ PREVIEW }}', md.render(typografix(data.preview || '')))
			.replace('{{ EDITO }}', md.render(typografix(data.edito)))
			.replace('{{ OUTRO }}', md.render(typografix(data.outro)));

		for (const section of ['temoignages', 'vu_d_ailleurs', 'on_debunke', 'la_bonne_nouvelle']) {
			const { text: markdown } = await readFilePromise(`./content/${data[section]}`);
			const content = TOML.parse(markdown.replace(/\+\+\+/g, ''));

			output = output.replace(`{{ ${section.toUpperCase()} }}`, `
				<!-- Hero Image, Flush : BEGIN -->
				<tr>
					<td style="background-color: #ffffff;">
						<p style="color: #F47B67 !important; font-size: 16px; text-align: center; margin-bottom: 40px; font-family: 'Lato', sans-serif;">● ● ●</p>
						<img src="${BASE_URL}${content.image}" width="600" height="" alt="alt_text" border="0" style="width: 100%; max-width: 600px; height: auto; background: #dddddd; margin: auto; display: block;" class="g-img">
					</td>
				</tr>
				<!-- Hero Image, Flush : END -->

				<!-- 1 Column Text : BEGIN -->
				<tr>
					<td style="background-color: #ffffff;">
						<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
							<tr>
								<td style="padding: 20px 20px 10px 20px; font-family: 'Lato', sans-serif; font-size: 16px; line-height: 20px; color: #000000; text-align: justify;">
									<h2 style="margin: 0 0 10px; font-size: 24px; line-height: 28px; color: #000000; font-weight: 900; font-family: 'Lato', sans-serif; text-align: center;">
										${section === 'temoignages' ? `💬 ${typografix(content.title)}` : TITLES[section]}
									</h2>
									<h3 style="margin: 10px 0 10px; font-size: 18px; line-height: 20px; color: #555555; font-weight: normal; font-style: italic; font-family: 'Lato', sans-serif; text-align: center;">
										${content.authors.length === 1 ? `
											<img
												src="${BASE_URL}/media/team/${content.authors[0]}.jpg"
												width="40" height="40"
												style="vertical-align: middle; border-radius: 50%; margin-right: 5px;"
											/>
										` : ''}
										<span>
											Par ${content.authors.length === 1
												? content.authors[0]
												: content.authors.slice(0, -1).join(', ') + ' & ' + content.authors[content.authors.length - 1]
											}
										</span>
									</h3>
									${section !== 'temoignages' ? `
										<h4 style="margin: 20px 0 10px; font-size: 20px; line-height: 20px; color: #000000; font-weight: bold; font-family: 'Lato', sans-serif; text-align: center;">
											${typografix(content.title)}
										</h4>
									` : ''}
									${section === 'on_debunke' ? `
										<p style="margin: 0 0 10px; font-size: 18px; line-height: 25px; color: ${COLORS[content.veracity]}; font-weight: bold; font-family: 'Lato', sans-serif; border: 4px solid ${COLORS[content.veracity]}; display: table; text-align: left; margin-left: auto; margin-right: auto;">
											&nbsp;${content.veracity.toUpperCase()}&nbsp;
										</p>
									` : ''}
									${md.render(typografix(content.text))}
								</td>
							</tr>
						</table>
					</td>
				</tr>
			`);
		}

		await writeFilePromise(`./_newsletters/${slug}.html`, output);
		resolve();
	});
}

build()
	.then(() => process.exit(0))
	.catch((e) => {
		throw new Error(e);
		process.exit(1);
	});
