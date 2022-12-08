import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../pages/SplashScreen';
import PeopleScreen from '../pages/PeopleScreen';
import AlbumScreen from '../pages/AlbumScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

const Routes = ({ screenName }) => {
    console.log("In Routes Page==", screenName)

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={screenName}

            >
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false
                    }}

                />
                <Stack.Screen
                    name="PeopleScreen"
                    component={PeopleScreen}
                    options={{
                        title: 'Photos', //Set Header Title
                        headerStyle: {
                            backgroundColor: '#FFFFFF', //Set Header color
                        },
                        headerTintColor: '#000000', //Set Header text color
                        headerTitleStyle: {
                            fontWeight: 'bold', //Set Header text style
                        },
                    }}
                />
                <Stack.Screen
                    name="AlbumScreen"
                    component={AlbumScreen}
                    options={{
                        headerShown: false
                    }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;

