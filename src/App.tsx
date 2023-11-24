import { useEffect, useState } from "react";
import "./App.css";

import { CanceledError } from "./services/api-client";
import gamesService from "./services/games-service";

import { VStack, HStack } from "@chakra-ui/react";
import { Game } from "./types/games";

import Header from "./components/header/Header";
import Genres from "./components/genres/Genres";
import GamesContainer from "./components/games/GamesContainer";

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const { request, cancel } = gamesService.getAllGames();

    request
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        // Don't show error is user closed the tab or connection was interrupted
        if (err instanceof CanceledError) return;
        console.error("Failed to fetch games: " + err.message);
      });

    return () => cancel();
  }, []);

  return (
    <>
      <VStack alignItems="stretch" pl={5}>
        <Header />
        <HStack>
          <Genres />
          <GamesContainer />
          {/* <Games games={games} /> */}
        </HStack>
      </VStack>
    </>
  );
}

export default App;
