// What actions can the cart take? (method signatures)

// Use Cases: Add Item / Delete Item / Remove Item / Calculate Total / Display Cart

// => ✅ Add Item
async function addItem(userCart, item) {
  userCart.push(item);
}

// => ✅ Calculate Total
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\n🛒 Shopee cart TOTAL is: R$ ${result.toFixed(2)}\n`);
}

// => ✅ Delete Item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// => ✅ Remove Item (decrease an item)
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);
  if (indexFound === -1) {
    console.log("item not found");
    return;
  }
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }
  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// => ✅ Display Cart
async function displayCart(userCart) {
  console.log("\n 📝 Shopee cart list:\n");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} | ${
        item.quantity
      } und. | R$${item.price.toFixed(2)} | Subtotal = R$${item
        .subtotal()
        .toFixed(2)}`
    );
  });
  console.log("");
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
