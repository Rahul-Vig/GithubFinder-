import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
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
  // foo = () => "Bars";

  state = {
    users: [],
    loading: false, //loading needed while data is being loaded.
    alert: null
  };

  //************ componentDidMount Usage with axios. This dictates what happens when your component launces **************/
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   console.log(res.data);
  //   this.setState({ users: res.data, loading: false });
  // }

  //Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data);
    this.setState({ users: res.data.items, loading: false, alert: null });
  };

  //Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  //Set alert upon improper usage
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
  };

  render() {
    // const name = "John Doe";
    // const loading = false;
    // const showName = true;

    // if (loading) {
    //   return <h4>Loading....</h4>;
    // }

    return (
      <div className="App">
        {" "}
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
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
