const express = require("express")
const app = express()
const port = 3000
var session = require('express-session')

app.set('trust proxy', 1)

app.use(express.json())
app.use(session({
	secret: 'supersecret',
	resave: false,
	saveUninitialized: true,
	name: "Rick Ashley",
	cookie: {
		maxAge: 60000
	}
}))

app.post("/name", (req, res) => {
	req.session.name = req.body.name
	res.send(req.session.name)
	console.log(req.session)
})

app.get("/name", (req, res) => {
	res.send(req.session.name)
	console.log(req.session)
})

app.delete("/name", (req, res) => {
	req.session.name = ""
	res.send(req.session.name)
	console.log(req.session)
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
