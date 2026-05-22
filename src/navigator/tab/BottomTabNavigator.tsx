import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Home from "../../components/Home";
import Search from "../../components/Search";
import Profile from "../../components/Profile";
import Orders from "../../components/Orders"
import { ComponentProps } from "react";
import ProfileStack from "../stack/ProfileStackNavigator";

type IconName = ComponentProps<typeof Ionicons>["name"];

const Tab = createBottomTabNavigator();

function MyTabs(){
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,

          tabBarStyle: {
            backgroundColor: '#0f0f0f', // deep dark
            height: 65,
            borderTopWidth: 0,
            elevation: 0,
            paddingBottom: 10,
            paddingTop: 10,
          },

          tabBarActiveTintColor: '#FF5A1F',
          tabBarInactiveTintColor: '#777',
          
          tabBarIcon: ({ focused, color, size }) => {
            let icon: IconName  = "home";

            if (route.name === 'Home') {
              icon = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              icon = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Orders') {
              icon = focused ? 'cart' : 'cart-outline';
            } else {
              icon = focused ? 'person' : 'person-outline';
            }

            return (<Ionicons name={icon} size={focused ? 26 : 24} color={color}/>)
          }
        })}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Orders" component={Orders} options={{tabBarBadge: 3}}/>
      <Tab.Screen name="ProfileHome" component={ProfileStack} />
    </Tab.Navigator>
  )
}


export default function DynamicTabNavigator(){
  return (
    // <NavigationContainer>
      <MyTabs />
    // </NavigationContainer>
  )
}