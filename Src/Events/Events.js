// import React, { useState } from 'react';
// import { Text, View, TextInput, TouchableOpacity, ScrollView, Button, Animated, Dimensions } from 'react-native';
// import { SelectList } from 'react-native-dropdown-select-list'
// import Icons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Iconi from 'react-native-vector-icons/FontAwesome';
// import Ico from 'react-native-vector-icons/MaterialCommunityIcons';
// import XLSX from 'xlsx';
// import RNFS from 'react-native-fs';
// import {Calendar, LocaleConfig} from 'react-native-calendars';

// const Events= (props) => {
//   const [selected, setSelected] = React.useState("");
//   const [searchText, setSearchText] = useState('');
//   const [isImportHovered, setIsImportHovered] = useState(false);
//   const [isExportHovered, setIsExportHovered] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const slideAnim = new Animated.Value(-Dimensions.get("window").width);

//   const toggleDrawer = (open) => {
//     Animated.timing(slideAnim, {
//       toValue: open ? 0 : -Dimensions.get("window").width,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       if (!open) setIsDrawerOpen(false);
//     });
//     setIsDrawerOpen(open);
//   };

//   const dateRanges = [
//     { key: '1', value: 'All' },
//     { key: '2', value: 'Leads' },
//     { key: '3', value: 'Clients' },
//   ];
//   const date = [
//     { key: '1', value: 'Today' },
//     { key: '2', value: 'Last 30 Days' },
//     { key: '3', value: 'This Month' },
//     { key: '4', value: 'Last Month' },
//     { key: '5', value: 'Last 90 Days' },
//     { key: '6', value: 'Last 6 Months' },
//     { key: '7', value: 'Last 1 Year' },
//     { key: '8', value: 'Custom Range' },
//   ];
//   const headers = [
//     'Id',
//     'Name',
//     'BrandName',
//     'Created',
//     'NextFollow Up',
//     'LeadAgent',
//     'Status',
//     'Action'
//   ];
//   const data = [
//     {
//       id: 2,
//       name: 'Dr Anika Munoz',
//       brand: '',
//       created: '12-12-2024',
//       followUp: '---',
//       agent: 'Muhammad Hussain Laravel Developer',
//       status: 'In Process',
//       action: '...',
//     },
//     {
//       id: 1,
//       name: 'Sir Francis Carrilo',
//       brand: '',
//       created: '28-09-2024',
//       followUp: '---',
//       agent: 'Muhammad Hussain Laravel Developer',
//       status: 'In Process',
//       action: '...',
//     },
//   ];
//   const exportToExcel = () => {
//     try {
//       // Create a new workbook and worksheet
//       const wb = XLSX.utils.book_new();
//       const wsData = [headers, ...data.map((row) => [
//         row.id,
//         row.name,
//         row.brand,
//         row.created,
//         row.followUp,
//         row.agent,
//         row.status,
//         row.action,
//       ])];
//       const ws = XLSX.utils.aoa_to_sheet(wsData);

//       // Append worksheet to workbook
//       XLSX.utils.book_append_sheet(wb, ws, 'Leads');

//       // Write the workbook to a temporary file
//       const wbOut = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
//       const path = `${RNFS.DownloadDirectoryPath}/LeadsData.xlsx`;

//       // Save file to the Downloads directory
//       RNFS.writeFile(path, wbOut, 'ascii')
//         .then(() => {
//           Alert.alert('Success', `File exported to: ${path}`);
//         })
//         .catch((err) => {
//           Alert.alert('Error', `Failed to save file: ${err.message}`);
//         });
//     } catch (error) {
//       Alert.alert('Error', `An error occurred: ${error.message}`);
//     }
//   };

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
//       <View style={{ flexDirection: "row", marginTop: 22, marginHorizontal: 15 }}>
//         <Text style={{ marginTop: 12 }}>Employee: </Text>
//         <SelectList
//           setSelected={(val) => setSelected(val)} // Set the selected value
//           data={date} // Provide date range options
//           save="value" // Save the selected value in the state
//           placeholder="All"
//           boxStyles={{ marginHorizontal: 22 }}
//           maxHeight={212}
//           boxStyles={{
//             borderWidth: 0, // Remove border
//             backgroundColor: 'transparent', // Make background transparent
//           }}
//           dropdownStyles={{
//             borderWidth: 0, // Remove dropdown border
//             backgroundColor: '#f8f9fa', // Optional: Light background for dropdown
//           }}// Placeholder text for the dropdown
//         />
//       </View>
//       <View style={{ flexDirection: "row", marginTop: 22, marginHorizontal: 15 }}>
//         <Text style={{ marginHorizontal: 8 }}>Clients: </Text>
//         <SelectList
//           setSelected={(val) => setSelected(val)} // Set the selected value
//           data={dateRanges} // Provide date range options
//           save="value" // Save the selected value in the state
//           placeholder="All"
//           boxStyles={{ marginHorizontal: 52 }}
//           maxHeight={112}
//           boxStyles={{
//             borderWidth: 1, // Remove border
//             backgroundColor: 'white',
//             marginHorizontal: 12, marginBottom: 8 // Make background transparent
//           }}
//           dropdownStyles={{
//             borderWidth: 1, // Remove dropdown border
//             backgroundColor: '#f8f9fa', // Optional: Light background for dropdown
//           }}// Placeholder text for the dropdown
//         />
//       </View>
//       <View style={{ marginTop: 15 }}>
//         <View style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           borderWidth: 1,
//           borderRadius: 8,
//           paddingHorizontal: 10,
//           borderColor: '#ddd',
//           width: '88%',
//           height: 50,
//           marginHorizontal: 12
//         }}>
//           <Icons name="search" size={24} color="gray" style={{
//             marginRight: 10,
//             backgroundColor: "lightgray"
//           }} />
//           <TextInput
//             style={{
//               flex: 1,
//               height: 40,
//               width: 50
//             }}
//             placeholder="Start typing to search"
//             value={searchText}
//             onChangeText={setSearchText}
//           />
//         </View>
//       </View >
//       <View style={{ flexDirection: "row", marginHorizontal: 22, marginTop:22 }}>
//       <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>
//       Events
//       </Text>
//       <TouchableOpacity>
//         <Text style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', marginHorizontal: 22, marginTop: 6 }}>
//           Home
//         </Text>
//       </TouchableOpacity>
//       <Text style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', marginHorizontal: -15, marginTop: 6 }}>
//         • Events
//       </Text>
//     </View>
      
//       <View
//         style={{
//           backgroundColor: 'white',
//           marginTop: 45,
//           width: '90%',
//           marginHorizontal: 18,
//           borderRadius: 22,
//           borderWidth: 0.2,
//           padding: 12,
//           height: 620,
//           shadowColor: "#000",
//           shadowOffset: {
//             width: 0,
//             height: 6,
//           },
//           shadowOpacity: 0.37,
//           shadowRadius: 9.49,

//           elevation: 12,
//         }}
//       >
//       <Calendar
//       onDayPress={day => {
//         setSelected(day.dateString);
//       }}
//       markedDates={{
//         [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
//       }}
//     />
//       </View>
//     </ScrollView>
//   );
// };
// export default Events;

import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Icons from "react-native-vector-icons/Ionicons";
import { Calendar } from "react-native-calendars";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Events = (props) => {
  const [selected, setSelected] = useState("");
  const [calendarView, setCalendarView] = useState("month"); // Tracks the current view (month/week/day)
  const [searchText, setSearchText] = useState('');
  const [isImportHovered, setIsImportHovered] = useState(false);
  const [isExportHovered, setIsExportHovered] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const getWeeksInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const weeks = [];
    let currentWeek = [];

    for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
      currentWeek.push(d.toISOString().split("T")[0]); // Push day in YYYY-MM-DD format
      if (d.getDay() === 6 || d.getTime() === lastDay.getTime()) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    }

    return weeks;
  };

  const renderCalendarContent = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    if (calendarView === "month") {
      return (
        <Calendar
          onDayPress={(day) => setSelected(day.dateString)}
          markedDates={{
            [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: "orange" },
          }}
        />
      );
    } else if (calendarView === "week") {
      const weeks = getWeeksInMonth(currentMonth, currentYear);
      return (
        <View style={{ paddingVertical: hp(2) }}>
          {weeks.map((week, index) => (
            <View key={index} style={styles.weekContainer}>
              <Text style={styles.weekText}>Week {index + 1}: {week.join(", ")}</Text>
            </View>
          ))}
        </View>
      );
    } else if (calendarView === "day") {
      const currentWeek = getWeeksInMonth(currentMonth, currentYear).find((week) =>
        week.includes(currentDate.toISOString().split("T")[0])
      );
      return (
        <View style={{ paddingVertical: hp(2) }}>
          {currentWeek.map((day, index) => (
            <Text key={index} style={styles.dayText}>{day}</Text>
          ))}
        </View>
      );
    }
  };

  const dateRanges = [
    { key: '1', value: 'Aww' },
    { key: '2', value: 'Ads' },
    { key: '3', value: 'Admaps' },
    { key: '4', value: 'Ballpark' },
  ];
  const date = [
    { key: '1', value: 'Muhammad Ahsan' },
    { key: '2', value: 'Muhammad Faiz' },
    { key: '3', value: 'Ahtisham' },
    { key: '4', value: 'Muhammad Bilal' },
    { key: '5', value: 'Muhammad Adil' },
    { key: '6', value: 'Danial' },
    { key: '7', value: 'Arham' },
    { key: '8', value: 'Ahmed Salar' },
];
  const headers = [
    'Id',
    'Name',
    'BrandName',
    'Created',
    'NextFollow Up',
    'LeadAgent',
    'Status',
    'Action'
  ];
  const data = [
    {
      id: 2,
      name: 'Dr Anika Munoz',
      brand: '',
      created: '12-12-2024',
      followUp: '---',
      agent: 'Muhammad Hussain Laravel Developer',
      status: 'In Process',
      action: '...',
    },
    {
      id: 1,
      name: 'Sir Francis Carrilo',
      brand: '',
      created: '28-09-2024',
      followUp: '---',
      agent: 'Muhammad Hussain Laravel Developer',
      status: 'In Process',
      action: '...',
    },
  ];
  return (
    <ScrollView style={styles.container}>
    <View style={{ flexDirection: "row", marginTop:hp(3), marginHorizontal:wp(6) }}>
           <Text style={{ marginTop:hp(1.3)}}>Employee: </Text>
           <SelectList
              setSelected={(val) => setSelected(val)} // Set the selected value
              data={date} // Provide date range options
              save="value" // Save the selected value in the state
              placeholder="All"
              boxStyles={{ marginHorizontal:wp(2)}}
              maxHeight={212}
              boxStyles={{
                borderWidth: 0, // Remove border
                backgroundColor: 'transparent', // Make background transparent
              }}
              dropdownStyles={{
                borderWidth: 0, // Remove dropdown border
                backgroundColor: '#f8f9fa', // Optional: Light background for dropdown
              }}// Placeholder text for the dropdown
            />
          </View>
          <View style={{ flexDirection: "row", marginTop:hp(3), marginHorizontal:wp(7) }}>
            <Text style={{ marginHorizontal: 8 }}>Clients: </Text>
            <SelectList
              setSelected={(val) => setSelected(val)} // Set the selected value
              data={dateRanges} // Provide date range options
              save="value" // Save the selected value in the state
              placeholder="All"
              boxStyles={{ marginHorizontal:wp(3)}}
              maxHeight={112}
              boxStyles={{
                borderWidth: 1, // Remove border
                backgroundColor: 'white',
                marginHorizontal:wp(2), marginBottom:wp(3) // Make background transparent
              }}
              dropdownStyles={{
                borderWidth: 1, // Remove dropdown border
                backgroundColor: '#f8f9fa', // Optional: Light background for dropdown
              }}// Placeholder text for the dropdown
            />
          </View>
          <View style={{ marginTop:hp(3)}}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
              borderColor: '#ddd',
              width: '88%',
              height: 50,
              marginHorizontal: 12
            }}>
              <Icons name="search" size={hp(3.4)} color="gray" style={{
                marginRight:hp(2),
                backgroundColor: "lightgray"
              }} />
              <TextInput
                style={{
                  flex: 1
                }}
                placeholder="Start typing to search"
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
          </View >

      <View style={styles.header}>
        <Text style={styles.headerText}>Events</Text>
        <TouchableOpacity>
          <Text style={styles.subHeaderText}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.subHeaderText}>• Events</Text>
      </View>

      <View style={styles.calendarWrapper}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, calendarView === "month" && styles.activeButton]}
            onPress={() => setCalendarView("month")}
          >
            <Text style={styles.buttonText}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, calendarView === "week" && styles.activeButton]}
            onPress={() => setCalendarView("week")}
          >
            <Text style={styles.buttonText}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, calendarView === "day" && styles.activeButton]}
            onPress={() => setCalendarView("day")}
          >
            <Text style={styles.buttonText}>Day</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.calendarContent}>{renderCalendarContent()}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    marginHorizontal: wp(11),
    marginTop: hp(2.3),
  },
  headerText: {
    fontSize: wp(5),
    fontWeight: "bold",
    color: "black",
  },
  subHeaderText: {
    fontSize: wp(4),
    color: "gray",
    marginLeft: wp(4),
    marginTop: hp(0.5),
  },
  calendarWrapper: {
    backgroundColor: "white",
    marginTop: hp(3),
    width: wp(90),
    alignSelf: "center",
    borderRadius: wp(5),
    borderWidth: 0.2,
    padding: wp(4),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 9.49,
    elevation: 12,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: hp(2),
  },
  button: {
    backgroundColor: "#e1effa",
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
  },
  activeButton: {
    backgroundColor: "#0f8df5",
  },
  buttonText: {
    fontSize: wp(4),
    color: "white",
  },
  calendarContent: {
    paddingVertical: hp(2),
  },
  weekContainer: {
    marginBottom: hp(1),
  },
  weekText: {
    fontSize: wp(4),
    color: "black",
  },
  dayText: {
    fontSize: wp(4),
    color: "black",
    marginBottom: hp(1),
  },
});

export default Events;
