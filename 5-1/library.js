const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

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
	res.status(301).redirect('/books')	
})

app.get('/books', (req, res) => {
	res.status(200).send(books)	
})

app.get('/books/:isbn', (req, res) => {
	const reqIsbn = req.params.isbn
	res.status(200).send(books.find(elm => elm.isbn === reqIsbn))
})

app.post('/books', (req, res) => {
	const book = req.body
	checkBook(book, res)
	books.push(book)
	res.status(200).send(books)
})

app.put('/books/:isbn', (req, res) => {
	const book = req.body
	checkBook(book, res)
	const reqIsbn = req.params.isbn
	books = books.filter(book => book != reqIsbn)
	books.push(book)
	res.send(books)
})

app.delete('/books/:isbn', (req, res) => {
	const reqIsbn = req.params.isbn
	books = books.filter(book => book.isbn != reqIsbn)
	res.status(200).send(books)
})

function checkBook(book, res) {
	if (book.isbn == undefined || book.name == undefined || book.author == undefined || book.year == undefined) {
		res.status(422).send("book structure not right")
	}
}

app.listen(port, () => console.log(`Example app listening on port ${port}`))
