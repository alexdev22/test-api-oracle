const express = require('express')
const pool = require('./db')
const app = express()

const string = "INSERT INTO stock VALUES ('123');"
const string2 = "SELECT * FROM Persons"

app.get('/', async (req, res) =>  {
    try {
       await pool.query(string)
       res.send('Success')
    } catch (error) {
        res.send(error)
    }


});


app.listen(3000, () => {
    console.log('Listening on port 3000')
})

