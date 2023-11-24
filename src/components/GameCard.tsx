import { Game } from "../types/games";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Badge,
  Text,
  Stack,
  Heading,
  Icon,
  HStack,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";

interface Props {
  game: Game;
}

const GameCard = ({
  game: { name, background_image, rating_top, metacritic },
}: Props) => {
  return (
    <Card maxW="sm" borderRadius="lg" variant="filled">
      <Image
        objectFit="cover"
        src={background_image}
        alt="Green double couch with wooden legs"
      />
      <CardBody>
        <Stack mt="6" spacing="3">
          <HStack>
            {/* TO-DO: make a separate component + set color depending on the critic */}
            <Badge colorScheme="green" fontWeight="bold" fontSize="md">
              {metacritic}
            </Badge>
          </HStack>
          <Heading>{name}</Heading>
          {/* TO-DO: make a separate component + set icon depending on the rating */}
          <Icon />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
