import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {StatusBar, View, StyleSheet} from "react-native-web";
import { Container, Header, Item, Input, Icon, Button, Text,Left, Body, Title, Right, Content, Card, CardItem } from 'native-base';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import TextInput from "react-native-web/src/exports/TextInput";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";
import TravellingScreen from "./screens/TravellingScreen";
import ResultScreen from "./screens/ResultScreen";

const AppNav = createStackNavigator({
  Home: HomeScreen,
  Profile : ProfileScreen,
  Result : ResultScreen,
  Travelling : TravellingScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      display:'none',
    },
    bodyStyle: {
      height:100,
    },
    contentStyle: {
      height:100,
    }
  }
});

const App = createAppContainer(AppNav);

export default App;

