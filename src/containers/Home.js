import React, { Component } from "react";

import TaskAdder from "../components/TaskAdder";
import Header from "./Header";
import Filters from "../components/Filters";
import TileStack from "../components/TileStack";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { task: "Buy Grocey", date: "Monday", isDue: "True" },
        { task: "Buy Shoes", date: "Monday", isDue: "True" },
        { task: "Buy data place", date: "Monday", isDue: "True" },
        { task: "Buy foint", date: "Tuesdat", isDue: "True" },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <TaskAdder />
        <Filters />
        {this.state.data.map(
          (
            data,
            index // note the double data
          ) => (
            <TileStack task={data.task} />
          )
        )}
      </div>
    );
  }
}

export default Home;
