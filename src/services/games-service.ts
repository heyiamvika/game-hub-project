import apiClient from "./api-client";

import { FetchGamesResponse } from "../types/games";

class GamesService {
  getAllGames() {
    const controller = new AbortController();
    const request = apiClient.get<FetchGamesResponse>(`/games`, {
      params: {
        page: 1,
        page_size: 50,
      },
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  getGamesByGenre(genre: string) {
    const controller = new AbortController();

    const request = apiClient.get(`/games`, {
      params: {
        genres: genre,
      },
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new GamesService();
