import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from "../Components/Categories/Categories";
import Articulos from "../Components/Articulos/Articulos";
import Foro from "../Components/Foro/Foro";

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Articulos" component={Articulos} />
      <Tab.Screen name="Foro" component={Foro} />


    </Tab.Navigator>
  );
}