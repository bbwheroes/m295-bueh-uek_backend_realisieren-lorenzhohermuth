const fs = require('fs')
const filePath = process.argv[2];

fs.readFile(filePath, "utf8", (err, dat) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(dat.split("\n").length - 1);
});
