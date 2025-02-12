import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/app_screens/HomeScreen';
import AllProds from '../src/app_screens/AllProds';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="AllProds" component={AllProds} />
      
    </Stack.Navigator>
  );
};

export default HomeStack;