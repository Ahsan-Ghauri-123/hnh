import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/RegisterScreen';

import Profile  from '../src/Profile';


const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default ScreenNavigator