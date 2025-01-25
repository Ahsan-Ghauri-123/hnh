import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Button, Animated, Dimensions } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/FontAwesome';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';


const LeadScreen = (props) => {
  const [selected, setSelected] = React.useState("");
  const [searchText, setSearchText] = useState('');
  const [isImportHovered, setIsImportHovered] = useState(false);
  const [isExportHovered, setIsExportHovered] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const slideAnim = new Animated.Value(-Dimensions.get("window").width);

  const toggleDrawer = (open) => {
    Animated.timing(slideAnim, {
      toValue: open ? 0 : -Dimensions.get("window").width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (!open) setIsDrawerOpen(false);
    });
    setIsDrawerOpen(open);
  };

  const dateRanges = [
    { key: '1', value: 'All' },
    { key: '2', value: 'Leads' },
    { key: '3', value: 'Clients' },
  ];
  const date = [
    { key: '1', value: 'Today' },
    { key: '2', value: 'Last 30 Days' },
    { key: '3', value: 'This Month' },
    { key: '4', value: 'Last Month' },
    { key: '5', value: 'Last 90 Days' },
    { key: '6', value: 'Last 6 Months' },
    { key: '7', value: 'Last 1 Year' },
    { key: '8', value: 'Custom Range' },
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
  const exportToExcel = () => {
    try {
      // Create a new workbook and worksheet
      const wb = XLSX.utils.book_new();
      const wsData = [headers, ...data.map((row) => [
        row.id,
        row.name,
        row.brand,
        row.created,
        row.followUp,
        row.agent,
        row.status,
        row.action,
      ])];
      const ws = XLSX.utils.aoa_to_sheet(wsData);

      // Append worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, 'Leads');

      // Write the workbook to a temporary file
      const wbOut = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
      const path = `${RNFS.DownloadDirectoryPath}/LeadsData.xlsx`;

      // Save file to the Downloads directory
      RNFS.writeFile(path, wbOut, 'ascii')
        .then(() => {
          Alert.alert('Success', `File exported to: ${path}`);
        })
        .catch((err) => {
          Alert.alert('Error', `Failed to save file: ${err.message}`);
        });
    } catch (error) {
      Alert.alert('Error', `An error occurred: ${error.message}`);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", marginTop: 22, marginHorizontal: 15 }}>
        <Text style={{ marginTop: 12 }}>Date: </Text>
        <SelectList
          setSelected={(val) => setSelected(val)} // Set the selected value
          data={date} // Provide date range options
          save="value" // Save the selected value in the state
          placeholder="Start Date To End Date"
          boxStyles={{ marginHorizontal: 22 }}
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
      <View style={{ flexDirection: "row", marginTop: 22, marginHorizontal: 15 }}>
        <Text style={{ marginHorizontal: 8 }}>Type</Text>
        <SelectList
          setSelected={(val) => setSelected(val)} // Set the selected value
          data={dateRanges} // Provide date range options
          save="value" // Save the selected value in the state
          placeholder="All"
          boxStyles={{ marginHorizontal: 52 }}
          maxHeight={112}
          boxStyles={{
            borderWidth: 1, // Remove border
            backgroundColor: 'white',
            marginHorizontal: 12, marginBottom: 8 // Make background transparent
          }}
          dropdownStyles={{
            borderWidth: 1, // Remove dropdown border
            backgroundColor: '#f8f9fa', // Optional: Light background for dropdown
          }}// Placeholder text for the dropdown
        />
      </View>
      <View style={{ marginTop: 15 }}>
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
          <Icons name="search" size={24} color="gray" style={{
            marginRight: 10,
            backgroundColor: "lightgray"
          }} />
          <TextInput
            style={{
              flex: 1,
              height: 40,
              width: 50
            }}
            placeholder="Start typing to search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View >
      {/* Trigger Button */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          marginTop: 15,
          alignItems: "center",
        }}
        onPress={() => toggleDrawer(true)}
      >
        <Icon name="filter" size={22} color="gray" />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "gray",
            marginHorizontal: 12,
          }}
        >
          Filters
        </Text>
      </TouchableOpacity>

      {/* Sliding Drawer */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "80%",
          backgroundColor: "white",
          zIndex: 1000,
          elevation: 5,
          padding: 15,
          transform: [{ translateX: slideAnim }],
        }}
      >
        {/* Cancel Icon */}
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={() => toggleDrawer(false)}
        >
          <Ico name="close" size={24} color="gray" />
        </TouchableOpacity>

        {/* Filter Options */}
        <View style={{ marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 10,
            }}
          >
            Choose Agent
          </Text>
          <TextInput
            placeholder="Search Agent"
            style={{
              height: 40,
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
              fontSize: 16,
              backgroundColor: "#f9f9f9",
            }}
            placeholderTextColor="#999"
          />
        </View>

        <View style={{ marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 10,
            }}
          >
            Lead Source
          </Text>
          <TextInput
            placeholder="Search Lead Source"
            style={{
              height: 40,
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
              fontSize: 16,
              backgroundColor: "#f9f9f9",
            }}
            placeholderTextColor="#999"
          />
        </View>

        <View style={{ marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 10,
            }}
          >
            Lead Category
          </Text>
          <TextInput
            placeholder="Search Lead Category"
            style={{
              height: 40,
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
              fontSize: 16,
              backgroundColor: "#f9f9f9",
            }}
            placeholderTextColor="#999"
          />
        </View>
      </Animated.View>
      <View
        style={{
          backgroundColor: '#c0e0fa',
          marginTop: 45,
          width: '90%',
          marginHorizontal: 18,
          borderRadius: 22,
          borderWidth: 0.2,
          padding: 12,
          height: 620,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 9.49,

          elevation: 12,
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 3 }}>
          <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>
            Leads
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', marginHorizontal: 22, marginTop: 6 }}>
              Home
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', marginHorizontal: -15, marginTop: 6 }}>
            • Leads
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginHorizontal: -6 }}>
          <TouchableOpacity 
          onPress={()=>{
            props.navigation.navigate("AddLeadInfo");
          }}
          style={{
            height: 50, width: 100, backgroundColor: "#20b5e9", borderRadius: 16, shadowColor: "#000",
            marginHorizontal: 33,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12
          }}>
            <Iconi name="plus" color="black" size={22} style={{ marginTop: 5, marginHorizontal: 41 }} />
            <Text style={{ textAlign: "center", marginTop: -3, fontWeight: "bold" }}>Add Lead</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>{
            props.navigation.navigate("EmailTemplate");
          }}
          style={{
            height: 50, width: 100, backgroundColor: "#20b5e9", borderRadius: 18,  marginHorizontal: 25, shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12
          }}>
            <Iconi name="plus" color="black" size={22} style={{ marginTop: 5, marginHorizontal: 39 }} />
            <Text style={{ textAlign: "center", marginTop: -6, fontWeight: "bold" }}>Email Template</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity
        style={[
          {
            height: 50,
            width: 110,
            backgroundColor: isExportHovered ? 'black' : 'white',
            borderRadius: 18,
            borderWidth: 0.2,
            marginTop: 22,
            marginHorizontal:22,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
          },
        ]}
        onPress={exportToExcel}
        onMouseEnter={() => setIsExportHovered(true)}
        onMouseLeave={() => setIsExportHovered(false)}
      >
        <Icon name="file-export" size={22} color="black" style={{ marginTop: 5, marginHorizontal: 44 }} />
        <Text style={{ textAlign: "center", marginTop: 12, color: "gray", fontSize: 17, marginTop: -6, fontWeight: "bold" }}>Export</Text>
      </TouchableOpacity>
      <TouchableOpacity
      // onPress={()=>{
      //   props.navigation.navigate("ImportLeadScreen");
      // }}
      style={[
        {
          height: 50,
          width: 100,
          backgroundColor: isImportHovered ? 'black' : 'white',
          borderRadius: 18,
          marginHorizontal: 25,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 14,
          marginTop:22,
        },
      ]}
      onPress={() => console.log("Import button pressed")}
      onMouseEnter={() => setIsImportHovered(true)}
      onMouseLeave={() => setIsImportHovered(false)}
    >
      <Icon name="file-export" size={22} color="black" style={{ marginTop: 5, marginHorizontal: 36 }} />
      <Text style={{ textAlign: "center", marginTop: 12, color: "gray", fontSize: 16, marginTop: -3, fontWeight: "bold" }}>Import</Text>
    </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              height: 55,
              width: 60,
              borderRadius: 8,
              borderWidth: 2,
              backgroundColor: 'black', // Setting background color to white
              justifyContent: 'center', // Centering content vertically
              alignItems: 'center', // Centering content horizontally
              marginTop: 22,
              borderColor: "gray",
            }}
          >
            <Ico name="view-list" size={42} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={()=>{
      //   props.navigation.navigate("LeadKanboard");
      // }}
            style={{
              height: 55,
              width: 60,
              borderRadius: 8,
              borderWidth: 2,
              backgroundColor: 'white', // Setting background color to white
              justifyContent: 'center', // Centering content vertically
              alignItems: 'center', // Centering content horizontally
              marginTop: 22,
              borderColor: "gray",
              marginLeft: -8
            }}
          >
            <Ico name="view-column" size={45} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 20,
          marginHorizontal: 10,
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 8
        }}>
          <ScrollView horizontal>
            <ScrollView>
              <View>
                {/* Table Header */}
                <View style={{
                  flexDirection: 'row',
                  backgroundColor: '#20b5e9',
                  paddingVertical: 10
                }}>
                  {headers.map((header, index) => (
                    <View key={index} style={{
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 5
                    }}>
                      <Text style={{
                        fontWeight: 'bold',
                        color: 'white'
                      }}>{header}</Text>
                    </View>
                  ))}
                </View>

                {/* Table Rows */}
                {data.map((row, rowIndex) => (
                  <View key={rowIndex} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#ddd', paddingVertical: 10 }}>
                    <Text style={{ width: 100, textAlign: 'center' }}>{row.id}</Text>
                    <Text style={{ width: 100, textAlign: 'center' }}>{row.name}</Text>
                    <Text style={{ width: 100, textAlign: 'center' }}>{row.brand}</Text>
                    <Text style={{ width: 100, textAlign: 'center' }}>{row.created}</Text>
                    <Text style={{ width: 100, textAlign: 'center' }}>{row.followUp}</Text>
                    <Text style={{ width: 100, textAlign: 'center' }}>{row.agent}</Text>
                    {/* Display status with a dropdown under it */}
                    {rowIndex === 0 || rowIndex === 1 ? (
                      <SelectList
                        setSelected={(val) => row.status = val} // Update status for the row
                        data={[
                          { key: '1', value: 'In Process' },
                          { key: '2', value: 'Converted' },
                          { key: '3', value: 'Pending' },
                        ]}
                        save="value"
                        placeholder={row.status}
                        boxStyles={{
                          backgroundColor: 'white',
                          borderWidth: 1,
                          width: 110,
                        }}
                        dropdownStyles={{
                          backgroundColor: '#f8f9fa',
                          borderWidth: 1,
                        }}
                      />
                    ) : (
                      <Text style={{ width: 80, textAlign: 'center' }}>{row.status}</Text> // Default status value for other rows
                    )}
                    {rowIndex === 0 || rowIndex === 1 ? (
                      <SelectList
                        setSelected={(val) => row.action = val} // Update status for the row
                        data={[
                          { key: '1', value: 'View' ? <Iconi name="eye" size={18} /> : "null" },
                          { key: '2', value: 'Chnage to client' ? <Ico name="contacts" size={22} /> : "null" },
                          { key: '3', value: 'Add follow up' ? <Icon name="thumbs-up" size={22} />: "null" },
                        ]}
                        save="value"
                        placeholder={row.action}
                        boxStyles={{
                          backgroundColor: 'white',
                          borderWidth: 1,
                          width: 90,
                        }}
                        dropdownStyles={{
                          backgroundColor: '#f8f9fa',
                          borderWidth: 1,
                        }}
                      />
                    ) : (
                      <Text style={{ width: 80, textAlign: 'center' }}>{row.action}</Text> // Default status value for other rows
                    )}
                  </View>
                ))}
              </View>
              <Text style={{ marginHorizontal: 75, fontSize: 18, fontWeight: "bold", color: "black" }}>Showing 1 to 2 Items</Text>

            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};
export default LeadScreen;


// // <View style={{flexDirection:"row"}}>
// <View style={{
//   height: 55,
//   width: 120,
//   borderRadius: 18,
//   borderWidth: 1,
//   marginTop: 22,
//   backgroundColor: 'white',
//   justifyContent:"center",
//   alignItems:"center",
// }}>
// <Text style={{fontSize:17, fontWeight:"black"}}>Previous</Text>
// </View>
// <TouchableOpacity
// style={{
// height: 55,
// width: 80,
// borderRadius: 18,
// borderWidth: 1,
// backgroundColor: "#20b5e9", // Setting background color to white
// justifyContent: 'center', // Centering content vertically
// alignItems: 'center', // Centering content horizontally
// marginTop: 22,
// marginHorizontal:15,
// }}
// >
// <Text style={{fontSize:28}}>1</Text>
// </TouchableOpacity>