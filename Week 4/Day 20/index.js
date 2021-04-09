// Express
const express = require("express");
const app = express();
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

app.use("/transaksi", transaksiRoutes); // if accessing localhost:3000/transaksi/* we will go to transaksiRoutes

const PORT = 3000 || process.env.PORT;
app.listen(3000, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
