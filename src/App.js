import React, { Component } from "react";
import TaskAdder from "./components/TaskAdder";
import Header from "./containers/Header";
import Filters from "./components/Filters";
import TileStack from "./components/TileStack";
class App_copy extends Component {
  render() {
    return (
      <div class="App">
        <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
          <Header />
          <TaskAdder />
          <Filters />
          <TileStack />
        </div>
      </div>
    );
  }
}

export default App_copy;
