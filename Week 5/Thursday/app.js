require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Express
const express = require("express");
const app = express();
const fileUpload = require('express-fileupload');
const transaksiRoutes = require("./routes/transaksiRoutes.js");

//Set body parser for HTTP post operation
app.use(express.json()); // support json encoded bodies
app.use(
  express.urlencoded({
    extended: true,
  })
); // support encoded bodies

//set static assets to public directory
app.use(express.static("public"));

app.use(fileUpload());

app.use("/transaksi", transaksiRoutes); // if accessing localhost:3000/transaksi/* we will go to transaksiRoutes

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
