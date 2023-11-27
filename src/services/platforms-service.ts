import apiClient from "./api-client";

class PlatformsService {
  getAllPlatforms() {
    const controller = new AbortController();
    const request = apiClient.get(`/api/platforms`, {
      params: {
        key: import.meta.env.VITE_RAWG_API_KEY,
      },
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new PlatformsService();