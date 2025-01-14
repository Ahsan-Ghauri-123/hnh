import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../src/Dashboard';
import Employees from '../src/Employees';
// import Profile from '../src/tabs/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import Colors from '../Assets/colors/colors';




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        // <Stack.Navigator initialRouteName='Dashboard'>
        //     <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
        //     {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
        // </Stack.Navigator>

        <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary, borderRadius: 130 },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' , color: Colors.secondary },
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',  width: '100%'}}>
                <View style={{ flexDirection: 'row', padding:10}}>
              <Image source={require('./../Assets/search.png')} style={{ marginHorizontal: 1 }} />
              <Image source={require('./../Assets/note.png')} style={{ marginHorizontal: 1 }} />
              <Image source={require('./../Assets/time.png')} style={{ marginHorizontal: 1 }} />
              <Image source={require('./../Assets/plus.png')} style={{ marginHorizontal: 1 }} />
              <Image source={require('./../Assets/notification.png')} style={{ marginHorizontal: 1 }} />
              <Image source={require('./../Assets/power.png')} style={{ marginHorizontal: 1 }} />
            </View>
            </View>
          ),
        }}
      >
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Employees" component={Employees} />
      </Drawer.Navigator>
    )
}

export default AppNavigator