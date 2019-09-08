import React from 'react';
import _ from 'lodash';
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import TodoList from './components/TodoList';

export default class TodoApp extends React.PureComponent {
  state = {
    todoList: [],
    val: '',
    searchText: '',
    searchResults: [],
  };

  addItem = () => {
    const {todoList, val} = this.state;
    if (!val) return;
    const newItem = {
      id: todoList.length,
      value: val,
      status: 0,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newItem);

    this.setState({
      todoList: newTodoList,
      val: '',
    });
  };

  searchItems = () => {
    const {todoList, searchText} = this.state;
    const results = _.filter(todoList, item =>
      _.includes(item.value, searchText),
    );

    this.setState({
      searchResults: results,
      searchText: '',
    });
  };

  handleDelete = id => {
    const {todoList} = this.state;
    const newTodoList = [...todoList];
    this.setState({
      todoList: _.map(newTodoList, item => {
        if (item.id === id) {
          item.status = 1;
        }
        return item;
      }),
    });
  };

  handleComplete = id => {
    const {todoList} = this.state;
    const newTodoList = [...todoList];
    this.setState({
      todoList: _.map(newTodoList, item => {
        if (item.id === id) {
          item.status = 2;
        }
        return item;
      }),
    });
  };

  handleChangeText = text => {
    this.setState({
      val: text,
    });
  };

  handleChangeSearchText = text => {
    this.setState({
      searchText: text,
    });
  };

  render() {
    const {val, todoList, searchText, searchResults} = this.state;
    const sortedTodoList = _.sortBy(todoList, 'status');
    const sortedSearchResults = _.sortBy(searchResults, 'status');
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Todo List</Text>

        <View style={styles.todoApp}>
          <View style={styles.addingForm}>
            <TextInput
              style={styles.input}
              value={searchText}
              onChangeText={this.handleChangeSearchText}
            />
            <TouchableHighlight
              style={styles.button}
              onPress={this.searchItems}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableHighlight>
          </View>
          <TodoList
            onDelete={this.handleDelete}
            onComplete={this.handleComplete}
            todoList={sortedSearchResults}
          />

          <View style={styles.addingForm}>
            <TextInput
              style={styles.input}
              value={val}
              onChangeText={this.handleChangeText}
            />
            <TouchableHighlight style={styles.button} onPress={this.addItem}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
          </View>
          <TodoList
            onDelete={this.handleDelete}
            onComplete={this.handleComplete}
            todoList={sortedTodoList}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  todoApp: {
    paddingVertical: 20,
  },
  addingForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 0.7,
    width: '100%',
    height: 40,
    // backgroundColor: "yellow",
    borderColor: 'black',
    borderWidth: 1,
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
