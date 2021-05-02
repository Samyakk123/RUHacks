import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../components/Login';
import Signup from '../components/Signup';
import MainPage from '../components/MainPage';
import TripPlan from '../components/TripPlan';
import TripPlan2 from '../components/TripPlan2';
import TripPlan3 from '../components/TripPlan3';
import friendsPage from '../components/friendsPage';
import invSentPage from '../components/InvSentPage';


const screens = {
  loginPage: {
    screen: Login
    
  },
  signupPage: {
    screen: Signup
  },

  mainPage: {
    screen: MainPage
  },

  trip: {
    screen: TripPlan
  },

  trip2: { 
    screen: TripPlan2
  },
  
  trip3: {
    screen: TripPlan3
  },

  friend: {
    screen: friendsPage
  },

  inv: {
    screen: invSentPage
  }
}


const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);