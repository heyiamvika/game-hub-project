import { useEffect, useState } from "react";

import { CanceledError } from "./services/api-client";
import gamesService from "./services/games-service";

import { useColorMode, Grid, GridItem, Show } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";
import { Genre } from "./types/genres";

import NavBar from "./components/header/NavBar";
import Genres from "./components/genres/Genres";
import GameGrid from "./components/games/GameGrid";
import genresService from "./services/genres-service";

function App() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre>();

  useEffect(() => {
    const { request, cancel } = genresService.getAllGenres();

    request
      .then((res) => setGenres(res.data.results))
      .catch((err) => processError(err));

    return () => cancel();
  }, []);

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
      >
        <GridItem area="nav">
          <NavBar onSearch={onSearch} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

const processError = (err: any) => {
  // Don't show error is user closed the tab or connection was interrupted
  if (err instanceof CanceledError) return;
  console.error("Failed to fetch: " + err.message);
};

export default App;
