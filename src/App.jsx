import "./App.css";
// import Counters from "./components/counters";
import MoviesTable from "./components/movies";
// import Navbar from "./components/navbar";
import { Component } from "react";
// class App extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 0 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 3 },
//       { id: 5, value: 7 },
//     ],
//   };
//   handleIncrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };
//   handleDelte = (counterId) => {
//     console.info("Delete Clicked", counterId);
//     const counters = this.state.counters.filter((c) => c.id !== counterId);
//     this.setState({ counters });
//   };
//   handleReset = () => {
//     const counters = this.state.counters.map((c) => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };
//   handleDecrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value--;
//     this.setState({ counters });
//   };
//   render() {
//     return (
//       <>
//         <Navbar count={this.state.counters.filter((c) => c.value > 0).length} />
//         <main className="container">
//           <Counters
//             onReset={this.handleReset}
//             onDelete={this.handleDelte}
//             onIncrement={this.handleIncrement}
//             counters={this.state.counters}
//             onDecrement={this.handleDecrement}
//           />
//           <MoviesTable />
//         </main>
//       </>
//     );
//   }
// }
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <MoviesTable />
      </>
    );
  }
}

export default App;
