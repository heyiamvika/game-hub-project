import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

export default useGames;
