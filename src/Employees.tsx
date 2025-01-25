import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import Colors from '../Assets/colors/colors';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';


// Sample data
const users = [
  {
    id: 1,
    name: 'Muhammad Ahsan Ghauri',
    email: 'ghauri@hhnhsoftsolutions.com',
    status: 'Active',
    action: 'Edit',
  },
  {
    id: 2,
    name: 'Muhammad Ayaz Attari',
    email: 'ayazattari@hhnhsoftsolutions.com',
    status: 'Active',
    action: 'Edit',
  },
  {
    id: 3,
    name: 'Sarah Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 4,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 5,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 6,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 7,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 8,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 9,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 10,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 11,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 12,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 13,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 14,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
  {
    id: 15,
    name: 'Khan',
    email: 'sarah.khan@example.com',
    status: 'Inactive',
    action: 'Edit',
  },
];

const Employees = () => {

    const exportToExcel = async () => {
        try {
            // Convert the users array to a worksheet
            const ws = XLSX.utils.json_to_sheet(users);
    
            // Create a new workbook and append the worksheet
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Users');
    
            // Write the workbook to binary string
            const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
    
            // Convert binary string to a buffer
            const buffer = new Uint8Array(wbout.length);
            for (let i = 0; i < wbout.length; i++) {
                buffer[i] = wbout.charCodeAt(i);
            }
    
            // Convert buffer to string
            const dataString = String.fromCharCode.apply(null, buffer);
    
            // Define file path
            const filePath = `${RNFS.DownloadDirectoryPath}/UsersX.xlsx`;
    
            // Write the file to the device
            await RNFS.writeFile(filePath, dataString, 'ascii');
    
            Alert.alert('Success', `File saved to ${filePath}`);
        } catch (error) {
            Alert.alert('Error', 'Failed to export file');
            console.error(error);
        }
    };
    

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
      }}
    >
      {/* ID */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: Colors.secondary, fontSize: 14 }}>{item.id}</Text>
      </View>
      {/* Name */}
      <View style={{ flex: 3, justifyContent: 'center' }}>
        <Text style={{ color: Colors.secondary, fontSize: 14 }}>{item.name}</Text>
        <Text style={{ color: Colors.secondary, fontSize: 12 }}>{item.email}</Text>
      </View>
      {/* Status */}
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginRight: 5,
            backgroundColor: item.status === 'Active' ? 'green' : 'gray',
          }}
        />
        <Text style={{ color: Colors.secondary, fontSize: 14 }}>{item.status}</Text>
      </View>
      {/* Action */}
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <TouchableOpacity >
          <Image
            source={require('../Assets/view.png')} // Replace with your action icon path
            style={{ width: 20, height: 20 }}
          />
          
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
      }}
    >

<TouchableOpacity
        style={{
          backgroundColor: Colors.secondary,
          padding: 15,
          borderRadius: 10,
          marginVertical: 10,
          alignItems: 'center',
        }}
        onPress={exportToExcel}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Export to Excel</Text>
      </TouchableOpacity>

      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.primary,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 16,
            color: Colors.secondary,
            textAlign: 'center',
          }}
        >
          Id
        </Text>
        <Text
          style={{
            flex: 3,
            fontWeight: 'bold',
            fontSize: 16,
            color: Colors.secondary,
            textAlign: 'center',
          }}
        >
          Name
        </Text>
        <Text
          style={{
            flex: 2,
            fontWeight: 'bold',
            fontSize: 16,
            color: Colors.secondary,
            textAlign: 'center',
          }}
        >
          Status
        </Text>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 16,
            color: Colors.secondary,
            textAlign: 'center',
          }}
        >
          Action
        </Text>
      </View>

      {/* List */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Employees;
