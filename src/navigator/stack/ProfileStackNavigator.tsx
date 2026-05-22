import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../components/Profile';
import MyOrders from '../../components/MyOrders';
import { ProfileStackParamsListType } from '../../types';



const Stack = createStackNavigator<ProfileStackParamsListType>();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      {/* FIRST SCREEN */}
      <Stack.Screen
        name="ProfileHome"
        component={Profile}
      />

      {/* SECOND SCREEN */}
      <Stack.Screen
        name="MyOrders"
        component={MyOrders}
      />

    </Stack.Navigator>
  );
}