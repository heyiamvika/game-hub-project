import { Game } from "../../types/games";
import {
  Card,
  CardBody,
  Image,
  Badge,
  Heading,
  Icon,
  HStack,
  VStack,
  Skeleton,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import RatingIcon from "./RatingIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(game);
  const { name, background_image, rating_top, metacritic } = game;

  useEffect(() => {
    if (!background_image) return;

    setIsLoaded(true);
  }, [background_image]);

  return (
    <Card maxW={300} borderRadius={10} variant="filled" overflow="hidden">
      <Skeleton isLoaded={isLoaded}>
        <Image
          objectFit="cover"
          src={background_image}
          alt="Green double couch with wooden legs"
        />
        <CardBody>
          <VStack align="left">
            <HStack justify="space-between">
              {/* TO-DO: make a separate component */}
              <HStack>
                <Icon></Icon>
                <Icon></Icon>
                <Icon></Icon>
                <Icon></Icon>
                <Icon></Icon>
              </HStack>
              {/* TO-DO: make a separate component + set color depending on the critic */}
              <Badge
                colorScheme="green"
                fontWeight="bold"
                fontSize="md"
                px={2}
                borderRadius="md"
              >
                {metacritic}
              </Badge>
            </HStack>
            <Heading fontSize={25}>
              {name}
              <RatingIcon rating={rating_top} />
            </Heading>
          </VStack>
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCard;
