// import { 
//     StyleSheet, 
//     Text, 
//     View, 
//     SafeAreaView, 
//     ImageBackground, 
//     TouchableOpacity, 
//     TextInput, 
//     Alert,
//     ScrollView 
//   } from 'react-native';
//   import React, { useState } from 'react';
// import Colors from '../../Assets/colors/colors';
// import { useNavigation } from '@react-navigation/native';
// import {
//  Formik, Form, FormikProps
// } from "formik";


// //   import { useDispatch } from 'react-redux';
// //   import { login } from '../../redux/authSlice';
// //   import AsyncStorage from '@react-native-async-storage/async-storage';






  
//   const SignUp = ({ navigation }: { navigation: any }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');

//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     // const dispatch = useDispatch();
    
  
    // const handleSignUp = async () => {
    //   if (!fullName || !email || !password || !confirmPassword) {
    //     Alert.alert('Error', 'Please fill out all fields');
    //     return;
    //   }
    
    //   if (password !== confirmPassword) {
    //     Alert.alert('Error', 'Passwords do not match');
    //     return;
    //   }
    
//     //   try {
//     //     const newUser = { fullName, email, password };
    
//     //     // Retrieve existing users or initialize an empty array
//     //     const existingUsers = await AsyncStorage.getItem('users');
//     //     const users = existingUsers ? JSON.parse(existingUsers) : [];
//     //     console.log (existingUsers)
//     //     // Check if the email is already taken
//     //     const isEmailTaken = users.some((user: { email: string }) => user.email === email);
//     //     if (isEmailTaken) {
//     //       Alert.alert('Error', 'This email is already registered.');
//     //       return;
//     //     }
    
//     //     // Add the new user to the array
//     //     users.push(newUser);
//     //     // console.log (newUser)
//     //     await AsyncStorage.setItem('users', JSON.stringify(users));
//     //     Alert.alert('Success', `Welcome, ${fullName}! Your account has been created.`);
//     //     navigation.navigate('SignIn');
//     //   } catch (error) {
//     //     Alert.alert('Error', 'Something went wrong while saving your data.');
//     //   }
//     // };


    
//     const validate = () => {
//       let isValid = true;
//       if (name == ''){
//         isValid = false;
//       }
//       if (email == ''){
//         isValid = false;
//       }
//       if (mobile == ''){
//         isValid = false;
//       }
//       if (password == ''){
//         isValid = false;
//       }
//       if (confirmPassword == ''){
//         isValid = false;
//       }
//       if (confirmPassword !== password){
//         isValid = false;
//       }
//       return isValid;
//     }
  
//     return (
//       <SafeAreaView style={{ flex: 1 ,backgroundColor: Colors.secondary }}>
//         {/* <ImageBackground
//           source={require('../../assets/background.png')}
//           style={{ width: '100%', height: '100%' }}
//         > */}
//           <ScrollView style={{
//               paddingTop: 50,
//               height:'100%'
//             }}>
//           <View
//             style={{
//               flex: 1,
//               justifyContent: 'flex-end',
//               alignItems: 'center',
//               // marginBottom: 100,
//               backgroundColor: Colors.secondary,
//             }}
//           >
//             <View style={{
//                                 // flex: 1, // Take full height of the parent
//                                 justifyContent: 'flex-end', // Align content to the bottom
//                                 alignItems: 'center', // Center items horizontally
//                                 paddingBottom: 50, // Add padding from the bottom
//                                 width: '100%'
//                               }}>
//                             <Text style={{
//                                 fontFamily: 'OpenSans-Light',
//                                 fontSize: 60,
//                                 color:'white',
//                             }}>
//                                 Sign Up
//                             </Text>
//                         </View>
//             {/* Full Name Input */}
//             <TextInput
//               style={{
//                 backgroundColor: '#F5F5F5',
//                 padding: 5,
//                 borderRadius: 40,
//                 marginBottom: 16,
//                 color: '#263238',
//                 width: '80%',
//                 height: 50,
//               }}
//               placeholder="Full Name"
//               placeholderTextColor="#B0BEC5"
//               value={name}
//               onChangeText={setName}
//             />
  
//             {/* Email Input */}
//             <TextInput
//               style={{
//                 backgroundColor: '#F5F5F5',
//                 padding: 5,
//                 borderRadius: 40,
//                 marginBottom: 16,
//                 color: '#263238',
//                 width: '80%',
//                 height: 50,
//               }}
//               placeholder="Email"
//               placeholderTextColor="#B0BEC5"
//               value={email}
//               onChangeText={setEmail}
//             />

// <TextInput
//               style={{
//                 backgroundColor: '#F5F5F5',
//                 padding: 5,
//                 borderRadius: 40,
//                 marginBottom: 16,
//                 color: '#263238',
//                 width: '80%',
//                 height: 50,
//               }}
//               placeholder="Number"
//               placeholderTextColor="#B0BEC5"
//               secureTextEntry
//               value={mobile}
//               onChangeText={setMobile}
//             />
  
//             {/* Password Input */}
//             <TextInput
//               style={{
//                 backgroundColor: '#F5F5F5',
//                 padding: 5,
//                 borderRadius: 40,
//                 marginBottom: 16,
//                 color: '#263238',
//                 width: '80%',
//                 height: 50,
//               }}
//               placeholder="Password"
//               placeholderTextColor="#B0BEC5"
//               secureTextEntry
//               value={password}
//               onChangeText={setPassword}
//             />
  
//             {/* Confirm Password Input */}
//             <TextInput
//               style={{
//                 backgroundColor: '#F5F5F5',
//                 padding: 5,
//                 borderRadius: 40,
//                 marginBottom: 16,
//                 color: '#263238',
//                 width: '80%',
//                 height: 50,
//               }}
//               placeholder="Confirm Password"
//               placeholderTextColor="#B0BEC5"
//               secureTextEntry
//               value={confirmPassword}
//               onChangeText={setConfirmPassword}
//             />
  
//             {/* Sign Up Button */}
//             <TouchableOpacity
//                               style={{
//                                 backgroundColor: '#27496D',
//                                 padding: 16,
//                                 borderRadius: 40,
//                                 alignItems: 'center',
//                                 width: '60%',
//                                 marginBottom: 16,
//                                 marginTop: 6,
//                               }}
//                               onPress={() => {
//                                 if(validate()) {
//                                   registerUser();
//                                 }
//                                 else{
//                                   Alert.alert('Enter Date')
//                                 }
//                               }}
//                             >
//                               <Text
//                                 style={{
//                                   color: '#FFFFFF',
//                                   fontSize: 20,
//                                   fontWeight: 'bold',
//                                 }}
//                               >
//                                 Sign In
//                               </Text>

//                             </TouchableOpacity>
       
//           </View>
//           </ScrollView>
//         {/* </ImageBackground> */}
//       </SafeAreaView>
//     );
//   };
  
//   export default SignUp;

  // Formik x React Native example
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    ImageBackground, 
    TouchableOpacity, 
    TextInput, 
    Alert,
    ScrollView 
  } from 'react-native';
import { Formik } from 'formik';
import Colors from '../../Assets/colors/colors';
// import { object, string, number, date, InferType, ref, oneOf } from 'yup';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';


import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';





let userSchema = Yup.object({
  name: Yup.string().required().required(),
  email: Yup.string().email().required(),
  mobile: Yup.number().required().positive().integer(),
  password: Yup.string() .required(),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match') ,

});





 const SignUp = ({ navigation }: { navigation: any }) => {

  const registerUser = (userSchema) =>{
    console.log(userSchema,"uyyuyuyuyu")
    const userId = uuid.v4();
    firestore()
    .collection('Users') 
                .doc(userId) 
                  .set({
                          name: userSchema.name,
                          email: userSchema.email,
                          mobile: userSchema.mobile,
                          password: userSchema.password,
                          confirmPassword:userSchema.confirmPassword,
                          userId: userId,
                          })
                          .then(res => {
                            console.log("user created");
                            navigation.navigate('Login');
                          })
                          .catch(error => {
                            console.log(error);
                          });
  
  } ;
  
  return(
    <Formik
    initialValues={{ email: '', name: '', mobile: '', password: '', confirmPassword: '',  }}
    onSubmit={values => 

      registerUser(values)
      
    }
     
    validationSchema={userSchema}
  >
    
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
      // <View>
      //   <TextInput
      //     onChangeText={handleChange('email')}
      //     onBlur={handleBlur('email')}
      //     value={values.email}
      //   />
      //   <Button onPress={handleSubmit} title="Submit" />
      // </View>
      <SafeAreaView style={{ flex: 1 ,backgroundColor: Colors.secondary }}>


      <ScrollView style={{
                      paddingTop: 50,
                      height:'100%'
                    }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      // marginBottom: 100,
                      backgroundColor: Colors.secondary,
                    }}
                  >
                    <View style={{
                                        // flex: 1, // Take full height of the parent
                                        justifyContent: 'flex-end', // Align content to the bottom
                                        alignItems: 'center', // Center items horizontally
                                        paddingBottom: 50, // Add padding from the bottom
                                        width: '100%'
                                      }}>
                                    <Text style={{
                                        fontFamily: 'OpenSans-Light',
                                        fontSize: 60,
                                        color:'white',
                                    }}>
                                        Sign Up
                                    </Text>
                                </View>
                    {/* Full Name Input */}
                    <TextInput
                      style={{
                        backgroundColor: '#F5F5F5',
                        padding: 5,
                        borderRadius: 40,
                        marginBottom: 6,
                        color: '#263238',
                        width: '80%',
                        height: 50,
                      }}
                      placeholder="Full Name"
                      placeholderTextColor="#B0BEC5"
                      // value={name}
                      // onChangeText={setName}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    {errors.name && <Text style = {{color:Colors.red , alignSelf: 'center', width: '90%' }}>{errors.name}</Text>}
          
                    {/* Email Input */}
                    <TextInput
                      style={{
                        backgroundColor: '#F5F5F5',
                        padding: 5,
                        borderRadius: 40,
                        marginBottom: 6,
                        color: '#263238',
                        width: '80%',
                        height: 50,
                      }}
                      placeholder="Email"
                      placeholderTextColor="#B0BEC5"
                      // value={email}
                      // onChangeText={setEmail}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {errors.email && <Text style = {{color:Colors.red , alignSelf: 'center', width: '90%' }}>{errors.email}</Text>}

        
                  <TextInput
                      style={{
                        backgroundColor: '#F5F5F5',
                        padding: 5,
                        borderRadius: 40,
                        marginBottom: 16,
                        color: '#263238',
                        width: '80%',
                        height: 50,
                      }}
                      placeholder="Number"
                      placeholderTextColor="#B0BEC5"
                      secureTextEntry
                      // value={mobile}
                      // onChangeText={setMobile}
                      onChangeText={handleChange('mobile')}
                      onBlur={handleBlur('mobile')}
                      value={values.mobile}
                    />
                    {errors.mobile && <Text style = {{color:Colors.red , alignSelf: 'center', width: '90%' }}>{errors.mobile}</Text>}

          
                    {/* Password Input */}
                    <TextInput
                      style={{
                        backgroundColor: '#F5F5F5',
                        padding: 5,
                        borderRadius: 40,
                        marginBottom: 16,
                        color: '#263238',
                        width: '80%',
                        height: 50,
                      }}
                      placeholder="Password"
                      placeholderTextColor="#B0BEC5"
                      secureTextEntry
                      // value={password}
                      // onChangeText={setPassword}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    {errors.password && <Text style = {{color:Colors.red , alignSelf: 'center', width: '90%' }}>{errors.password}</Text>}

          
                    {/* Confirm Password Input */}
                    <TextInput
                      style={{
                        backgroundColor: '#F5F5F5',
                        padding: 5,
                        borderRadius: 40,
                        marginBottom: 16,
                        color: '#263238',
                        width: '80%',
                        height: 50,
                      }}
                      placeholder="Confirm Password"
                      placeholderTextColor="#B0BEC5"
                      secureTextEntry
                      // value={confirmPassword}
                      // onChangeText={setConfirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                    />
                    {errors.confirmPassword && <Text style = {{color:Colors.red , alignSelf: 'center', width: '90%' }}>{errors.confirmPassword}</Text>}

          
                    {/* Sign Up Button */}
                    <TouchableOpacity
                                      style={{
                                        backgroundColor: '#27496D',
                                        padding: 16,
                                        borderRadius: 40,
                                        alignItems: 'center',
                                        width: '60%',
                                        marginBottom: 16,
                                        marginTop: 6,
                                      }}
                                      
                                      onPress={handleSubmit}

                                    >
                                      <Text
                                        style={{
                                          color: '#FFFFFF',
                                          fontSize: 20,
                                          fontWeight: 'bold',
                                        }}
                                      >
                                        Sign Up
                                      </Text>
        
                                    </TouchableOpacity>
               
                  </View>
                  </ScrollView>
                    </SafeAreaView>

    )}
  </Formik>
  );
 };
export default SignUp;

