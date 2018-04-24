import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View
} from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup.js';

export default class Movies extends Component {

  // Add starting here
  state = {
    popupIsOpen: false,
    // Day chosen by user
    chosenDay: 0,
    // Time chosen by user
    chosenTime: null,
  }

  chooseDay = (day) => {
    this.setState({
      chosenDay: day,
    });
  }

  chooseTime = (time) => {
    this.setState({
      chosenTime: time,
    });
  }

  bookTicket = () => {
    const { navigate } = this.props.navigation;

    if (!this.state.chosenTime) {
      alert('Please select show time');
    } else {
      this.closeMovie();

      navigate('Confirmation', {
        code: Math.random().toString(36).substring(6).toUpperCase(),
      });

    }
  }

  openMovie = (movie) => {
    this.setState({
      popupIsOpen: true,
      movie,
    });
  }

  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
       // Reset values to default ones
       chosenDay: 0,
       chosenTime: null,
    });
  }
  // Untill here

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            // Hide all scroll indicators
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
          {movies.map((movie, index) => <MoviePoster
            movie={movie}
            onOpen={this.openMovie}
            key={index}
          />)}
        </ScrollView>
        <MoviePopup
          movie={this.state.movie}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeMovie}
          chosenDay={this.state.chosenDay}
          chosenTime={this.state.chosenTime}
          onChooseDay={this.chooseDay}
          onChooseTime={this.chooseTime}
          onBook={this.bookTicket}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
