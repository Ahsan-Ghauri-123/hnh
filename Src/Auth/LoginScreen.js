// import React, { useState, useEffect, useRef } from "react";
// import {
//   ScrollView,
//   Text,
//   View,
//   Switch,
//   TouchableOpacity,
//   SafeAreaView,
//   Animated,
//   Easing,
// } from "react-native";
// import Header from "../../components/Header";
// import MyInput from "../../components/MyInput";
// import MyButton from "../../components/MyButton";
// import Icons from "react-native-vector-icons/Ionicons";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const LoginScreen = (props) => {
//   const [email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [isStayLoggedIn, setIsStayLoggedIn] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity for the form
//   const buttonScale = useRef(new Animated.Value(1)).current; // Scale for the button

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const SavedUserData = async () => {
//     try {
//       await AsyncStorage.setItem("Useremail", email);
//       await AsyncStorage.setItem("UserPassword", Password);
//       console.log("Saved Data successfully");
//     } catch (error) {
//       console.error("Failed to save user data:", error);
//     }
//   };

//   const LoginHandler = () => {
//     if (email === "") {
//       alert("Please enter your email first");
//     } else if (Password === "") {
//       alert("Please enter your Password first");
//     } else if (email === "ahsanghauri@gmail.com" && Password === "123") {
//       SavedUserData();
//       // props.navigation.navigate("HomeScreen");
//     } else {
//       alert("Please enter a valid email or Password");
//     }
//   };

//   const handleToggleChange = (value) => {
//     setIsStayLoggedIn(value);
//     if (value) {
//       console.log("Stay Logged In", "You have chosen to stay logged in.");
//     } else {
//       console.log("Stay Logged In", "You have chosen not to stay logged in.");
//     }
//   };

//   const handleButtonPressIn = () => {
//     Animated.spring(buttonScale, {
//       toValue: 0.9,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handleButtonPressOut = () => {
//     Animated.spring(buttonScale, {
//       toValue: 1,
//       friction: 3,
//       tension: 40,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
//       <View
//         style={{
//           backgroundColor: "white",
//           elevation: 5,
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.2,
//           shadowRadius: 2,
//           zIndex: 1000,
//         }}
//       >
//         <Header />
//       </View>
//       <ScrollView style={{ flex: 1, backgroundColor: "#a9d1ff" }}>
//         <Animated.View
//           style={{
//             height: 460,
//             width: "90%",
//             backgroundColor: "white",
//             marginTop: 45,
//             marginHorizontal: 22,
//             borderRadius: 8,
//             opacity: fadeAnim, // Bind opacity to fadeAnim
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               fontSize: 21,
//               color: "black",
//               fontWeight: "bold",
//               marginTop: 18,
//             }}
//           >
//             Log In
//           </Text>
//           <Text style={{ fontSize: 16, fontWeight: "600", marginHorizontal: 12 }}>
//             Email Address{" "}
//           </Text>
//           <MyInput
//             Don="email Address"
//             onChangeText={(text) => {
//               setEmail(text);
//             }}
//           />
//           <Text
//             style={{
//               fontSize: 16,
//               fontWeight: "600",
//               marginHorizontal: 12,
//               marginTop: 22,
//             }}
//           >
//             Password
//           </Text>
//           <MyInput
//             Don="Must have at least 8 characters"
//             onChangeText={(text) => {
//               setPassword(text);
//             }}
//             secureTextEntry={!isPasswordVisible}
//           />
//           <TouchableOpacity
//             style={{
//              position: "absolute",
//     right: 12, // Adjusted for better alignment
//     top: "50%", // Adjusted for precise placement
//             }}
//             onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
//             <Icons
//               name={isPasswordVisible ? "eye" : "eye-off"}
//               size={24}
//               color="gray"
//               style={{ marginLeft: 275 }}
//             />
//           </TouchableOpacity>
//           <Text
//             style={{
//               textDecorationLine: "underline",
//               marginHorizontal: 12,
//               marginTop: 12,
//             }}
//           >
//             Forgot your password?
//           </Text>
//           <View style={{ flexDirection: "row", marginTop: 15 }}>
//             <Switch
//               value={isStayLoggedIn}
//               onValueChange={handleToggleChange}
//               trackColor={{ false: "#767577", true: "#2f96eb" }}
//               thumbColor={isStayLoggedIn ? "#2f96eb" : "#f4f3f4"}
//             />
//             <Text style={{ marginHorizontal: 12, marginTop: 4 }}>
//               Stay Logged in
//             </Text>
//           </View>
//           <Animated.View
//             style={{
//               transform: [{ scale: buttonScale }], // Scale animation for the button
//             }}>
//             <MyButton
//               onPressIn={handleButtonPressIn}
//               onPressOut={handleButtonPressOut}
//               onPress={LoginHandler}
//               Ahsan="Log In"
//             />
//           </Animated.View>
//         </Animated.View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;


// import React, { useState, useEffect, useRef } from "react";
// import {
//   ScrollView,
//   Text,
//   View,
//   Switch,
//   TouchableOpacity,
//   SafeAreaView,
//   Animated,
//   Dimensions,
// } from "react-native";
// import Header from "../../components/Header";
// import MyInput from "../../components/MyInput";
// import MyButton from "../../components/MyButton";
// import Icons from "react-native-vector-icons/Ionicons";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const { width, height } = Dimensions.get("window");

// const LoginScreen = (props) => {
//   const [email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [isStayLoggedIn, setIsStayLoggedIn] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity for the form
//   const buttonScale = useRef(new Animated.Value(1)).current; // Scale for the button

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const SavedUserData = async () => {
//     try {
//       await AsyncStorage.setItem("Useremail", email);
//       await AsyncStorage.setItem("UserPassword", Password);
//       console.log("Saved Data successfully");
//     } catch (error) {
//       console.error("Failed to save user data:", error);
//     }
//   };

//   const LoginHandler = () => {
//     if (email === "") {
//       alert("Please enter your email first");
//     } else if (Password === "") {
//       alert("Please enter your Password first");
//     } else if (email === "ahsanghauri@gmail.com" && Password === "123") {
//       SavedUserData();
//       // props.navigation.navigate("HomeScreen");
//     } else {
//       alert("Please enter a valid email or Password");
//     }
//   };

//   const handleToggleChange = (value) => {
//     setIsStayLoggedIn(value);
//     if (value) {
//       console.log("Stay Logged In", "You have chosen to stay logged in.");
//     } else {
//       console.log("Stay Logged In", "You have chosen not to stay logged in.");
//     }
//   };

//   const handleButtonPressIn = () => {
//     Animated.spring(buttonScale, {
//       toValue: 0.9,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handleButtonPressOut = () => {
//     Animated.spring(buttonScale, {
//       toValue: 1,
//       friction: 3,
//       tension: 40,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
//       <View
//         style={{
//           backgroundColor: "white",
//           elevation: 5,
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.2,
//           shadowRadius: 2,
//           zIndex: 1000,
//         }}
//       >
//         <Header />
//       </View>
//       <ScrollView
//         contentContainerStyle={{
//           flexGrow: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "#a9d1ff",
//           paddingVertical: 20,
//         }}
//       >
//         <Animated.View
//           style={{
//             width: "90%",
//             backgroundColor: "white",
//             borderRadius: 8,
//             padding: 20,
//             opacity: fadeAnim, // Bind opacity to fadeAnim
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               fontSize: width * 0.06, // Responsive font size
//               color: "black",
//               fontWeight: "bold",
//               marginBottom: 20,
//             }}
//           >
//             Log In
//           </Text>
//           <Text style={{ fontSize: width * 0.045, fontWeight: "600" }}>
//             Email Address
//           </Text>
//           <MyInput
//             Don="email Address"
//             onChangeText={(text) => {
//               setEmail(text);
//             }}
//           />
//           <Text
//             style={{
//               fontSize: width * 0.045,
//               fontWeight: "600",
//               marginTop: 22,
//             }}
//           >
//             Password
//           </Text>
//           <MyInput
//             Don="Must have at least 8 characters"
//             onChangeText={(text) => {
//               setPassword(text);
//             }}
//             secureTextEntry={!isPasswordVisible}
//           />
//           <TouchableOpacity
//             style={{
//               position: "absolute",
//               top: "54%",
//               right: "12%",
//             }}
//             onPress={() => setIsPasswordVisible(!isPasswordVisible)}
//           >
//             <Icons
//               name={isPasswordVisible ? "eye" : "eye-off"}
//               size={24}
//               color="gray"
//             />
//           </TouchableOpacity>
//           <Text
//             style={{
//               textDecorationLine: "underline",
//               marginTop: 12,
//               fontSize: width * 0.04,
//             }}
//           >
//             Forgot your password?
//           </Text>
//           <View style={{ flexDirection: "row", marginTop: 15 }}>
//             <Switch
//               value={isStayLoggedIn}
//               onValueChange={handleToggleChange}
//               trackColor={{ false: "#767577", true: "#2f96eb" }}
//               thumbColor={isStayLoggedIn ? "#2f96eb" : "#f4f3f4"}
//             />
//             <Text
//               style={{
//                 marginHorizontal: 12,
//                 fontSize: width * 0.04,
//               }}
//             >
//               Stay Logged in
//             </Text>
//           </View>
//           <Animated.View
//             style={{
//               transform: [{ scale: buttonScale }], // Scale animation for the button
//               marginTop: 20,
//             }}
//           >
//             <MyButton
//               onPressIn={handleButtonPressIn}
//               onPressOut={handleButtonPressOut}
//               onPress={LoginHandler}
//               Ahsan="Log In"
//             />
//           </Animated.View>
//         </Animated.View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;


import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
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

const { width } = Dimensions.get("window");

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isStayLoggedIn, setIsStayLoggedIn] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Reanimated Shared Values
  const fadeAnim = useSharedValue(0); // Initial opacity for the form
  const buttonScale = useSharedValue(1); // Scale for the button

  // Animated Styles
  const formStyle = useAnimatedStyle(() => ({
    opacity: withTiming(fadeAnim.value, { duration: 1000 }),
    transform: [
      {
        translateY: withTiming(fadeAnim.value === 1 ? 0 : 50, { duration: 1000 }),
      },
    ],
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
  }));

  // Trigger animation when component mounts
  React.useEffect(() => {
    fadeAnim.value = 1; // Fade in the form
  }, []);

  const handleButtonPressIn = () => {
    buttonScale.value = withSpring(0.9);
  };

  const handleButtonPressOut = () => {
    buttonScale.value = withSpring(1);
  };

  const LoginHandler = async () => {
    if (email === "") {
      alert("Please enter your email first");
    } else if (Password === "") {
      alert("Please enter your Password first");
    } else if (email === "ahsanghauri@gmail.com" && Password === "123") {
      try {
        await AsyncStorage.setItem("Useremail", email);
        await AsyncStorage.setItem("UserPassword", Password);
        console.log("Saved Data successfully");
        // props.navigation.navigate("HomeScreen");
      } catch (error) {
        console.error("Failed to save user data:", error);
      }
    } else {
      alert("Please enter a valid email or Password");
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          zIndex: 1000,
        }}
      >
        <Header />
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#e1effa',
          paddingVertical: 20,
        }}
      >
        {/* Animated Form */}
        <Animated.View
          style={[
            {
              width: "90%",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 20,
            },
            formStyle, // Apply animated style
          ]}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: width * 0.06,
              color: "black",
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Log In
          </Text>
          <Text style={{ fontSize: width * 0.045, fontWeight: "600" }}>
            Email Address
          </Text>
          <MyInput
            Don="email Address"
            onChangeText={(text) => setEmail(text)}
          />
          <Text
            style={{
              fontSize: width * 0.045,
              fontWeight: "600",
              marginTop: 22,
            }}
          >
            Password
          </Text>
          <MyInput
            Don="Must have at least 8 characters"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              top: "54%",
              right: "12%",
            }}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Icons
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
          <Text
            style={{
              textDecorationLine: "underline",
              marginTop: 12,
              fontSize: width * 0.04,
            }}
          >
            Forgot your password?
          </Text>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Switch
              value={isStayLoggedIn}
              onValueChange={(value) => setIsStayLoggedIn(value)}
              trackColor={{ false: "#767577", true: "#2f96eb" }}
              thumbColor={isStayLoggedIn ? "#2f96eb" : "#f4f3f4"}
            />
            <Text style={{ marginHorizontal: 12, fontSize: width * 0.04 }}>
              Stay Logged in
            </Text>
          </View>
          {/* Animated Button */}
          <Animated.View style={[{ marginTop: 20 }, buttonStyle]}>
            <MyButton
              onPressIn={handleButtonPressIn}
              onPressOut={handleButtonPressOut}
              onPress={LoginHandler}
              Ahsan="Log In"
            />
          </Animated.View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
