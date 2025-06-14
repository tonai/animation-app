import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import Menu from "../Menu/Menu";
import MenuProvider from "../MenuProvider/MenuProvider";

import "./App.css";
import Directory from "../Directory/Directory";
import Preview from "../Preview/Preview";
import AnimationProvider from "../AnimationProvider/AnimationProvider";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <MenuProvider>
        <AnimationProvider>
          <div className="app">
            <Menu />
            <div className="app__content">
              <Directory />
              <Preview />
            </div>
          </div>
        </AnimationProvider>
      </MenuProvider>
    </MantineProvider>
  );
}

export default App;
