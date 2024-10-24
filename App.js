import React from "react";
import { PaperProvider } from "react-native-paper";
import EventStackScreen from "./components/EventStackScreen";
import ProfileStackScreen from "./components/ProfileStackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";



export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown : false}}>
            <Tab.Screen name = "Home" component={EventStackScreen} options={{tabBarIcon: 'alpha-e-circle'}}/>
            <Tab.Screen name = "Profile" component={ProfileStackScreen} options={{tabBarIcon : 'account-circle'}}/>
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}

const Tab =  createMaterialBottomTabNavigator();
