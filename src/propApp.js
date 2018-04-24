import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Clock from './clock.js'

export default class PropApp extends Component {

  state = {
    time: ''
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleString().split(',')[0],
      });
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Clock time={this.state.time} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
