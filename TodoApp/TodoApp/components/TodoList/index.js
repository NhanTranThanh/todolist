import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';

import TodoItem from './TodoItem';

export default class TodoList extends React.PureComponent {
  render() {
    const {todoList, onComplete, onDelete} = this.props;
    return (
      <View style={styles.todoList}>
        <ScrollView>
          {(todoList || []).map(item => (
            <TodoItem
              key={item.id}
              onDelete={() => onDelete(item.id)}
              onComplete={() => onComplete(item.id)}
              data={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoList: {
    // height: 300,
    marginVertical: 30,
  },
});
