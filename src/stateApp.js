import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class StateApp extends Component {

  state = {
    happy: false,
  }

  render() {

    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: this.state.happy
            ? 'https://i.imgur.com/LNKc5V3.jpg' // happy
            : 'https://i.imgur.com/74KCGU8.jpg' // not happy
          }}
          style={{ width: 300, height: 300 }}
        />
        <TouchableHighlight
          underlayColor="#4FAD54"
          style={
            this.state.happy
            ? [styles.buttonWrapper, styles.buttonWrapperOff]
            : styles.buttonWrapper
          }
          onPress={() => {
            this.setState({
              happy: !this.state.happy,
            });
          }}
          >
            <Text style={styles.button}>
              {
                this.state.happy
                ? 'Take that bone away'
                : 'Give her abone'
              }
            </Text>
          </TouchableHighlight>
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
  buttonWrapper: {
    backgroundColor: '#8BC051',
    borderRadius: 4,
    margin: 60,
    padding: 15,
  },
  button: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  buttonWrapperOff: {
    backgroundColor: '#cb0e40',
  },
});
