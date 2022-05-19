import React from "react";
import { Link } from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

class Battle extends React.Component {
  constructor() {
    super();
    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    this.setState({
      [id + "Name"]: username,
      [id + "Image"]: `https://github.com/${username}.png?size200`,
    });
  }

  handleReset(id) {
    this.setState({
      [id + "Name"]: "",
      [id + "Image"]: null,
    });
  }

  render() {
    const { playerOneName, playerTwoName, playerOneImage, playerTwoImage } =
      this.state;
    const { match } = this.props;
    return (
      <div>
        <div className = "row">
          {!playerOneName ? (
            <PlayerInput
              id = "playerOne"
              label = "Player One"
              onSubmit = {this.handleSubmit}
            />
          ) : (
            <PlayerPreview username = { playerOneName } avatar = { playerOneImage }>
              <button
                className = "reset"
                onClick = {this.handleReset.bind(this, "playerOne")}
              >
                Reset
              </button>
            </PlayerPreview>
          )}
          {!playerTwoName ? (
            <PlayerInput
              id = "playerTwo"
              label = "Player Two"
              onSubmit = { this.handleSubmit }
            />
          ) : (
            <PlayerPreview username = { playerTwoName } avatar = { playerTwoImage }>
              <button
                className = "reset"
                onClick = { this.handleReset.bind(this, "playerTwo") }
              >
                Reset
              </button>
            </PlayerPreview>
          )}
        </div>
        {playerOneImage && playerTwoImage && (
          <Link
            className = "button"
            to={{
              pathname: `${ match.url }/results`,
              search: `? playerOneName = ${ playerOneName } & playerTwoName = ${ playerTwoName }`,
            }}
          >
            Battle
          </Link>
        )}
      </div>
    );
  }
}

export default Battle;
