import { Heading, VStack } from "@chakra-ui/react";
import { Game, Platform } from "../../types/games";
import { uniqBy, flatten } from "lodash";

import Menu from "./Menu";
import Games from "./Games";

interface Props {
  selectedGenre: string;
  games: Game[];
}

const GamesContainer = ({ selectedGenre, games }: Props) => {
  const allParentPlatforms = games.map((game) => game.parent_platforms);
  const itemsFlat = flatten(allParentPlatforms).map(({ platform }) => ({
    id: platform.id,
    title: platform.name,
  }));
  const items = uniqBy(itemsFlat, "id");

  return (
    <VStack alignItems="flex-start">
      <Heading fontSize={52}>{`${selectedGenre}${
        selectedGenre && " "
      }Games`}</Heading>
      <Menu title="Platforms" items={items} />
      <Games games={games} />
    </VStack>
  );
};

export default GamesContainer;
