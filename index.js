const express = require('express');
const app = express();



app.use(bodyParser.json({
    extended: true
}));


app.listen(8081, () => {
    console.log(`App started and Listening to port`, 8081);
});