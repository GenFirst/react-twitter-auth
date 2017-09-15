[![NPM](https://nodei.co/npm/react-twitter-auth.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-twitter-auth/)

[![Build Status](https://travis-ci.org/GenFirst/react-twitter-auth.svg?branch=master)](https://travis-ci.org/GenFirst/react-twitter-auth)
[![Code Climate](https://codeclimate.com/github/GenFirst/react-twitter-login/badges/gpa.svg)](https://codeclimate.com/github/GenFirst/react-twitter-login)
[![Dependency Status](https://gemnasium.com/badges/github.com/GenFirst/react-twitter-auth.svg)](https://gemnasium.com/github.com/GenFirst/react-twitter-auth)
[![Coverage Status](https://coveralls.io/repos/github/GenFirst/react-twitter-auth/badge.svg?branch=master)](https://coveralls.io/github/GenFirst/react-twitter-auth?branch=master)
[![npm version](https://badge.fury.io/js/react-twitter-auth.svg)](https://badge.fury.io/js/react-twitter-auth)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

# React Twitter Authentication Component

> A React Twitter oAUth Sign-in / Log-in Component for React

## Installation

`npm install react-twitter-auth`

## Usage

```jsx harmony
<TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter" 
              onFailure={this.onFailed} onSuccess={this.onSuccess} 
              requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
```
## Options

| params          | value  | default value       | description                                                                   |
|:---------------:|:------:|:-------------------:|:-----------------------------------------------------------------------------:|
| tag             |string  |button               |tag that should be used to create element that will be used as loging element  |
| text            |string  |Sign in with Twitter |text that will be shown in component                                           |
| loginUrl        |string  |                     |URL that will be used to finish 3rd step of authentication process             |
| requestTokenUrl |string  |                     |URL that will be used to get request token                                     |
| onFailure       |function|                     |function that will be called if user cannot be authenticated                   |
| onSuccess       |function|                     |function that will be called if user is successfully authenticated             |
| disabled        |boolean |false                |disable component                                                              |
| style           |object  |                     |style object                                                                   |
| className       |string  |                     |class name for component                                                       |
| dialogWidth     |number  |600                  |dialog width                                                                   |
| dialogHeight    |number  |400                  |dialog height                                                                  |


# Examples

Full example can be found in [example](https://github.com/GenFirst/react-twitter-login/tree/master/example) folder.

# License

react-twitter-auth is released under [MIT License](https://opensource.org/licenses/MIT).
