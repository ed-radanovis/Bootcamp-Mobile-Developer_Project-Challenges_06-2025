import createApp from "./app";

// create an instance of Express
const app = createApp();

// get the port number from the variables
const port = process.env.PORT;

// start the server and listen on the specified port
app.listen(port, () => {
  console.log(`\n 💻  server started on port : ${port} . . . 💻\n`);
});
