import { View, Text, FlatList, TouchableOpacity, Image, Alert, SafeAreaView, TextInput, ScrollView,  } from 'react-native';
import Colors from '../Assets/colors/colors';
import React, { useState, useEffect } from 'react';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { useDispatch } from 'react-redux';
// import { login, setIsLoggedIn } from '../../redux/authSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
// import { Formik } from 'formik';
import * as Yup from 'yup';
import firestore from '@react-native-firebase/firestore';



const Chat = () => {
  useEffect(()=> {
    getUser()
  },[])
  const getUser = () => {
      
  }
    return(
        <SafeAreaView>
            <View style= {{width: '100%', alignItems: 'center',marginTop:10}}>
                <TextInput
                                    style={{
                                        backgroundColor: '#F5F5F5',
                                        padding: 10,
                                        borderRadius: 40,
                                        marginBottom: 16,
                                        color: '#263238',
                                        width: '90%',
                                        // height: 70,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                        width: 0,
                                        height: 5,
                                        },
                                        shadowOpacity: 0.34,
                                        shadowRadius: 6.27,
                
                                        elevation: 10,
                                    }}
                                    placeholder="Email"
                                    placeholderTextColor="#B0BEC5"
                                    // value={name}
                                    // onChangeText={setName}
                                 />
            </View>
            <ScrollView>
            {/* {discrepencies.map((docType, id) => ( */}
             <TouchableOpacity> 
            <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
        backgroundColor: '#E6E6E6',
        padding: 2,
        borderRadius: 45,
    

    }}
  >

    <View style={{ justifyContent: 'center', marginHorizontal: 20, padding:5 }}>
      <Image
        source={require('./../Assets/profileOne.png')}
        style={{
          width: 40,
          height: 40,
          borderRadius: 35, // Circular profile image
          // padding: 30
        }}
      />
    </View>
    <View>
      <Text
        style={{
          color: Colors.secondary,
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 2,
        }}
      >
        {/* {docType.employee} */}
      </Text>
      </View>

      </View>
      </TouchableOpacity>

       {/* ))} */}

            </ScrollView>
        </SafeAreaView>
    )
}

export default Chat;