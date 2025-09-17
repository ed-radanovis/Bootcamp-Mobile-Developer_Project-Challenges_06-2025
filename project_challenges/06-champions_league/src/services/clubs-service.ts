import * as HttpResponse from "../utils/http-helper";
import * as repository from "../repositories/clubs-repository";

// handle getting all clubs
export const getClubService = async () => {
  // retrieve all
  const data = await repository.findAllClubs();
  const response = HttpResponse.ok(data);
  return response;
};
