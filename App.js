import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';
import Index from './src/screens/IndexScreen';
import Show from './src/screens/ShowScreen';
import Create from './src/screens/CreateScreen';
import Edit from './src/screens/EditScreen';

const navigator = createStackNavigator(
  {
    Index,
    Show,
    Create,
    Edit,
  },
  {
    initialRoutName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
