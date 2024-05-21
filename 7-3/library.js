const express = require("express")
const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const session = require('express-session')
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
const port = 3000

const doc = {
	info: {
		title: 'My Libraray API',
		description: 'Description'
	},
	host: `localhost:${port}`
};
const outputFile = './swagger.json';
const routes = ['./library.js'];
swaggerAutogen(outputFile, routes, doc).then(() => {
	const swaggerDocument = require(outputFile);
	app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
})

app.set('trust proxy', 1)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use(session({
	secret: 'supersecret',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 60000
	}
}))

let lends = [
	{
		id: "0e538d09-4c1e-4f3e-a40c-d9746e4826af",
		customer_id: "f22e8a2b-8685-41a8-be38-8fd645390d7d",
		isbn: "978-3-426-30825-7",
		borrowed_at: "2012-04-23T18:25:43.511Z",
		returned_at: "2012-04-23T18:25:43.511Z"
	},
	{
		id: "1c0e6fb2-42e7-4fe8-af50-9d246c2bfe29",
		customer_id: "9c3a09bb-4a62-4c44-b9cc-70ebf06d5f57",
		isbn: "978-0-545-01022-2",
		borrowed_at: "2013-06-15T10:30:00.000Z",
		returned_at: "2013-06-30T15:45:00.000Z"
	},
	{
		id: "3d7b4f78-cd0d-4f3a-a0fd-9e8bf3d05132",
		customer_id: "f83347b1-4835-4a41-9c6b-af8747b33eae",
		isbn: "978-0-06-112008-4",
		borrowed_at: "2015-09-20T08:00:00.000Z",
		returned_at: "2015-10-05T12:00:00.000Z"
	},
	{
		id: "6a9cf0e4-2d62-4d67-a0cb-6c12d0e2f85c",
		customer_id: "b7d43597-ec63-42c6-9f9d-2b5a52585c1e",
		isbn: "978-1-250-04529-8",
		borrowed_at: "2017-03-12T14:20:00.000Z",
		returned_at: "2017-03-26T18:30:00.000Z"
	},
	{
		id: "8c66e41d-ec1b-4e6b-a7fd-f83782ef364f",
		customer_id: "65a2c512-8d54-4c23-9445-2f36d0a5824e",
		isbn: "978-0-307-47443-5",
		borrowed_at: "2018-05-08T09:45:00.000Z",
		returned_at: "2018-05-22T13:55:00.000Z"
	},
	{
		id: "a2c3f1be-4b35-4b85-8e0b-14fc39d564fc",
		customer_id: "90a7d94f-2ba2-4a4d-9411-475c5bfc486a",
		isbn: "978-0-385-74038-6",
		borrowed_at: "2019-08-03T12:10:00.000Z",
		returned_at: "2019-08-17T16:25:00.000Z"
	},
	{
		id: "c5f0217a-5110-4a44-9c0b-fa8e0085fd4d",
		customer_id: "3b6f2b6b-032a-4b79-bd33-1e9bca24104e",
		isbn: "978-0-312-28078-2",
		borrowed_at: "2020-11-25T07:55:00.000Z",
		returned_at: "2020-12-10T11:45:00.000Z"
	},
	{
		id: "e89cdd9b-b726-4627-bd6f-bad46a7f9b3a",
		customer_id: "fcb7fb9f-f797-448a-9822-27ad36efee7d",
		isbn: "978-0-553-58035-4",
		borrowed_at: "2021-02-18T15:30:00.000Z",
		returned_at: "2021-03-05T19:40:00.000Z"
	},
	{
		id: "f06b8e90-9e39-49a7-8b11-46a7e10c5a61",
		customer_id: "d0c975ff-b0b2-4b3b-b524-56f14a8851c8",
		isbn: "978-0-14-303701-9",
		borrowed_at: "2022-05-30T10:00:00.000Z",
		returned_at: "2022-06-14T14:15:00.000Z"
	}
];

let books = [
	{
		isbn: "978-3-426-30825-7",
		name: "Die Mitternachtsbibliothek",
		author: "Matt Haig",
		year: 2023
	},
	{
		isbn: "978-1-250-21551-1",
		name: "The Starless Sea",
		author: "Erin Morgenstern",
		year: 2019
	},
	{
		isbn: "978-0-553-38655-9",
		name: "Dune",
		author: "Frank Herbert",
		year: 1965
	},
	{
		isbn: "978-0-375-50757-0",
		name: "The Night Circus",
		author: "Erin Morgenstern",
		year: 2011
	},
	{
		isbn: "978-0-553-28826-5",
		name: "The Hobbit",
		author: "J.R.R. Tolkien",
		year: 1937
	},
	{
		isbn: "978-0-451-47182-5",
		name: "1984",
		author: "George Orwell",
		year: 1949
	},
	{
		isbn: "978-1-5011-3063-1",
		name: "The Invisible Life of Addie LaRue",
		author: "V.E. Schwab",
		year: 2020
	},
	{
		isbn: "978-0-312-64964-6",
		name: "Station Eleven",
		author: "Emily St. John Mandel",
		year: 2014
	},
	{
		isbn: "978-0-765-31851-3",
		name: "The Name of the Wind",
		author: "Patrick Rothfuss",
		year: 2007
	},
	{
		isbn: "978-1-59397-889-3",
		name: "The Martian",
		author: "Andy Weir",
		year: 2011
	}
];

app.get('/', (req, res) => {
	// #swagger.tags = ['Root']
	// #swagger.summary = 'Redirect to /books'
	// #swagger.description = 'Redirect to /books for developer exp. '
	res.status(301).redirect('/books')
})

app.get('/books', (req, res) => {
	// #swagger.tags = ['Book']
	// #swagger.summary = 'Get all books'
	// #swagger.description = 'Get all books currently in the library'
	res.status(200).send(books)
})

app.get('/books/:isbn', (req, res) => {
	// #swagger.tags = ['Book']
	// #swagger.summary = 'Get spesific books'
	// #swagger.description = 'Get spesific books currently in the library'
	const reqIsbn = req.params.isbn
	res.status(200).send(books.find(elm => elm.isbn === reqIsbn))
})

app.post('/books', (req, res) => {
	// #swagger.tags = ['Book']
	// #swagger.summary = 'Add one book to Library'
	// #swagger.description = 'Add one spesific book book.isbn, book.name, book.author and book.year have to be filled in'
	const book = req.body
	checkBook(book, res)
	books.push(book)
	res.status(201).send(books)
})

app.put('/books/:isbn', (req, res) => {
	// #swagger.tags = ['Book']
	// #swagger.summary = 'Replace one book to Library'
	// #swagger.description = 'Replace one spesific book book.isbn, book.name, book.author and book.year have to be filled in'
	const book = req.body
	checkBook(book, res)
	const reqIsbn = req.params.isbn
	books = books.filter(book => book != reqIsbn)
	books.push(book)
	res.send(books)
})

app.delete('/books/:isbn', (req, res) => {
	// #swagger.tags = ['Book']
	// #swagger.summary = 'Delete one book to Library'
	// #swagger.description = 'Delete one book will get hard deleted'
	const reqIsbn = req.params.isbn
	books = books.filter(book => book.isbn != reqIsbn)
	res.status(200).send(books)
})

function checkBook(book, res) {
	if (book.isbn == undefined || book.name == undefined || book.author == undefined || book.year == undefined) {
		res.status(422).send("book structure not right")
	}
}

app.get("/lends", (req, res) => {
	// #swagger.tags = ['Lend']
	// #swagger.summary = 'Display all Lends'
	// #swagger.description = 'Get all Lends from Library'
	if (checkToken(req, res)) {
		res.status(200).send(lends)
	} else {
		res.sendStatus(401)
	}
})

app.get("/lends/:id", (req, res) => {
	// #swagger.tags = ['Lend']
	// #swagger.summary = 'Display spesific Lends'
	// #swagger.description = 'Get a spesific Lends from Library'
	if (checkToken(req, res)) {
		const id = req.params.id
		res.status(200).send(lends.find(e => e.id === id))
	} else {
		res.sendStatus(401)
	}
})

app.post("/lends", (req, res) => {
	// #swagger.tags = ['Lend']
	// #swagger.summary = 'Lend a book'
	// #swagger.description = 'Lend a new book the body has to be filled with all parameters expept returned_at'
	if (checkToken(req, res)) {
		const lend = req.body
		checkLend(lend, res)
		lends.push(lend)
		res.status(201).send(lends)
	} else {
		res.sendStatus(401)
	}
})

app.delete("/lends/:id", (req, res) => {
	// #swagger.tags = ['Lend']
	// #swagger.summary = 'Delete a book'
	// #swagger.description = 'Delet a book from Library'
	if (checkToken(req, res)) {
		const id = req.params.id
		lends = lends.filter(e => e.id != id)
		res.status(200).send(lends)
	}
})

app.post("/login", (req, res) => {
	console.log(req.body)
	if (req.body.user === "zli" && req.body.password === "zli1234") {
		req.session.token = req.body.user
		res.sendStatus(200)
	} else {
		res.sendStatus(401);
	}
})

app.get("/login", (req, res)=> {
	res.sendFile(path.join(__dirname, '/form.html'));
})

app.get("/verify", (req, res) => {
	if (checkToken(req, res)) {
		res.status(200).send(req.session.token)
	} else {
		res.sendStatus(401)
	}
})

app.delete("/logout", (req, res) => {
	if (checkToken(req, res)) {
		req.session.token = null
	}
})


function checkToken(req, res) {
	if (req.session.token === "zli") {
		return true
	} else {
		return false
	}
}

function checkLend(lend, res) {
	if (lend.id == undefined || lend.customer_id == undefined || lend.isbn == undefined || lend.borrowed_at == undefined) {
		res.status(422).send("lend structure not right")
	}
	if (lends.find(e => e.isbn === lend.isbn).length > 0) {
		res.status(422).send("book already lendted out")
	}
	if (lends.find(e => e.customer_id === lend.customer_id).length > 3) {
		res.status(422).send("customer already lendted out 3 books")
	}
}

app.listen(port, () => console.log(`Example app listening on port ${port}`))
