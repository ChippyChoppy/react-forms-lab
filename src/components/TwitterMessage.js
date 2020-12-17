import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    // console.log(event.target.value, "handling change")
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let remChar = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          value={this.state.message}
        />
        <p> Remaining Characters: {remChar}</p>
      </div>
    );
  }
}

export default TwitterMessage;
