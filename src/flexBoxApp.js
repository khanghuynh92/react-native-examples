import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MyApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarButton}>Back</Text>
          <Text style={styles.navBarHeader}>Awesome App</Text>
          <Text style={styles.navBarButton}>More</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Welcome to Awesome App!
          </Text>
        </View>
        <View style={styles.tabBar}>
          <View style={[styles.tabBarButton, styles.button1]} />
          <View style={[styles.tabBarButton, styles.button2]} />
          <View style={[styles.tabBarButton, styles.button3]} />
          <View style={[styles.tabBarButton, styles.button4]} />
          <View style={[styles.tabBarButton, styles.button5]} />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#374046'
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#1EAAF1'
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 64
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374046'
  },
  text: {
    color: '#EEEEEE'
  },
  tabBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tabBarButton: {
    // flex: 1,
    width: 30,
    height: 30,
  },
  button1: { backgroundColor: '#8BC051' },
  button2: { backgroundColor: '#CCD948' },
  button3: { backgroundColor: '#FDE84D' },
  button4: { backgroundColor: '#FCBF2E' },
  button5: { backgroundColor: '#FC9626' },
});
