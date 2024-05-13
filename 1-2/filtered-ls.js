const fs = require("fs")
const args = process.argv[2]
const filterEnding = process.argv[3]

fs.readdir(args, "utf8", (err, dat) => {
	if (err) {
		console.error(err)
		return
	}
	dat.forEach( elm => {
		const ending = elm.split(".")[1]
		if (ending === filterEnding) {
			console.log(elm)
		}
	})
})
