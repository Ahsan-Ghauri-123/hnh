import { StyleSheet, 
    Text, 
    View, 
    Button, 
    SafeAreaView, 
    ImageBackground, 
    TouchableOpacity, 
    TextInput, 
    Alert, } from 'react-native'
import React, { useState } from 'react';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colors from '../../Assets/colors/colors';
// import { useDispatch } from 'react-redux';
// import { login, setIsLoggedIn } from '../../redux/authSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import firestore from '@react-native-firebase/firestore';
// import {AsyncStorage} from 'react-native';


let loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string() .required()});

const LogIn = ({ navigation }: { navigation: any }) => {

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const dispatch = useDispatch();

// const handleLogin = async () => {
//  if (!email || !password) {
//    Alert.alert('Error', 'Please enter both email and password');
//    return;
//  }

//  try {
//    const existingUsers = await AsyncStorage.getItem('users');
//    const users = existingUsers ? JSON.parse(existingUsers) : [];

//    // Find a matching user
//    const user = users.find(
//      (user: { email: string; password: string }) =>
//        user.email === email && user.password === password
//    );

//    if (user) {
//      // Persist login state to AsyncStorage
//      await AsyncStorage.setItem(
//        'authData',
//          JSON.stringify({
//          isLoggedIn: true,
//          user: { email: user.email, fullName: user.fullName },
//        })
//      );

//      // Dispatch Redux actions
//      dispatch(login({ email: user.email, fullName: user.fullName }));
//      dispatch(setIsLoggedIn(true));

//      // Navigate to home screen
//      navigation.navigate('Home');

//      Alert.alert('Success', 'You have logged in successfully');
//    } else {
//      Alert.alert('Error', 'Invalid email or password');
//    }
//  } catch (error) {
//    Alert.alert('Error', 'Something went wrong while retrieving your data.');
//  }
// };

const loginUser = (loginSchema) =>{
  // console.log(userSchema,"uyyuyuyuyu")
  // const userId = uuid.v4();
  firestore()
  .collection('Users').where ('email', "==",loginSchema.email). where('password', "==",loginSchema.password)
  .get()
  .then(res=>{
      console.log(JSON.stringify(res.docs))
      if(res.docs !== []) {
        console.log (JSON.stringify(res.docs[0].data()))
        // navigation.navigate('Dashboard');
 
      }else {
        Alert.alert('user not found')
      }
  })
  .catch(error =>{
    console.log(error)
    Alert.alert('user not found')

  }

  )
  

} ;

return (

   <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => 
        loginUser(values)  
      }
       
      validationSchema={loginSchema}
    >

    
{({ handleChange, handleBlur, handleSubmit, values, errors }) => (

<SafeAreaView  style={{flex: 1}}>
     {/* <ImageBackground source={require('../../assets/background.png')} style={{width: '100%', height: '100%'}}> */}
     <View style={{
               flex: 1, // Take full height of the parent
               justifyContent: 'center', // Align content to the bottom
               alignItems: 'center', // Center items horizontally
               // paddingBottom: 120, // Add padding from the bottom
               backgroundColor: Colors.secondary,
             }}>
       <View style={{
               // flex: 1, // Take full height of the parent
               justifyContent: 'flex-end', // Align content to the bottom
               alignItems: 'center', // Center items horizontally
               paddingBottom: 80, // Add padding from the bottom
               width: '100%'
             }}>
           <Text style={{
               fontFamily: 'OpenSans-Light',
               fontSize: 60,
               color:'white',
               fontWeight: '300',
           }}>
               Login
           </Text>
       </View>
       
     {/* Email Input */}
   <TextInput
     style={{
       backgroundColor: '#F5F5F5',
       padding: 12,
       borderRadius: 40,
       marginBottom: 16,
       color: '#263238',
       width: '80%',
       height: 70
     }}
     placeholder="Email"
     placeholderTextColor="#B0BEC5"
    //  value={email}
    //  onChangeText={setEmail}
    onChangeText={handleChange('email')}
    onBlur={handleBlur('email')}
    value={values.email}
   />
    {errors.email && <Text style = {{color:Colors.red , alignSelf: 'center', width: '90%' }}>{errors.email}</Text>}



   {/* Password Input */}
   <TextInput
     style={{
       backgroundColor: '#F5F5F5',
       padding: 12,
       borderRadius: 40,
       marginBottom: 16,
       color: '#263238',
       width: '80%',
       height: 70
     }}
     placeholder="Password"
     placeholderTextColor="#B0BEC5"
     secureTextEntry
    //  value={password}
    //  onChangeText={setPassword}
    onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
   />
    {errors.password && <Text style = {{color:Colors.red , alignSelf: 'center', width: '90%' }}>{errors.password}</Text>}


   {/* Forgot Password */}
   <TouchableOpacity>
     <Text
       style={{
         textAlign: 'right',
         color: 'white',
         marginBottom: 24,
         fontSize: 14,
       }}
     >
       Forgot password?
     </Text>
   </TouchableOpacity>

   {/* Sign In Button */}
   <TouchableOpacity
             style={{
               backgroundColor: '#27496D',
               padding: 26,
               borderRadius: 40,
               alignItems: 'center',
               width: '60%',
               marginBottom: 16,
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
               Sign In
             </Text>
           </TouchableOpacity>
                                
                     <Text
                           style = {{color: Colors.primary}}
                     > OR Signup</Text>
                     <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}

             style={{
               backgroundColor: Colors.gray,
               padding: 10,
               borderRadius: 40,
               alignItems: 'center',
               width: '30%',
              //  marginBottom: 16,
             }}
            //  onPress={handleLogin}
           >
             <Text
               style={{
                 color: Colors.secondary,
                 fontSize: 20,
                 fontWeight: 'bold',
               }}
             >
               Sign In
             </Text>
           </TouchableOpacity>
   </View>
     {/* </ImageBackground> */}
</SafeAreaView>
    )}

</Formik>
)
}

export default LogIn

const styles = StyleSheet.create({})