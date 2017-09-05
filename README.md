# React Twitter Login

> A React Twitter oAUth Sign-in / Log-in Component for React

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Installation

`npm install react-twitter-auth`

## Usage

```jsx harmony
<TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter" 
              onFailure={this.onFailed} onSuccess={this.onSuccess} 
              requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
```
## Options

* `tag` - tag that should be used to create element that will be used as loging element
* `text` - text that will be shown in component
* `loginUrl` - URL that will be used to finish 3rd step of process
* `requestTokenUrl` - URL that will be used to get request token
* `onFailure` - function that will be called if user cannot be authenticated
* `onSuccess` - function that will be called if user is successfully authenticated
* `disabled` - disable component
* `style` - style object
* `className` - class name for component
* `dialogWidth` - dialog width
* `dialogHeight` - dialog height

# Examples

Full example can be found in [example](https://github.com/GenFirst/react-twitter-login/tree/master/example) folder.

# License

passport-bitbucket-token is released under [MIT License](https://opensource.org/licenses/MIT).
