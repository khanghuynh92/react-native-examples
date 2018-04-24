import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

export default class Clock extends Component {

  render() {
    return (
      <Text style={styles.clockText}>{this.props.time}</Text>
    );
  }

}

const styles = StyleSheet.create({
  clockText: {
    fontSize: 24,
    color: '#3d3d3d'
  }
});
