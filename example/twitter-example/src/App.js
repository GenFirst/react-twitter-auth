import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';

class App extends Component {

  constructor() {
    super();

    this.onFailed = this.onFailed.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess(response) {
    response.json().then(body => {
      alert(JSON.stringify(body));
    });
  }

  onFailed(error) {
    alert(error);
  }

  render() {
    const customHeader = {};
    customHeader['Test'] = 'test-header';
    return (
      <div>
        <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                      onFailure={this.onFailed}
                      onSuccess={this.onSuccess}
                      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                      showIcon={true}
                      customHeaders={customHeader}
                      forceLogin={true}/>

        <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                      onFailure={this.onFailed}
                      onSuccess={this.onSuccess}
                      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                      showIcon={true}
                      customHeaders={customHeader}>
          <b>Custom</b> Twitter <i>Login</i> content
        </TwitterLogin>
      </div>
    );
  }
}

export default App;
