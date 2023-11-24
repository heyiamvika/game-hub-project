export interface Platform {
  platform: {
    id: number;
    slug: string;
  };
}

export interface Game {
  id: string;
  name: string;
  metacritic: number;
  background_image: string;
  rating_top: number;
  parent_platforms: Platform[];
}
