exports.typografix = (html, { omitGuillemets = false } = {}) => {
	let output = html;

	if (!omitGuillemets) {
		// Guillemets français et espaces non sécables
		const matchesGuillemets = output.match(/"[^\"]*"/g);
		matchesGuillemets && matchesGuillemets.forEach(match => {
			if (match.slice(1).startsWith('https') || match.slice(1).startsWith('width')) return;
			output = output.replace(match, `&laquo;&nbsp;${match.slice(1, -1)}&nbsp;&raquo;`);
		});
	}

	const matchesQuotes = output.match(/''[^\']*''/g);
	matchesQuotes && matchesQuotes.forEach(match => {
		output = output.replace(match, `&ldquo;${match.slice(2, -2)}&rdquo;`);
	});

	output = output
		.replace(/  /g, " ")						// Doubles espaces
		.replace(/'/g, "’")							// Apostrophes
		.replace(/ :/g, "&nbsp;:")					// Espaces non sécables
		.replace(/ ;/g, "&nbsp;;")
		.replace(/ !/g, "&nbsp;!")
		.replace(/ \?/g, "&nbsp;?")
		.replace(/ - /g, "&nbsp;&mdash;&nbsp;")		// Tirets cadratins
		.replace(/ -,/g, "&nbsp;&mdash;,")
		.replace(/ \%/g, "&nbsp;%")					// Pourcentages
		.replace(/⋅/g, '·')							// Points médians
		.replace(/(src|style)=’[^’]+’/g, (str) => str.replace(/’/g, '\''));

	return output;
}
