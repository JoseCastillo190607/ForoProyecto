import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Categories from '../Components/Categories/Categories';
import Foro from '../Components/Foro/Foro';
import Articulos from "../Components/Articulos/Articulos";
import ForoIndividual from '../Components/Foro/ForoIndividual';
import { MyTabs } from "./Tabs";

const Stack = createStackNavigator();

export const MyStack = () => {

  // const {status} = useContext(AuthContext)

  return (
    <Stack.Navigator initialRouteName="Login"
    screenOptions={{  
    //  headerShown: false,
      headerStyle: {
        elevation: 0
      },
      cardStyle:{ 
        backgroundColor: 'white'
      }
    }}
    >
      {/* {
    (status !== 'autheticated')
    ?(<> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    {/* </>): 
    (<> */}
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Foro" component={Foro} />
      <Stack.Screen name="ForoIndividual" component={ForoIndividual} />
      <Stack.Screen name="Articulos" component={Articulos} />
    {/* </>)} */}
    </Stack.Navigator>

  );
}