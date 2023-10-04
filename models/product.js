// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   "data",
//   "products.json"
// );

const db = require("../utils/database");
const Cart = require("./cart");

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title,price, description, imageUrl) VALUES (?,?,?,?)",
      [this.title, this.price, this.description, this.imageUrl]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    // getProductsFromFile(cb);
    return db.execute("SELECT * FROM products ");
  }

  static findById(id, cb) {
    db.execute("SELECT * FROM products WHERE product.id =?", [id]);
  }
};
