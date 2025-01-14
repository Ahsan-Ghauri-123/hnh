// import React from 'react';

// import { View, Text, TouchableOpacity } from 'react-native';
// import Color from '../Constants/Color';

// const MyButton = (props) => {
//   return (
//     <TouchableOpacity
//       onPress={props.onPress}
//       style={{
//         height: 50, width: "85%", backgroundColor: "#2f96eb", borderRadius: 8, marginTop: 35, justifyContent: "center", alignItems: "center", marginHorizontal: 14,
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 4,
//         },
//         shadowOpacity: 0.30,
//         shadowRadius: 4.65,

//         elevation: 11,
//         borderColor:"#032e73",
//         borderWidth: 0.2,
//       }}>
//       <Text style={{ fontSize: 21, fontWeight: "bold", color: "white", marginTop: 21 }}>{props.Ahsan}</Text>
//       <Text style={{ fontSize: 21, fontWeight: "bold", color: "white" }}>{props.name}</Text>
//     </TouchableOpacity>
//   );
// };

// export default MyButton;

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      style={{
        height: hp("6.5%"),
        width: wp("80%"),
        backgroundColor: "#2f96eb",
        borderRadius: wp("2%"),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: wp("3%"),
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 11,
        borderColor: "#032e73",
        borderWidth: 0.2,
      }}
    >
      <Text
        style={{
          fontSize: wp("5%"),
          fontWeight: "bold",
          color: "white",
        }}
      >
        {props.Ahsan}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
