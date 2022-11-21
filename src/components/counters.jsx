import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    couters: [
      { id: 1, value: 0 },
      { id: 2, value: 6 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncreament = (counter) => {};
  handleReset = () => {
    const counters = this.state.couters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };
  handleDelete = (couterId) => {
    console.log("Event Handler Called", { couterId });
    const couters = this.state.couters.filter((c) => c.id !== couterId);
    this.setState({ couters });
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m2"
          onClick={this.habdleReset}
        >
          Reset
        </button>
        {this.state.couters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            onIncreament={this.handleIncreament}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
