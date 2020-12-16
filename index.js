const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors())
app.use(bodyParser.json({
    extended: true
}));


const cardRouter = require("./routes/index");

app.use('/card', cardRouter);



app.listen(8089, () => {
    console.log(`App started and Listening to port`, 8089);
});