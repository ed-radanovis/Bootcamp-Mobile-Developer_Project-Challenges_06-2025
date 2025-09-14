import * as http from "node:http";
import { Routes } from "./routes/routes";
import {
  getFilterEpisode,
  getListEpisodes,
} from "./controllers/podcasts_controller";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  //queryString technique
  // http://localhost:8080/api/episode?p=Akitando
  // http://localhost:8080/api/episode             => baseUrl
  //                                  ?p=Akitando  => queryString
  const baseUrl = request.url?.split("?")[0];

  //list podcasts
  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisode(request, response);
  }
};
