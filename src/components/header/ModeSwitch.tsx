import { FormLabel, Switch, FormControl } from "@chakra-ui/react";

const ModeSwitch = () => {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      maxW={135}
    >
      <Switch id="dark-mode" />
      <FormLabel htmlFor="dark-mode" mb={0}>
        Dark Mode
      </FormLabel>
    </FormControl>
  );
};

export default ModeSwitch;