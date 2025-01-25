import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../Assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';



const TileComp = (props) => {
  return (
    <TouchableOpacity style= {{width: '49%'}} >
    <View
    style={{
    marginBottom: 10,
    backgroundColor: props.backgroundColor,
    borderRadius: 15,
    padding: 5,
    // width:'49%',
    // flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop:10,
    marginLeft: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
}}
>
  
<View style={{ alignItems: 'center', width: '100%', flexDirection: 'row' }}>
{/* <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}> Employee</Text> */}
<Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}> {props.tileName}</Text>
</View>

<View
style={{
    marginBottom: 10,
    // backgroundColor: props.backgroundColor,
    borderRadius: 15,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10
}}
>
<View style={{ alignItems: 'center' ,flexDirection: 'row'}}>
      <Icon  name= {"ticket-outline"} size={33}/>
<View style={{ alignItems: 'center', width: '40%', marginLeft: 5 }}>
    <Text style={{ color: 'white', fontSize: 33 }}>{props.number}</Text>
</View>
</View>



</View>
</View>

</TouchableOpacity>
  );
};

export default TileComp;