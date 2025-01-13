import React,{useState} from "react";
import { View, Text, TextInput, Touchable, TouchableOpacity } from "react-native";
import Color from "../Constants/Color";
import Icons from "react-native-vector-icons/Ionicons";

const MyInput = (props) => {
     const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <View style={{ marginTop: 10 }}>
            <Text>{props.Messi}</Text>
            <View style={{ height: 65, width: "95%", backgroundColor: "white", borderRadius: 10, borderColor: "#4755ed", borderWidth: 0.5, paddingHorizontal: 10, marginTop: -12, marginHorizontal: 7, flexDirection:"row", justifyContent:"space-between"}}>
                <TextInput
                    secureTextEntry={props.secureTextEntry}
                    onChangeText={props.onChangeText}
                    placeholder={props.Don}
                    style={{ height: "100%", width: "100%" }} />
                    <TouchableOpacity onPress={!isPasswordVisible}>
                    <Icons
                    name={props.name}
                    size={24}
                    color="gray"
                    style={{ marginLeft: -28, marginTop:16}}
                />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default MyInput;

//        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        // <Icons
                        //     name={isPasswordVisible ? "eye" : "eye-off"}
                        //     size={24}
                        //     color="gray"
                        //     style={{ marginLeft: 8 }}
                        // />