import { Heading, VStack } from "@chakra-ui/react";
import { uniqBy, flatten } from "lodash";
import { useState } from "react";

import GeneralMenu from "./GeneralMenu";
import Games from "./Games";

import { Game } from "../../types/games";
import { Platform } from "../../types/platforms";

interface Props {
  selectedGenre: string;
  games: Game[];
}

const GamesContainer = ({ selectedGenre, games }: Props) => {
  const [filteredGames, setFilteredGames] = useState<Game[] | null>(null);

  const menuItems = uniqBy(
    flatten(games.map((game) => game.parent_platforms)),
    "platform[id]"
  );

  const onPlatformsMenuSelect = (selectedPlatform: Platform) => {
    const newFilteredGames = games.filter((game) =>
      game.parent_platforms.find(
        ({ platform }) => platform.name === selectedPlatform.platform.name
      )
    );

    setFilteredGames(newFilteredGames);
  };

  return (
    <VStack alignItems="flex-start">
      <Heading fontSize={52}>{`${selectedGenre}${
        selectedGenre && " "
      }Games`}</Heading>
      <GeneralMenu
        title="Platforms"
        items={menuItems}
        onSelect={onPlatformsMenuSelect}
      />
      <Games games={filteredGames || games} />
    </VStack>
  );
};

export default GamesContainer;
