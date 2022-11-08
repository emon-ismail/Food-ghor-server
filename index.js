const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
require ("dotenv").config
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
console.log(process.env.DB_USER)
// user:foodghor
// pass:VyAKqH1Z2M9Yhktp




const uri = "mongodb+srv://foodghor:VyAKqH1Z2M9Yhktp@cluster0.ww1mwol.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


