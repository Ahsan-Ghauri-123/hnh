import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useTheme, useNavigation } from '@react-navigation/native';
import { useCardAnimation } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import PhoneInput from "react-native-phone-number-input";


const Login = () => {
    const navigation = useNavigation();

    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
  };


  return (
    <SafeAreaView style={{flex:1}}>
      {/* <ImageBackground source={require('../../Assets/Bubbles.png')}> */}
      <ImageBackground source={require('../../Assets/Bubbles.png')} style={{width: '100%', height: '100%'}}> 
      <TouchableOpacity onPress={navigation.goBack} style= {{padding:'4%'}}>
        <Icon name="arrow-back-outline" size={25} />
      </TouchableOpacity>
      <ScrollView>
      <View style={styles.View}>
              <Text style={styles.headingTxt}>Welcome Back!</Text>
              <View style={styles.searchView}>
                              <TextInput 
                              placeholder='Email'
                              autoFocus
                              placeholderTextColor={'#6A6A6A'}
                              style={{color:'#6A6A6A', fontSize:12, width:'75%'}}
                              >
                              </TextInput>

                          </View>
              <View style={styles.searchView}>
                              <TextInput 
                              placeholder='Password'
                              secureTextEntry={!showPassword}
                              placeholderTextColor={'#6A6A6A'}
                              style={{color:'#6A6A6A', fontSize:12, width:'90%'}}
                              >
                              </TextInput>
                        <TouchableOpacity onPress={toggleShowPassword}> 
                            <Icon 
                                  color= {'#6A6A6A'} 
                                  style= {styles.search} 
                                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                  size={20} />
                          </TouchableOpacity>
                          </View>
                         
              <View style={styles.imgView}>
                          <TouchableOpacity  
                            onPress={() => navigation.navigate('SignUp')}
                            style={styles.createAcc}>
                                      <Text style={styles.createAccTxt}>Login</Text>
                                  </TouchableOpacity>
              </View>
      
              
            </View>
            </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({
  View:{ flex: 1, padding:'5%', justifyContent:'center'},
  headingTxt: {fontSize:45, fontWeight:'bold', marginVertical:'2%', marginBottom:'25%' },
  subTxt: {fontSize:15, textAlign:'center', width:'90%', lineHeight:20 },
  imgView: {width:'100%', alignItems:'center'},
  createAcc:{backgroundColor:'#D72329', borderRadius:25, width:'70%', alignItems:'center', padding:'5%', marginTop:'20%',},
  createAccTxt: {fontSize:15, color:'white'},
  google:{backgroundColor:'#F7F7F9', borderRadius:25, width:'70%', alignItems:'center', padding:'2%', marginVertical:'2%'},
  googleTxt: {fontSize:14, color:'black'},
  // google:{backgroundColor:'#F7F7F9', borderRadius:25, width:'70%', alignItems:'center', padding:'2%'},
  signIn:{flexDirection:'row', marginTop:'5%'},
  signinDis: {fontSize:14, color:'black'},
  signinTxt: {color: '#D72329'},
  searchView:{flexDirection:'row', width:'100%', borderRadius:20, alignItems:'center',justifyContent:'space-between', backgroundColor:'white', padding:'2%', marginVertical:'2%'},
  search:{paddingHorizontal:'2%'}
})