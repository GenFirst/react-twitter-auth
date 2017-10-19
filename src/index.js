import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch'
import 'url-search-params-polyfill';
import  TwitterIcon from 'react-icons/lib/fa/twitter';


class TwitterLogin extends Component {

  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    return this.getRequestToken();
  }

  getRequestToken() {
    var popup = this.openPopup();

    return window.fetch(this.props.requestTokenUrl, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      popup.location = `https://api.twitter.com/oauth/authenticate?oauth_token=${data.oauth_token}`;
      this.polling(popup);
    }).catch(error => {
      popup.close();
      return this.props.onFailure(error);
    });
  }

  openPopup() {
    const w = this.props.dialogWidth;
    const h = this.props.dialogHeight;
    const left = (screen.width/2)-(w/2);
    const top = (screen.height/2)-(h/2);

    return window.open('', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }

  polling(popup) {
    const polling = setInterval(() => {
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(polling);
        this.props.onFailure(new Error('Popup has been closed by user'));
      }

      const closeDialog = () => {
        clearInterval(polling);
        popup.close();
      };

      try {
        if (!popup.location.hostname.includes('api.twitter.com') &&
              !popup.location.hostname == '') {
          if (popup.location.search) {
            const query = new URLSearchParams(popup.location.search);

            const oauthToken = query.get('oauth_token');
            const oauthVerifier = query.get('oauth_verifier');

            closeDialog();
            return this.getOathToken(oauthVerifier, oauthToken);
          } else {
            closeDialog();
            return this.props.onFailure(new Error(
              'OAuth redirect has occurred but no query or hash parameters were found. ' +
              'They were either not set during the redirect, or were removed—typically by a ' +
              'routing library—before Twitter react component could read it.'
            ));
          }


        }
      } catch (error) {
        // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
        // A hack to get around same-origin security policy errors in IE.
      }
    }, 500);
  }

  getOathToken(oAuthVerifier, oauthToken) {
    return window.fetch(`${this.props.loginUrl}?oauth_verifier=${oAuthVerifier}&oauth_token=${oauthToken}`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      this.props.onSuccess(data);
    }).catch(error => {
      return this.props.onFailure(error);
    });
  }

  getDefaultButtonContent() {
    const defaultIcon = this.props.showIcon? <TwitterIcon color='#00aced' size={25}/> : null;

    return (
      <span>
        {defaultIcon} {this.props.text}
      </span>
    );
  }

  render() {
    const twitterButton = React.createElement(
      this.props.tag, {
        onClick: this.onButtonClick,
        style: this.props.style,
        disabled: this.props.disabled,
        className: this.props.className,
      }, this.props.children ? this.props.children : this.getDefaultButtonContent()
    );
    return twitterButton;
  }
}

TwitterLogin.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  loginUrl: PropTypes.string.isRequired,
  requestTokenUrl: PropTypes.string.isRequired,
  onFailure: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  dialogWidth: PropTypes.number,
  dialogHeight: PropTypes.number,
  showIcon: PropTypes.bool
};

TwitterLogin.defaultProps = {
  tag: 'button',
  text: 'Sign in with Twitter',
  disabled: false,
  dialogWidth: 600,
  dialogHeight: 400,
  showIcon: true
};

export default TwitterLogin;
