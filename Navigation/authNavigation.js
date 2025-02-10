// import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Landing from '../src/auth_screens/Landing';
import Login from '../src/auth_screens/Login';
import SignUp from '../src/auth_screens/SignUp';



const Stack = createStackNavigator();

const Auth = () => {

  return ( 
  
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />

        </Stack.Navigator>
        
  ) 
};

export default Auth;
