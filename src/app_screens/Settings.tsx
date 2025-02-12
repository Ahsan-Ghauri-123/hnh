import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useTheme, useNavigation } from '@react-navigation/native';
import { useCardAnimation } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import PhoneInput from "react-native-phone-number-input";


const Settings = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.header}>
        <TouchableOpacity>
        <Icon  name= {"arrow-back-sharp"} size={25} />
        </TouchableOpacity>
      </View>
    <Text style= {{marginBottom:'3%', marginLeft:'3%', fontWeight:'bold'}}>Fashion Items</Text>
      <ScrollView>
      
                       
        </ScrollView>
    </SafeAreaView>
  )
}

export default Settings;

const styles = StyleSheet.create({
    header: {flexDirection:'row', width:'100%', justifyContent:'flex-end',paddingVertical:'3%', alignItems:'center'},
    productView: { width:'100%'},
    
    
})