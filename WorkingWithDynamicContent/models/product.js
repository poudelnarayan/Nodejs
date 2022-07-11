const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this); // this refers to the object created at this instant
  }

  static fetchAll() {
    return products;
  }
};
