import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import Menu from "../Menu/Menu";
import MenuProvider from "../MenuProvider/MenuProvider";

import "./App.css";
import Directory from "../Directory/Directory";
import Preview from "../Preview/Preview";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <MenuProvider>
        <div className="app">
          <Menu />
          <div className="app__content">
            <Directory />
            <Preview />
          </div>
        </div>
      </MenuProvider>
    </MantineProvider>
  );
}

export default App;
