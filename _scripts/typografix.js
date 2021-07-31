const typografix = (html) => {
	let output = html;

	// Guillemets français et espaces non sécables
	const matchesGuillemets = output.match(/"[^\"]*"/g);
	matchesGuillemets && matchesGuillemets.forEach(match => {
		output = output.replace(match, `&laquo;&nbsp;${match.slice(1, -1)}&nbsp;&raquo;`);
	});

	// Gras
	const matchesBold = output.match(/\*[^\*]*\*/g);
	matchesBold && matchesBold.forEach(match => {
		output = output.replace(match, `<b>${match.slice(1, -1)}</b>`);
	});

	// Italique
	const matchesItalic = output.match(/_[^_]*_/g);
	matchesItalic && matchesItalic.forEach(match => {
		output = output.replace(match, `<i>${match.slice(1, -1)}</i>`);
	});

	// Liens
	const matchesLinks = output.match(/\[[^\[\]]*\]\(\S+\)/g);
	matchesLinks && matchesLinks.forEach(match => {
		const url = match.match(/\(\S+\)/)[0].slice(1, -1);
		const text = match.match(/\[.+\]/)[0].slice(1, -1);
		output = output.replace(match, `<a href=${url} target=_blank>${text}</a>`);
	})

	output = output
		.replace(/  /g, " ")						// Doubles espaces
		.replace(/'/g, "’")					// Apostrophes
		.replace(/ :/g, "&nbsp;:")					// Espaces non sécables
		.replace(/ ;/g, "&nbsp;;")
		.replace(/ !/g, "&nbsp;!")
		.replace(/ \?/g, "&nbsp;?")
		.replace(/ - /g, "&nbsp;&mdash;&nbsp;")		// Tirets cadratins
		.replace(/ \%/g, "&nbsp;%");					// Pourcentages

	return output;
}

export default typografix;

