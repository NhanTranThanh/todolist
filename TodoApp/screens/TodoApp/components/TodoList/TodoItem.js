import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const statusMapping = {
  0: {
    text: 'New',
    style: {},
  },
  1: {
    text: 'Delete',
    style: {textDecorationLine: 'line-through', textDecorationStyle: 'solid'},
  },
  2: {
    text: 'Completed',
    style: {backgroundColor: 'green'},
  },
};

export default class TodoItem extends React.PureComponent {
  render() {
    const {data, onDelete, onComplete} = this.props;
    const {value, status} = data || {};

    if (!data) return null;

    return (
      <View style={styles.todoItem}>
        <Text style={[styles.text, statusMapping[status].style]}>{value}</Text>
        {status === 0 && (
          <React.Fragment>
            <TouchableOpacity style={styles.button} onPress={onDelete}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onComplete}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    flex: 0.5,
  },
  button: {
    flex: 0.15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 3,
    backgroundColor: 'gray',
    margin: 3,
  },
  buttonText: {
    color: 'white',
  },
});
