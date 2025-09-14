import * as http from "node:http";
import { app } from "./app";

// creation of the server defining communication only through request and response
const server = http.createServer(app);

const port = process.env.PORT;
// creation of the communication port + callback function
server.listen(port, () => {
  console.log(`\n 🖥  server started on port : ${port} 🖥\n`);
});
