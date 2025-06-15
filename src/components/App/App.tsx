import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import Menu from "../Menu/Menu";
import MenuProvider from "../MenuProvider/MenuProvider";
import Directory from "../Directory/Directory";
import Preview from "../Preview/Preview";
import AnimationProvider from "../AnimationProvider/AnimationProvider";
import Header from "../Header/Header";

import "./App.css";
import ImageProvider from "../ImageProvider/ImageProvider";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <MenuProvider>
        <AnimationProvider>
          <ImageProvider>
            <div className="app">
              <Menu />
              <div className="app__content">
                <div className="app__top">
                  <Header />
                  <Directory />
                </div>
                <Preview />
              </div>
            </div>
          </ImageProvider>
        </AnimationProvider>
      </MenuProvider>
    </MantineProvider>
  );
}

export default App;
