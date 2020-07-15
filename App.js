import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from './src/screens/IndexScreen';

const navigator = createStackNavigator(
  {
    Index,
  },
  {
    initialRoutName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

export default createAppContainer(navigator);
