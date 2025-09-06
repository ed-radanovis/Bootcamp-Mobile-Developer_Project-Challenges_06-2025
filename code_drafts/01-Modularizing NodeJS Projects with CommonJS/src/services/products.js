// => Here, all functions that deal with the product are created.
//            more conceptual (create specialist files)
const productType = {
  version: "digital",
  tax: "x1",
};

async function getFullName(codeId, productName) {
  console.log("product:" + " " + codeId + " -- " + productName + "\n");
}

async function getProductLabel(productName) {
  console.log("Product:" + " " + productName + "\n");
}

module.exports = {
  getFullName,
  getProductLabel,
  productType,
  // can export more than one function
};
