// import * as React from 'react';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Dashboard from '../Src/Dashboard';
// import Employees from '../Src/Employees';
// // import Profile from '../src/tabs/Profile';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';
// import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
// import Colors from '../Assets/colors/colors';
// import LeadScreen from '../Src/Leads/LeadScreen';
// import NewsFeed from '../Src/Home/NewsFeed';
// import Work from "../Src/Work/Projects";
// import Projects from '../Src/Work/Projects';
// import AddLeadInfo from '../Src/Leads/AddLeadInfo';
// import EmailTemplate from '../Src/Leads/EmailTemplate';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const  DrawerNavigation=()=>{
//   return (
//     // <Stack.Navigator initialRouteName='Dashboard'>
//     //     <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
//     //     {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
//     // </Stack.Navigator>

//     <Drawer.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: Colors.primary, borderRadius: 130 },
//       headerTintColor: '#fff',
//       headerTitleStyle: { fontWeight: 'bold' , color: Colors.secondary },
//       headerRight: () => (
//         <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',  width: '100%'}}>
//             <View style={{ flexDirection: 'row', padding:10}}>
//           <Image source={require('./../Assets/search.png')} style={{ marginHorizontal: 1 }} />
//           <Image source={require('./../Assets/note.png')} style={{ marginHorizontal: 1 }} />
//           <Image source={require('./../Assets/time.png')} style={{ marginHorizontal: 1 }} />
//           <Image source={require('./../Assets/plus.png')} style={{ marginHorizontal: 1 }} />
//           <Image source={require('./../Assets/notification.png')} style={{ marginHorizontal: 1 }} />
//           <Image source={require('./../Assets/power.png')} style={{ marginHorizontal: 1 }} />
//         </View>
//         </View>
//       ),
//     }}
//   >
//     <Drawer.Screen name="Dashboard" component={Dashboard} screenOptions={{drawerActiveBackgroundColor:"#C6F3CA", drawerActiveTintColor:"#12B886"}} />
//     <Drawer.Screen name="NewsFeed" component={NewsFeed} />
//     <Drawer.Screen name='Lead' component={LeadScreen} />
//     <Drawer.Screen name="Employees" component={Employees} />
//     <Drawer.Screen name="Projects" component={Projects} />
//   </Drawer.Navigator>
// );
// }
// function AllStack(){
// return(
//   <Stack.Navigator initialRouteName='Drawer'>
//   <Stack.Screen name='Drawer' component={DrawerNavigation} options={{headerShown:false}} />
//   <Stack.Screen name='AddLeadInfo' component={AddLeadInfo} />
//   <Stack.Screen name='EmailTemplate' component={EmailTemplate} />
//   </Stack.Navigator>
// );
// };

// const AppNavigator = () => {
//     return(
//      <AllStack/>
//     );
// };



// export default AppNavigator;

//correct code with icons::
// import * as React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Dashboard from '../Src/Dashboard';
// import Employees from '../Src/Employees';
// // import Profile from '../src/tabs/Profile';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';
// import { View, Image } from 'react-native';
// import Colors from '../Assets/colors/colors';
// import LeadScreen from '../Src/Leads/LeadScreen';
// import NewsFeed from '../Src/Home/NewsFeed';
// import Projects from '../Src/Work/Projects';
// import AddLeadInfo from '../Src/Leads/AddLeadInfo';
// import EmailTemplate from '../Src/Leads/EmailTemplate';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import Ico from "react-native-vector-icons/AntDesign";
// import Icons from "react-native-vector-icons/MaterialIcons";

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const DrawerNavigation = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary, borderRadius: 130 },
//         headerTintColor: '#fff',
//         headerTitleStyle: { fontWeight: 'bold', color: Colors.secondary },
//         headerRight: () => (
//           <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
//             <View style={{ flexDirection: 'row', padding: 10 }}>
//               <Image source={require('./../Assets/search.png')} style={{ marginHorizontal: 1 }} />
//               <Image source={require('./../Assets/note.png')} style={{ marginHorizontal: 1 }} />
//               <Image source={require('./../Assets/time.png')} style={{ marginHorizontal: 1 }} />
//               <Image source={require('./../Assets/plus.png')} style={{ marginHorizontal: 1 }} />
//               <Image source={require('./../Assets/notification.png')} style={{ marginHorizontal: 1 }} />
//               <Image source={require('./../Assets/power.png')} style={{ marginHorizontal: 1 }} />
//             </View>
//           </View>
//         ),
//       }}>
//       <Drawer.Screen 
//         name="Dashboard" 
//         component={Dashboard} 
//         options={{
//           drawerIcon: () => (
//             <Icon name="view-dashboard" size={22} color="#fff" />
//           ),
//         }}
//       />
//       <Drawer.Screen 
//         name="NewsFeed" 
//         component={NewsFeed} 
//         options={{
//           drawerIcon: () => (
//             <Icon name="view-dashboard" size={22} color="#fff" />
//           ),
//         }}
//       />
//       <Drawer.Screen 
//         name="Lead" 
//         component={LeadScreen} 
//         options={{
//           drawerIcon: () => (
//             <Ico name="contacts" size={22} color="#fff" />
//           ),
//         }}
//       />
//       <Drawer.Screen 
//         name="Employees" 
//         component={Employees} 
//         options={{
//           drawerIcon: () => (
//             <Icon name="contacts" size={22} color="#fff" />
//           ),
//         }}
//       />
//       <Drawer.Screen 
//         name="Projects" 
//         component={Projects} 
//         options={{
//           drawerIcon: () => (
//             <Icons name="work" size={22} color="#fff" />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// function AllStack() {
//   return (
//     <Stack.Navigator initialRouteName='Drawer'>
//       <Stack.Screen name='Drawer' component={DrawerNavigation} options={{ headerShown: false }} />
//       <Stack.Screen name='AddLeadInfo' component={AddLeadInfo} />
//       <Stack.Screen name='EmailTemplate' component={EmailTemplate} />
//     </Stack.Navigator>
//   );
// };

// const AppNavigator = () => {
//   return (
//     <AllStack />
//   );
// };

// export default AppNavigator;


// import * as React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Collapsible from 'react-native-collapsible';
// import Colors from '../Assets/colors/colors';
// import Dashboard from '../Src/Dashboard';
// import NewsFeed from '../Src/Home/NewsFeed';
// import Employees from '../Src/Employees';
// import Projects from '../Src/Work/Projects';
// import AddLeadInfo from '../Src/Leads/AddLeadInfo';
// import EmailTemplate from '../Src/Leads/EmailTemplate';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import Icons from "react-native-vector-icons/MaterialIcons";
// import LeadScreen from '../Src/Leads/LeadScreen';
// import ArchieveSub from '../Src/Work/ArchieveSub';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const CustomDrawerContent = ({ navigation }) => {
//   const [isCollapsed, setIsCollapsed] = React.useState(true);

//   return (
//     <DrawerContentScrollView>
//       {/* Dashboard Accordion */}
//       <TouchableOpacity
//         onPress={() => setIsCollapsed(!isCollapsed)}
//         style={styles.accordionHeader}
//       >
//         <Icon name="view-dashboard" size={22} color="#fff" />
//         <Text style={styles.accordionHeaderText}>Dashboard</Text>
//       </TouchableOpacity>
//       <Collapsible collapsed={isCollapsed} style={styles.collapsibleContainer}>
//         <TouchableOpacity
//           onPress={() => {
//             setIsCollapsed(true);
//             navigation.navigate('DashboardScreen'); // Navigate to Dashboard Screen
//           }}
//           style={styles.collapsibleItem}
//         >
//           <Text style={styles.collapsibleItemText}>Dashboard Screen</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => {
//             setIsCollapsed(true);
//             navigation.navigate('NewsFeed'); // Navigate to NewsFeed Screen
//           }}
//           style={styles.collapsibleItem}
//         >
//           <Text style={styles.collapsibleItemText}>NewsFeed</Text>
//         </TouchableOpacity>
//       </Collapsible>

//       {/* Other Drawer Items */}
//       <TouchableOpacity
//       onPress={() => navigation.navigate('LeadScreen')}
//       style={styles.drawerItem}
//     >
//       <Icon name="contacts" size={22} color="red" />
//       <Text style={styles.drawerItemText}>Lead</Text>
//     </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => navigation.navigate('Employees')}
//         style={styles.drawerItem}
//       >
//         <Icon name="contacts" size={22} color="red" />
//         <Text style={styles.drawerItemText}>Employees</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => navigation.navigate('Projects')}
//         style={styles.drawerItem}
//       >
//         <Icons name="work" size={22} color="red" />
//         <Text style={styles.drawerItemText}>Projects</Text>
//       </TouchableOpacity>

//     </DrawerContentScrollView>

//   );
// };

// const DrawerNavigation = () => {
//   return (
//     <Drawer.Navigator
//       // drawerContent={(props) => <CustomDrawerContent {...props} />}
//       // screenOptions={{
//       //           headerStyle: { backgroundColor: Colors.primary, borderRadius: 130 },
//       //           headerTintColor: '#fff',
//       //           headerTitleStyle: { fontWeight: 'bold', color: Colors.secondary },
//       //           headerRight: () => (
//       //             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
//       //               <View style={{ flexDirection: 'row', padding: 10 }}>
//       //                 <Image source={require('./../Assets/search.png')} style={{ marginHorizontal: 1 }} />
//       //                 <Image source={require('./../Assets/note.png')} style={{ marginHorizontal: 1 }} />
//       //                 <Image source={require('./../Assets/time.png')} style={{ marginHorizontal: 1 }} />
//       //                 <Image source={require('./../Assets/plus.png')} style={{ marginHorizontal: 1 }} />
//       //                 <Image source={require('./../Assets/notification.png')} style={{ marginHorizontal: 1 }} />
//       //                 <Image source={require('./../Assets/power.png')} style={{ marginHorizontal: 1 }} />
//       //               </View>
//       //             </View>
//       //           ),
// drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="DashboardScreen" component={Dashboard} options={{ headerShown: false }} />
//       <Drawer.Screen name="NewsFeed" component={NewsFeed} options={{ headerShown: false }} />
//       <Drawer.Screen name="LeadScreen" component={LeadScreen} options={{headerShown: false}} />
//       <Drawer.Screen name="Employees" component={Employees} options={{ headerShown: false }} />
//       <Drawer.Screen name="Projects" component={Projects} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );
// };

// function AllStack() {
//   return (
//     <Stack.Navigator initialRouteName="Drawer">
//       <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
//       <Stack.Screen name="AddLeadInfo" component={AddLeadInfo} options={{ headerShown: false }}/>
//       <Stack.Screen name="EmailTemplate" component={EmailTemplate} options={{ headerShown: false }} />
//       <Stack.Screen name="ArchieveSub" component={ArchieveSub} options={{ headerShown: false }} />
//       <Stack.Screen name="Projects" component={Projects} options={{ headerShown: false }} />
//       <Drawer.Screen name="DashboardScreen" component={Dashboard} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// }

// const AppNavigator = () => {
//   return <AllStack />;
// };

// const styles = StyleSheet.create({
//   accordionHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     backgroundColor: Colors.primary,
//   },
//   accordionHeaderText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#fff',
//   },
//   collapsibleContainer: {
//     backgroundColor: Colors.primary,
//   },
//   collapsibleItem: {
//     paddingVertical: 10,
//     paddingLeft: 40,
//   },
//   collapsibleItemText: {
//     fontSize: 14,
//     color: '#fff',
//   },
//   drawerItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   drawerItemText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: 'blue',
//   },
// });

// export default AppNavigator;

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Colors from '../Assets/colors/colors';
import Dashboard from '../Src/Dashboard';
import NewsFeed from '../Src/Home/NewsFeed';
import Employees from '../Src/Employees';
import Projects from '../Src/Work/Projects';
import AddLeadInfo from '../Src/Leads/AddLeadInfo';
import EmailTemplate from '../Src/Leads/EmailTemplate';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/MaterialIcons";
import Ico from "react-native-vector-icons/Feather";
import Ic from "react-native-vector-icons/Entypo";
import LeadScreen from '../Src/Leads/LeadScreen';
import ArchieveSub from '../Src/Work/SubScreen/ArchieveSub';
import Tasks from '../Src/Work/Tasks';
import TimeLogs from '../Src/Work/TimeLogs';
import Expenses from '../Src/Finance/Expenses';
import Library from '../Src/Library/Library';
import LoginScreen from '../Src/Auth/LoginScreen';
import Events from '../Src/Events/Events';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Message from '../Src/Messages/Message';
import NoticeBoard from '../Src/Notice/NoticeBoard';
import ProfileSetting from '../Src/Settings/ProfileSetting';
import SignUpScreen from '../Src/Auth/SignUpScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = React.useState(null); // State to track selected item

  const handleDrawerItemPress = (itemName) => {
    setSelectedItem(itemName);
    navigation.navigate(itemName); // Navigate to the corresponding screen
  };

  return (
    <DrawerContentScrollView style={styles.main}>
      {/* Dashboard Accordion */}
      <Image source={require("../Assets/logo.png")} style={{ height: hp(12), width: wp(34), marginHorizontal: wp(5) }} />
      <Text style={{ fontSize: hp(3), fontWeight: "bold", color: "white", marginHorizontal: wp(5.4), marginTop: hp(1), marginBottom: wp(5) }}>Syed Bilal</Text>
      <TouchableOpacity
        onPress={() => setSelectedItem(selectedItem === 'Dashboard' ? null : 'Dashboard')}
        style={[
          styles.accordionHeader,
          selectedItem === 'Dashboard' && styles.selectedItem,
        ]}>
        <Icon name="view-dashboard" size={18} color="white" />
        <Text style={styles.accordionHeaderText}>Dashboard</Text>
      </TouchableOpacity>
      <Collapsible collapsed={selectedItem !== 'Dashboard'} style={styles.collapsibleContainer}>
        <TouchableOpacity
          onPress={() => handleDrawerItemPress('DashboardScreen')}
          style={styles.collapsibleItem}>
          <Text style={styles.collapsibleItemText}>Dashboard Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDrawerItemPress('NewsFeed')}
          style={styles.collapsibleItem}>
          <Text style={styles.collapsibleItemText}>NewsFeed</Text>
        </TouchableOpacity>
      </Collapsible>

      {/* Other Drawer Items */}
      <TouchableOpacity
        onPress={() => handleDrawerItemPress('LeadScreen')}
        style={[
          styles.drawerItem,
          selectedItem === 'LeadScreen' && styles.selectedItem,
        ]}
      >
        <Icon name="contacts" size={18} color="white" />
        <Text style={styles.drawerItemText}>Lead</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleDrawerItemPress('Employees')}
        style={[
          styles.drawerItem,
          selectedItem === 'Employees' && styles.selectedItem,
        ]}
      >
        <Ic name="man" size={18} color="white" />
        <Text style={styles.drawerItemText}>Employees</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelectedItem(selectedItem === 'Work' ? null : 'Work')}
        style={[
          styles.accordionHeader,
          selectedItem === 'Work' && styles.selectedItem,
        ]}>
        <Icons name="work" size={18} color="white" />
        <Text style={styles.accordionHeaderText}>Work</Text>
      </TouchableOpacity>
      <Collapsible collapsed={selectedItem !== 'Work'} style={styles.collapsibleContainer}>
        <TouchableOpacity
          onPress={() => handleDrawerItemPress('Projects')}
          style={styles.collapsibleItem}>
          <Text style={styles.collapsibleItemText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDrawerItemPress('Tasks')}
          style={styles.collapsibleItem}>
          <Text style={styles.collapsibleItemText}>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDrawerItemPress('TimeLogs')}
          style={
            styles.collapsibleItem}>
          <Text style={styles.collapsibleItemText}>TimeLogs</Text>
        </TouchableOpacity>
      </Collapsible>

      <TouchableOpacity
        onPress={() => setSelectedItem(selectedItem === 'Finance' ? null : 'Finance')}
        style={[
          styles.accordionHeader,
          selectedItem === 'Finance' && styles.selectedItem,
        ]}>
        <Ico name="dollar-sign" size={18} color="white" />
        <Text style={styles.accordionHeaderText}>Finance</Text>
      </TouchableOpacity>
      <Collapsible collapsed={selectedItem !== 'Finance'} style={styles.collapsibleContainer}>
        <TouchableOpacity
          onPress={() => handleDrawerItemPress('Expenses')}
          style={styles.collapsibleItem}>
          <Text style={styles.collapsibleItemText}>Expenses</Text>
        </TouchableOpacity>
      </Collapsible>
      <TouchableOpacity
        onPress={() => handleDrawerItemPress('Library')}
        style={[
          styles.drawerItem,
          selectedItem === 'Library' && styles.selectedItem,
        ]}
      >
        <Icon name="library" size={18} color="white" />
        <Text style={styles.drawerItemText}>Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDrawerItemPress('Events')}
        style={[
          styles.drawerItem,
          selectedItem === 'Events' && styles.selectedItem,
        ]}
      >
        <Icons name="event" size={18} color="white" />
        <Text style={styles.drawerItemText}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDrawerItemPress('Message')}
        style={[
          styles.drawerItem,
          selectedItem === 'Message' && styles.selectedItem,
        ]}
      >
        <Ic name="message" size={18} color="white" />
        <Text style={styles.drawerItemText}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDrawerItemPress('NoticeBoard')}
        style={[
          styles.drawerItem,
          selectedItem === 'NoticeBoard' && styles.selectedItem,
        ]}
      >
        <Ic name="clipboard" size={18} color="white" />
        <Text style={styles.drawerItemText}>Notice</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedItem(selectedItem === 'Settings' ? null : 'Settings')}
        style={[
          styles.accordionHeader,
          selectedItem === 'Settings' && styles.selectedItem,
        ]}>
        <Ico name="settings" size={18} color="white" />
        <Text style={styles.accordionHeaderText}>Settings</Text>
      </TouchableOpacity>
      <Collapsible collapsed={selectedItem !== 'Settings'} style={styles.collapsibleContainer}>
        <TouchableOpacity
          onPress={() => handleDrawerItemPress('ProfileSetting')}
          style={styles.collapsibleItem}>
          <Text style={styles.collapsibleItemText}>ProfileSetting</Text>
        </TouchableOpacity>
      </Collapsible>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="DashboardScreen" component={Dashboard} />
      <Drawer.Screen name="NewsFeed" component={NewsFeed} />
      <Drawer.Screen name="LeadScreen" component={LeadScreen} />
      <Drawer.Screen name="Employees" component={Employees} />
      <Drawer.Screen name="Projects" component={Projects} />
      <Drawer.Screen name="Tasks" component={Tasks} />
      <Drawer.Screen name="TimeLogs" component={TimeLogs} />
      <Drawer.Screen name="Expenses" component={Expenses} />
      <Drawer.Screen name="Library" component={Library} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Message" component={Message} />
      <Drawer.Screen name="NoticeBoard" component={NoticeBoard} />
      <Drawer.Screen name="ProfileSetting" component={ProfileSetting} />
    </Drawer.Navigator>
  );
};

function AllStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="AddLeadInfo" component={AddLeadInfo} options={{ headerShown: false }} />
      <Stack.Screen name="EmailTemplate" component={EmailTemplate} options={{ headerShown: false }} />
      <Stack.Screen name="ArchieveSub" component={ArchieveSub} />
      <Stack.Screen name="Projects" component={Projects} />
      <Drawer.Screen name="DashboardScreen" component={Dashboard} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return <AllStack />;
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#2277d7",
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  accordionHeaderText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
  },
  collapsibleContainer: {
    backgroundColor: "#4097fb",
  },
  collapsibleItem: {
    paddingVertical: 10,
    paddingLeft: 40,
  },
  collapsibleItemText: {
    fontSize: 14,
    color: 'white',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  drawerItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
  },
  selectedItem: {
    backgroundColor: "#212121", // Highlight selected item
  },
});

export default AppNavigator;
