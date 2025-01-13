import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Switch } from 'react-native';
import Icons from "react-native-vector-icons/AntDesign";
import DocumentPicker from "react-native-document-picker";

const ImportLeadScreen = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null); // Store the selected file
    const [isUploadHovered, setIsUploadHovered] = useState(false); // Hover state for the first button
    const [isBackHovered, setIsBackHovered] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const selectDoc = async () => {
        try {
            const doc = await DocumentPicker.pick({
                type: [DocumentPicker.types.xlsx],
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

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#c0e0fa" }}>
            <Text style={{ fontSize: 29, fontWeight: "bold", color: "black", margin: 15 }}>Import Leads</Text>
            <View style={{ height: 550, width: "80%", backgroundColor: "white", marginHorizontal: 33, borderRadius: 12 }}>
                <Text style={{ fontSize: 29, color: "black", margin: 15 }}>Import Leads</Text>
                <View style={{
                    height: 1, // Thickness of the line
                    backgroundColor: "#ddd", // Line color
                    marginHorizontal: 15, // Adjust for alignment
                    marginBottom: 11, // Space below the line
                }}></View>
                <Text style={{ marginHorizontal: 12, marginTop: 33 }}>Upload File(file must be a file of type: xls, xlsx, csv, txt.)</Text>
                <View style={{
                    height: 130, width: "80%", backgroundColor: "lightgray", marginHorizontal: 29, marginTop: 19, borderRadius: 15, borderWidth: 1, borderColor: "gray", justifyContent: "center", alignItems: "center"
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
                    <Text style={{ fontSize: 18, fontWeight: "black", marginTop: 18, marginHorizontal: 12 }}>File Contains Headings Row</Text>
                    <Switch
                        trackColor={{ false: "gray", true: "#1d82f5" }}
                        thumbColor={isToggled ? "#c0e0fa" : "#f4f3f4"}
                        onValueChange={handleToggle}
                        value={isToggled}
                        style={{ marginRight: 226, marginTop: 15, backgroundColor: "#c0e0fa", borderRadius: 14}}
                    />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 32 }}>
                    <TouchableOpacity style={{
                        backgroundColor: isUploadHovered ? "black" : "#1d82f5",
                        width: "55%",
                        borderRadius: 12,
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10,
                    }}
                        onMouseEnter={() => setIsUploadHovered(true)}
                        onMouseLeave={() => setIsUploadHovered(false)}>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: isUploadHovered ? "white" : "black", fontSize: 16 }}>
                            Upload And Move To Next Step
                            <Icons name="arrowright" color={isUploadHovered ? "white" : "black"} size={28} style={{ marginLeft: 10 }} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: isBackHovered ? "black" : "white",
                        width: 70,
                        borderRadius: 22,
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                        onMouseEnter={() => setIsBackHovered(true)}
                        onMouseLeave={() => setIsBackHovered(false)}>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: isBackHovered ? "white" : "black" }}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default ImportLeadScreen;
