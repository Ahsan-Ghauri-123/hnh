// import React, { useState } from 'react';
// import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import Colors from '../Assets/colors/colors'; // Assuming you have a colors file

// const documentTypes = [
//   'National Identity Card Front',
//   'National Identity Card Back',
//   'Passport Image',
//   'Bank Statement',
// ];

// const ShamA = () => {
//   const [document, setDocument] = useState(null); // State for the single document
//   const [selectedDocType, setSelectedDocType] = useState(null); // State for the selected document type

//   // Function to pick a document
//   const pickDocument = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });

//       setDocument(res[0]); // Set the selected document
//       Alert.alert('Document Selected', `Name: ${res[0].name}`);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('User canceled document picker');
//       } else {
//         console.error(err);
//       }
//     }
//   };

//   // Function to handle submission of the document
//   const handleSubmit = () => {
//     if (!document) {
//       Alert.alert('Error', 'No document selected. Please add a document.');
//       return;
//     }

//     Alert.alert('Document Submitted', `You have successfully submitted the document: ${document.name}`, [
//       {
//         text: 'OK',
//         onPress: () => setDocument(null), // Clear the document after submission
//       },
//     ]);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
//       <ScrollView>
//         <View style={{ marginBottom: 30 }}>
//           <Text
//             style={{
//               color: Colors.primary,
//               fontSize: 25,
//               fontWeight: 'bold',
//               textAlign: 'center',
//             }}
//           >
//             These documents are required
//           </Text>
//         </View>

//         {/* Document Type List */}
//         <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 20, marginBottom: 20 }}>
//           {documentTypes.map((docType, index) => (
//             <TouchableOpacity
//               onPress={() => setSelectedDocType(docType)} 
//               key={index}
//               style={{
//                 paddingVertical: 10,
//                 borderBottomWidth: index !== documentTypes.length - 1 ? 1 : 0,
//                 borderBottomColor: '#ccc',
//                 backgroundColor: selectedDocType === docType ? Colors.primary : 'transparent',
//               }}
//             >
//               <View>
//                 <Text
//                   style={{
//                     color: 'black',
//                     fontSize: 16,
//                   }}
//                 >
//                   {index + 1}. {docType}
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Display Selected Document Type */}
//         {/* {selectedDocType && (
//           <View
//             style={{
//               marginBottom: 20,
//               padding: 15,
//               backgroundColor: Colors.primary,
//               borderRadius: 10,
//             }}
//           >
//             <Text
//               style={{
//                 color: 'white',
//                 fontSize: 16,
//                 fontWeight: 'bold',
//               }}
//             >
//               Selected Document Type: {selectedDocType}
//             </Text>
//           </View>
//         )} */}

//         {/* Push Button */}
//         <TouchableOpacity
//           onPress={pickDocument}
//           disabled={!!document} // Disable if a document is already selected
//           style={{
//             backgroundColor: document ? Colors.gray : Colors.primary,
//             borderRadius: 10,
//             padding: 15,
//             alignItems: 'center',
//             marginBottom: 20,
//           }}
//         >
//           <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
//             {/* {document ? 'Document Selected' : 'Push Document'} */}
//             Post: {selectedDocType}
//           </Text>
//         </TouchableOpacity>

//         {/* Submit Button */}
//         <TouchableOpacity
//           onPress={handleSubmit}
//           style={{
//             backgroundColor: Colors.green,
//             borderRadius: 10,
//             padding: 15,
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Submit</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ShamA;
