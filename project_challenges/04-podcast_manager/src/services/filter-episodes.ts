import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  // defines the return interface (contract)
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // search data
  // http://localhost:8080/api/episode?p=Akitando
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodcast(queryString);

  //check for content (response type)
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };

  return responseFormat;
};
