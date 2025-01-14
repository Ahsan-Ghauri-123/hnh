// import React, { useState } from "react";
// import { View, Text, TextInput, Touchable, TouchableOpacity } from "react-native";
// import Color from "../Constants/Color";
// import Icons from "react-native-vector-icons/Ionicons";

// const MyInput = (props) => {
//     const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//     return (
//         <View style={{ marginTop: 10 }}>
//             <Text>{props.Messi}</Text>
//             <View style={{
//                 height: 55, width: "90%", backgroundColor: "white", borderRadius: 10, borderColor: "#032e73", borderWidth: 0.5, paddingHorizontal: 22, marginTop: -12, marginHorizontal: 7, flexDirection: "row", justifyContent: "space-between",
//                 shadowColor: "#000",
//                 shadowOffset: {
//                     width: 0,
//                     height: 5,
//                 },
//                 shadowOpacity: 0.36,
//                 shadowRadius: 6.68,

//                 elevation: 11,
//             }}>
//                 <TextInput
//                     secureTextEntry={props.secureTextEntry}
//                     onChangeText={props.onChangeText}
//                     placeholder={props.Don}
//                     style={{ height: "100%", width: "100%" }} />
//                 <TouchableOpacity onPress={!isPasswordVisible}>
//                     <View>

//                     </View>
//                     <Icons
//                         name={props.name}
//                         size={24}
//                         color="gray"
//                         style={{ marginTop: 16 }}
//                     />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };
// export default MyInput;

//        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
// <Icons
//     name={isPasswordVisible ? "eye" : "eye-off"}
//     size={24}
//     color="gray"
//     style={{ marginLeft: 8 }}
// />

import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MyInput = (props) => {
  return (
    <View style={{ marginTop: hp("1.5%") }}>
      <View
        style={{
          height: hp("7%"),
          width: wp("80%"),
          backgroundColor: "white",
          borderRadius: wp("2%"),
          borderColor: "#032e73",
          borderWidth: 0.5,
          paddingHorizontal: wp("5%"),
          marginHorizontal: wp("3%"),
          flexDirection: "row",
          justifyContent: "space-between",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
        }}
      >
        <TextInput
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
          placeholder={props.Don}
          style={{
            height: "100%",
            width: "85%",
            fontSize: wp("4%"),
            flexDirection:"row"
          }}
        />
        {props.secureTextEntry !== undefined && (
          <TouchableOpacity onPress={props.onIconPress}>
            <Icons
              name={props.iconName}
              size={wp("6%")}
              color="gray"
              style={{ marginTop: hp("1%"), width: wp("10%")}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MyInput;
