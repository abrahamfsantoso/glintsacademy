const fs = require("fs");

const readFile = (file, options) =>
  new Promise((success, failed) => {
    fs.readFile(file, options, (err, content) => {
      if (err) failed(err);
      return success(content);
    });
  });

const readAllFiles = async () => {
  try {
    let data = await Promise.all([
      readFile("./contents/content1.txt", "utf-8"),
      readFile("./contents/content2.txt", "utf-8"),
      readFile("./contents/content3.txt", "utf-8"),
      readFile("./contents/content4.txt", "utf-8"),
      readFile("./contents/content5.txt", "utf-8"),
      readFile("./contents/content6.txt", "utf-8"),
      readFile("./contents/content7.txt", "utf-8"),
      readFile("./contents/content8.txt", "utf-8"),
      readFile("./contents/content9.txt", "utf-8"),
      readFile("./contents/content10.txt", "utf-8"),
    ]);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
    
  } catch (e) {
    console.log(`Error detected!\n${e.message}`);
  } finally {
    console.log ("Process is done");
  }
};

readAllFiles();
