import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Dimensions from 'Dimensions';

const screen = Dimensions.get('window');


export default class Row extends Component {

  render({ movie, onPress } = this.props) {

    const { title, rating, image } = movie;
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={onPress}
        activeOpacity={0.7}
      >
        { /* Background image */}
        <Image source={{uri: image}} style={styles.imageBackground}></Image>
        <View style={styles.contentBackgrond}>
          <Text style={[styles.text, styles.title]}>{title.toUpperCase()}</Text>
          {/* Rating */}
          <View style={styles.rating}>
            {/* Icon */}
            <Image
              source={{uri: 'https://staticv2.rottentomatoes.com/static/images/icons/cf-lg.png'}}
              style={styles.icon}
            />
            {/* Value */}
            <Text style={[styles.text, styles.value]}>{rating}%</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  row: {
    paddingBottom: 4,
  },
  imageBackground: {
    height: screen.height / 3,
  },
  contentBackgrond: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    left: 20,
  },
  text: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1},
    textShadowRadius: 4,
  },
  title: {
    fontSize: 22,
  },
  rating: {
    flexDirection: 'row'
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 5,
  },
  value: {
    fontSize: 16,
  }
});
