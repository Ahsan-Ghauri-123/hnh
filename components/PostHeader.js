import React from 'react';
import { Text, View, Image } from 'react-native';
import VectorIcon from '../utils/VectorIcon';
import { Colors } from '../utils/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PostHeader = ({data}) => {
  return (
    <View style={{padding:wp(4)}}>
    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
    <View style={{flexDirection:"row"}}>
    <Image source={data.profileImg} style={{height:hp(6), width:wp(12), borderRadius:20}} />
    <View style={{marginHorizontal:wp(5)}}>
    <Text style={{fontSize:hp(2), fontWeight:"bold", color:"black"}}>{data.name}</Text>
    <View style={{flexDirection:"row"}}>
    <Text style={{fontSize:hp(2), fontWeight:"bold", color:"black"}}>{data.date}</Text>
    <Text style={{color:"black", paddingHorizontal:wp(2)}}>•</Text>
    <VectorIcon name="user-friends" size={hp(2)} color={Colors.headerIconGrey} type="FontAwesome5"  />
    </View>
    </View>
    </View>
    <View style={{flexDirection:"row"}}>
    <VectorIcon name="dots-three-horizontal" size={hp(3)} color={Colors.headerIconGrey} type="Entypo"  />
    <VectorIcon name="close" size={hp(3)} color={Colors.headerIconGrey} type="Ionicons" style={{marginHorizontal:wp(3.3)}} />
    </View>
    </View>
    <Text style={{fontSize:15, fontWeight:"bold", color:"gray", marginTop:hp(3), marginHorizontal:wp(4)}}>{data.caption}</Text>
    </View>
  );
};

export default PostHeader;
