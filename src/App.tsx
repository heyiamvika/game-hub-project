import { useState } from "react";

import { CanceledError } from "./services/api-client";

import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

import NavBar from "./components/header/NavBar";
import GenreList from "./components/genres/GenreList";
import GameGrid from "./components/games/GameGrid";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>();

  // useEffect(() => {
  //   const { request, cancel } = selectedGenre
  //     ? gamesService.getGamesByGenre(selectedGenre.slug)
  //     : gamesService.getAllGames();

  //   request
  //     .then((res) => setGames(res.data.results))
  //     .catch((err) => processError(err));

  //   return () => cancel();
  // }, [selectedGenre]);

  const onSelectGenre = ({ id, name, slug, image_background }: Genre) =>
    setSelectedGenre({ id, name, slug, image_background });

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
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
