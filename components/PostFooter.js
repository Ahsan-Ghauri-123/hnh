// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
//   TouchableWithoutFeedback,
//   Alert,
//   TextInput,
//   Button,
// } from 'react-native';
// import { Linking } from 'react-native';
// import Like from '../Assets/images/like.jpeg';
// import Shock from '../Assets/images/shock.jpeg';
// import Heart from '../Assets/images/heart.jpeg';
// import { Colors } from '../utils/Colors';
// import VectorIcon from '../utils/VectorIcon';
// import Clipboard from '@react-native-clipboard/clipboard';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const PostFooter = ({ data }) => {
//   const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(data.reaction);
//   const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
//   const [isMoreSheetVisible, setMoreSheetVisible] = useState(false);
//   const [isCommentSheetVisible, setCommentSheetVisible] = useState(false); // New state for comment sheet
//   const [commentText, setCommentText] = useState(''); // State for comment input
//   const [addcomment, setAddComments] = useState(data.comments);

//   const handleLikePress = () => {
//     setLiked(!liked);
//     setLikeCount(liked ? likeCount - 1 : likeCount + 1);
//   };
//   const handleCommentSubmit = () => {
//     if (commentText.trim()) {
//       setAddComments(addcomment + 1); // Increment the comment count
//       Alert.alert('Comment Submitted', commentText);
//       setCommentText(''); // Clear input
//       closeBottomSheet();
//     } else {
//       Alert.alert('Error', 'Please write a comment.');
//     }
//   };

//   const closeBottomSheet = () => {
//     setBottomSheetVisible(false);
//     setMoreSheetVisible(false);
//     setCommentSheetVisible(false); // Close comment sheet
//   };

//   const handleWhatsAppShare = () => {
//     const message = `Check out this post: ${data.link}`;
//     Linking.openURL(`whatsapp://send?text=${message}`).catch(() => {
//       Alert.alert('Error', 'WhatsApp is not installed on your device.');
//     });
//   };

//   const handleYourStoryShare = () => {
//     Linking.openURL('https://www.facebook.com/stories/create').catch(() => {
//       Alert.alert('Error', 'Unable to open Facebook Story.');
//     });
//   };

//   const handleCopyLink = () => {
//     Clipboard.setString(data.link);
//     Alert.alert('Link Copied', 'The post link has been copied to your clipboard.');
//     closeBottomSheet();
//   };

//   const handleMorePress = () => {
//     setMoreSheetVisible(true);
//     setBottomSheetVisible(false);
//   };


//   return (
//     <View style={styles.postFotterContainer}>
//       <View style={styles.footerReactionSec}>
//         <View style={styles.row}>
//           <Image source={Like} style={styles.reactionIcon} />
//           <Image source={Shock} style={styles.reactionIcon} />
//           <Image source={Heart} style={styles.reactionIcon} />
//           <Text style={styles.reactionCount}>{likeCount}</Text>
//         </View>
//         <Text style={styles.reactionCount}>Comment {addcomment}</Text>
//       </View>
//       <View style={styles.userActionSec}>
//         <TouchableOpacity style={styles.row} onPress={handleLikePress}>
//           <VectorIcon
//             name={liked ? 'like1' : 'like2'}
//             type="AntDesign"
//             size={25}
//             color={liked ? Colors.primary : Colors.grey}
//           />
//           <Text style={[styles.reactionCount, liked && { color: Colors.primary }]}>
//             Like
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.row} onPress={() => setCommentSheetVisible(true)}>
//           <VectorIcon
//             name="chatbox-outline"
//             type="Ionicons"
//             size={25}
//             color={Colors.grey}
//           />
//           <Text style={styles.reactionCount}>Comment</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.row} onPress={() => setBottomSheetVisible(true)}>
//           <VectorIcon
//             name="arrow-redo-outline"
//             type="Ionicons"
//             size={25}
//             color={Colors.grey}
//           />
//           <Text style={styles.reactionCount}>Share</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Main Bottom Sheet */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isBottomSheetVisible}
//         onRequestClose={closeBottomSheet}
//       >
//         <TouchableWithoutFeedback onPress={closeBottomSheet}>
//           <View style={styles.overlay} />
//         </TouchableWithoutFeedback>
//         <View style={styles.bottomSheet}>
//           <Text style={styles.bottomSheetTitle}>Share to</Text>
//           <View style={styles.shareOptions}>
//             <TouchableOpacity style={styles.shareOption} onPress={handleWhatsAppShare}>
//               <VectorIcon name="logo-whatsapp" type="Ionicons" size={30} color={Colors.green} />
//               <Text style={styles.shareOptionText}>WhatsApp</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.shareOption} onPress={handleYourStoryShare}>
//               <VectorIcon name="book-outline" type="Ionicons" size={30} color={Colors.blue} />
//               <Text style={styles.shareOptionText}>YourStory</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.shareOption} onPress={handleCopyLink}>
//               <VectorIcon name="link-outline" type="Ionicons" size={30} color={Colors.grey} />
//               <Text style={styles.shareOptionText}>Copy Link</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.shareOption} onPress={handleMorePress}>
//               <VectorIcon name="ellipsis-horizontal" type="Ionicons" size={30} color={Colors.grey} />
//               <Text style={styles.shareOptionText}>More</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Comment Input Bottom Sheet */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isCommentSheetVisible}
//         onRequestClose={closeBottomSheet}>
//         <TouchableWithoutFeedback onPress={closeBottomSheet}>
//           <View style={styles.overlay} />
//         </TouchableWithoutFeedback>
//         <View style={styles.bottomSheet}>
//           <Text style={styles.bottomSheetTitle}>Write a Comment</Text>
//           <TextInput
//             style={styles.commentInput}
//             placeholder="Write a comment..."
//             placeholderTextColor={Colors.grey}
//             value={commentText}
//             onChangeText={setCommentText}
//           />
//           <Button title='Submit' onPress={handleCommentSubmit} />
//         </View>
//       </Modal>

//       {/* More Options Bottom Sheet */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isMoreSheetVisible}
//         onRequestClose={closeBottomSheet}>
//         <TouchableWithoutFeedback onPress={closeBottomSheet}>
//           <View style={styles.overlay} />
//         </TouchableWithoutFeedback>
//         <View style={styles.bottomSheet}>
//           <Text style={styles.bottomSheetTitle}>More Options</Text>
//           <View style={styles.shareOptions}>
//             <TouchableOpacity style={styles.shareOption}>
//               <VectorIcon name="logo-whatsapp" type="Ionicons" size={30} color={Colors.green} />
//               <Text style={styles.shareOptionText}>WhatsApp</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.shareOption}>
//               <VectorIcon name="logo-chrome" type="Ionicons" size={30} color={Colors.blue} />
//               <Text style={styles.shareOptionText}>Google Chrome</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.shareOption}>
//               <VectorIcon name="chatbox-outline" type="Ionicons" size={30} color={Colors.grey} />
//               <Text style={styles.shareOptionText}>Messages</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.shareOption}>
//               <VectorIcon name="logo-linkedin" type="Ionicons" size={30} color={Colors.blue} />
//               <Text style={styles.shareOptionText}>LinkedIn</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   reactionIcon: {
//     height: 20,
//     width: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   postFotterContainer: {
//     padding: 16,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 13,
//   },
//   reactionCount: {
//     color: Colors.grey,
//     fontSize: 14,
//     paddingLeft: 5,
//   },
//   footerReactionSec: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.lightgrey,
//     paddingBottom: 15,
//   },
//   userActionSec: {
//     marginTop: 15,
//     marginBottom: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   bottomSheet: {
//     backgroundColor: 'white',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//     paddingBottom: 40,
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 11,
//   },
//   bottomSheetTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   shareOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   shareOption: {
//     alignItems: 'center',
//   },
//   shareOptionText: {
//     marginTop: 8,
//     fontSize: 14,
//     color: Colors.grey,
//   },
//   commentInput: {
//     borderWidth: 1,
//     borderColor: Colors.lightgrey,
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 20,
//     fontSize: 16,
//   },
// });

// export default PostFooter;

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import { Linking } from 'react-native';
import Like from '../Assets/images/like.jpeg';
import Shock from '../Assets/images/shock.jpeg';
import Heart from '../Assets/images/heart.jpeg';
import { Colors } from '../utils/Colors';
import VectorIcon from '../utils/VectorIcon';
import Clipboard from '@react-native-clipboard/clipboard';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PostFooter = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(data.reaction);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isMoreSheetVisible, setMoreSheetVisible] = useState(false);
  const [isCommentSheetVisible, setCommentSheetVisible] = useState(false); // New state for comment sheet
  const [commentText, setCommentText] = useState(''); // State for comment input
  const [addcomment, setAddComments] = useState(data.comments);

  const handleLikePress = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };
  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setAddComments(addcomment + 1); // Increment the comment count
      Alert.alert('Comment Submitted', commentText);
      setCommentText(''); // Clear input
      closeBottomSheet();
    } else {
      Alert.alert('Error', 'Please write a comment.');
    }
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
    setMoreSheetVisible(false);
    setCommentSheetVisible(false); // Close comment sheet
  };

  const handleWhatsAppShare = () => {
    const message = `Check out this post: ${data.link}`;
    Linking.openURL(`whatsapp://send?text=${message}`).catch(() => {
      Alert.alert('Error', 'WhatsApp is not installed on your device.');
    });
  };

  const handleYourStoryShare = () => {
    Linking.openURL('https://www.facebook.com/stories/create').catch(() => {
      Alert.alert('Error', 'Unable to open Facebook Story.');
    });
  };

  const handleCopyLink = () => {
    Clipboard.setString(data.link);
    Alert.alert('Link Copied', 'The post link has been copied to your clipboard.');
    closeBottomSheet();
  };

  const handleMorePress = () => {
    setMoreSheetVisible(true);
    setBottomSheetVisible(false);
  };

  return (
    <View style={styles.postFotterContainer}>
      <View style={styles.footerReactionSec}>
        <View style={styles.row}>
          <Image source={Like} style={styles.reactionIcon} />
          <Image source={Shock} style={styles.reactionIcon} />
          <Image source={Heart} style={styles.reactionIcon} />
          <Text style={styles.reactionCount}>{likeCount}</Text>
        </View>
        <Text style={styles.reactionCount}>Comment {addcomment}</Text>
      </View>
      <View style={styles.userActionSec}>
        <TouchableOpacity style={styles.row} onPress={handleLikePress}>
          <VectorIcon
            name={liked ? 'like1' : 'like2'}
            type="AntDesign"
            size={hp(3)}
            color={liked ? Colors.primary : Colors.grey}
          />
          <Text style={[styles.reactionCount, liked && { color: Colors.primary }]}>
            Like
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={() => setCommentSheetVisible(true)}>
          <VectorIcon
            name="chatbox-outline"
            type="Ionicons"
            size={hp(3)}
            color={Colors.grey}
          />
          <Text style={styles.reactionCount}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={() => setBottomSheetVisible(true)}>
          <VectorIcon
            name="arrow-redo-outline"
            type="Ionicons"
            size={hp(3)}
            color={Colors.grey}
          />
          <Text style={styles.reactionCount}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Main Bottom Sheet */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetVisible}
        onRequestClose={closeBottomSheet}
      >
        <TouchableWithoutFeedback onPress={closeBottomSheet}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.bottomSheet}>
          <Text style={styles.bottomSheetTitle}>Share to</Text>
          <View style={styles.shareOptions}>
            <TouchableOpacity style={styles.shareOption} onPress={handleWhatsAppShare}>
              <VectorIcon name="logo-whatsapp" type="Ionicons" size={hp(4)} color={Colors.green} />
              <Text style={styles.shareOptionText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareOption} onPress={handleYourStoryShare}>
              <VectorIcon name="book-outline" type="Ionicons" size={hp(4)} color={Colors.blue} />
              <Text style={styles.shareOptionText}>YourStory</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareOption} onPress={handleCopyLink}>
              <VectorIcon name="link-outline" type="Ionicons" size={hp(4)} color={Colors.grey} />
              <Text style={styles.shareOptionText}>Copy Link</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareOption} onPress={handleMorePress}>
              <VectorIcon name="ellipsis-horizontal" type="Ionicons" size={hp(4)} color={Colors.grey} />
              <Text style={styles.shareOptionText}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Comment Input Bottom Sheet */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCommentSheetVisible}
        onRequestClose={closeBottomSheet}>
        <TouchableWithoutFeedback onPress={closeBottomSheet}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.bottomSheet}>
          <Text style={styles.bottomSheetTitle}>Write a Comment</Text>
          <TextInput
            style={styles.commentInput}
            placeholder="Write a comment..."
            placeholderTextColor={Colors.grey}
            value={commentText}
            onChangeText={setCommentText}
          />
          <Button title='Submit' onPress={handleCommentSubmit} />
        </View>
      </Modal>

      {/* More Options Bottom Sheet */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMoreSheetVisible}
        onRequestClose={closeBottomSheet}>
        <TouchableWithoutFeedback onPress={closeBottomSheet}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.bottomSheet}>
          <Text style={styles.bottomSheetTitle}>More Options</Text>
          <View style={styles.shareOptions}>
            <TouchableOpacity style={styles.shareOption}>
              <VectorIcon name="logo-whatsapp" type="Ionicons" size={hp(4)} color={Colors.green} />
              <Text style={styles.shareOptionText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareOption}>
              <VectorIcon name="logo-chrome" type="Ionicons" size={hp(4)} color={Colors.blue} />
              <Text style={styles.shareOptionText}>Google Chrome</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareOption}>
              <VectorIcon name="chatbox-outline" type="Ionicons" size={hp(4)} color={Colors.grey} />
              <Text style={styles.shareOptionText}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareOption}>
              <VectorIcon name="logo-linkedin" type="Ionicons" size={hp(4)} color={Colors.blue} />
              <Text style={styles.shareOptionText}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  reactionIcon: {
    height: hp(2.5),
    width: hp(2.5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postFotterContainer: {
    padding: wp(4),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: hp(0.3),
    },
    shadowOpacity: 0.25,
    shadowRadius: hp(0.5),
    elevation: 13,
  },
  reactionCount: {
    color: Colors.grey,
    fontSize: wp(3.5),
    paddingLeft: wp(2),
  },
  footerReactionSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: hp(0.1),
    borderBottomColor: Colors.lightgrey,
    paddingBottom: hp(2),
  },
  userActionSec: {
    marginTop: hp(2),
    marginBottom: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    padding: wp(5),
    paddingBottom: hp(5),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: hp(0.3),
    },
    shadowOpacity: 0.25,
    shadowRadius: hp(0.5),
    elevation: 11,
  },
  bottomSheetTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  shareOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shareOption: {
    alignItems: 'center',
  },
  shareOptionText: {
    marginTop: hp(1),
    fontSize: wp(3.5),
    color: Colors.grey,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    padding: wp(3),
    borderRadius: wp(3),
    marginBottom: hp(2),
    fontSize: wp(4),
  },
});

export default PostFooter;
