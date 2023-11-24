import { useEffect, useState } from "react";
import "./App.css";

import { CanceledError } from "./services/api-client";
import gamesService from "./services/games-service";

import { VStack, HStack } from "@chakra-ui/react";
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

  const onSelectGenre = ({ id, name, slug, image_background }: Genre) => {
    setSelectedGenre({ id, name, slug, image_background });
  };

  return (
    <>
      <VStack alignItems="stretch" pl={5}>
        <Header />
        <HStack>
          <Genres genres={genres} onGenreClick={onSelectGenre} />
          <GamesContainer
            selectedGenre={selectedGenre ? selectedGenre.name : ""}
          />
          {/* <Games games={games} /> */}
        </HStack>
      </VStack>
    </>
  );
}

const processError = (err: any) => {
  // Don't show error is user closed the tab or connection was interrupted
  if (err instanceof CanceledError) return;
  console.error("Failed to fetch: " + err.message);
};

export default App;
