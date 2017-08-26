import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TwitterLogin extends Component {

  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {

  }

  render() {
    const twitterButton = React.createElement(
      this.props.tag, {
        onClick: this.onButtonClick
      }, this.props.children ? this.props.children : this.props.text
    );
    return twitterButton;
  }
}

TwitterLogin.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string
};

TwitterLogin.defaultProps = {
  tag: 'button',
  text: 'Sign up with Twitter'
};

export default TwitterLogin;
