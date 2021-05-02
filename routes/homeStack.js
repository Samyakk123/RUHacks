import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import App from '../App';
import Login from '../components/Login';
import Signup from '../components/Signup';

const screens = {
  loginPage: {
    screen: Login
  },
  signupPage: {
    screen: Signup
  }
}


const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);