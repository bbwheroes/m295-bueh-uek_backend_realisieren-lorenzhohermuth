const express = require('express')
const app = express()
const port = 4000

app.get('/:plz', (req, res) => {
	let plz = req.params.plz
	wheatherRequest(plz)
		.then(dat => res.send(dat.currentWeather.temperature.toString()))
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

async function wheatherRequest(plz) {
	const res = await fetch(`https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${plz}00`)
	const data = await res.json()
	return data
}

