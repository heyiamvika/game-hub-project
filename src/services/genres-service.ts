import apiClient from "./api-client";

class GenresService {
  getAllGenres() {
    const controller = new AbortController();
    const request = apiClient.get(`/api/genres`, {
      params: {
        key: import.meta.env.VITE_RAWG_API_KEY,
      },
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new GenresService();
