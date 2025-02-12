import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useTheme, useNavigation } from '@react-navigation/native';
import { useCardAnimation } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import PhoneInput from "react-native-phone-number-input";


const AllProd = () => {
    const navigation = useNavigation();

  const Product = [
    { id: '1', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
    { id: '2', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
    { id: '3', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
    { id: '4', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
    { id: '5', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
    { id: '6', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
    { id: '7', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
    { id: '8', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
  ];


  return (
    <SafeAreaView style={{flex:1}}>
      {/* <ImageBackground source={require('../../Assets/Bubbles.png')}> */}
      <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack} style={{marginLeft:'3%'}}>
        <Icon name="arrow-back-outline" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.image} >
                      <Image source={require('../../Assets/settings.png')} style={{ marginHorizontal: 1,padding:'8%'}} />
                      </TouchableOpacity>
      </View>
    <Text style= {{marginBottom:'3%', marginLeft:'3%', fontWeight:'bold'}}>Fashion Items</Text>
      <ScrollView>
      
                       <FlatList
                            data={Product}
                            numColumns={2}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{ backgroundColor:'white', borderRadius:20, marginHorizontal:5,width:'45%', alignItems:'center'}}>
                                  <Image style={{ padding:5}} source={item.imageSource}/>
                                  <Text>{item.title}</Text>
                                  <Text>Deal Ends In:</Text>
                                  <Text>{item.time}</Text>
                                  <View style= {{flexDirection:'row' }}>
                                  <Text>{item.price}</Text>
                                  <View style= {{marginLeft:5 }}>
                                  <Image source={require('../../Assets/rectangle.png')}/>
                                  </View>
                                  </View>
                                </View>
                            )}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.flatlist}
                        />
        </ScrollView>
    </SafeAreaView>
  )
}

export default AllProd;

const styles = StyleSheet.create({
    header: {flexDirection:'row', width:'100%', justifyContent:'space-between',paddingVertical:'3%', alignItems:'center'},
    productView: { width:'100%'},
    
    
})