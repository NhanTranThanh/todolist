import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EntryPoint from '../screens/EntryPoint';
import TodoApp from '../screens/TodoApp';
import MoviesApp from '../screens/MoviesApp';

const AppNavigator = createStackNavigator(
  {
    EntryPoint,
    TodoApp,
    MoviesApp,
  },
  {
    initialRouteName: 'EntryPoint',
  },
);

export default createAppContainer(AppNavigator);
