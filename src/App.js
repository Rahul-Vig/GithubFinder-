import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1> Hello from React </h1>
//     </div>
//   );
// }

//You can put any js expression in the {} when rendering html elements. {name} is one example,
//can also do {1+1} and it will evaluate on the actual webpage as 2.
//other examples: {name.toUpperCase()}

//Can use expressions in JSX and pass functions, variables etc.

class App extends Component {
  //method part of class to be passed as jsx
  foo = () => "Bars";
  render() {
    const name = "John Doe";
    const loading = false;
    const showName = true;

    // if (loading) {
    //   return <h4>Loading....</h4>;
    // }

    return (
      <div className="App">
        {" "}
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Users />
        </div>
        {/*you can pass in values for our properties, as shown here with title */}
      </div>
    );

    // return (
    //   <Fragment>
    //     <h1> Welcome to My App </h1>
    //     {loading ? (
    //       <h4>Loading...</h4>
    //     ) : (
    //       <h1>
    //         Hello {showName ? name : null} <br />{" "}
    //         {/*You can also just do showName && name*/}
    //         {"There are many " + this.foo()}
    //       </h1>
    //     )}
    //   </Fragment>
    // );
  }
} //render is a lifecycle method, it runs when the component has loaded.

export default App;
