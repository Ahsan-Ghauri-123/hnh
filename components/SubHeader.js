import {View, TextInput, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import Profile from '../Assets/images/profile.jpg';
import CameraRoll from '../Assets/images/cameraroll.png';
import {Colors} from '../utils/Colors';

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={Profile} style={styles.profileStyle} />
      <View style={styles.inputBox}>
        <TextInput style={styles.inputStyle} placeholder='Write Something write?' />
      </View>
      <Image source={CameraRoll} style={styles.cameraRoll} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginBottom:410,
  },
  profileStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    borderRadius: 30,
    paddingHorizontal: 20,
    width: '70%',
    paddingVertical: 10,
    height:53,
  },
  inputStyle: {
    fontSize: 16,
    color: Colors.grey,
    height:40,
    width: '80%',
    justifyContent:"center",
    alignItems:"center",
  },
});

export default SubHeader;
