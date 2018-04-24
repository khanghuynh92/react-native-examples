import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class StyleCo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Welcome to Amazing App!
        </Text>
        <Text style={styles.text}>
          That's a regular text
        </Text>
        <Text style={[styles.text, styles.important]}>
          That's an important text
        </Text>
        <View style={styles.buttonWrapper}>
          <Text style={styles.button}>Great</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCBF2E',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  important: {
    color: '#FB572F',
    fontWeight: 'bold',
  },
  buttonWrapper: {
    backgroundColor: '#FB572F',
    marginTop: 30,
    padding: 20,
  },
  button: {
    color: '#FFFFFF',
  }
});
