import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  id: string;
  name: string;
  metacritic: number;
  background_image: string;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
