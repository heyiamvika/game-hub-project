import { Heading, VStack, Text } from "@chakra-ui/react";
import { uniqBy, flatten } from "lodash";
import { useEffect, useState } from "react";

import GeneralMenu from "./GeneralMenu";
import Games from "./Games";

import { Game, FetchGamesResponse } from "../../types/games";
import { Platform } from "../../types/platforms";

import gamesService from "../../services/games-service";

interface Props {
  selectedGenre: string;
  games: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = gamesService.getAllGames();

    request
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));

    return () => cancel();
  });

  // const [filteredGames, setFilteredGames] = useState<Game[] | null>(null);

  // const menuItems = uniqBy(
  //   flatten(games.map((game) => game.parent_platforms)),
  //   "platform[id]"
  // );

  // const onPlatformsMenuSelect = (selectedPlatform: Platform) => {
  //   const newFilteredGames = games.filter((game) =>
  //     game.parent_platforms.find(
  //       ({ platform }) => platform.name === selectedPlatform.platform.name
  //     )
  //   );

  //   setFilteredGames(newFilteredGames);
  // };

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
