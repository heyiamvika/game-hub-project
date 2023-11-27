import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../../types/games";

interface Props {
  platforms: Platform[];
}

const Platforms = ({ platforms }: Props) => {
  const platformItems = platforms.map(({ platform }) => {
    // console.log(platform);
    return <Icon key={platform.id}></Icon>;
  });

  return <HStack>{platformItems}</HStack>;
};

export default Platforms;
