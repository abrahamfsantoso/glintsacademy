const express = require("express");
const app = express(); 
const route = require("./routes/route");

const port = 3000

app.use("/", route);

app.use('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})