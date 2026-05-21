import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../components/Home';
import Onboarding from '../../components/Onboarding';
import Login from '../../components/Login';
import { NavigationContainer } from '@react-navigation/native';
import {StackParamListType} from '../../types/index'

const Stack = createStackNavigator<StackParamListType>();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Onboarding'>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}

export default function StackNavigator(){
  return (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  )
}