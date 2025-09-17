import express from "express";
import router from "./routes";
import cors from "cors";

// to create and configure the Express
function createApp() {
  // create Express instance
  const app = express();

  // middleware to parse JSON and requests
  app.use(express.json());

  // mount the API router at the '/api' base path
  app.use("/api", router);

  // CORS configuration options for cross-origin requests
  const corsOptions = {
    origin: ["http://felipao.sistem.com", "http://gov.br"],
    methods: ["GET", "UPDATE"],
  };

  // enable CORS
  app.use(cors());

  return app;
}

export default createApp;
