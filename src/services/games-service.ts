import apiClient from "./api-client";

class GamesService {
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
