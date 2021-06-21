exports.typografix = (html, options) => {

	let output = html;

	if (!options || !options.omitGuillemets) {
		// Guillemets français et espaces non sécables
		const matchesGuillemets = output.match(/"[^\"]*"/g);
		matchesGuillemets && matchesGuillemets.forEach(match => {
			const content = match.slice(1, -1);
			if (!content.startsWith('http') && content !== '100%')
				output = output.replace(match, `&laquo;&nbsp;${content}&nbsp;&raquo;`);
		});
	}

	const matchesQuotes = output.match(/''[^\']*''/g);
	matchesQuotes && matchesQuotes.forEach(match => {
		const content = match.slice(2, -2);
		output = output.replace(match, `&ldquo;${content}&rdquo;`);
	});

	output = output
		.replace(/  /g, " ")						// Doubles espaces
		.replace(/'/g, "’")							// Apostrophes
		.replace(/ :/g, "&nbsp;:")					// Espaces non sécables
		.replace(/ ;/g, "&nbsp;;")
		.replace(/ !/g, "&nbsp;!")
		.replace(/ \?/g, "&nbsp;?")
		.replace(/ %/g, "&nbsp;%")
		.replace(/ €/g, "&nbsp;€")
		.replace(/ - /g, "&nbsp;&mdash;&nbsp;")	// Tirets cadratins
		.replace(/ -,/g, "&nbsp;&mdash;,");

	const imgTags = output.match(/’https:\/\/[^\s]+’/g);
	imgTags && imgTags.forEach(url => {
		console.log(url)
		output = output.replace(url, `'${url.slice(1, -1)}'`)
	});

	output = output.replace(/’100%’/g, `'100%'`);

	return output;
}
