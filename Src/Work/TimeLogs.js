import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Button, Animated, Dimensions } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/FontAwesome';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TimeLogs = (props) => {
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
        { key: '1', value: 'Muhammad Ahsan' },
        { key: '2', value: 'Abdullah Yafai' },
        { key: '4', value: 'Ahmed Khan' },
        { key: '5', value: 'Ahmed Salar' },
        { key: '6', value: 'Ahsan Iqbal' },
        { key: '7', value: 'Ayan Khan' },
        { key: '7', value: 'Daniyal' },
        { key: '7', value: 'Faiz' },
        { key: '7', value: 'Hammad' },
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
        'Task',
        'Employee',
        'Start time',
        'End Time',
        'TotalHours',
        'Earnings',
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
                <Text style={{ marginHorizontal: 8 }}>Employee</Text>
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
                    <Icons name="search1" size={hp(4)} color="gray" style={{
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
            <View style={{ marginHorizontal: wp(8), flexDirection: "row", marginTop: hp(3) }}>
                <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: 'black' }}>Tasks</Text>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("DashboardScreen");
                    }}>
                    <Text style={{ fontSize: hp(2), color: 'gray', fontWeight: 'bold', marginHorizontal: wp(5), marginTop: hp(1) }}>Home</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: hp(2), color: 'gray', fontWeight: 'bold', marginHorizontal: wp(1), marginTop: hp(1) }}>• Tasks</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: hp(3) }}>
                <TouchableOpacity style={{
                    height: hp(6), width: 100, backgroundColor: "white", borderRadius: hp(2), marginTop: hp(3), shadowColor: "#000",
                    marginHorizontal: wp(8),
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                }}>
                    <View style={{ flexDirection: "row", marginTop: hp(1) }}>
                        <Icon name="file-export" color="gray" size={hp(3)} style={{ marginHorizontal: wp(2) }} />
                        <Text style={{ marginTop: hp(0.1), fontWeight: "bold", color: "gray", fontSize: hp(2.5) }}>Export</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: hp(6), width: 100, backgroundColor: "white", borderRadius: hp(2), marginTop: hp(3), shadowColor: "#000",
                    marginHorizontal: wp(8),
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                }}>
                    <View style={{ flexDirection: "row", marginTop: hp(1) }}>
                        <Icons name="plus" color="gray" size={hp(3)} style={{ marginHorizontal: wp(0.4) }} />
                        <Text style={{ marginTop: hp(0.1), fontWeight: "bold", color: "gray", fontSize: hp(2.3) }}>Log Time</Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent:"center", alignItems:"center", marginTop:hp(2)}}>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("Tasks");
                        }}
                        style={{
                            height: hp(6.5),
                            width: wp(12),
                            borderRadius: wp(3),
                            marginHorizontal: wp(1),
                            borderWidth: wp(0.5),
                            backgroundColor: 'black', // Setting background color to white
                            justifyContent: 'center', // Centering content vertically
                            alignItems: 'center', // Centering content horizontally
                            marginTop: hp(2.5),
                            borderColor: "gray",
                        }}
                    >
                        <Ico name="view-list" size={hp(3.4)} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("LeadKanboard");
                        }} style={{
                            height: hp(6.5),
                            width: wp(12),
                            borderRadius: wp(3),
                            marginHorizontal: wp(1),
                            borderWidth: wp(0.5),
                            backgroundColor: 'white', // Setting background color to white
                            justifyContent: 'center', // Centering content vertically
                            alignItems: 'center', // Centering content horizontally
                            marginTop: hp(2.5),
                            borderColor: "gray",
                        }}>
                        <Icons name="contacts" size={hp(3.2)} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("LeadKanboard");
                        }}
                        style={{
                            height: hp(6.5),
                            width: wp(12),
                            borderRadius: wp(3),
                            marginHorizontal: wp(1),
                            borderWidth: wp(0.5),
                            backgroundColor: 'white', // Setting background color to white
                            justifyContent: 'center', // Centering content vertically
                            alignItems: 'center', // Centering content horizontally
                            marginTop: hp(2.5),
                            borderColor: "gray",
                        }}>
                        <Icon name="calendar" size={hp(3.4)} color="black" />
                    </TouchableOpacity>
                </View>
            <ScrollView horizontal>
                <ScrollView>
                    <View>
                        {/* Table Header */}
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#20b5e9',
                            paddingVertical: wp(3),
                            marginTop: hp(5),
                            marginHorizontal: hp(2)
                        }}>
                            {headers.map((header, index) => (
                                <View key={index} style={{
                                    width: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 5,
                                    borderRadius: wp(3)
                                }}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}>{header}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <Text style={{ textAlign: "center", marginTop: 16, fontSize: 16, fontWeight: "110" }}>No data avaialable here</Text>
                    <Text style={{ marginTop: hp(3), fontSize: 16, fontWeight: hp(3), marginHorizontal: wp(6) }}>Showing 0 to 0 of 0 entries</Text>
                </ScrollView>
            </ScrollView>
        </ScrollView>
    );
};
export default TimeLogs;

