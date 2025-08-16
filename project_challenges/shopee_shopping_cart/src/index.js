import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("\n🎈✨ Welcome to the Shopee shopping cart! ✨🎈");

const item1 = await createItem("Monitor DELL Tela 19 LED", 491.12, 1);
const item2 = await createItem("Unidade Externa SAMSUNG SSD T5 1TB", 41.16, 4);
const item3 = await createItem("Kit Teclado Mouse Mecânico Preto", 169.9, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item3);

await cartService.displayCart(myCart);
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);
