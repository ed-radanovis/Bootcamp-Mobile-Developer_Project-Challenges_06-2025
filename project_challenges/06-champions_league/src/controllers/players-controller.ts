import { Request, Response } from "express";
import * as service from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

// get all players
export const getPlayer = async (req: Request, res: Response) => {
  // retrieve all players
  const httpResponse = await service.getPlayerService();
  // Return response
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

// get a specific player by ID
export const getPlayerById = async (req: Request, res: Response) => {
  // extract and parse player ID from request parameters
  const id = parseInt(req.params.id);
  // retrieve player by ID
  const httpResponse = await service.getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

// new player
export const postPlayer = async (req: Request, res: Response) => {
  // extract data from request body
  const bodyValue = req.body;
  const httpResponse = await service.createPlayerService(bodyValue);

  // return response if service call was successful
  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};

// delete a player by ID
export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await service.deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

// update a player's statistics by ID
export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  // extract statistics data from request body
  const bodyValue: StatisticsModel = req.body;
  const httpResponse = await service.updatePlayerService(id, bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
