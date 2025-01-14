import React from 'react';
import { Image, Text, View } from 'react-native';

const header = () => {
    return (
       <View style={{backgroundColor:"white", height:"15%", width:"100%"}}>
       <View style={{flexDirection:"row"}}>
       <Image source={require("../Assets/logo.png")} style={{height:55, width:56, marginLeft:12, marginTop:14}} />
       </View>
       </View>
    );
};

export default header;
