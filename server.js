const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
var cors = require('cors')
const notes = require('./api/routes/routes')

var mongoose = require('mongoose')
var key = require('./config/keys.js').mongoURI;

mongoose
.connect(key)
.then(() => {
    console.log("MongoDB Connected");
})
    .catch((err) => {
        console.log(err);
    })
    
    
app.use(cors())
app.use(bodyParser.json());

app.get('/api/v1/hello/', (req, res) => {
    console.log("GET /api/v1/hello/ - Greeting")
    res.send('Hello from ExpressJS!');
})

app.use('/api/v1/notes', notes)
// app.get('/api/v1/notes/', (req, res) => {
//     console.log("GET /api/v1/notes/ - Fetching notes")
//     res.send(notes)
// })

app.listen(port, () => {
    console.log('Server started on', port)
})

module.exports = app;

/*
old_notes = [
    {
        "id": 1,
        "title": "Card One",
        "sec_text": "Secondary Text One",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 2,
        "title": "Card Two",
        "sec_text": "Secondary Text Two",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 3,
        "title": "Card Three",
        "sec_text": "Secondary Text Three",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 4,
        "title": "Card Four",
        "sec_text": "Secondary Text Four",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 1,
        "title": "Card One",
        "sec_text": "Secondary Text One",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 2,
        "title": "Card Two",
        "sec_text": "Secondary Text Two",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 3,
        "title": "Card Three",
        "sec_text": "Secondary Text Three",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 4,
        "title": "Card Four",
        "sec_text": "Secondary Text Four",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 1,
        "title": "Card One",
        "sec_text": "Secondary Text One",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 2,
        "title": "Card Two",
        "sec_text": "Secondary Text Two",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 3,
        "title": "Card Three",
        "sec_text": "Secondary Text Three",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
    {
        "id": 4,
        "title": "Card Four",
        "sec_text": "Secondary Text Four",
        "text":
            "Greyhound divisively hello coldly wonderfully marginally far upon excluding. Greyhound divisively hello coldly wonderfully marginally far upon excluding."
    },
]
*/