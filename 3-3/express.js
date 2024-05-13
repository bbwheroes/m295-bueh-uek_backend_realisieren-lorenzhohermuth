/*
 * Einen Endpunkt /now, der die aktuelle Zeit zurück gibt.
 * Einen Endpunkt /zli, der den Benutzer auf die ZLI Webseite https://www.zli.ch weiterleitet.
 * Einen Endpunkt /name, der aus einer Liste von mindestens 20 Namen einen auswählt und zurückgibt.
 * Einen Endpunkt /html, der statisches HTML aus einer Datei vom Server zurück gibt.
 * Einen Endpunkt /image, der ein Bild zurückgibt, welches im Browser angezeigt wird.
 * Einen Endpunkt /teapot, der den Status 418 zurück gibt.
 * Einen Endpunkt /user-agent, der den Browser aus dem Request ausliest und zurück gibt.
 * Einen Endpunkt /secret, der immer den Status 403 zurück gibt.
 * Einen Endpunkt /xml, der eine statische XML Datei vom Server zurück gibt.
 * Einen Endpunkt /me, der ein JSON Objekt zurück gibt mit den Properties Vor- und Nachname, Alter, Wohnort und Augenfarbe.
 */

const express = require("express")
const path = require('path');
const app = express()
const port = 3000

app.get('/now', (req, res) => {
	res.send(new Date())
})

app.get('/zli', (req, res) => {
	res.redirect("https://www.zli.ch/")
})

app.get('/name', (req, res) => {
	res.send(["Jannis", "Yanis", "Lorenz", "Tom", "Cherry", "Otto", "Max", "Friz", "Abid", "Hand", "Joe", "Lynn", "Adrian", "Walter", "Hans", "Achmed", "Jerry", "Oachim", "Tomas", "Tobi"])
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

app.get('/xml', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.xml'))
})

app.get('/me', (req, res) => {
	res.send({
		firstname: "Lorenz",
		lastname : "Hohermuth",
		age: 17,
		city: "Frauenfeld",
		eyeColor: "Brown"
	})
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
