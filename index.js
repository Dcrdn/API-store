const express=require('express');
const bodyParser=require('body-parser');
const app= express();
var cors = require('cors')
const port=3001;
const db = require('./queries');

var jsonParser = bodyParser.json()

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),cors()
);

app.get('/', (request, response) => {
    response.status(200).json({ info: 'Node.js, Express, and Postgres API' })
});

app.post('/totalTshirts', db.getTShirts);

app.post('/totalPants', db.getPantsPrice );

app.post('/totalHats', db.getHatsPrice );

app.post('/total', db.getTotal);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})