import { Game } from "../../hooks/useGames";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Skeleton,
  HStack,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import RatingIcon from "./RatingIcon";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // const [isLoaded, setIsLoaded] = useState(false);

  const { name, background_image, rating_top, metacritic, parent_platforms } =
    game;

  // useEffect(() => {
  //   if (!background_image) return;

  //   setIsLoaded(true);
  // }, [background_image]);

  return (
    <Card borderRadius={10} overflow="hidden">
      {/* <Skeleton isLoaded={isLoaded}> */}
      <Image
        objectFit="cover"
        src={background_image}
        alt="Green double couch with wooden legs"
      />
      <CardBody>
        <Heading fontSize="2xl">
          {name}
          {/* <RatingIcon rating={rating_top} /> */}
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
      {/* </Skeleton> */}
    </Card>
  );
};

export default GameCard;
