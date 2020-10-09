const { exec } = require('child_process');
const { readFile, writeFile } = require('fs');

const execPromise = async (cmd) => {
	return await new Promise(resolve => {
		exec(cmd, (err, stdout, stderr) => {
			resolve({ stdout, stderr })
		});
	});
}

const readFilePromise = async (path, encoding = 'utf8') => {
	return await new Promise(resolve => {
		readFile(path, encoding, (err, data) => {
			resolve({ text: data, readError: err });
		});
	});
}

const writeFilePromise = async (path, data, encoding = 'utf8') => {
	return await new Promise(resolve => {
		writeFile(path, data, encoding, (err) => {
			resolve({ writeError: err });
		});
	});
}

module.exports = {
	execPromise,
	readFilePromise,
	writeFilePromise
};
