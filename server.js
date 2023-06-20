const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Cards = require("./dbcard.js");

// app config
const app = express();
const port = process.env.PORT || 5000;
const connection_url = 'mongodb+srv://disojakaran:karan@cluster0.225fhnn.mongodb.net/?retryWrites=true&w=majority'
// middleware
app.use(express.json());
app.use(cors());
// db config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api endpoints
app.get("/", (req, res) => {
  res.send("Hello World!").status(200);
});

app.post("/tinder/cards", (req, res) => {
    const dbcard = req.body;
    Cards.create(dbcard)
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });
  
  app.get("/tinder/cards", (req, res) => {
    Cards.find()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });
  

// listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
