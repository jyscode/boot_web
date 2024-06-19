require('dotenv').config();
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set('view engine', 'ejs');

const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'jyscode',
    password: 'password',
    database: 'myboard'
})


const mongoClient = require('mongodb').MongoClient
const url = process.env.MONGO_URL
let mydb
mongoClient.connect(url)
    .then(client => {
        console.log('mongodb에 접속 성공')
        mydb = client.db('myboard')
        app.listen(8080, function (){
            console.log('8080 server ready...')
        })

    }).catch(err => {
        console.log(err)
    })

app.get('/list', function(req, res) {
    mydb.collection('post').find().toArray().then(result => {
        console.log(result)
        res.render('list.ejs', {data: result})
        //res.sendFile(__dirname+ '/list.ejs')
    })
})

app.get('/list_mysql', async function(req, res) {
    try{
        conn.connect()
        let [rows, fields] = await conn.promise().query('select * from post join profile on post.profile_id = profile.id')
        console.log(rows)
        res.render('list_mysql.ejs', {data: rows})
    } catch (e) {
        console.log(e)
    }

})

app.get('/enter', function(req, res){
    res.sendFile(__dirname + '/enter.html')
})

app.get('/enter_mysql', function(req, res){
    res.sendFile(__dirname + '/enter_mysql.html')
})

app.post('/save', function (req, res){

    const body = req.body

    mydb.collection('post').insertOne(body).then(result => {
        console.log('저장 완료')
    })

    console.log(body.title)
    console.log(body.content)
})

app.post('/save_mysql', async function (req, res){
    try{
        const body = req.body
        conn.connect()
        let result = await conn.promise().query("insert into post (title, content, created, profile_id) values(?, ?, NOW(),?)", [body.title,
        body.content,
        body.profile_id])
        console.log(result)
    } catch (e) {
        console.log(e)
    }
})
