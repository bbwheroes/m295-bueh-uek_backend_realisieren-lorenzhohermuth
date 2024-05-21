const express = require("express")
const app = express()
const port = 3000
const basicAuth = require('express-basic-auth')

app.use("/privat", basicAuth({
	users: {'zli': 'zli1234', },
	challenge: true,
	realm: 'Imb4T3st4pp',
}))


app.get("/public", (req, res) => {
	res.send("public page")
})

app.get("/privat", (req, res) => {
	res.send("privat page")
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
