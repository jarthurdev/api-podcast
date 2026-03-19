import { IncomingMessage } from "http";
import { repositoryPodcasts } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const serviceFilterEpisodes = async (podcastName: String | undefined

):Promise<FilterPodcastModel> => {

    let responseFormat: FilterPodcastModel =  {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?v=")[1] || ""; 
    const data = await repositoryPodcasts(queryString)

    if(data.length !== 0){
        responseFormat.statusCode = 200;
    } else {
        responseFormat.statusCode = 204;
    }

    responseFormat.body = data;
    return responseFormat;
}