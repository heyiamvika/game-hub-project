import apiClient from "./api-client";

class GamesService {
  getAllGames() {
    const controller = new AbortController();
    const request = apiClient.get(`/api/games`, {
      params: {
        key: import.meta.env.VITE_RAWG_API_KEY,
        page: 1,
        page_size: 50,
      },
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  getGamesByGenre(genre: string) {
    const controller = new AbortController();

    const request = apiClient.get(`/api/games`, {
      params: {
        key: import.meta.env.VITE_RAWG_API_KEY,
        genres: genre,
      },
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new GamesService();
