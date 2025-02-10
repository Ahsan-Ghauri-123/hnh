import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../src/app_screens/HomeScreen'
import ProfileScreen from '../src/app_screens/ProfileScreen'
import Notifications from '../src/app_screens/Notifications';
import Settings from '../src/app_screens/Settings';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
        //   tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return (<Icon name="home-outline" size={size} color={color} />)
          },
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
        //   tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return (<Icon name="pricetags-outline" size={size} color={color} />)
          },
        }}/>
      <Tab.Screen 
      name="Notifications" 
      component={Notifications} 
      options={{
        // tabBarLabel: 'Notifications',
        tabBarIcon: ({ color, size }) => {
          return (<Icon name="notifications-outline" size={size} color={color} />)
        },
      }}/>
      <Tab.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
        // tabBarLabel: 'ProfileScreen ',
        tabBarIcon: ({ color, size }) => {
          return (<Icon name="person-circle-outline" size={size} color={color} />)
        },
      }} />
    </Tab.Navigator>
  );
}

export default MyTabs;