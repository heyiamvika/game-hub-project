import { useEffect, useState } from "react";

import { CanceledError } from "./services/api-client";
import gamesService from "./services/games-service";

import {
  VStack,
  HStack,
  Box,
  useColorMode,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";
import { Game } from "./types/games";
import { Genre } from "./types/genres";

import Header from "./components/header/Header";
import Genres from "./components/genres/Genres";
import GamesContainer from "./components/games/GamesContainer";
import genresService from "./services/genres-service";

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre>();

  const { colorMode, toggleColorMode } = useColorMode();

  console.log({ colorMode, toggleColorMode });

  useEffect(() => {
    const { request, cancel } = gamesService.getAllGames();

    request
      .then((res) => setGames(res.data.results))
      .catch((err) => processError(err));

    return () => cancel();
  }, []);

  useEffect(() => {
    const { request, cancel } = genresService.getAllGenres();

    request
      .then((res) => setGenres(res.data.results))
      .catch((err) => processError(err));

    return () => cancel();
  }, []);

  useEffect(() => {
    const { request, cancel } = selectedGenre
      ? gamesService.getGamesByGenre(selectedGenre.slug)
      : gamesService.getAllGames();

    request
      .then((res) => setGames(res.data.results))
      .catch((err) => processError(err));

    return () => cancel();
  }, [selectedGenre]);

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
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
      {/* <VStack pl={5}>
        <Header onSearch={onSearch} />
        <HStack align="flex-start" width="100%">
          <Box flex={1}>
            <Genres
              selectedGenre={selectedGenre}
              genres={genres}
              onGenreClick={onSelectGenre}
            />
          </Box>
          <Box flex={7}>
            <GamesContainer
              selectedGenre={selectedGenre ? selectedGenre.name : ""}
              games={games}
            />
          </Box>
        </HStack>
      </VStack> */}
    </>
  );
}

const processError = (err: any) => {
  // Don't show error is user closed the tab or connection was interrupted
  if (err instanceof CanceledError) return;
  console.error("Failed to fetch: " + err.message);
};

export default App;
