import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app-navigator';
// import AuthNavigator from './auth-navigator';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';

const AppRoute = () => {
``
    // const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    return (
        <NavigationContainer>
      {/* {isLoggedIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />
    </NavigationContainer>
    )
}

export default AppRoute