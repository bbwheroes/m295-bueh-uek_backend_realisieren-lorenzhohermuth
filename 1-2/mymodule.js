const fs = require("fs")

module.exports = function (dir, filterEnding, callback) {
	fs.readdir(dir, "utf8", (err, dat) => {
		if (err) {
			callback(err, [])
			return
		}
		dat.forEach( elm => {
			const ending = elm.split(".")[1]
			if (ending === filterEnding) {
				callback(null, elm)
			}
		})
	})
}
