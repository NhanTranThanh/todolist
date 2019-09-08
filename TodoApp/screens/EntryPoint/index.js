import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class EntryPoint extends React.PureComponent {
  goToTodoApp = () => {
    this.props.navigation.navigate('TodoApp');
  };

  goToMoviesApp = () => {
    this.props.navigation.navigate('MoviesApp');
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={this.goToTodoApp}>
          <Text>TodoApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={this.goToMoviesApp}>
          <Text>Movies App</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationButton: {
    padding: 6,
    marginVertical: 20,
    backgroundColor: 'yellow',
  },
});
