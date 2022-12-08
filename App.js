// Navigate Between Screens using React Navigation in React Native //
import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/pages/SplashScreen';
import PeopleScreen from './src/pages/PeopleScreen';
import AlbumScreen from './src/pages/AlbumScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from './src/pages/Routes'

const Stack = createStackNavigator();

function App() {
  const [screenName, setscreenName] = useState(null)


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const screen = await AsyncStorage.getItem('ScreenName')
    console.log("app Js screen name", screen)
    if (screen != null) {
      setscreenName(screen)
    } else {
      setscreenName("SplashScreen")
    }

  }

  return (
    <>
      {
        screenName != null &&
        <Routes screenName={screenName} />
      }
    </>
  );
}

export default App;




