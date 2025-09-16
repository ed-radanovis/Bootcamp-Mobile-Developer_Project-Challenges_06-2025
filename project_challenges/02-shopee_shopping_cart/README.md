  <p align="center">
    <img src="./assets/logo_shopee_shopping_cart.png" min-width="100px" width="180" min-height="200px" height="180px" alt="logo bootcamp">
  </p>

# Shopee Shopping Cart - Backend Learning Project

### 🔍 Overview

A simple backend application developed to consolidate Node.js and JavaScript concepts.

Taught by _Felipe Silva Aguiar_ - Tech Educator at DIO.
<br>

> ### 🎯 Objective:
>
> - This project, was created to practice backend development skills using **_[Node.js](https://nodejs.org)_** and pure **_[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)_**. It implements a shopping cart system with basic CRUD operations (add, remove, delete, display, and calculate total), reinforcing concepts like asynchronous programming, modularization, and data manipulation. ✅

<br>

### 🧩 Features

- Add items to the cart
- Remove items (decrease quantity or remove completely)
- Delete items by name
- Display cart contents with formatted prices
- Calculate product subtotals and cart totals

---

  <p align="center">
    <img src="./assets/Model.png" width="600px;"height="400px;" alt="copy shopee cart screen"/>
  </p>

---

### 📚 Prerequisites

- [ ] &nbsp;&nbsp;&nbsp;Before starting this project, you should have basic knowledge in the following areas:
      <br>

- **Programming Logic:** Understanding of basic programming concepts like variables, conditionals, loops, and functions.
- **JavaScript Fundamentals:** Familiarity with JavaScript syntax, data types, arrays, objects, and ES6+ features.
- **Asynchronous Programming:** Basic understanding of callbacks, promises, and async/await patterns in JavaScript.
- **Node.js Runtime:** Knowledge of Node.js environment, module system, and CommonJS/ES modules.
- **Array Manipulation:** Experience with array methods like map, filter, reduce, and find for data processing.
- **Object-Oriented Concepts:** Understanding of object creation, methods, and property manipulation in JavaScript.
- **NPM and Package Management:** Basic experience with installing and managing dependencies via NPM.
- **Console Applications:** Familiarity with building and running command-line applications.
- **Error Handling:** Knowledge of try/catch blocks and basic error management techniques.

---

### 🛠️ Technologies Used

The project was fully completed and some of the resources used were:

[![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![Node.js](https://img.shields.io/badge/-Node.js-333333?style=flat&logo=Node.js)](https://nodejs.org/)

[<img src="../../github/mini_logo_vscode.png" width="21px" alt="Visual Studio Code Icon">![Visual Studio Code](https://img.shields.io/badge/-Visual_Studio_Code-333333?style=flat&logo=visual-studio-code&logoColor=007ACC)](https://code.visualstudio.com/)

---

### 📂 Project Structure

```bash
project_challenges/shopee_shopping_cart/
├── assets
├── src/
      ├── services/
      │      ├── cart.js      # Cart management functions
      │      ├── item.js      # Item creation with subtotal
      │
      └── index.js            # Main script to run the application
```

---

### ⚙️ Setup and Running

- [ ] &nbsp;&nbsp;&nbsp;Prerequisites:
      ✔️ - Node.js (version 18.11.0 or higher for --watch support).<br>
- [ ] If you choose, clone the repository:

```bash
git clone https://github.com/ed-radanovis/Bootcamp-Mobile-Developer_Project-Challenges_06-2025/tree/master/project_challenges/shopee_shopping_cart
```

<br>

- [x] Navigate to the project: `cd project_challenges/shopee_shopping_cart`.
      <br>
- [x] Run the Application:

```bash
node --watch src/index.js
```

---

### 🔬 Testing

✔️ - Manual Testing:

- [x] &nbsp;&nbsp;&nbsp;Verify item addition, removal, and deletion.
- [x] &nbsp;&nbsp;&nbsp;Check if subtotals and total are calculated correctly with R$ formatting.
- [x] &nbsp;&nbsp;&nbsp;Test edge cases (e.g., removing items not in the cart).

---

### 🧠 Skills Learned

✔️ Upon completion of this project, the following skills and subskills will be acquired:

- How to implement a shopping cart system with CRUD operations using pure JavaScript.
- Understanding of asynchronous programming and callback functions in Node.js.
- Creating modular project structure with separation of concerns (services, models).
- Data manipulation and array operations for cart management.
- Currency formatting and financial calculations for e-commerce applications.
- Input validation and error handling for user operations.
- Working with JSON data structures for item representation.
- Building console-based applications with interactive features.

---

### 🤝 Contribute

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the project.

---

### 📜 License

This project is licensed under the [MIT License](LICENSE).

<br>

[⬆ Back to top](#shopee-shopping-cart---backend-learning-project)
