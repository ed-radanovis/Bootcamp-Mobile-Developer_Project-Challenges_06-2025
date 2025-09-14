import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  // defines the return interface
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

  //check if there is content
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };

  return responseFormat;
};
