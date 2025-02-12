import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme, useNavigation } from '@react-navigation/native';
import { useCardAnimation } from '@react-navigation/stack';

const Landing = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.View}>
        <Text style={styles.headingTxt}>Hello!</Text>
        <Text style={styles.subTxt}>You can use your email or username, or continue with your social account.</Text>
        <View style={styles.imgView}>
                    <Image source={require('../../Assets/landing.png')} style={{ marginHorizontal: 1 }} />
                    <TouchableOpacity  
                      onPress={() => navigation.navigate('SignUp')}
                      style={styles.createAcc}>
                                <Text style={styles.createAccTxt}>Create an Account</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.google}>
                                <Text style={styles.googleTxt}>Sign up with Google</Text>
                            </TouchableOpacity>
                              <View style= {styles.signIn}>
                                  <Text style={styles.signinDis}>Already a Member?</Text>
                                  <TouchableOpacity 
                                      // onPress={navigation.navigate()}>
                                      onPress={() => navigation.navigate('Login')}>

                                      <Text style={styles.signinTxt}>  Sign in</Text>
                                  </TouchableOpacity>
                                </View>
        </View>

        
      </View>
    </SafeAreaView>
  )
}

export default Landing;

const styles = StyleSheet.create({
  View:{ flex: 1, padding:'5%', justifyContent:'center'},
  headingTxt: {fontSize:35, fontWeight:'bold', marginVertical:'2%' },
  subTxt: {fontSize:15, textAlign:'center', width:'90%', lineHeight:20 },
  imgView: {width:'100%', alignItems:'center'},
  createAcc:{backgroundColor:'#D72329', borderRadius:25, width:'70%', alignItems:'center', padding:'5%', marginTop:'20%',},
  createAccTxt: {fontSize:15, color:'white'},
  google:{backgroundColor:'#F7F7F9', borderRadius:25, width:'70%', alignItems:'center', padding:'5%', marginVertical:'2%'},
  googleTxt: {fontSize:14, color:'black'},
  // google:{backgroundColor:'#F7F7F9', borderRadius:25, width:'70%', alignItems:'center', padding:'2%'},
  signIn:{flexDirection:'row', marginTop:'20%'},
  signinDis: {fontSize:14, color:'black'},
  signinTxt: {color: '#D72329'},
  
})