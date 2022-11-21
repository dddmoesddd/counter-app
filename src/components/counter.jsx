import React, { Component } from "react";
class Counter extends Component {
  // constructor ()
  // {
  //     // super();
  //     // this.handleIncreament.bind(this);
  // }
//   state = {
//     count: 4,
//     value: this.props.counter.value,
//     tags: ["a", "b", "c"],
//   };

  handleIncreament = (product) => {
    //    this.props.value=0;
    this.setState({ count: this.state.count + 1 });
    console.log("Increment Clicked", this);
  };

  styles = {
    fontSize: 0,
    fontWeigth: "bold",
  };

//   renderTag() {
//     if (this.state.length === 0) return <p>No item</p>;

//     return (
//       <ul>
//         {this.state.tags.map((tag) => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     );
//   }
  render() {

    let classes = this.newMethod();
    return (
      <React.Fragment>
        <span className={this.newMethod()}>{this.formatCount()}</span>

        <button
          onClick= {() => this.props.onIncreament(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTag()}; */}
      </React.Fragment>
    );
  }

  newMethod() {
    let classes = "badge m-2 bg-";
    classes += this.props.couter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? <h1>'zero'</h1> : count;
  }
}

export default Counter;
