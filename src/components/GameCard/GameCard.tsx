import { Game } from "../../types/games";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Heading,
  Icon,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";

interface Props {
  game: Game;
}

const GameCard = ({
  game: { name, background_image, rating_top, metacritic },
}: Props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={background_image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Text>{metacritic}</Text>
          <Heading>{name}</Heading>
          <Icon />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
