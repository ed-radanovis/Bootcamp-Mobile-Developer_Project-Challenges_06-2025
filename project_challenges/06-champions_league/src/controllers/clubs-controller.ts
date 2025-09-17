import { Request, Response } from "express";
import * as service from "../services/clubs-service";

// handle GET requests
export const getClubs = async (req: Request, res: Response) => {
  // Call the service layer to retrieve data
  const response = await service.getClubService();

  // send HTTP response with status code and JSON
  res.status(response.statusCode).json(response.body);
};
