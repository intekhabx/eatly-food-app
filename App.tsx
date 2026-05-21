import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/components/Onboarding';
import Login from './src/components/Login';
import Home from './src/components/Home';
import Signup from './src/components/Signup';
import RestaurantDetails from './src/components/ResturantDetails';
import StackNavigator from './src/navigator/stack/StackNavigator';



export default function App() {
  return (
    <StackNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
