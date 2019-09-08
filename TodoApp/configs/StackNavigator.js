import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TodoApp from '../screens/TodoApp';
import EntryPoint from '../screens/EntryPoint';

const AppNavigator = createStackNavigator(
  {
    EntryPoint,
    TodoApp,
  },
  {
    initialRouteName: 'EntryPoint',
  },
);

export default createAppContainer(AppNavigator);
