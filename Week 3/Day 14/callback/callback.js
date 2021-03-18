
const fs = require("fs");

// Start Callback (ES5)
fs.readFile("./contents/content1.txt", "utf-8", (err, content1) => {
  if (err) throw err;
  console.log(content1);
  fs.readFile("./contents/content2.txt", "utf-8", (err, content2) => {
    if (err) throw new err;
    console.log(content2);
    fs.readFile("./contents/content3.txt", "utf-8", (err, content3) => {
      if (err) throw err;
      console.log(content3);
      fs.readFile("./contents/content4.txt", "utf-8", (err, content4) => {
        if (err) throw err;
        console.log(content4);
        fs.readFile("./contents/content5.txt", "utf-8", (err, content5) => {
          if (err) throw err;
          console.log(content5);
          fs.readFile("./contents/content6.txt", "utf-8", (err, content6) => {
            if (err) throw err;
            console.log(content6);
            fs.readFile("./contents/content7.txt", "utf-8", (err, content7) => {
              if (err) throw err;
              console.log(content7);
              fs.readFile("./contents/content8.txt", "utf-8", (err, content8) => {
                if (err) throw err;
                console.log(content8);
                fs.readFile("./contents/content9.txt", "utf-8", (err, content9) => {
                  if (err) throw err;
                  console.log(content9);
                  fs.readFile("./contents/content10.txt", "utf-8", (err, content10) => {
                    if (err) throw err;
                    console.log(content10);
                  });});});});});});});});});
});
