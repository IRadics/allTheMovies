import "./App.css";
import "./Global.css";

import { SearchBar } from "./components/SearchBar/SearchBar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar></SearchBar>
      </header>
      <div className="mainBody">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
