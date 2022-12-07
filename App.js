import react from "react";
import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/Navigators/Stack';
// import Login from './src/Components/Login/Login';
import { MyTabs } from "./src/Navigators/Tabs";
import { MyDrawer } from "./src/Navigators/Drawer";



export default function App() {
  return (
   <NavigationContainer>
    <MyStack/>
   </NavigationContainer>

  );
}


