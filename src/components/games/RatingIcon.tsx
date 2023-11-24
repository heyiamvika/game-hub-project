import { Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const RatingIcon = ({ rating }: Props) => {
  switch (rating) {
    case 5:
      return <Text>🎯</Text>;
    case 4:
      return <Text>👍</Text>;
    case 3:
      return <Text>😑</Text>;
    case 2 || 1:
      return <Text>⛔</Text>;
    default:
      return;
  }
};

export default RatingIcon;
