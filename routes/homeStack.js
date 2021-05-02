import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import App from '../App';
import Login from '../components/Login';
import Signup from '../components/signup';
import MainPage from '../components/MainPage';

const screens = {
  loginPage: {
    screen: Login
    
  },
  signupPage: {
    screen: Signup
  },

  mainPage: {
    screen: MainPage
  }
}


const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);