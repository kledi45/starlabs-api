import { useEffect, useState } from "react";
import Header from "./Components/shared/Header";
import Teams from "./Components/Teams/Teams";
import SearchBox from "./Components/Search/SearchBar";

function App() {
  return (
    <div className="App">
      <Header/>
      <Teams/>
    </div>
  );
}

export default App;
