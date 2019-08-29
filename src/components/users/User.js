import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login); //allows you to access the username of the user whose page you are trying to visit
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hirable
    } = this.props.user;

    const { loading } = this.props;

    // console.log(this.props.user);

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Link to="/" className="btn btn-ligh">
          {" "}
          Back to Search{" "}
        </Link>
        Hirable:{" "}
        {hirable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>About</h3>
                <p>{bio}</p>
              </Fragment>
            )}

            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Github Username: </strong> {login}
                  </Fragment>
                )}
              </li>

              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>

              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>{" "}
                    <a target="_blank" href={blog}>
                      {blog}
                    </a>{" "}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-dark">Public Repos: {public_repos}</div>
          <div className="badge badge-light">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={this.props.repos} />
      </Fragment>
    );
  }
}

export default User;
