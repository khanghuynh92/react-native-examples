import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Movie extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Movie',
  });

  render() {
    const { goBack } = this.props.navigation;
    const { movie } = this.props.navigation.state.params;
    const { title, rating, large, plot } = movie;

    return (
      <View style={styles.container}>
        <Image source={{uri: large}} style={styles.imageBackground}></Image>
        <ScrollView
          style={styles.content}
        >
          <Text style={[styles.text, styles.title]}>{title.toUpperCase()}</Text>
          <View style={styles.rating}>
            <Image
              source={{uri: 'https://staticv2.rottentomatoes.com/static/images/icons/cf-lg.png'}}
              style={styles.icon}
            />
            <Text style={[styles.text, styles.value]}>{rating}%</Text>
          </View>
          <View style={styles.plot}>
            <Text style={styles.plotText}>{plot}</Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
            {/* Press handler */}
            <TouchableOpacity
              // Go to the previous screen
              onPress={() => {
                goBack();
              }}
              // Dim button a little bit when pressed
              activeOpacity={0.7}
              // Pass button style
              style={styles.button}
            >
              <Text style={styles.buttonText}>CLOSE</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,                            // Take up all screen space
    backgroundColor: 'transparent',            // Dark background
  },
  // Background image
  imageBackground: {
    flex: 1,                            // Take up all screen space
    padding: 20                         // Add padding for content inside
  },
  content: {
    position: 'absolute',
    flex: 1,
  },
  text: {
    backgroundColor: 'transparent',     // No background
    color: '#fff',                      // White text color
    fontFamily: 'Avenir',               // Change default font
    fontWeight: 'bold',                 // Bold font
    // Add text shadow
    textShadowColor: '#222',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  title: {
    fontSize: 22,                       // Bigger font size
    marginTop: 30,                      // Add space between top screen edge
    marginBottom: 5,                    // Add space at the bottom
    textAlign: 'center',                // Center horizontally
  },
  rating: {
    flexDirection: 'row',               // Arrange icon and rating in one line
    justifyContent: 'center',           // Center horizontally
  },
  icon: {
    width: 22,                          // Set width
    height: 22,                         // Set height
    marginRight: 5,                     // Add some margin between icon and rating
  },
  value: {
    fontSize: 16,                       // Smaller font size
  },
  plot: {
    // backgroundColor: 'rgba(255,255,255,0.5)', // Semi-transparent white background
    borderRadius: 10,                   // Rounder corners
    marginTop: 40,                      // Margin at the top
    padding: 10,                        // Padding for content inside
  },
  plotText: {
    color: '#3d3d3d',                      // Dark text color
    fontFamily: 'Avenir',               // Change default font
    fontSize: 15,                       // Small font size
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,                      // Add some margin at the top
  },
  button: {
    backgroundColor: '#617D8A',         // Color the button
    padding: 15                         // Padding inside
  },
  buttonText: {
    color: '#fff',                      // White button text
    fontFamily: 'Avenir',               // Change default font
    fontWeight: 'bold',                 // Bold font
    textAlign: 'center',                // Center horizontally
  }
});
