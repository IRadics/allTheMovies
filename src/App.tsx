import "./App.css";
import "./Global.css";
import "./GlobalMUI.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0e6191",
      },
    },
  });

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <header className="App-header">
            <SearchBar />
          </header>
          <div className="mainBody">
            <Outlet />
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
