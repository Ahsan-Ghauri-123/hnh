import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Color from '../Constants/Color';

const MyButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        height: 60, width: "95%", backgroundColor: "#2f96eb", borderRadius: 8, marginTop: 35, justifyContent: "center", alignItems: "center", marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 10,
      }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "white", marginTop: 21 }}>{props.Ahsan}</Text>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;