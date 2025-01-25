
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../../components/Header";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import Icons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";

const SignUpScreen = (props) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isStayLoggedIn, setIsStayLoggedIn] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  // Reanimated Shared Values
  const fadeAnim = useSharedValue(0);
  const buttonScale = useSharedValue(1);

  // Animated Styles
  const formStyle = useAnimatedStyle(() => ({
    opacity: withTiming(fadeAnim.value, { duration: 1000 }),
    transform: [
      {
        translateY: withTiming(fadeAnim.value === 1 ? 0 : hp("5%"), { duration: 1000 }),
      },
    ],
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
  }));

  React.useEffect(() => {
    fadeAnim.value = 1;
  }, []);

  const handleButtonPressIn = () => {
    buttonScale.value = withSpring(0.9);
  };

  const handleButtonPressOut = () => {
    buttonScale.value = withSpring(1);
  };

  const LoginHandler = async () => {
    // if (email === "") {
    //   alert("Please enter your email first");
    // } else if (Password === "") {
    //   alert("Please enter your Password first");
    // } else if (email === "ahsanghauri@gmail.com" && Password === "123") {
    //   try {
    //     await AsyncStorage.setItem("Useremail", email);
    //     await AsyncStorage.setItem("UserPassword", Password);
    //     console.log("Saved Data successfully");
    //   } catch (error) {
    //     console.error("Failed to save user data:", error);
    //   }
    // } else {
    //   alert("Please enter a valid email or Password");
    // }
    props.navigation.navigate("Drawer");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "white",
          paddingVertical: hp("2%"),
        }}
      >
        <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
          <Image
            source={require("../../Assets/logo.png")}
            style={{ height: hp("15%"), width: wp("41%") }}
          />
        </View>
        <Animated.View
          style={[
            {
              width: wp("90%"),
              backgroundColor: "white",
              borderRadius: wp("2%"),
              padding: wp("5%"),
            },
            formStyle,
          ]}
        >
          <Text style={{ fontSize: wp("4.5%"), fontWeight: "600", marginHorizontal: wp("4%") }}>
            UserName
          </Text>
          <MyInput
            Don="username"
            onChangeText={(text) => setUsername(text)}
          />
          <Text style={{ fontSize: wp("4.5%"), fontWeight: "600", marginHorizontal: wp("4%"), marginTop:hp(2)}}>
          Email
        </Text>
        <MyInput
          Don="email"
          onChangeText={(text) => setEmail(text)}
        />
        <Text
            style={{
              fontSize: wp("4.5%"),
              fontWeight: "600",
              marginTop: hp("3%"),
              marginHorizontal: wp("4%"),
            }}
          >
            Password
          </Text>
          <View>
            <MyInput
              Don="Must have at least 8 characters"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!isPasswordVisible}
            />
          </View>
          <View style={{position:"absolute", top: hp('37.8'), left: wp('78%')}}>
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Icons
                name={isPasswordVisible ? "eye" : "eye-off"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <Animated.View style={[{ marginTop: hp("7.4%") }, buttonStyle]}>
            <MyButton
              onPressIn={handleButtonPressIn}
              onPressOut={handleButtonPressOut}
              onPress={LoginHandler}
              Ahsan="Sign Up"
            />
          </Animated.View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
