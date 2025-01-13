import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddLeadInfo = () => {
    const [followUp, setFollowUp] = useState(""); // State for Add Follow Up
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState(""); // State to store message
    const [fontSize, setFontSize] = useState(16); // State to control font size
    const [isBold, setIsBold] = useState(false);

    const handleSend = () => {
        if (message.trim()) {
            console.log("Message Sent:", message);
            setMessage(""); // Clear the input after sending
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#c0e0fa" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 12, marginHorizontal: 25 }}>Add lead Info</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: "85%", backgroundColor: "white", height: "90%", marginHorizontal: 28, marginTop: 15, borderRadius: 10, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,

                    elevation: 15,
                }}>
                <View style={{ marginHorizontal: 12, marginTop: 12 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Lead Details</Text>
                    <View style={{ height: 1, borderColor: "gray", borderWidth: 0.5, marginTop: 33 }}>
                    </View>
                    <Text style={{ fontSize: 15, marginTop: 12 }}>Salutation</Text>
                    <TextInput placeholder='--' style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                    <Text style={{ fontSize: 15, marginTop: 12 }}>Lead Name</Text>
                    <TextInput placeholder='e.g samar jawaid' textContentType="givenName" style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                    <Text style={{ fontSize: 15, marginTop: 12 }}>Lead Email</Text>
                    <TextInput placeholder='e.g samar@gmail.com' textContentType="emailAddress" style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                    <Text style={{ fontSize: 15, marginTop: 12 }}>choose Agents</Text>
                    <TextInput placeholder='--' style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                    <Text style={{ fontSize: 15, marginTop: 12 }}>Lead Source</Text>
                    <TextInput placeholder='--' style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                    <Text style={{ fontSize: 15, marginTop: 12 }}>Lead Category</Text>
                    <TextInput placeholder='--' style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                    <Text style={{ fontSize: 15, marginTop: 12 }}>Lead value</Text>
                    <TextInput placeholder='--' style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                    {/* Add Follow Up */}
                    <Text style={{ fontSize: 15, marginTop: 12 }}>Add Follow Up</Text>
                    <View
                        style={{
                            height: 50,
                            width: "85%",
                            borderRadius: 12,
                            borderWidth: 1,
                            marginHorizontal: 16,
                            marginTop: 5,
                            justifyContent: "center",
                            backgroundColor: "white",
                        }}
                    >
                        <Picker
                            selectedValue={followUp}
                            onValueChange={(itemValue) => setFollowUp(itemValue)}
                            style={{ height: 50, width: "85%" }}
                        >
                            <Picker.Item label="--" value="" />
                            <Picker.Item label="Yes" value="yes" />
                            <Picker.Item label="No" value="no" />
                        </Picker>
                    </View>

                    {/* Status */}
                    <Text style={{ fontSize: 15, marginTop: 12 }}>Status</Text>
                    <View
                        style={{
                            height: 50,
                            width: "85%",
                            borderRadius: 12,
                            borderWidth: 1,
                            marginHorizontal: 16,
                            marginTop: 5,
                            justifyContent: "center",
                            backgroundColor: "white",
                        }}
                    >
                        <Picker
                            selectedValue={status}
                            onValueChange={(itemValue) => setStatus(itemValue)}
                            style={{ height: 50, width: "85%" }}
                        >
                            <Picker.Item label="--" value="" />
                            <Picker.Item label="Pending" value="pending" />
                            <Picker.Item label="In Process" value="inProcess" />
                            <Picker.Item label="Converted" value="converted" />
                        </Picker>
                    </View>
                    <Text style={{ fontSize: 18, color: "darkgray", marginTop: 17 }}>Note</Text>
                    {/* Chat Input Box */}
                    <View
                        style={{
                            height: 80,
                            width: "95%",
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: "#ccc",
                            padding: 10,
                            backgroundColor: "white",
                            marginTop: 12,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 6,
                            },
                            shadowOpacity: 0.37,
                            shadowRadius: 7.49,

                            elevation: 11,
                        }}
                    >
                        <TextInput
                            style={{
                                height: "100%",
                                width: "100%",
                                fontSize: fontSize,
                                fontWeight: isBold ? "bold" : "normal",
                                textAlignVertical: "top", // Align text to top in multiline input
                            }}
                            multiline
                            placeholder="Type your message..."
                            placeholderTextColor="#888"
                            value={message}
                            onChangeText={setMessage}
                        />
                    </View>

                    {/* Controls for Font Size, Bold, and Emoji */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "85%",
                            marginTop: 15,
                            marginHorizontal:18,
                        }}
                    >
                        {/* Increase Font Size */}
                        <TouchableOpacity
                            style={{
                                width:"20%",
                                padding: 10,
                                backgroundColor: "#20b5e9",
                                borderRadius: 8,
                            }}
                            onPress={() => setFontSize((prev) => (prev < 30 ? prev + 2 : prev))} // Increase font size with a cap
                        >
                            <Text style={{ color: "white", fontWeight: "bold" }}>A+</Text>
                        </TouchableOpacity>

                        {/* Decrease Font Size */}
                        <TouchableOpacity
                            style={{
                                width:"20%",
                                padding: 10,
                                backgroundColor: "#20b5e9",
                                borderRadius: 8,
                            }}
                            onPress={() => setFontSize((prev) => (prev > 10 ? prev - 2 : prev))} // Decrease font size with a minimum limit
                        >
                            <Text style={{ color: "white", fontWeight: "bold" }}>A-</Text>
                        </TouchableOpacity>

                        {/* Toggle Bold */}
                        <TouchableOpacity
                            style={{
                                width:"20%",
                                padding: 10,
                                backgroundColor: "#20b5e9",
                                borderRadius: 8,
                            }}
                            onPress={() => setIsBold((prev) => !prev)} // Toggle bold text
                        >
                            <Text style={{ color: "white", fontWeight: "bold" }}>B</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 12, marginTop: 12 }}>
                        <View style={{ height: 1, borderColor: "gray", borderWidth: 0.5, marginTop: 33 }}>
                        </View>
                        <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 12, opacity: 22 }}>Brand Information</Text>
                        <View style={{ height: 1, borderColor: "gray", borderWidth: 0.5, marginTop: 33, borderEndColor: "gray" }}>
                        </View>
                        <Text style={{ fontSize: 15, marginTop: 12 }}>Brand Name</Text>
                        <TextInput placeholder='e.g HnhSoftTechSolution' style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                        <Text style={{ fontSize: 15, marginTop: 12 }}>Website</Text>
                        <TextInput placeholder='e.g https://hnhsofttechsolutions.com' textContentType="givenName" style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                        <Text style={{ fontSize: 15, marginTop: 12 }}>Mobile</Text>
                        <TextInput placeholder='e.g 9837293211' textContentType="emailAddress" style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                        <Text style={{ fontSize: 15, marginTop: 12 }}>Office Phonenumber</Text>
                        <TextInput placeholder='--' style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                        <Text style={{ fontSize: 15, marginTop: 12 }}>Country</Text>
                        <TextInput placeholder='--' style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                        <Text style={{ fontSize: 15, marginTop: 12 }}>State</Text>
                        <TextInput placeholder='--' style={{ height: 50, width: "85%", borderRadius: 12, borderWidth: 1, marginHorizontal: 16, marginTop: 5 }} />
                        {/* Add Follow Up */}
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "90%",
                                marginTop: 12 // Width of the container
                            }}
                        >
                            {/* Cancel Button */}
                            <TouchableOpacity
                                style={{
                                    height: 50,
                                    width: "45%", // Adjusted to fit both buttons side by side
                                    backgroundColor: "#28a745", // Red color for cancel
                                    borderRadius: 8,
                                    borderColor:"#28a745",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 1.37,
                                    shadowRadius: 7.49,

                                    elevation: 15,
                                    marginBottom:22,
                                }}
                                onPress={() => console.log("Cancel button pressed")}
                            >
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Saved</Text>
                            </TouchableOpacity>

                            {/* Save Button */}
                            <TouchableOpacity
                                style={{
                                    height: 50,
                                    width: "45%", // Adjusted to fit both buttons side by side
                                    backgroundColor: "#ff4d4d", // Green color for save
                                    borderRadius: 8,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 1.37,
                                    shadowRadius: 9.49,

                                    elevation: 12,
                                }}
                                onPress={() => console.log("Save button pressed")}
                            >
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default AddLeadInfo;
