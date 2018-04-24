import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Movies from './Movies.js';
import Confirmation from './Confirmation';

const MovieApp = StackNavigator({
  Movies: {screen: Movies},
  Confirmation: {screen: Confirmation},
});

export default MovieApp;
