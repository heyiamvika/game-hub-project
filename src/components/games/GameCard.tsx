import { Game } from "../../hooks/useGames";
import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import RatingIcon from "./RatingIcon";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

import getCroppedImageUrl from "../../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, background_image, rating_top, metacritic, parent_platforms } =
    game;

  return (
    <Card>
      <Image
        objectFit="cover"
        src={getCroppedImageUrl(background_image)}
        alt="Green double couch with wooden legs"
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {name}
          {/* <RatingIcon rating={rating_top} /> */}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
