const fs = require("fs");
const path = require("path");
const dirPath = require("../util/path");

// const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const p = path.join(dirPath, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
      console.log(fileContent);
    });
    // products.push(this); // this refers to the object created at this instant
  }

  static fetchAll(cb) {
    const p = path.join(dirPath, "data", "products.json");

    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
