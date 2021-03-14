const process = require('process');
const fs = require('fs');
const path = require('path');

const { typografix } = require('./typografix');

const folder = process.argv[2];

const walkDir = (dir, files) => {
	files = files || [];

	if (!fs.statSync(dir).isDirectory() && dir.endsWith('.md')) {
		files.push(dir);
		return files;
	}

	const filesInDir = fs.readdirSync(dir);

	filesInDir.forEach(file => walkDir(path.join(dir, file), files));

	return files;
}

const files = walkDir(folder);

files.forEach(file => {
	console.log(`Fixing ${file}...`);
	const content = fs.readFileSync(file).toString();
	fs.writeFileSync(file, typografix(content, { omitGuillemets: true }));
});
