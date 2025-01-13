import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const EmailTemplate = () => {
    const headers = [
        'Id',
        'Name',
        'Created',
        'Action'
      ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView
                style={{
                    backgroundColor: '#c0e0fa',
                    marginTop: 45,
                    width: '90%',
                    marginHorizontal: 18,
                    borderRadius: 15,
                    borderWidth: 0.5,
                    padding: 12,
                    height: "100%",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,

                    elevation: 15
                }}
            >
                <View style={{ flexDirection: "row", marginHorizontal: 3 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>
                        Email Template
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, color: 'gray', fontWeight: 'bold', marginHorizontal: 22, marginTop: 6 }}>
                            Home
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, color: 'gray', fontWeight: 'bold', marginHorizontal: -18, marginTop: 6 }}>
                        • EmailTemplate
                    </Text>
                </View>
                <TouchableOpacity
                    style={[
                        {
                            height: 50,
                            width: 110,
                            backgroundColor: 'black',
                            borderRadius: 18,
                            borderWidth: 1,
                            marginTop: 22,
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
                >
                    <Icon name="file-export" size={22} color="white" style={{ marginTop: 5, marginHorizontal: 42 }} />
                    <Text style={{ textAlign: "center", marginTop: 12, color: "white", fontSize: 17, marginTop: -4, fontWeight: "bold" }}>Export</Text>
                </TouchableOpacity>
                 <ScrollView horizontal>
                            <ScrollView>
                              <View>
                                {/* Table Header */}
                                <View style={{
                                  flexDirection: 'row',
                                  backgroundColor: '#20b5e9',
                                  paddingVertical: 10,
                                  marginTop:18,
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
                                </View>
                                <Text style={{textAlign:"center", marginTop:16, fontSize:16, fontWeight:"110"}}>No data avaialable here</Text>
                                <Text style={{marginTop:22, fontSize:16, fontWeight:"230"}}>Showing 0 to 0 of 0 entries</Text>
                                </ScrollView>
                                </ScrollView>
            </ScrollView>

        </SafeAreaView>
    );
};

export default EmailTemplate;
