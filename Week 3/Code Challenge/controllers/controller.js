class controller {
    get (req, res) {
      console.log("Checking GET process");
      const parName = req.params.name;
      if (parName.toLowerCase() == 'Abie'.toLowerCase() || parName.toLowerCase() == 'Abraham'.toLowerCase()) {
      res.send("Hello, my full name is Abraham F Santoso");
      } else {
      res.send("Please input valid name")
      }}

    post (req, res) {
      console.log("Checking POST process");
      const parName = req.params.name;
      if (parName.toLowerCase() == 'Abie'.toLowerCase() || parName.toLowerCase() == 'Abraham'.toLowerCase()) {
      res.send("Hello, my full name is Abraham F Santoso");
    } else {
      res.send("Please input valid name")
    }}

    put (req, res) {
      console.log("Checking PUT process");
      const parName = req.params.name;
      if (parName.toLowerCase() == 'Abie'.toLowerCase() || parName.toLowerCase() == 'Abraham'.toLowerCase()) {
      res.send("Hello, my full name is Abraham F Santoso");
    } else {
      res.send("Please input valid name")
    }}

    delete (req, res) {
      console.log("Checking DELETE process");
      const parName = req.params.name;
      if (parName.toLowerCase() == 'Abie'.toLowerCase() || parName.toLowerCase() == 'Abraham'.toLowerCase()) {
      res.send("Hello, my full name is Abraham F Santoso");
    } else {
      res.send("Please input valid name")
    }}

  }
  
  module.exports = new controller();
  