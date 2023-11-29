import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
