
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Button, Animated, Dimensions, SafeAreaView, Modal } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/FontAwesome';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';
import Iso from 'react-native-vector-icons/MaterialIcons';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';

const LeadKanboard = () => {
    const [selected, setSelected] = React.useState("");
    const [searchText, setSearchText] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const slideAnim = new Animated.Value(-Dimensions.get("window").width);
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleOpenBottomSheet = (category) => {
        setSelectedCategory(category);
        setBottomSheetVisible(true);
    };

    const handleCloseBottomSheet = () => {
        setBottomSheetVisible(false);
        setSelectedCategory('');
    };

    const handleAction = (action) => {
        console.log(`${action} action on ${selectedCategory}`);
        handleCloseBottomSheet();
    };

    const renderBottomSheet = () => (
        <Modal
            transparent={true}
            animationType="slide"
            visible={isBottomSheetVisible}
            onRequestClose={handleCloseBottomSheet}
        >
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
                <View style={{
                    backgroundColor: 'white',
                    padding: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 15,
                    }}>
                    {selectedCategory}
                    </Text>
                    <TouchableOpacity
                        style={{
                            paddingVertical: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#ccc',
                        }}
                        onPress={() => handleAction('Add')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: 'black',
                        }}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            paddingVertical: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#ccc',
                        }}
                        onPress={() => handleAction('Edit')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: 'black',
                        }}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            paddingVertical: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#ccc',
                        }}
                        onPress={() => handleAction('Delete')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: 'black',
                        }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
            style={{ flex: 1, backgroundColor: "white" }}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} // Ensures the content is scrollable
        >
            {/* Date Selection */}
            <View style={{ flexDirection: "row", marginTop: 22, marginHorizontal: 15 }}>
                <Text style={{ marginTop: 15, marginHorizontal:15, fontSize:16 }}>Date: </Text>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={date}
                    placeholder="Start Date To End Date"
                    boxStyles={{ marginHorizontal: 38 }}
                    maxHeight={212}
                />
            </View>

            {/* Type Selection */}
            <View style={{ flexDirection: "row", marginTop: 12, marginHorizontal: 15 }}>
                <Text style={{ marginTop: 15, marginHorizontal:15, fontSize:16 }}>Type :</Text>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={dateRanges}
                    placeholder="All"
                    boxStyles={{ marginHorizontal: 55 }}
                    maxHeight={110}
                />
            </View>

            {/* Search Bar */}
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
                    <Icons name="search" size={24} color="gray" style={{ marginRight: 10 }} />
                    <TextInput
                        style={{ flex: 1, height: 40, width: 50 }}
                        placeholder="Start typing to search"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
            </View>

            {/* Filters Button */}
            <TouchableOpacity
                style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 15, alignItems: "center" }}
                onPress={() => toggleDrawer(true)}
            >
                <Icon name="filter" size={22} color="gray" />
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "gray", marginHorizontal: 12 }}>Filters</Text>
            </TouchableOpacity>
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
            {/* Leads Section */}
            <View style={{ marginHorizontal: 18, marginTop: 45 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Leads</Text>
                <View style={{ flexDirection: "row" }}>
                    {/* Add Lead Button */}
                    <TouchableOpacity style={{ marginTop: 14 }}>
                        <Text style={{ fontSize: 18, color: 'gray', fontWeight: 'bold' }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 12, marginTop: 14 }}>
                        <Text style={{ fontSize: 18, color: 'gray', fontWeight: 'bold' }}>• Leads</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginHorizontal: -6 }}>
                <TouchableOpacity style={{
                    height: 50, width: 100, backgroundColor: "#20b5e9", borderRadius: 16, marginTop: 24, shadowColor: "#000",
                    marginHorizontal: 33,
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,

                    elevation: 12
                }}>
                    <Iconi name="plus" color="black" size={18} style={{ marginTop: 5, marginHorizontal: 41 }} />
                    <Text style={{ textAlign: "center", marginTop: -3, fontWeight: "bold" }}>Add Lead</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        style={{
                            height: 48,
                            width: 55,
                            borderRadius: 8,
                            marginHorizontal: 8,
                            borderWidth: 2,
                            backgroundColor: 'white', // Setting background color to white
                            justifyContent: 'center', // Centering content vertically
                            alignItems: 'center', // Centering content horizontally
                            marginTop: 22,
                            borderColor: "gray",
                        }}
                    >
                        <Ico name="view-list" size={32} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: 48,
                            width: 55,
                            borderRadius: 8,
                            marginHorizontal: 45,
                            borderWidth: 2,
                            backgroundColor: 'black', // Setting background color to white
                            justifyContent: 'center', // Centering content vertically
                            alignItems: 'center', // Centering content horizontally
                            marginTop: 22,
                            borderColor: "gray",
                            marginLeft: -8
                        }}>
                        <Ico name="view-column" size={32} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Multiple Pending Sections */}
            <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            {['Pending', 'In Process', 'Converted'].map((category, index) => (
                <View key={index} style={{
                    height: 130,
                    width: '95%',
                    backgroundColor: '#c0e0fa',
                    borderRadius: 16,
                    marginTop: 22,
                    marginHorizontal: 12,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.36,
                    shadowRadius: 6.68,
                    elevation: 11,
                }}>
                    <Text style={{
                        marginTop: 8,
                        fontWeight: 'bold',
                        margin: 15,
                        fontSize: 18,
                        color: 'black',
                    }}>{category}</Text>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            backgroundColor: 'white',
                            borderRadius: 15,
                            padding: 4,
                            elevation: 5,
                        }}
                        onPress={() => handleOpenBottomSheet(category)}
                    >
                        <Iso name="cancel" size={22} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 50,
                        width: '88%',
                        backgroundColor: 'white',
                        borderRadius: 6,
                        marginTop: 2,
                        marginHorizontal: 12,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 1.36,
                        shadowRadius: 6.68,
                        elevation: 9,
                        justifyContent: 'center',
                    }}>
                    <Iconi name="plus" color="gray" size={22} style={{ marginTop: 5, marginHorizontal:85 }} />
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: 'gray',
                            fontSize: 16,
                            marginTop: -22,
                        }}>Add Lead</Text>
                    </TouchableOpacity>
                    
                </View>
            ))}
            {renderBottomSheet()}
        </View>

        </ScrollView>
        </SafeAreaView>
    );
};

export default LeadKanboard;