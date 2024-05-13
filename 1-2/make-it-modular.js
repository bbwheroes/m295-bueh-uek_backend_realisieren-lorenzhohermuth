const mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], (err, dat) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(dat)
})
