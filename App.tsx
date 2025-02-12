// import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MyTabs from './Navigation/appNavigation';
import Auth from './Navigation/authNavigation';
import AllProds from './src/app_screens/AllProds';



const Stack = createStackNavigator();

const App = () => {

  return ( 
  
  <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='MainTabs'>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="MainTabs" component={MyTabs} />
      </Stack.Navigator>
        {/* <MyTabs /> */}
  </NavigationContainer>
  ) 
};

export default App;
