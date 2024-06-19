const express = require('express')
const app = express()
const port = 3000

const { Client } = require("pg");





// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/book/:id', async function(req, res){
    let id = req.params.id
    let data
    const query = {
        text: "SELECT * FROM book WHERE ID="+id,
    };

    const client = new Client({
        user: "postgres",
        host: "127.0.0.1",
        database: "postgres",
        password: "postgres",
        port: 5432,
    });

    client.connect();

    console.log(query)
    await client
        .query(query)
        .then((res) => {
            console.log(res.rows[0]);
            data = res.rows[0]
            client.end();
        })
        .catch((e) => console.error(e.stack));

    if(data){
        res.send(`${data.id}, ${data.bookname}`)
    } else {
        res.send('잘못된 책 번호 입니다')
    }

    // console.log(data.id, data.bookname)
})

// POST method route
app.post('/book', (req, res) => {
    res.send('POST request to the book')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
