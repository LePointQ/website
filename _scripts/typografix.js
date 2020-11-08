exports.typografix = (html) => {
	let output = html;

	// Guillemets français et espaces non sécables
	const matchesGuillemets = output.match(/"[^\"]*"/g);
	matchesGuillemets && matchesGuillemets.forEach(match => {
		const content = match.slice(1, -1);
		if (!content.startsWith('http') && content !== '100%')
			output = output.replace(match, `&laquo;&nbsp;${content}&nbsp;&raquo;`);
	});

	output = output
		.replace(/  /g, " ")						// Doubles espaces
		.replace(/'/g, "&rsquo;")					// Apostrophes
		.replace(/ :/g, "&nbsp;:")					// Espaces non sécables
		.replace(/ ;/g, "&nbsp;;")
		.replace(/ !/g, "&nbsp;!")
		.replace(/ \?/g, "&nbsp;?")
		.replace(/ - /g, "&nbsp;&mdash;&nbsp;");	// Tirets cadratins

	return output;
}
