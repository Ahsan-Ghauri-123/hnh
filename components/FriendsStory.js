import React from 'react';
import { View, Text, Image } from 'react-native';
import StoryImg from "../Assets/images/img2.jpeg";
import profileImg from "../Assets/images/img3.jpeg";
import { Colors } from '../utils/Colors';
import { StoryData } from "../Data/StoryData";


const FriendsStory = () => {
  return (
    <>
    {
      StoryData.map(item =>(
        <View key={item.id} style={{marginLeft:5, borderRadius:10, borderWidth:2, borderColor:Colors.lightgrey}}>
        <Image source={item.storyImg} style={{height:180, width:110, borderTopLeftRadius:10, borderTopRightRadius:10, position:"relative"}} />
        <Image source={item.profileImg} style={{height:40, width:40, borderRadius:25, position:"absolute", top:"5%", borderColor:"blue", borderWidth:2}} />
        <Text style={{position:"absolute", top:"80%", left:11, fontSize:16, fontWeight:"bold", color:"white"}}>{item.name}</Text>
        </View>
      ))
    }
    </>
  );
};

export default FriendsStory;

