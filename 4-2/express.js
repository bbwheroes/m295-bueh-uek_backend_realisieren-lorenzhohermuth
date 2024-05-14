/*
 * x Einen Endpunkt GET /now, der die aktuelle Zeit zurück gibt. Per Parameter ?tz= kann die Zeitzone ausgewählt werden (z.B. "Europe/Zurich").
 * x Einen Endpunkt POST /names, welcher der Namensliste einen Eintrag hinzufügt. Der Name wird per Form mitgegeben
 * x Einen Endpunkt DELETE /names, der den Eintrag aus der Namensliste entfernt und dann 204 zurück gibt. Der Name wird per Query mitgegeben
 * Einen Endpunkt GET /secret2, der den Header "Authorization" ausliest und 200 zurück gibt, wenn im Header "Basic aGFja2VyOjEyMzQ=" steht und ansonsten 401 zurück gibt
 * Einen Endpunkt GET /chuck, welcher einen zufälligen Witz von der Chuck Norris API abfragt. Im Text wird "Chuck Norris" dann durch den Wert ersetzt, der per Query Paramter ?name= mitegegeben wurde
 * Einen Endpunkt PATCH /me, der ein JSON Objekt entgegennimmt und die Werte, die mitgegeben wurden, im bisherigen me-Objekt überschreiben
 */

const express = require("express")
const path = require('path');
const app = express()
const port = 3000

app.use(express.json())

const names = ["Jannis", "Yanis", "Lorenz", "Tom", "Cherry", "Otto", "Max", "Friz", "Abid", "Hand", "Joe", "Lynn", "Adrian", "Walter", "Hans", "Achmed", "Jerry", "Oachim", "Tomas", "Tobi"]
let me = {
		firstname: "Lorenz",
		lastname : "Hohermuth",
		age: 17,
		city: "Frauenfeld",
		eyeColor: "Brown"
	}

app.get('/now', (req, res) => {
	const timezone = req.query.tz
	let time = new Date()

	if (timezone != undefined) {
		time = time.toLocaleString("de-CH", {timeZone: timezone})
	}
	else {
		time = time.toLocaleString("de-CH")
	}
	res.send(time)
})

app.get('/zli', (req, res) => {
	res.redirect("https://www.zli.ch/")
})

app.get('/name', (req, res) => {
	res.send(names)
})

app.post('/names', (req, res) => {
	names.push(req.body.name)
	res.send(names)
})

app.delete('/names', (req, res) => {
	const n = req.body.name
	const index = names.indexOf(n)
	names.splice(index, 1)
	res.send(names)
})

app.get('/html', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/image', (req, res) => {
	res.sendFile(path.join(__dirname, '/fat-gopher.png'))
})

app.get('/teapot', (req, res) => {
	res.status(418)
	res.send('Im a teapot')
})

app.get('/user-agent', (req, res) => {
	res.send(window.navigator.userAgent)
})

app.get('/secret', (req, res) => {
	res.status(403)
	res.send(403)
})

app.get('/secret2', (req, res) => {
	if (req.headers.authorization === "Basic aGFja2VyOjEyMzQ=") {
		res.status(200)
		res.send(200)
		return
	}
	res.status(401)
	res.send(401)
})

app.get('/xml', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.xml'))
})

app.get('/me', (req, res) => {
	res.send(me)
})

app.patch('/me', (req, res) => {
	me = req.body
	res.send(me)
})

app.get('/chuck', (req, res) => {
	const subsituteName = req.query.name
	getChuckNorisJoke().then( jsonRes => {
		let joke = jsonRes.value		
		if (subsituteName != undefined) {
			joke = joke.replace("Chuck Norris", subsituteName)
		}
		res.send(joke)
	})
})

async function getChuckNorisJoke(){
	const response = await fetch("https://api.chucknorris.io/jokes/random")
	return response.json()
}

app.listen(port, () => console.log(`Example app listening on port ${port}`))
