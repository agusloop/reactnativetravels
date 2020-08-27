import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../views/Login/login";
import HomeScreen from "../views/Home/home";
import ResultsScreen from "../views/Results/results";
import LoadingScreen from "../views/Loading/loading";
import ProfileScreen from "../views/Profile/profile";

const AppNavigator = createStackNavigator();

function AppNaviga() {
    return (
        <NavigationContainer>
            <AppNavigator.Navigator initialRouteName="Loading" headerMode="none">
                <AppNavigator.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: "Login" }, { headerTitleAlign: "center" }}

                />
                <AppNavigator.Screen
                    name="Home"
                    component={HomeScreen}


                />
                <AppNavigator.Screen name="Loading" component={LoadingScreen} />
                <AppNavigator.Screen
                    name="Results"
                    component={ResultsScreen}
                    options={{ title: "Results" }}

                />

                <AppNavigator.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ title: "My Profile" }}
                />
            </AppNavigator.Navigator>
        </NavigationContainer>
    );
}
export default AppNaviga;