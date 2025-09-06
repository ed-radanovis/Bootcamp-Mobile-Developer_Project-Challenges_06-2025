const products = require("./services/products");
const conf = require("./services/config");
const database = require("./services/database");

async function main() {
  console.log("\nshopping cart =>\n");

  products.getFullName("888", "keyboard");
  products.getFullName("889", "monitor");
  products.getProductLabel("mousepad");

  console.log(products.productType.version + "\n");
  console.log(conf.devArea.production + "\n");
  console.log(conf.client.device + "\n");
  console.log(products.productType.version + "\n");

  database.connectToDatabase("Hy database");
  database.disconnectDatabase("Bye database");
}

main();
