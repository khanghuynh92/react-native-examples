import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import List from './list.js';
import Movie from './movie.js';

const BasicApp = StackNavigator({
  List: {screen: List},
  Movie: {screen: Movie},
});

export default BasicApp;
//
// export default class ListApp extends Component {
//
//   render() {
//     return (
//       <List  />
//     );
//   }
//
// }
