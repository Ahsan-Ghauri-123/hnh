import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Button, Animated, Dimensions, Alert } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Entypo';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from "react-native-modal";

const NoticeBoard = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // Store selected row data
  const [selected, setSelected] = React.useState("");
  const [searchText, setSearchText] = useState('');
  const [isExportHovered, setIsExportHovered] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const date = [
    { key: '1', value: 'Today' },
    { key: '2', value: 'Last 30 Days' },
    { key: '3', value: 'This Month' },
    { key: '4', value: 'Last Month' },
    { key: '5', value: 'Last 90 Days' },
    { key: '6', value: 'Last 6 Months' },
    { key: '7', value: 'Last 1 Year' },
    { key: '8', value: 'Custom Range' },
  ];
  const headers = ['Id', 'Notice', 'Date', 'To', 'Action'];
  const data = [
    {
      id: 1,
      notice: 'Asperiores sit optio',
      date: '28-09-2024',
      to: 'Employee',
      action: '...',
    },
  ];

  const exportToExcel = () => {
    try {
      const wb = XLSX.utils.book_new();
      const wsData = [headers, ...data.map((row) => [row.id, row.notice, row.date, row.to, row.action])];
      const ws = XLSX.utils.aoa_to_sheet(wsData);
      XLSX.utils.book_append_sheet(wb, ws, 'Notices');
      const wbOut = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
      const path = `${RNFS.DownloadDirectoryPath}/NoticesData.xlsx`;

      RNFS.writeFile(path, wbOut, 'ascii')
        .then(() => Alert.alert('Success', `File exported to: ${path}`))
        .catch((err) => Alert.alert('Error', `Failed to save file: ${err.message}`));
    } catch (error) {
      Alert.alert('Error', `An error occurred: ${error.message}`);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", marginTop: hp(5), marginHorizontal: wp(9) }}>
        <Text style={{ marginTop: 12 }}>Date: </Text>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={date}
          save="value"
          searchText={false}
          placeholder="Start Date To End Date"
          boxStyles={{ marginHorizontal: wp(5) }}
        />
      </View>
      <View style={{ marginTop: hp(7) }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: wp(0.5),
          borderRadius: wp(2),
          paddingHorizontal: wp(2),
          borderColor: '#ddd',
          width: wp("88%"),
          height: hp(7),
          marginHorizontal: wp(7)
        }}>
          <Icons name="search" size={hp(3.4)} color="gray" />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Start typing to search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <View
        style={{
          backgroundColor: 'white',
          marginTop: hp(6),
          width: wp('90%'),
          marginHorizontal: wp(5),
          borderRadius: wp(2),
          borderWidth: wp(0.1),
          padding: wp(5),
          height: hp(55),
          shadowColor: "#000",
          shadowOffset: {
            width: wp(0),
            height: hp(3),
          },
          shadowOpacity: 0.37,
          shadowRadius: wp(9.32),

          elevation: 12,
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: wp(10) }}>
          <Text style={{ fontSize: hp(3.4), color: 'black', fontWeight: 'bold' }}>
            Notice Board
          </Text>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate("DashboardScreen");
          }}>
            <Text style={{ fontSize: hp(2.6), color: 'gray', fontWeight: 'bold', marginHorizontal: wp(5), marginTop: hp(0.4) }}>
              • Home
            </Text>
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
          style={[
            {
              height: hp(7.4),
              width: wp(28),
              backgroundColor: isExportHovered ? 'black' : 'white',
              borderRadius: wp(3),
              borderWidth: wp(0.2),
              marginTop: hp(4),
              marginHorizontal: wp(5),
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,
            },
          ]}
          onPress={exportToExcel}
          onMouseEnter={() => setIsExportHovered(true)}
          onMouseLeave={() => setIsExportHovered(false)}
        >
          <Icon name="file-export" size={hp(3)} color="black" style={{ marginTop: hp(1), marginHorizontal: wp(9) }} />
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17, marginTop: hp(0.02), fontWeight: "bold", marginHorizontal: wp(6) }}>Export</Text>
        </TouchableOpacity>
      </View>
        <ScrollView horizontal>
          <ScrollView>
            <View>
              {/* Table Header */}
              <View style={{ flexDirection: 'row', backgroundColor: '#20b5e9', paddingVertical:wp(5), marginTop:hp(5)}}>
                {headers.map((header, index) => (
                  <View key={index} style={{ width: wp(25), justifyContent: 'center', alignItems: 'center', padding: wp(2) }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>{header}</Text>
                  </View>
                ))}
              </View>
              {/* Table Rows */}
              {data.map((row, rowIndex) => (
                <View key={rowIndex} style={{ flexDirection: 'row', borderBottomWidth: wp(0.4), borderBottomColor: '#ddd', paddingVertical: hp(4)}}>
                  <Text style={{ width: wp(25), textAlign: 'center' }}>{row.id}</Text>
                  <Text style={{ width: wp(25), textAlign: 'center' }}>{row.notice}</Text>
                  <Text style={{ width: wp(25), textAlign: 'center' }}>{row.date}</Text>
                  <Text style={{ width: wp(25), textAlign: 'center' }}>{row.to}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedRow(row);
                      toggleModal();
                    }}
                    style={{ width: wp(25), alignItems: 'center' }}
                  >
                    <Iconi name="eye" color="gray" size={hp(4)} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <Text style={{ marginHorizontal: wp(22), fontSize: hp(3), fontWeight: "bold", color: "black" }}>Showing 1 to 2 Items</Text>
          </ScrollView>
        </ScrollView>
      </View>

      {/* Modal to show selected row details */}
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
          <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', marginBottom: 10 }}>Notice Details</Text>
          {selectedRow && (
            <>
              <Text>Id: {selectedRow.id}</Text>
              <Text>Notice: {selectedRow.notice}</Text>
              <Text>Date: {selectedRow.date}</Text>
              <Text>To: {selectedRow.to}</Text>
            </>
          )}
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
      </View>
    </ScrollView>
  );
};

export default NoticeBoard;
