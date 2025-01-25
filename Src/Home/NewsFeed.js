// import React from 'react';
// import { Image, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
// import Icons from "react-native-vector-icons/MaterialCommunityIcons";

// const NewsFeed = () => {
//   return (
//     <ScrollView style={{flex:1, backgroundColor:"white"}}>
//     <View style={{height:550, backgroundColor:"#c0e0fa", marginTop:45, width:"90%", marginHorizontal:18, borderRadius:10, borderWidth:1}}>
//     <View style={{flexDirection:"row", marginHorizontal:12, marginTop:16}}>
//     <Text style={{fontSize:25, color:"black", fontWeight:"bold"}}>Dashboard </Text>
//     <TouchableOpacity>
//     <Text style={{fontSize:15, marginLeft:15, marginTop:8}}>Home •</Text>
//     </TouchableOpacity>
//     <Text style={{fontSize:15, marginLeft:15, marginTop:8}}>Dashboard</Text>
//     </View>
//     <View style={{height:150, backgroundColor:"white", marginTop:45, width:"94%", marginHorizontal:12, borderRadius:10, borderWidth:1}}>
//     <View style={{flexDirection:"row", marginTop:12}}>
//     <Image source={require("../../Assets/pic.jpg")} style={{height:54, width:51}} />
//     <TextInput placeholder='What on your mind, Yongmin?' style={{borderRadius:16, backgroundColor:"#e1effa", height:55, width:"80%", marginTop:8}} />
//     </View>
//     <View style={{height:55, width:67, backgroundColor:"#0f8df5", marginTop:12, borderRadius:8, marginHorizontal:12, flexDirection:"row", justifyContent:"space-between"}}>
//     <Icons name="view-gallery-outline" color="white" size={32} style={{marginHorizontal:18, marginTop:9}} />
//     <TouchableOpacity style={{height:55, width:67, backgroundColor:"#0f8df5", borderRadius:8, marginHorizontal:181}}>
//     <Text style={{textAlign:"center", marginTop:18, color:"white", fontSize:17}}>Post</Text>
//     </TouchableOpacity>
//     </View>
//     </View>
//     </View>
//     </ScrollView>
//   );
// };
// export default NewsFeed;


// import React, { useState } from 'react';
// import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Icons from "react-native-vector-icons/MaterialCommunityIcons";

// const NewsFeed = () => {
//   const [inputText, setInputText] = useState(""); // State for user input
//   const [posts, setPosts] = useState([]); // State for storing posts

//   const handlePost = () => {
//     if (inputText.trim() !== "") {
//       setPosts([...posts, inputText]); // Add new post to the list
//       setInputText(""); // Clear input field
//     }
//   };

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
//       {/* Input Section */}
//       <View
//         style={{
//           backgroundColor: "#c0e0fa",
//           marginTop: 45,
//           width: "90%",
//           marginHorizontal: 18,
//           borderRadius: 10,
//           borderWidth: 1,
//           padding: 12,
//         }}
//       >
//         <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//           <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Dashboard</Text>
//           <TouchableOpacity>
//             <Text style={{ fontSize: 15, marginLeft: 15 }}>Home •</Text>
//           </TouchableOpacity>
//           <Text style={{ fontSize: 15, marginLeft: 15 }}>Dashboard</Text>
//         </View>

//         <View
//           style={{
//             backgroundColor: "white",
//             borderRadius: 10,
//             borderWidth: 1,
//             padding: 10,
//             marginBottom: 20,
//           }}
//         >
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <Image
//               source={require("../../Assets/pic.jpg")}
//               style={{ height: 54, width: 51, borderRadius: 27 }}
//             />
//             <TextInput
//               placeholder="What's on your mind, Yongmin?"
//               style={{
//                 borderRadius: 16,
//                 backgroundColor: "#e1effa",
//                 height: 55,
//                 flex: 1,
//                 marginLeft: 10,
//                 paddingHorizontal: 10,
//               }}
//               value={inputText}
//               onChangeText={(text) => setInputText(text)}
//             />
//           </View>
//           <View style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}>
//             <View
//               style={{
//                 height: 55,
//                 width: 67,
//                 backgroundColor: "#0f8df5",
//                 borderRadius: 8,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Icons name="view-gallery-outline" color="white" size={32} />
//             </View>
//             <TouchableOpacity
//               style={{
//                 height: 55,
//                 flex: 1,
//                 backgroundColor: "#0f8df5",
//                 borderRadius: 8,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginLeft: 10,
//               }}
//               onPress={handlePost}
//             >
//               <Text style={{ color: "white", fontSize: 17 }}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>

//       {/* Posts Section */}
//       <View style={{ paddingHorizontal: 18 }}>
//         {posts.map((post, index) => (
//           <View
//             key={index}
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               backgroundColor: "#f8f9fa",
//               padding: 10,
//               borderRadius: 10,
//               marginBottom: 10,
//               borderWidth:1,
//               marginTop:12,
//             }}>
//             <Image
//               source={require("../../Assets/pic.jpg")}
//               style={{ height: 54, width: 51, borderRadius: 27 }}
//             />
//             <Text style={{ marginLeft: 10, fontSize: 16, color: "black" }}>{post}</Text>
//           </View>
//         ))}
//       </View>
//       <View  style={{
//         backgroundColor: "white",
//         marginTop: 8,
//         width: "90%",
//         marginHorizontal: 18,
//         borderRadius: 10,
//         borderWidth: 1,
//         padding: 12,
//         height:122
//       }}>
//       <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Tasks</Text>
//       <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//           <Text style={{ fontSize: 25, color: "blue", fontWeight: "bold" }}>0</Text>
//             <Text style={{ fontSize: 25, marginLeft: 128, color: "red", fontWeight: "bold"}}>0</Text>
//         </View>
//         <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//           <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Pending</Text>
//             <Text style={{ fontSize: 25, marginLeft: 18, color: "black", fontWeight: "bold"}}>Overdue</Text>
//         </View>
//       </View>
//       <View  style={{
//         backgroundColor: "white",
//         marginTop: 8,
//         width: "90%",
//         marginHorizontal: 18,
//         borderRadius: 10,
//         borderWidth: 1,
//         padding: 12,
//         height:122
//       }}>
//       <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Projects</Text>
//       <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//           <Text style={{ fontSize: 25, color: "blue", fontWeight: "bold" }}>0</Text>
//             <Text style={{ fontSize: 25, marginLeft: 128, color: "red", fontWeight: "bold"}}>0</Text>
//         </View>
//         <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//           <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Pending</Text>
//             <Text style={{ fontSize: 25, marginLeft: 18, color: "black", fontWeight: "bold"}}>Overdue</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default NewsFeed;

// import React, { useState } from 'react';
// import {
//   Image,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { launchImageLibrary } from 'react-native-image-picker';

// const NewsFeed = () => {
//   const [inputText, setInputText] = useState(''); // State for user input
//   const [posts, setPosts] = useState([]); // State for storing posts

//   const handlePost = () => {
//     if (inputText.trim() !== '') {
//       setPosts([...posts, { text: inputText, image: null }]); // Add new post without an image
//       setInputText(''); // Clear input field
//     }
//   };

//   const handleImagePicker = async () => {
//     const result = await launchImageLibrary({
//       mediaType: 'photo',
//       selectionLimit: 1,
//     });
//     if (result.assets && result.assets.length > 0) {
//       const selectedImage = result.assets[0].uri; // Get image URI
//       setPosts([...posts, { text: '', image: selectedImage }]); // Add new post with selected image
//     }
//   };

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
//       {/* Input Section */}
//       <View
//         style={{
//           backgroundColor: '#c0e0fa',
//           marginTop: 45,
//           width: '90%',
//           marginHorizontal: 18,
//           borderRadius: 10,
//           borderWidth: 1,
//           padding: 12,
//         }}
//       >
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginBottom: 10,
//           }}
//         >
//           <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>
//             Dashboard
//           </Text>
//           <TouchableOpacity>
//             <Text style={{ fontSize: 15, marginLeft: 15 }}>Home •</Text>
//           </TouchableOpacity>
//           <Text style={{ fontSize: 15, marginLeft: 15 }}>Dashboard</Text>
//         </View>

//         <View
//           style={{
//             backgroundColor: 'white',
//             borderRadius: 10,
//             borderWidth: 1,
//             padding: 10,
//             marginBottom: 20,
//           }}
//         >
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <Image
//               source={require('../../Assets/pic.jpg')}
//               style={{ height: 54, width: 51, borderRadius: 27 }}
//             />
//             <TextInput
//               placeholder="What's on your mind, Yongmin?"
//               style={{
//                 borderRadius: 16,
//                 backgroundColor: '#e1effa',
//                 height: 55,
//                 flex: 1,
//                 marginLeft: 10,
//                 paddingHorizontal: 10,
//               }}
//               value={inputText}
//               onChangeText={(text) => setInputText(text)}
//             />
//           </View>
//           <View
//             style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}
//           >
//             <TouchableOpacity
//               style={{
//                 height: 55,
//                 width: 67,
//                 backgroundColor: '#0f8df5',
//                 borderRadius: 8,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//               onPress={handleImagePicker}
//             >
//               <Icons name="view-gallery-outline" color="white" size={32} />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{
//                 height: 55,
//                 flex: 1,
//                 backgroundColor: '#0f8df5',
//                 borderRadius: 8,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginLeft: 10,
//               }}
//               onPress={handlePost}
//             >
//               <Text style={{ color: 'white', fontSize: 17 }}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>

//       {/* Posts Section */}
//       <View style={{ paddingHorizontal: 18 }}>
//         {posts.map((post, index) => (
//           <View
//             key={index}
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               backgroundColor: '#f8f9fa',
//               padding: 10,
//               borderRadius: 10,
//               marginBottom: 10,
//               borderWidth: 1,
//               marginTop: 12,
//             }}
//           >
//             <Image
//               source={post.image ? { uri: post.image } : require('../../Assets/pic.jpg')}
//               style={{ height: 54, width: 51, borderRadius: 27 }}
//             />
//             <Text style={{ marginLeft: 10, fontSize: 16, color: 'black' }}>
//               {post.text}
//             </Text>
//           </View>
//         ))}
//       </View>
//       <View  style={{
//                 backgroundColor: "white",
//                 marginTop: 8,
//                 width: "90%",
//                 marginHorizontal: 18,
//                 borderRadius: 10,
//                 borderWidth: 1,
//                 padding: 12,
//                 height:122
//               }}>
//               <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Tasks</Text>
//               <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//                   <Text style={{ fontSize: 25, color: "blue", fontWeight: "bold" }}>0</Text>
//                     <Text style={{ fontSize: 25, marginLeft: 128, color: "red", fontWeight: "bold"}}>0</Text>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//                   <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Pending</Text>
//                     <Text style={{ fontSize: 25, marginLeft: 18, color: "black", fontWeight: "bold"}}>Overdue</Text>
//                 </View>
//               </View>
//               <View  style={{
//                 backgroundColor: "white",
//                 marginTop: 8,
//                 width: "90%",
//                 marginHorizontal: 18,
//                 borderRadius: 10,
//                 borderWidth: 1,
//                 padding: 12,
//                 height:122
//               }}>
//               <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Projects</Text>
//               <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//                   <Text style={{ fontSize: 25, color: "blue", fontWeight: "bold" }}>0</Text>
//                     <Text style={{ fontSize: 25, marginLeft: 128, color: "red", fontWeight: "bold"}}>0</Text>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//                   <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>Pending</Text>
//                     <Text style={{ fontSize: 25, marginLeft: 18, color: "black", fontWeight: "bold"}}>Overdue</Text>
//                 </View>
//               </View>
//     </ScrollView>
//   );
// };

// export default NewsFeed;


// import React, { useState } from 'react';
// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { launchImageLibrary } from 'react-native-image-picker';

// const NewsFeed = () => {
//   const [inputText, setInputText] = useState(''); // State for user input
//   const [posts, setPosts] = useState([]); // State for storing posts
//   const [commentText, setCommentText] = useState(''); // State for comment input

//   const handlePost = () => {
//     if (inputText.trim() !== '') {
//       setPosts([
//         ...posts,
//         {
//           text: inputText,
//           image: null,
//           comments: [],
//           defaultImage: require('../../Assets/pic.jpg'),
//         },
//       ]); // Add new post with default image for text-only posts
//       setInputText(''); // Clear input field
//     }
//   };

//   const handleImagePicker = async () => {
//     const result = await launchImageLibrary({
//       mediaType: 'photo',
//       selectionLimit: 1,
//     });
//     if (result.assets && result.assets.length > 0) {
//       const selectedImage = result.assets[0].uri; // Get image URI
//       if (inputText.trim() !== '') {
//         setPosts([
//           ...posts,
//           { text: inputText, image: selectedImage, comments: [], defaultImage: null },
//         ]); // Add new post with image and text
//         setInputText(''); // Clear input field
//       }
//     }
//   };

//   const handleAddComment = (postIndex) => {
//     if (commentText.trim() !== '') {
//       const updatedPosts = [...posts];
//       updatedPosts[postIndex].comments.push(commentText); // Add comment to the specific post
//       setPosts(updatedPosts);
//       setCommentText(''); // Clear comment input field
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#7cb7fb" }}>
//       <ScrollView>
//         {/* Input Section */}
//         <View
//           style={{
//             backgroundColor: 'white',
//             marginTop: 45,
//             width: '90%',
//             marginHorizontal: 18,
//             borderRadius: 10,
//             borderWidth: 0.4,
//             padding: 12,
//             shadowColor: "#000",
//             shadowOffset: {
//               width: 0,
//               height: 5,
//             },
//             shadowOpacity: 0.34,
//             shadowRadius: 6.27,

//             elevation: 10,
//           }}
//         >
//           <View style={{ flexDirection: "row", marginHorizontal: 3 }}>
//             <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', elevation: 10 }}>
//               Dashboard
//             </Text>
//             <TouchableOpacity>
//               <Text style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', marginHorizontal: 14, marginTop: 6 }}>
//                 Home
//               </Text>
//             </TouchableOpacity>
//             <Text style={{ fontSize: 18, color: 'gray', fontWeight: 'bold', marginHorizontal: 11, marginTop: 6 }}>
//               • Dashboard
//             </Text>
//           </View>

//           <View
//             style={{
//               backgroundColor: 'white',
//               borderRadius: 10,
//               borderWidth: 0.8,
//               padding: 10,
//               marginBottom: 20,
//               shadowColor: "#000",
//               shadowOffset: {
//                 width: 0,
//                 height: 5,
//               },
//               shadowOpacity: 0.34,
//               shadowRadius: 6.27,

//               elevation: 10,
//               marginTop: 14,
//             }}
//           >
//             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//               <Image
//                 source={require('../../Assets/pic.jpg')}
//                 style={{ height: 54, width: 51, borderRadius: 27 }}
//               />
//               <TextInput
//                 placeholder="What's on your mind?"
//                 style={{
//                   borderRadius: 16,
//                   backgroundColor: '#e1effa',
//                   height: 55,
//                   flex: 1,
//                   marginLeft: 10,
//                   paddingHorizontal: 10,
//                   shadowColor: "#000",
//                   shadowOffset: {
//                     width: 0,
//                     height: 5,
//                   },
//                   shadowOpacity: 0.34,
//                   shadowRadius: 6.27,

//                   elevation: 10,
//                 }}
//                 value={inputText}
//                 onChangeText={(text) => setInputText(text)}
//               />
//             </View>
//             <View
//               style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}
//             >
//               <TouchableOpacity
//                 style={{
//                   height: 55,
//                   width: 67,
//                   backgroundColor: '#0f8df5',
//                   borderRadius: 8,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   shadowColor: "#000",
//                   shadowOffset: {
//                     width: 0,
//                     height: 5,
//                   },
//                   shadowOpacity: 0.34,
//                   shadowRadius: 6.27,

//                   elevation: 15,
//                 }}
//                 onPress={handleImagePicker}
//               >
//                 <Icons name="view-gallery-outline" color="white" size={32} />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   height: 55,
//                   flex: 1,
//                   backgroundColor: '#0f8df5',
//                   borderRadius: 8,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginLeft: 10,
//                   shadowColor: "#000",
//                   shadowOffset: {
//                     width: 0,
//                     height: 5,
//                   },
//                   shadowOpacity: 0.34,
//                   shadowRadius: 6.27,

//                   elevation: 15,
//                 }}
//                 onPress={handlePost}
//               >
//                 <Text style={{ color: 'white', fontSize: 17 }}>Post</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>

//         {/* Posts Section */}
//         <View style={{ paddingHorizontal: 18 }}>
//           {posts.map((post, index) => (
//             <View
//               key={index}
//               style={{
//                 backgroundColor: '#f8f9fa',
//                 padding: 10,
//                 borderRadius: 10,
//                 marginBottom: 10,
//                 borderWidth: 0.6,
//                 marginTop: 12,
//                 shadowColor: "#000",
//                 shadowOffset: {
//                   width: 0,
//                   height: 5,
//                 },
//                 shadowOpacity: 0.34,
//                 shadowRadius: 6.27,

//                 elevation: 10,
//               }}
//             >
//               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                 <Image
//                   source={post.defaultImage ? post.defaultImage : { uri: post.image }}
//                   style={{
//                     height: post.image ? 190 : 54,
//                     width: post.image ? 220 : 51,
//                     borderRadius: post.image ? 10 : 27,
//                     marginRight: 10,
//                     marginBottom: post.image ? 12 : 22,
//                     shadowColor: "#000",
//                     shadowOffset: {
//                       width: 0,
//                       height: 22,
//                     },
//                     shadowOpacity: 0.34,
//                     shadowRadius: 6.27,

//                     elevation: 20,
//                   }}
//                 />
//                 {post.text && (
//                   <Text style={{ fontSize: post.image ? 18 : 12, color: 'black', flex: 1, marginTop: post.image ? 198 : 0, marginHorizontal: post.image ? -194 : 0 }}>
//                     {post.text}
//                   </Text>
//                 )}
//               </View>

//               {/* Comments Section */}
//               <View style={{ marginTop: 10 }}>
//                 {post.comments.map((comment, commentIndex) => (
//                   <Text
//                     key={commentIndex}
//                     style={{
//                       marginLeft: 10,
//                       fontSize: 14,
//                       color: 'gray',
//                       marginBottom: 12,
//                       marginTop: 22,
//                     }}
//                   >
//                     {comment}
//                   </Text>
//                 ))}

//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                   <TextInput
//                     placeholder="Add a comment"
//                     style={{
//                       borderRadius: 16,
//                       backgroundColor: '#e1effa',
//                       flex: 1,
//                       paddingHorizontal: 10,
//                       marginTop: 12,
//                     }}
//                     value={commentText}
//                     onChangeText={(text) => setCommentText(text)}
//                   />
//                   <TouchableOpacity
//                     onPress={() => handleAddComment(index)}
//                     style={{ marginLeft: 10 }}
//                   >
//                     <Icons name="send" size={24} color="#0f8df5" />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           ))}
//         </View>
//         <View style={{
//           backgroundColor: "white",
//           marginTop: 8,
//           width: "90%",
//           marginHorizontal: 18,
//           borderRadius: 10,
//           borderWidth: 0.3,
//           padding: 12,
//           height: 122,
//           shadowColor: "#000",
//           shadowOffset: {
//             width: 0,
//             height: 5,
//           },
//           shadowOpacity: 0.34,
//           shadowRadius: 6.27,

//           elevation: 22,
//         }}>
//           <Text style={{ fontSize: 22, color: "black", fontWeight: "bold" }}>Tasks</Text>
//           <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//             <Text style={{ fontSize: 22, color: "blue", fontWeight: "bold" }}>0</Text>
//             <Text style={{ fontSize: 22, marginLeft: 148, color: "red", fontWeight: "bold" }}>0</Text>
//           </View>
//           <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//             <Text style={{ fontSize: 22, color: "black", fontWeight: "bold" }}>Pending</Text>
//             <Text style={{ fontSize: 22, marginLeft: 33, color: "black", fontWeight: "bold", textShadowOffset: 22, elevation: 22 }}>Overdue</Text>
//           </View>
//         </View>
//         <View style={{
//           backgroundColor: "white",
//           marginTop: 8,
//           width: "90%",
//           marginHorizontal: 18,
//           borderRadius: 10,
//           borderWidth: 0.5,
//           padding: 12,
//           height: 122,
//           shadowColor: "#000",
//           shadowOffset: {
//             width: 0,
//             height: 5,
//           },
//           shadowOpacity: 0.34,
//           shadowRadius: 6.27,

//           elevation: 22,
//         }}>
//           <Text style={{ fontSize: 22, color: "black", fontWeight: "bold" }}>Projects</Text>
//           <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//             <Text style={{ fontSize: 22, color: "blue", fontWeight: "bold" }}>0</Text>
//             <Text style={{ fontSize: 22, marginLeft: 148, color: "red", fontWeight: "bold" }}>0</Text>
//           </View>
//           <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
//             <Text style={{ fontSize: 22, color: "black", fontWeight: "bold" }}>Pending</Text>
//             <Text style={{ fontSize: 22, marginLeft: 33, color: "black", fontWeight: "bold" }}>Overdue</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default NewsFeed;

// import React, { useState } from 'react';
// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   FlatList,
// } from 'react-native';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { launchImageLibrary } from 'react-native-image-picker';

// const NewsFeed = () => {
//   const [inputText, setInputText] = useState('');
//   const [posts, setPosts] = useState([]);
//   const [commentText, setCommentText] = useState('');

//   const handlePost = () => {
//     if (inputText.trim() !== '') {
//       setPosts([
//         ...posts,
//         { text: inputText, image: null, comments: [], defaultImage: require('../../Assets/pic.jpg') },
//       ]);
//       setInputText('');
//     }
//   };

//   const handleImagePicker = async () => {
//     const result = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 });
//     if (result.assets && result.assets.length > 0) {
//       const selectedImage = result.assets[0].uri;
//       if (inputText.trim() !== '') {
//         setPosts([
//           ...posts,
//           { text: inputText, image: selectedImage, comments: [], defaultImage: null },
//         ]);
//         setInputText('');
//       }
//     }
//   };

//   const handleAddComment = (postIndex) => {
//     if (commentText.trim() !== '') {
//       const updatedPosts = [...posts];
//       updatedPosts[postIndex].comments.push(commentText);
//       setPosts(updatedPosts);
//       setCommentText('');
//     }
//   };

//   const renderPost = ({ item, index }) => (
//     <View style={styles.postContainer}>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <Image
//           source={item.defaultImage ? item.defaultImage : { uri: item.image }}
//           style={styles.postImage(item.image)}
//         />
//         {item.text && <Text style={styles.postText(item.image)}>{item.text}</Text>}
//       </View>
//       <View style={{ marginTop: 10 }}>
//         {item.comments.map((comment, commentIndex) => (
//           <Text key={commentIndex} style={styles.commentText}>
//             {comment}
//           </Text>
//         ))}
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <TextInput
//             placeholder="Add a comment"
//             style={styles.commentInput}
//             value={commentText}
//             onChangeText={(text) => setCommentText(text)}
//           />
//           <TouchableOpacity onPress={() => handleAddComment(index)} style={{ marginLeft: 10 }}>
//             <Icons name="send" size={24} color="#0f8df5" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   const renderTaskOrProject = ({ item }) => (
//     <View style={styles.infoContainer}>
//       <Text style={styles.infoHeader}>{item.title}</Text>
//       <View style={styles.infoRow}>
//         <Text style={styles.infoCount(item.color1)}>{item.count1}</Text>
//         <Text style={styles.infoCount(item.color2)}>{item.count2}</Text>
//       </View>
//       <View style={styles.infoRow}>
//         <Text style={styles.infoLabel}>Pending</Text>
//         <Text style={styles.infoLabel}>Overdue</Text>
//       </View>
//     </View>
//   );

//   const taskProjectData = [
//     { title: 'Tasks', count1: 0, count2: 0, color1: 'blue', color2: 'red' },
//     { title: 'Projects', count1: 0, count2: 0, color1: 'blue', color2: 'red' },
//   ];

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#7cb7fb' }}>
//       <ScrollView>
//         <View style={styles.inputContainer}>
//           <Text style={styles.dashboardText}>Dashboard</Text>
//           <View style={styles.textInputRow}>
//             <Image source={require('../../Assets/pic.jpg')} style={styles.profileImage} />
//             <TextInput
//               placeholder="What's on your mind?"
//               style={styles.inputField}
//               value={inputText}
//               onChangeText={(text) => setInputText(text)}
//             />
//           </View>
//           <View style={styles.buttonRow}>
//             <TouchableOpacity style={styles.imageButton} onPress={handleImagePicker}>
//               <Icons name="view-gallery-outline" color="white" size={32} />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.postButton} onPress={handlePost}>
//               <Text style={styles.postButtonText}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <FlatList
//           data={posts}
//           renderItem={renderPost}
//           keyExtractor={(item, index) => index.toString()}
//           style={{ paddingHorizontal: 18, marginTop: 15 }}
//         />

//         <FlatList
//           data={taskProjectData}
//           renderItem={renderTaskOrProject}
//           keyExtractor={(item) => item.title}
//           style={{ marginTop: 8, paddingHorizontal: 18 }}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = {
//   inputContainer: {
//     backgroundColor: 'white',
//     marginTop: 45,
//     marginHorizontal: 18,
//     borderRadius: 10,
//     padding: 12,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,

//     elevation: 22,
//   },
//   dashboardText: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
//   textInputRow: { flexDirection: 'row', alignItems: 'center' },
//   profileImage: { height: 54, width: 51, borderRadius: 27, borderWidth: 0.7 },
//   inputField: { flex: 1, marginLeft: 10, backgroundColor: '#e1effa', borderRadius: 16, height: 55, borderWidth: 0.4},
//   buttonRow: { flexDirection: 'row', marginTop: 15, alignItems: 'center',borderWidth: 0.1},
//   imageButton: {
//     borderWidth: 0.5,
//     height: 55,
//     width: 67,
//     backgroundColor: '#0f8df5',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,

//     elevation: 10,
//   },
//   postButton: {
//     borderWidth: 0.2,
//     flex: 1,
//     height: 55,
//     marginLeft: 10,
//     backgroundColor: '#0f8df5',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,

//     elevation: 15,
//   },
//   postButtonText: { color: 'white', fontSize: 17 },
//   postContainer: { backgroundColor: '#f8f9fa', padding: 10, borderRadius: 10, marginBottom: 10 },
//   postImage: (hasImage) => ({
//     borderWidth: 0.7,
//     height: hasImage ? 190 : 54,
//     width: hasImage ? 220 : 51,
//     borderRadius: hasImage ? 10 : 27,
//     marginBottom: hasImage ? 12 : 22,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,

//     elevation: 14,
//   }),
//   postText: (hasImage) => ({
//     fontSize: hasImage ? 18 : 14,
//     color: 'black',
//     flex: 1,
//     marginTop: hasImage ? 201 : 1,
//     marginLeft: hasImage ? -199 : 8,
//   }),
//   commentText: { marginLeft: 10, fontSize: 14, color: 'gray', marginBottom: 12 },
//   commentInput: { flex: 1, borderRadius: 16, backgroundColor: '#e1effa', paddingHorizontal: 10 },
//   infoContainer: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 12,
//     marginBottom: 8,
//     borderWidth: 0.7,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,

//     elevation: 16,
//   },
//   infoHeader: { fontSize: 22, fontWeight: 'bold' },
//   infoRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
//   infoCount: (color) => ({ fontSize: 22, fontWeight: 'bold', color }),
//   infoLabel: { fontSize: 22, fontWeight: 'bold' },
// };

// export default NewsFeed;

//yeh perfect code hai...
// import React, { useState } from "react";
// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   FlatList,
// } from "react-native";
// import Icons from "react-native-vector-icons/MaterialCommunityIcons";
// import { launchImageLibrary } from "react-native-image-picker";
// import Animated, { SlideInLeft, SlideOutLeft, Layout, SlideInRight } from "react-native-reanimated";

// const NewsFeed = () => {
//   const [inputText, setInputText] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [commentText, setCommentText] = useState({}); // Store comment input per post

//   const handlePost = () => {
//     if (inputText.trim() !== "") {
//       setPosts([
//         ...posts,
//         { text: inputText, image: null, comments: [], defaultImage: require("../../Assets/pic.jpg") },
//       ]);
//       setInputText("");
//     }
//   };

//   const handleImagePicker = async () => {
//     const result = await launchImageLibrary({ mediaType: "photo", selectionLimit: 1 });
//     if (result.assets && result.assets.length > 0) {
//       const selectedImage = result.assets[0].uri;
//       if (inputText.trim() !== "") {
//         setPosts([
//           ...posts,
//           { text: inputText, image: selectedImage, comments: [], defaultImage: null },
//         ]);
//         setInputText("");
//       }
//     }
//   };

//   const handleAddComment = (postIndex) => {
//     if (commentText[postIndex]?.trim() !== "") {
//       const updatedPosts = [...posts];
//       updatedPosts[postIndex].comments.push(commentText[postIndex]);
//       setPosts(updatedPosts);

//       // Clear comment input for this specific post
//       setCommentText((prev) => ({ ...prev, [postIndex]: "" }));
//     }
//   };

//   const renderPost = ({ item, index }) => (
//     <Animated.View
//       entering={SlideInLeft}
//       exiting={SlideOutLeft}
//       layout={Layout}
//       style={styles.postContainer}
//     >
//       <View style={{ flexDirection: "row", alignItems: "center" }}>
//         <Image
//           source={item.defaultImage ? item.defaultImage : { uri: item.image }}
//           style={styles.postImage(item.image)}
//         />
//         {item.text && <Text style={styles.postText(item.image)}>{item.text}</Text>}
//       </View>
//       <View style={{ marginTop: 10 }}>
//         {item.comments.map((comment, commentIndex) => (
//           <Text key={commentIndex} style={styles.commentText}>
//             {comment}
//           </Text>
//         ))}
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <TextInput
//             placeholder="Add a comment"
//             style={styles.commentInput}
//             value={commentText[index] || ""} // Use comment input specific to this post
//             onChangeText={(text) => setCommentText((prev) => ({ ...prev, [index]: text }))}
//           />
//           <TouchableOpacity onPress={() => handleAddComment(index)} style={{ marginLeft: 10 }}>
//             <Icons name="send" size={24} color="#0f8df5" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Animated.View>
//   );

//   const renderTaskOrProject = ({ item }) => (
//     <Animated.View
//       entering={SlideInRight}
//       exiting={SlideOutLeft}
//       layout={Layout}
//       style={styles.infoContainer}
//     >
//       <Text style={styles.infoHeader}>{item.title}</Text>
//       <View style={styles.infoRow}>
//         <Text style={styles.infoCount(item.color1)}>{item.count1}</Text>
//         <Text style={styles.infoCount(item.color2)}>{item.count2}</Text>
//       </View>
//       <View style={styles.infoRow}>
//         <Text style={styles.infoLabel}>Pending</Text>
//         <Text style={styles.infoLabel}>Overdue</Text>
//       </View>
//     </Animated.View>
//   );

//   const taskProjectData = [
//     { title: "Tasks", count1: 0, count2: 0, color1: "blue", color2: "red" },
//     { title: "Projects", count1: 0, count2: 0, color1: "blue", color2: "red" },
//   ];

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
//       <ScrollView>
//         <View style={styles.inputContainer}>
//           <Text style={styles.dashboardText}>Dashboard</Text>
//           <View style={styles.textInputRow}>
//             <Image source={require("../../Assets/pic.jpg")} style={styles.profileImage} />
//             <TextInput
//               placeholder="What's on your mind?"
//               style={styles.inputField}
//               value={inputText}
//               onChangeText={(text) => setInputText(text)}
//             />
//           </View>
//           <View style={styles.buttonRow}>
//             <TouchableOpacity style={styles.imageButton} onPress={handleImagePicker}>
//               <Icons name="view-gallery-outline" color="white" size={32} />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.postButton} onPress={handlePost}>
//               <Text style={styles.postButtonText}>Post</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <ScrollView scrollEnabled={false}>
//   <FlatList
//     data={posts}
//     renderItem={renderPost}
//     keyExtractor={(item, index) => index.toString()}
//     style={{ paddingHorizontal: 18, marginTop: 15 }}
//   />
// </ScrollView>

//         <View style={{ marginTop: 8, paddingHorizontal: 18 }}>
//         {taskProjectData.map((item, index) => (
//           <Animated.View
//             key={index}
//             entering={SlideInRight}
//             exiting={SlideOutLeft}
//             layout={Layout}
//             style={styles.infoContainer}
//           >
//             <Text style={styles.infoHeader}>{item.title}</Text>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoCount(item.color1)}>{item.count1}</Text>
//               <Text style={styles.infoCount(item.color2)}>{item.count2}</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Pending</Text>
//               <Text style={styles.infoLabel}>Overdue</Text>
//             </View>
//           </Animated.View>
//         ))}
//       </View>

//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = {
//   inputContainer: {
//     backgroundColor: "white",
//     marginTop: 45,
//     marginHorizontal: 18,
//     borderRadius: 10,
//     borderWidth: 0.4,
//     padding: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,
//     elevation: 22,
//     borderColor: "#032e73",
//   },
//   dashboardText: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
//   textInputRow: { flexDirection: "row", alignItems: "center" },
//   profileImage: { height: 54, width: 51, borderRadius: 27, borderWidth: 0.7 },
//   inputField: { flex: 1, marginLeft: 10, backgroundColor: "#e1effa", borderRadius: 16, height: 45, borderWidth: 0.4 },
//   buttonRow: { flexDirection: "row", marginTop: 15, alignItems: "center", borderWidth: 0.1 },
//   imageButton: {
//     borderWidth: 0.5,
//     height: 55,
//     width: 67,
//     backgroundColor: "#0f8df5",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,
//     elevation: 10,
//   },
//   postButton: {
//     borderWidth: 0.2,
//     flex: 1,
//     height: 55,
//     marginLeft: 10,
//     backgroundColor: "#0f8df5",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,
//     elevation: 15,
//   },
//   postButtonText: { color: "white", fontSize: 17 },
//   postContainer: {
//     backgroundColor: "#f8f9fa",
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//     borderWidth: 0.4,
//     borderColor: "#032e73",
//   },
//   postImage: (hasImage) => ({
//     borderWidth: 0.7,
//     height: hasImage ? 190 : 54,
//     width: hasImage ? 220 : 51,
//     borderRadius: hasImage ? 10 : 27,
//     marginBottom: hasImage ? 12 : 22,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,
//     elevation: 14,
//   }),
//   postText: (hasImage) => ({
//     fontSize: hasImage ? 18 : 14,
//     color: "black",
//     flex: 1,
//     marginTop: hasImage ? 201 : 1,
//     marginLeft: hasImage ? -199 : 8,
//   }),
//   commentText: { marginLeft: 10, fontSize: 14, color: "gray", marginBottom: 12 },
//   commentInput: { flex: 1, borderRadius: 16, backgroundColor: "#e1effa", paddingHorizontal: 10 },
//   infoContainer: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     padding: 12,
//     marginBottom: 8,
//     borderWidth: 0.7,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,
//     elevation: 16,
//   },
//   infoHeader: { fontSize: 22, fontWeight: "bold" },
//   infoRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
//   infoCount: (color) => ({ fontSize: 22, fontWeight: "bold", color }),
//   infoLabel: { fontSize: 22, fontWeight: "bold" },
// };

// export default NewsFeed;

import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Stories from "../../components/Stories";
import SubHeader from "../../components/SubHeader";
import Post from "../../components/Post";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";

const NewsFeed = () => {
  const navigation = useNavigation();

  // State to keep track of selected icon
  const [selectedId, setSelectedId] = useState(null);
 

  // Render function for FlatList items
  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;

    return (
      <TouchableOpacity
        style={[styles.box, isSelected && styles.selectedBox]}
        onPress={() => {
          setSelectedId(item.id); // Update the selected ID
          navigation.navigate(item.screen);
        }}
      >
        <Icon
          name={item.icon}
          size={28}
          color={isSelected ? "#3975db" : "black"} // Change color based on selection
        />
        <View style={styles.textContainer}>
          <Text style={[styles.boxText, isSelected && styles.selectedText]}>{item.name}</Text>
          {/* Add underline if selected */}
        </View>
      </TouchableOpacity>
      
    );
  };

  return (
  <View style={{flex:1, backgroundColor:"white"}}>
 
  <ScrollView style={styles.container}>
      {/* Add gap below SubHeader */}
      <View style={{backgroundColor:"white", width:"100%", marginTop:hp(1)}}>
      <Post />
      </View>
    </ScrollView>
    </View>
  );
};

export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
  },
  flatList: {
    paddingHorizontal: 10,
    marginTop: -1,
  },
  box: {
    width: 60,
    height: 70, // Increased height to accommodate underline
    backgroundColor: "white",
    borderRadius: -11,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
  },
  selectedBox: {
    backgroundColor: "#e3f2fd", // Highlight the box if selected
  },
  boxText: {
    color: "#6200ea",
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
  selectedText: {
    color: "#3975db", // Change text color if selected
  },
  underline: {
    height: 2,
    backgroundColor: "#ff5722", // Color of the underline
    width: "100%",
    marginTop: 2,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  storiesContainer: {
    marginTop: -402, // Add gap below SubHeader
  },
});