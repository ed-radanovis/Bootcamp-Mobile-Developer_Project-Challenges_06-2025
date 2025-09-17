import { ClubModel } from "../models/club-model";
import fs from "fs/promises";

// Mock database array (currently unused - replaced by JSON file reading)
const database = [
  {
    id: 1,
    name: "Real Madrid",
  },
];

// repository to retrieve from the JSON data file
export const findAllClubs = async (): Promise<ClubModel[]> => {
  // read data asynchronously
  const data = await fs.readFile("./src/data/clubs.json", "utf-8");
  // parse JSON data into array
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};
