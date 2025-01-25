import React from "react";
import { Text, ScrollView } from "react-native";
import CreateStory from "../components/CreateStory";
import FriendsStory from "../components/FriendsStory";

const Stories=()=>{
    return(
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        horizontal style={{backgroundColor:"white", padding:11, paddingRight:40}} >
        <CreateStory />
        <FriendsStory />
        </ScrollView>
    );
};
export default Stories;