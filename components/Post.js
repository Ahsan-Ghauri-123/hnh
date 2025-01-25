import React from 'react';
import { Image, Text, View } from 'react-native';
import PostHeader from './PostHeader';
import PostImge from "../Assets/images/post1.jpeg";
import PostFooter from './PostFooter';
import { PostData } from '../Data/PostData';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Post = () => {
  return (
    <>
      {
        PostData.map(item => (
          <View key={item.id} style={{ marginVertical:wp(3)}}>
            <PostHeader key={item.id} data={item} />
            <Image source={item.postImg} style={{
              height:hp(30), width:wp("99%"), shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 14
            }} />
            <PostFooter data={item} />
          </View >
        ))
      }
    </>
  );
};

export default Post;   
