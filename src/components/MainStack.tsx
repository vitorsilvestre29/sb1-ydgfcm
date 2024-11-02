import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { WelcomeScreen } from "./WelcomeScreen";
import { WeatherScreen } from "./WeatherScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false
            }}
        >
            <StackNavigator.Screen
                name="Welcome"
                component={WelcomeScreen}
            />
            <StackNavigator.Screen
                name="Weather"
                component={WeatherScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);