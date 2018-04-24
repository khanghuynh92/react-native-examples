import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Hello {params.name}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Back to home"
        />
      </View>
    );
  }
}
