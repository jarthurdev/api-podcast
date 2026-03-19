import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {
    const data = await repositoryPodcasts();

    const statusCode = data.length !== 0 ? 200 : 204;

    return {
        statusCode: 200,
        body: data
    };
}