// import React, { useState } from 'react';
// import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import Colors from '../Assets/colors/colors'; // Assuming you have a colors file



// const Sham = () => {
//   const [screenState, setScreenState] = useState(1); // Tracks which form is displayed
//   const [documents, setDocuments] = useState({
//     form1: [null, null, null, null],
//     form2: [null, null, null, null],
//     form3: [null, null, null, null],
//     form4: [null, null, null, null],
//   });

//   const [submittedDocuments, setSubmittedDocuments] = useState({
//     form1: [false, false, false, false],
//     form2: [false, false, false, false],
//     form3: [false, false, false, false],
//     form4: [false, false, false, false],
//   });
// console.log(submittedDocuments);

//   // Handles document picking for a specific index and form
//   const pickDocument = async (index, formKey) => {
//     if (submittedDocuments[formKey][index]) {
//       return; // Don't allow picking if the document has already been submitted
//     }

//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       const updatedForm = [...documents[formKey]];
//       updatedForm[index] = res[0];
//       setDocuments((prev) => ({ ...prev, [formKey]: updatedForm }));
//       Alert.alert('Document Selected', `Name: ${res[0].name}`);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('User canceled document picker');
//       } else {
//         console.error(err);
//       }
//     }
//   };

//   // Handles document submission for each picker
//   const handleDocumentSubmit = (index, formKey) => {
//     const document = documents[formKey][index];
//     if (document) {
//       const updatedSubmissionStatus = [...submittedDocuments[formKey]];
//       updatedSubmissionStatus[index] = true;
//       setSubmittedDocuments((prev) => ({
//         ...prev,
//         [formKey]: updatedSubmissionStatus,
//       }));
//       Alert.alert('Document Submitted', `Document "${document.name}" has been submitted.`);
//     }
//   };

//   // Handles the "Next" button click
//   const handleNext = () => {
//     const currentFormKey = `form${screenState}`;
//     const allFilled = documents[currentFormKey].every((doc) => doc !== null);

//     if (allFilled) {
//       setScreenState((prev) => prev + 1); // Go to the next form
//     } else {
//       Alert.alert('Error', 'Please fill all document fields before proceeding.');
//     }
//   };

//   // Handles the "Submit" button click for form 4
//   const handleFinalSubmit = () => {
//     const allFilled = documents.form4.every((doc) => doc !== null);

//     if (allFilled) {
//       Alert.alert('Success', 'All documents submitted successfully!');
//     } else {
//       Alert.alert('Error', 'Please fill all document fields before submitting.');
//     }
//   };
// const reject = 'Reject'
//   // Renders a form with document pickers
//   const renderForm = (formKey) => (
//     <View style={{ alignItems: 'center' }}>
//       {documents[formKey].map((doc, index) => (
//         <View key={index} style={{ width: '100%', marginBottom: 15 }}>
//           <Text style={{ color: 'white', marginBottom: 5 }}>Document {index + 1}</Text>

//           {/* Display placeholder view for documents if not yet submitted */}
//           {index === 0 || submittedDocuments[formKey][index - 1] ? (
//             <TouchableOpacity
//               onPress={() => pickDocument(index, formKey)}
//               style={{
//                 backgroundColor: 'white',
//                 padding: 15,
//                 borderRadius: 10,
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderWidth: 1,
//                 borderColor: Colors.secondary,
//                 opacity: submittedDocuments[formKey][index] ? 0.5 : 1, // Disable button if document is submitted
//               }}
//               disabled={submittedDocuments[formKey][index]} // Disable button if document is submitted
//             >
//               <Text style={{ color: Colors.secondary, fontWeight: 'bold' }}>
//                 {doc ? 'Change Document' : `Select Document ${index + 1}`}
//               </Text>
//             </TouchableOpacity>
//           ) : (
//             // Show a view like Select Document if previous document is not submitted
//             <View
//               style={{
//                 backgroundColor: 'lightgray',
//                 padding: 15,
//                 borderRadius: 10,
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderWidth: 1,
//                 borderColor: Colors.secondary,
//               }}
//             >
//               <Text style={{ color: 'gray', fontWeight: 'bold' }}>
//                 {`Document ${index + 1} (Waiting for previous document)`}
//               </Text>
//             </View>
//           )}

//           {/* Display Document Details Below the Button */}
//           {doc && (
//             <View style={{ marginTop: 10, padding: 10, backgroundColor: Colors.secondary, borderRadius: 10 }}>
//               <Text style={{ color: 'white', fontSize: 14 }}>
//                 <Text style={{ fontWeight: 'bold' }}>Name: </Text>
//                 {doc.name}
//               </Text>
//               <Text style={{ color: 'white', fontSize: 14 }}>
//                 <Text style={{ fontWeight: 'bold' }}>Status: {reject}  </Text>
//                 {}
                
//               </Text>

//               {/* Submit Button */}
//               {!submittedDocuments[formKey][index] && (
//                 <TouchableOpacity
//                   onPress={() => handleDocumentSubmit(index, formKey)}
//                   style={{
//                     marginTop: 10,
//                     backgroundColor: Colors.green,
//                     borderRadius: 15,
//                     padding: 10,
//                     alignItems: 'center',
//                   }}
//                 >
//                   <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
//                     Submit Document
//                   </Text>
//                 </TouchableOpacity>
//               )}
//             </View>
//           )}
//         </View>
//       ))}
//     </View>
//   );

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
//         <ScrollView>
//       <View style={{ marginBottom: 30 }}>
//         <Text style={{ color: Colors.primary, fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>
//           {`Upload Your Documents (Form ${screenState})`}
//         </Text>
//       </View>

//       {/* Render the appropriate form */}
//       {screenState === 1 && renderForm('form1')}
//       {screenState === 2 && renderForm('form2')}
//       {screenState === 3 && renderForm('form3')}
//       {screenState === 4 && renderForm('form4')}

//       {/* "Next" button for Forms 1, 2, and 3 */}
//       {screenState < 4 && (
//         <TouchableOpacity onPress={handleNext} style={{ backgroundColor: Colors.red, borderRadius: 25, margin: 5, width: '35%', alignSelf: 'center', padding: 10 }}>
//           <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Next</Text>
//         </TouchableOpacity>
//       )}

//       {/* "Submit" button for Form 4 */}
//       {screenState === 4 && (
//         <TouchableOpacity onPress={handleFinalSubmit} style={{ backgroundColor: Colors.blue, borderRadius: 25, margin: 5, width: '35%', alignSelf: 'center', padding: 10 }}>
//           <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Submit</Text>
//         </TouchableOpacity>
//       )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Sham;


import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Colors from '../Assets/colors/colors'; // Assuming you have a colors file

const ShamA = () => {
  // States for each document
  const [documents, setDocuments] = useState({
    nicFront: null,
    nicBack: null,
    passport: null,
    bankStatement: null,
  });
  const [currentStep, setCurrentStep] = useState(0); // Keeps track of the current document step

  // Document names in order
  const documentTypes = [
    'National Identity Card Front',
    'National Identity Card Back',
    'Passport Image',
    'Bank Statement',
  ];

  // Function to pick a document
  const pickDocument = async (docKey) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setDocuments((prevState) => ({ ...prevState, [docKey]: res[0] })); // Update the corresponding document state
      Alert.alert('Document Selected', `Name: ${res[0].name}`);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled document picker');
      } else {
        console.error(err);
      }
    }
  };

  // Function to handle submission of the current document
  const handleSubmit = (docKey) => {
    const document = documents[docKey];

    if (!document) {
      Alert.alert('Error', 'No document selected. Please add a document.');
      return;
    }

    Alert.alert('Document Submitted', `You have successfully submitted: ${document.name}`, [
      {
        text: 'OK',
        onPress: () => {
          // Proceed to the next step
          setCurrentStep((prevStep) => prevStep + 1);
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      <ScrollView>
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Upload Required Documents
          </Text>
        </View>

        {/* Iterate over the document types */}
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShamA;
