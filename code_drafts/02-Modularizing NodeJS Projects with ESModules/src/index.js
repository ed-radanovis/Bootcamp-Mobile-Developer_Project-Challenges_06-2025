// example to import only one function
// import connectToDatabase from "../utils/database.js";

// example to import more than one function from the same file (destructuring)
// the shortcut for VSCode to indicate which files are available for import is (inside the curly braces) ctrl + space.
// import { connectToDatabase, disconnectDatabase } from "../utils/database.js";

// example to import everything into a file
import * as database from "../utils/database.js";

// example to import "Direct Exports"
import { getDataFromApi, key } from "../utils/api.js";

database.connectToDatabase("database for ECMAScript \n");
database.disconnectDatabase("database for ECMAScript \n");
getDataFromApi();
console.log("permission for : " + key.permission + "\n");
console.log("password :" + key.value + "\n");
