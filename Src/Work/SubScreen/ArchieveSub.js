
import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Animated,
    Dimensions,
    SafeAreaView,
    Modal,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';
import Iso from "react-native-vector-icons/Feather";
import Is from "react-native-vector-icons/AntDesign";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ArchieveSub = (props) => {
    const [selected, setSelected] = useState("");
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
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <View
                    style={{
                        backgroundColor: 'white',
                        padding: wp(5),
                        borderTopLeftRadius: wp(5),
                        borderTopRightRadius: wp(5),
                    }}
                >
                    <Text style={{ fontSize: wp(4.5), fontWeight: 'bold', marginBottom: hp(2) }}>
                        {selectedCategory}
                    </Text>
                    {['Add', 'Edit', 'Delete'].map((action, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                paddingVertical: hp(1.5),
                                borderBottomWidth: 1,
                                borderBottomColor: '#ccc',
                            }}
                            onPress={() => handleAction(action)}
                        >
                            <Text style={{ fontSize: wp(4), color: 'black' }}>{action}</Text>
                        </TouchableOpacity>
                    ))}
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

    const headers = [
        'Id',
        'Project Name',
        'Members',
        'Deadline',
        'Client',
        'Status',
        'Progress',
        'Action'
      ];
    const dateRanges = [
        { key: '1', value: 'Only in Progress & Not Started' },
        { key: '2', value: 'Hide Finished Projects' },
        { key: '3', value: 'All' },
        { key: '4', value: 'Over due' },
        { key: '5', value: 'Not Started' },
        { key: '6', value: 'In Progress' },
        { key: '7', value: 'On Hold' },
        { key: '8', value: 'Finished' },
    ];
    const date = [
        { key: '1', value: 'All' },
        { key: '2', value: 'Aww' },
        { key: '3', value: 'Ads' },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView
                style={{ flex: 1, backgroundColor: "white" }}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: hp(5) }}
            >
                {/* Date Selection */}
                <View style={{ flexDirection: "row", marginTop: hp(2), marginHorizontal: wp(4) }}>
                    <Text style={{ marginTop: hp(1), fontSize: wp(4) }}>Client Name: </Text>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={date}
                        placeholder="All"
                        boxStyles={{ marginHorizontal: wp(4) }}
                        maxHeight={hp(28)}
                    />
                </View>

                {/* Type Selection */}
                <View style={{ flexDirection: "row", marginTop: hp(1.5), marginHorizontal: wp(4) }}>
                    <Text style={{ marginTop: hp(1), fontSize: wp(4) }}>Status: </Text>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={dateRanges}
                        placeholder="Only In Process & not started"
                        boxStyles={{ marginHorizontal: wp(4) }}
                        maxHeight={hp(18)}
                    />
                </View>

                {/* Search Bar */}
                <View style={{ marginTop: hp(4.5) }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: wp(2),
                            paddingHorizontal: wp(3),
                            borderColor: '#ddd',
                            width: wp(88),
                            height: hp(6),
                            marginHorizontal: wp(4),
                        }}
                    >
                        <Icons name="search" size={wp(5)} color="gray" style={{ marginRight: wp(2) }} />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Start typing to search"
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                    </View>
                </View>

                {/* Filters Button */}
                <TouchableOpacity
                    style={{ flexDirection: "row", marginHorizontal: wp(7), marginTop: hp(6), alignItems: "center" }}
                    onPress={() => toggleDrawer(true)}
                >
                    <Icon name="filter" size={wp(5)} color="gray" />
                    <Text style={{ fontSize: wp(4.5), fontWeight: "bold", color: "gray", marginHorizontal: wp(3) }}>
                        Filters
                    </Text>
                </TouchableOpacity>
                <Animated.View
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: wp(88),
                        backgroundColor: "white",
                        zIndex: 1000,
                        elevation: 5,
                        padding: hp(2),
                        transform: [{ translateX: slideAnim }],
                    }}
                >
                    {/* Cancel Icon */}
                    <TouchableOpacity
                        style={{ alignSelf: "flex-end" }}
                        onPress={() => toggleDrawer(false)}
                    >
                        <Ico name="close" size={hp(4)} color="gray" />
                    </TouchableOpacity>

                    {/* Filter Options */}
                    <View style={{ marginVertical: wp(3) }}>
                        <Text
                            style={{
                                fontSize: hp(3),
                                fontWeight: "bold",
                                color: "#333",
                                marginBottom: wp(3),
                            }}>
                            Choose Agent
                        </Text>
                        <TextInput
                            placeholder="Search Agent"
                            style={{
                                height: hp(7),
                                borderColor: "#ccc",
                                borderWidth: wp(0.4),
                                borderRadius: wp(4),
                                paddingHorizontal: wp(3),
                                fontSize: hp(2.4),
                                backgroundColor: "#f9f9f9",
                            }}
                            placeholderTextColor="#999"
                        />
                    </View>

                    <View style={{ marginVertical: wp(3) }}>
                        <Text
                            style={{
                                fontSize: hp(3),
                                fontWeight: "bold",
                                color: "#333",
                                marginBottom: wp(3),
                            }}
                        >
                            Lead Source
                        </Text>
                        <TextInput
                            placeholder="Search Lead Source"
                            style={{
                                height: hp(7),
                                borderColor: "#ccc",
                                borderWidth: wp(0.4),
                                borderRadius: wp(4),
                                paddingHorizontal: wp(3),
                                fontSize: hp(2.4),
                                backgroundColor: "#f9f9f9",
                            }}
                            placeholderTextColor="#999"
                        />
                    </View>

                    <View style={{ marginVertical: wp(3) }}>
                        <Text
                            style={{
                                fontSize: hp(3),
                                fontWeight: "bold",
                                color: "#333",
                                marginBottom: wp(3),
                            }}
                        >
                            Lead Category
                        </Text>
                        <TextInput
                            placeholder="Search Lead Category"
                            style={{
                                height: hp(7),
                                borderColor: "#ccc",
                                borderWidth: wp(0.4),
                                borderRadius: wp(4),
                                paddingHorizontal: wp(3),
                                fontSize: hp(2.4),
                                backgroundColor: "#f9f9f9",
                            }}
                            placeholderTextColor="#999"
                        />
                    </View>
                </Animated.View>
                {/* Additional Content */}
                {/* Leads Section */}
                <View style={{ marginHorizontal: wp(8), flexDirection: "row", marginTop: hp(3) }}>
                    <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: 'black' }}>Projects</Text>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("DashboardScreen");
                        }}>
                        <Text style={{ fontSize: hp(2), color: 'gray', fontWeight: 'bold', marginHorizontal: wp(5), marginTop: hp(1) }}>Home</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: hp(2), color: 'gray', fontWeight: 'bold', marginHorizontal: wp(1), marginTop: hp(1) }}>• projects</Text>
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
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                        onPress={()=>{
                            props.navigation.navigate("Projects");
                        }}
                            style={{
                                height: hp(7),
                                width: wp(13),
                                borderRadius: wp(3),
                                marginHorizontal: wp(1),
                                borderWidth: wp(0.5),
                                backgroundColor: 'white', // Setting background color to white
                                justifyContent: 'center', // Centering content vertically
                                alignItems: 'center', // Centering content horizontally
                                marginTop: hp(2.5),
                                borderColor: "gray",
                            }}
                        >
                            <Ico name="view-list" size={hp(4)} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            props.navigation.navigate("ArchieveSub");
                        }}
                            style={{
                                height: hp(7),
                                width: wp(13),
                                borderRadius: wp(3),
                                marginHorizontal: wp(1),
                                borderWidth: wp(0.5),
                                backgroundColor: 'black', // Setting background color to white
                                justifyContent: 'center', // Centering content vertically
                                alignItems: 'center', // Centering content horizontally
                                marginTop: hp(2.5),
                                borderColor: "gray",
                            }}>
                            <Iso name="archive" size={hp(4)} color="white" />
                        </TouchableOpacity>
                    </View>
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
                    <Text style={{ marginTop: hp(3), fontSize: 16, fontWeight: hp(3), marginHorizontal: wp(6)}}>Showing 0 to 0 of 0 entries</Text>
                </ScrollView>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ArchieveSub;
