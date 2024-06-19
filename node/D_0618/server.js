const mysql  = require('mysql2')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'jyscode',
    password: 'password',
    database: 'myboard'
})

conn.connect()

const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.get('/list',async function(req, res) {
    let v
    try{
        let [rows, fields] = await conn.promise().query('select * from post join profile on post.profile_id = profile.id')
        v = rows
    } catch (e) {
        console.log(e)
    }
    res.send(v)
})
app.listen(8080, function (){
    console.log('8080 server ready')
})
