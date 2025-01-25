import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/auth/Login';
// import RegisterScreen from '../screens/RegisterScreen';

import SignUp from '../src/auth/SignUp';
// import SignIn from '../src/auth/SignIn';
// import LandingPage from '../src/auth/LandingPage';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            {/* <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} /> */}
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator