import { useState } from "react";

import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";

import NavBar from "./components/header/NavBar";
import GenreList from "./components/genres/GenreList";
import GameGrid from "./components/games/GameGrid";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
              onSelectGenre={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
