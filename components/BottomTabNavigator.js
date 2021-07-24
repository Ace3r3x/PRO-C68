import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FacebookScreen from "../screens/Facebook";
import InstagramScreen from "../screens/Instagram";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Facebook" component={FacebookScreen} />
          <Tab.Screen name="Instagram" component={InstagramScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
