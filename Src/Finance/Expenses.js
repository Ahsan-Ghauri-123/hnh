import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Animated, Dimensions, Switch } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/MaterialIcons';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from "react-native-modal";
import DocumentPicker from "react-native-document-picker";

const Expenses = (props) => {
    const [isToggled, setIsToggled] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selected, setSelected] = React.useState("");
    const [searchText, setSearchText] = useState('');
    const [isImportHovered, setIsImportHovered] = useState(false);
    const [isExportHovered, setIsExportHovered] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const slideAnim = new Animated.Value(-Dimensions.get("window").width);
    const [ismodal, setIsModal] = useState(false);
    const [isUploadHovered, setIsUploadHovered] = useState(false); // Hover state for the first button
    const [isBackHovered, setIsBackHovered] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const selectDoc = async () => {
        try {
            const doc = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
                allowMultiSelection: false,
            });
            setSelectedFile(doc[0]); // Save the selected file
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("User Cancelled a document", err);
            } else {
                console.log(err);
            }
        }
    };

    const removeFile = () => {
        setSelectedFile(null); // Remove the selected file
    };

    const IsOpenModal = () => {
        setIsModal(!ismodal);
    };
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
        { key: '1', value: 'Pending' },
        { key: '2', value: 'Approved' },
        { key: '4', value: 'Rejected' },
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
        'Item Name',
        'Price',
        'Employee',
        'Purchased From',
        'Purchased Date',
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
                <Text style={{ marginHorizontal: 8 }}>Status</Text>
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
                    }}>
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
                <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: 'black' }}>Expenses</Text>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("DashboardScreen");
                    }}>
                    <Text style={{ fontSize: hp(2), color: 'gray', fontWeight: 'bold', marginHorizontal: wp(5), marginTop: hp(1) }}>Home</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: hp(2), color: 'gray', fontWeight: 'bold', marginHorizontal: wp(1), marginTop: hp(1) }}>• Expenses</Text>
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
                        <Icon name="file-export" color="gray" size={hp(3)} style={{ marginHorizontal: wp(3) }} />
                        <Text style={{ marginTop: hp(0.3), fontWeight: "bold", color: "gray", fontSize: hp(2) }}>Export</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={IsOpenModal}
                    style={{
                        height: hp(6), width: wp(34), backgroundColor: "white", borderRadius: hp(2), marginTop: hp(3), shadowColor: "#000",
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
                        <Icons name="plus" color="gray" size={hp(3)} style={{ marginHorizontal: wp(1.2) }} />
                        <Text style={{ marginTop: hp(0.6), fontWeight: "bold", color: "gray", fontSize: hp(1.8) }}>Add Expenses</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Modal isVisible={ismodal}>
                <View style={{ flex: 1, backgroundColor: "white", borderRadius: wp(2) }}>
                    <TouchableOpacity onPress={IsOpenModal} style={{ marginLeft: wp(80), marginTop: hp(2) }}>
                        <Iconi name="cancel" size={hp(3.4)} />
                    </TouchableOpacity>
                    <ScrollView style={{ flex: 1, padding: wp(5) }}>
                        <Text style={{ fontSize: hp(3), fontWeight: 'bold', marginBottom: hp(2) }}>Add Expense</Text>
                        <View style={{
                            padding: wp(5),
                            backgroundColor: "#f1f9ff",
                            borderRadius: wp(3),
                            marginBottom: hp(2)
                        }}>
                            <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', marginBottom: hp(1) }}>Expense Details</Text>
                            <View style={{ height: 1, backgroundColor: "lightgray", marginBottom: hp(2) }} />
                            {/* Fields */}
                            {["Item Name", "Currency", "Price", "Purchased Date", "Project", "Expense Directory", "Purchased from"].map((label, index) => (
                                <View key={index} style={{ marginBottom: hp(2) }}>
                                    <Text style={{ marginBottom: hp(1), fontSize: hp(2) }}>{label}</Text>
                                    <TextInput
                                        placeholder={`Enter ${label}`}
                                        style={{
                                            height: hp(7),
                                            width: '100%',
                                            borderWidth: 1,
                                            borderRadius: wp(2),
                                            borderColor: "gray",
                                            paddingHorizontal: wp(3),
                                            backgroundColor: "white"
                                        }}
                                    />
                                </View>
                            ))}
                            <Text style={{ marginHorizontal: 12, marginTop: 33 }}>Upload File(file must be a file of type: xls, xlsx, csv, txt.)</Text>
                            <View style={{
                                height:hp(14), width: wp("65%"), backgroundColor: "lightgray", marginHorizontal:wp(2), marginTop:hp(2), borderRadius: wp(4), borderWidth:wp(0.4), borderColor: "gray", justifyContent: "center", alignItems: "center"
                            }}>
                                {!selectedFile ? (
                                    <TouchableOpacity onPress={selectDoc}>
                                        <Icons name="cloudupload" color="black" size={45} style={{ textAlign: "center" }} />
                                        <Text style={{ fontSize: 18, color: "black", textAlign: "center", marginTop: 10 }}>Choose a file</Text>
                                    </TouchableOpacity>
                                ) : (
                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ fontSize: 16, color: "black", marginRight: 10 }}>{selectedFile.name}</Text>
                                        <TouchableOpacity onPress={removeFile} style={{
                                            backgroundColor: "black",
                                            borderRadius: 15,
                                            paddingHorizontal: 10,
                                            paddingVertical: 5,
                                        }}>
                                            <Text style={{ color: "white", fontSize: 14 }}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                            <View>
                                <Switch
                                    trackColor={{ false: "gray", true: "#1d82f5" }}
                                    thumbColor={isToggled ? "#c0e0fa" : "#f4f3f4"}
                                    onValueChange={handleToggle}
                                    value={isToggled}
                                    style={{ marginRight: 226, marginTop: 15, borderRadius: 14 }}
                                />
                            </View>
                            <View style={{justifyContent:"center", alignItems:"center"}}>
                                <TouchableOpacity style={{
                                    backgroundColor: isUploadHovered ? "black" : "#46bae8",
                                    width:wp("55%"),
                                    borderRadius:wp(3),
                                    height:hp(7),
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                    onMouseEnter={() => setIsUploadHovered(true)}
                                    onMouseLeave={() => setIsUploadHovered(false)}>
                                    <Text style={{ textAlign: "center", fontWeight: "bold", color: isUploadHovered ? "white" : "black", fontSize:hp(2),  marginHorizontal:wp(5)}}>
                                        Saved
                                        <Icons name="checkcircle" color={isUploadHovered ? "white" : "black"} size={hp(2.5)} />
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
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
export default Expenses;

