// import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MyTabs from './Navigation/appNavigation';
import Auth from './Navigation/authNavigation';



const Stack = createStackNavigator();

const App = () => {

  return ( 
  
  <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MyTabs} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
        {/* <MyTabs /> */}
  </NavigationContainer>
  ) 
};

export default App;
