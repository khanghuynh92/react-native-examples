import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Button extends Component {

  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  button: {
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#fff',
      paddingHorizontal: 50,
      paddingVertical: 10,
  },
  text: {
    color: '#fff',
    fontWegiht: 'bold',
    fontFamily: 'Avenir',
  },
});
