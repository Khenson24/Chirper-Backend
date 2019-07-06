const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require("path")

const items = require('./routes/api/items');



const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const db = require('./keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/items', items)


const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`Server started on port ${port}`));

