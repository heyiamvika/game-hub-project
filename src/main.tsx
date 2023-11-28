import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
  ColorModeScript,
} from "@chakra-ui/react";

import App from "./App.tsx";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
