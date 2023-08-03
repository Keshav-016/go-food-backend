const express = require('express')
const cors=require('cors');
const app = express()
const port = 5000
app.use(cors());
const mongoDB=require("./db");
mongoDB();


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api',require('./Routes/createUser'));
app.use('/api',require('./Routes/DisplayData'));
app.use('/api',require('./Routes/OrderData'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})