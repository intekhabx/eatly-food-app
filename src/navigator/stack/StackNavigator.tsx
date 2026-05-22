import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../../components/Onboarding';
import Login from '../../components/Login';
import { NavigationContainer } from '@react-navigation/native';
import {StackParamListType} from '../../types/index'
import DynamicTabNavigator from '../tab/BottomTabNavigator';
import Signup from '../../components/Signup';

const Stack = createStackNavigator<StackParamListType>();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Onboarding'>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="MainTabs" component={DynamicTabNavigator} options={{headerShown: false}}/>
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