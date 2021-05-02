import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import App from '../App';
import signup from '../components/signup';

const screens = {
  loginPage: {
    screen: App
  },
  signupPage: {
    screen: signup
  }
}


const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);