import React from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1> Hello from React </h1>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Hello from React </h1>
      </div>
    );
  } //render is a lifecycle method, it runs when the component has loaded.
}

export default App;
