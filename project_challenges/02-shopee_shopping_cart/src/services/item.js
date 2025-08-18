// What actions can be performed on the item?

// Item Use Cases: Create item with subtotal

// => ✅ Create item with subtotal
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: function () {
      return this.price * this.quantity;
    },
  };
}

export default createItem;
