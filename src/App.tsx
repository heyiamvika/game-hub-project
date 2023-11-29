import { useState } from "react";

import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";

import NavBar from "./components/header/NavBar";
import GenreList from "./components/genres/GenreList";
import GameGrid from "./components/games/GameGrid";
import PlatformSelector from "./components/games/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/games/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={onSearch} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
