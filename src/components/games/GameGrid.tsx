import { Text, SimpleGrid } from "@chakra-ui/react";
import { uniqBy, flatten } from "lodash";
import { useEffect, useState } from "react";

import GeneralMenu from "./GeneralMenu";
import Games from "./Games";

import { Game } from "../../hooks/useGames";

import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Props {
  selectedGenre: string;
  games: Game[];
}

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

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
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
