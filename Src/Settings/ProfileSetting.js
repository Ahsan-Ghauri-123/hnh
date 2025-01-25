import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, Alert, TextInput, Button, ViewBase } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from "react-native-vector-icons/Entypo";


const ProfileSetting = () => {
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState(''); // State for password input
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
  const [isChecked, setIsChecked] = useState(false);
  const [selectedradio, setIsSelectedRadio] = useState(1);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Function to generate a random password
  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const passwordLength = 12; // Define the length of the password
    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    setPassword(newPassword);
  };
  // Function to handle image upload
   // Function to handle image upload
   const addImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Upload Cancelled');
        } else if (response.errorMessage) {
          Alert.alert('Error', response.errorMessage);
        } else {
          const uri = response.assets[0]?.uri;
          setImage(uri);
        }
      }
    );
  };

  // Function to remove the uploaded image
  const removeImage = () => {
    Alert.alert(
      'Remove Image',
      'Are you sure you want to remove this image?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => setImage(null),
        },
      ]
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
    <Text style={{ marginTop: hp(4), marginHorizontal: wp(4) }}>Profile Picture</Text>
    <View style={Styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={Styles.image} />
      ) : (
        <Text style={Styles.placeholderText}>No Image Uploaded</Text>
      )}
      <View style={Styles.uploadBtnContainer}>
        <TouchableOpacity onPress={addImage} style={Styles.uploadBtn}>
          <Text>{image ? 'Change' : 'Upload'} Image</Text>
        </TouchableOpacity>
      </View>
    </View>
    {image && (
      <TouchableOpacity onPress={removeImage} style={Styles.removeBtn}>
        <Text style={Styles.removeText}>Remove Image</Text>
      </TouchableOpacity>
    )}
      <View style={{marginTop:hp(7), marginHorizontal:wp(12)}}>
      <Text>Your Name</Text>
      <TextInput placeholder='Muhammad Ahsan Ghauri' style={{borderRadius:wp(3), borderWidth:wp(0.4),marginTop:hp(1)}} />
      <Text style={{marginTop:hp(3)}}>Your Email</Text>
      <TextInput placeholder='ghauri@hnhtechsolutions.com' style={{borderRadius:wp(3), borderWidth:wp(0.4),marginTop:hp(1)}}  />
      <Text style={{marginTop:hp(3)}}>Your Password</Text>
      <View style={Styles.inputContainer}>
      <TextInput
      placeholder="Enter password"
      value={password}
      secureTextEntry={!isPasswordVisible} // Toggle visibility
      onChangeText={setPassword}
      style={Styles.input}
    />
    <TouchableOpacity onPress={togglePasswordVisibility} style={Styles.iconContainer}>
      <Icon name={isPasswordVisible ? 'eye-with-line' : 'eye'} size={24} color="gray" />
    </TouchableOpacity>
    <TouchableOpacity onPress={generatePassword} style={Styles.generateButton}>
      <Text style={Styles.generateText}>Generate</Text>
    </TouchableOpacity>
      </View>
      </View>
      <Text style={{marginTop:hp(3), marginHorizontal:wp(12)}}>Can receive email notifications?</Text>
      <TouchableOpacity onPress={()=> setIsSelectedRadio(1)}>
      <View style={{flexDirection:"row", alignItems:"center",marginHorizontal:wp(11), marginTop:hp(3)}}>
      <View style={{height:hp(3), width:wp(7), backgroundColor:"white", borderWidth:wp(0.4), borderColor:"gray", borderRadius:wp(3)}}>
      {
        selectedradio === 1 ? <View style={{height:hp(2), width:wp(4), backgroundColor:"black", borderRadius:wp(3), marginTop:hp(0.5), marginHorizontal:wp(1)}}></View> : null
      }
      </View>
      <Text>Yes</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=> setIsSelectedRadio(2)}>
      <View style={{flexDirection:"row", alignItems:"center",marginHorizontal:wp(11), marginTop:hp(3)}}>
      <View style={{height:hp(3), width:wp(7), backgroundColor:"white", borderWidth:wp(0.4), borderColor:"gray", borderRadius:wp(3)}}>
      {
        selectedradio === 2 ? <View style={{height:hp(2), width:wp(4), backgroundColor:"black", borderRadius:wp(3), marginTop:hp(0.5),marginHorizontal:wp(1)}}></View> :null
      }
      </View>
      <Text>No</Text>
      </View>
      </TouchableOpacity>
      <View style={{marginTop:hp(4), marginHorizontal:wp(12)}}>
      <Text>Mobie</Text>
      <TextInput placeholder='03342874688' style={{borderRadius:wp(3), borderWidth:wp(0.4), marginBottom:wp(3),marginTop:hp(1)}} textContentType="telephoneNumber" />
      <Text>Gender</Text>
      <TextInput placeholder='Male or female' style={{borderRadius:wp(3), borderWidth:wp(0.4), marginBottom:wp(3),marginTop:hp(1)}} textContentType="telephoneNumber" />
      </View>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity style={{height:hp(6), width:wp(18), backgroundColor:"#359af2", borderColor:"gray", borderWidth:wp(0.5), borderRadius:wp(3), marginHorizontal:wp(22)}}>
      <Text style={{textAlign:"center", marginTop:hp(1), fontSize:hp(2.4), fontWeight:"bold"}}>Saved</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{height:hp(6), width:wp(18), backgroundColor:"white", borderColor:"gray", borderWidth:wp(0.5), borderRadius:wp(3)}}>
      <Text style={{textAlign:"center", marginTop:hp(1), fontSize:hp(2.4), fontWeight:"bold"}}>Cancel</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileSetting;

const Styles = StyleSheet.create({
  checkboxText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: wp(0.4),
    borderRadius: wp(3),
    borderColor: '#ddd',
    paddingHorizontal: wp(2),
    backgroundColor: '#f9f9f9',
    marginTop:hp(1)
  },
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: '#efefef',
    position: 'relative',
    borderRadius: 999,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  input: {
    flex: 1,
    paddingVertical: hp(1.2),
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: wp(2),
    padding: wp(1),
  },
  generateButton: {
    backgroundColor: '#007BFF',
    borderRadius: wp(3),
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(3),
    marginLeft: wp(2),
  },
  generateText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    textAlign: 'center',
    lineHeight: 200,
    color: 'gray',
  },
  uploadBtnContainer: {
    opacity: 0.8,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%',
  },
  uploadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  removeBtn: {
    marginTop: hp(2),
    alignSelf: 'center',
    backgroundColor: '#ff4d4d',
    paddingVertical: hp(1),
    paddingHorizontal: wp(8),
    borderRadius: 10,
  },
  removeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
