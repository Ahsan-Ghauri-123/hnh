import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../src/Dashboard';
import Employees from '../src/Employees';
import Profile from '../src/Profile';
// import Sham from '../src/Sham';
import ShamA from '../src/ShamA';
import Leaves from '../src/Leaves';
import Breaks from '../src/Breaks';
import Discrepency from '../src/Discrepency';
import Absent from '../src/Absent';
import Late from '../src/Late';
import DailyReport from '../src/DailyReport';
import Holiday from '../src/Holiday';
import Tickets from '../src/Tickets';
import Chat from '../src/Chat';










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
          headerStyle: { backgroundColor:'white', borderRadius: 130 },
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
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Leaves" component={Leaves} />
        <Drawer.Screen name="Breaks" component={Breaks} />
        <Drawer.Screen name="Discrepency" component={Discrepency}/>
        <Drawer.Screen name="Absent" component={Absent}  />
        <Drawer.Screen name="Late" component={Late}  />
        <Drawer.Screen name="DailyReport" component={DailyReport}  />
        <Drawer.Screen name="Holiday" component={Holiday}  />
        <Drawer.Screen name="Tickets" component={Tickets}  />
        <Drawer.Screen name="Chat" component={Chat}  />








        
      </Drawer.Navigator>
    )
}

export default AppNavigator