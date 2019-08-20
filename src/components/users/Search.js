import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert(
        "Please fill out the search field before submitting query",
        "light"
      );
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className="form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            {" "}
            Clear{" "}
          </button>
        )}
      </div>
    );
  }
}

export default Search;
