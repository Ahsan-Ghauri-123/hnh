import React from 'react';
import { View, Text, Image } from 'react-native';
import Profile from "../Assets/images/profile1.png";
import VectorIcon from '../utils/VectorIcon';
import { Colors } from '../utils/Colors';

const CreateStory = () => {
    return (
      <View style={{borderWidth:1, borderColor:"gray", alignItems:"center",borderRadius:10, position:"relative"}}>
      <Image source={Profile} style={{height:100, width:110, borderTopLeftRadius:10, borderTopRightRadius:10}} />
      <View style={{position:"absolute", top:"38%", borderRadius:10, backgroundColor:"white"}}>
      <VectorIcon name="circle-with-plus" type="Entypo" color={Colors.primaryColor} size={34} />
      </View>
      <Text style={{fontSize:16, textAlign:"center", fontWeight:"800", color:"black", width:"50%", marginTop:18, paddingBottom:10}}>Create Story</Text>
      </View>
    );
};

export default CreateStory;
