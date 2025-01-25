import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const Message = () => {
  const chats = [
    {
      id: 1,
      name: 'Ahsan Ghauri',
      message: 'Hello! How are you?',
      time: '12:45 PM',
      avatar: require('../../Assets/ahsan.jpeg'), // Replace with actual image path
    },
    {
      id: 2,
      name: 'Samar',
      message: 'Are we still meeting tomorrow?',
      time: '11:30 AM',
      avatar: require('../../Assets/samar.jpg'), // Replace with actual image path
    },
    {
      id: 3,
      name: 'Muhammad Adil',
      message: 'I’ve sent the files to your email.',
      time: '10:15 AM',
      avatar: require('../../Assets/man.jpg'), // Replace with actual image path
    },
    {
      id: 4,
      name: 'Muhammad Faiz',
      message: 'Call me when you’re free.',
      time: '09:00 AM',
      avatar: require('../../Assets/faiz.jpg'), // Replace with actual image path
    },
    {
        id: 5,
        name: 'Muhammad Arham',
        message: 'Call me when you’re free.',
        time: '09:00 AM',
        avatar: require('../../Assets/pic.jpg'), // Replace with actual image path
    },
    {
        id: 6,
        name: 'HnH Soft Tech Solutions',
        message: 'Call me when you’re free.',
        time: '09:00 AM',
        avatar: require('../../Assets/hnhlogo.jpg'), // Replace with actual image path
    },
    {
        id: 7,
        name: 'HnH Tech Unofficial ',
        message: 'Call me when you’re free.',
        time: '09:00 AM',
        avatar: require('../../Assets/hnhlogo.jpg'), // Replace with actual image path
    },
    {
        id: 8,
        name: 'Daily Reports HnH',
        message: 'Call me when you’re free.',
        time: '09:00 AM',
        avatar: require('../../Assets/hnhlogo.jpg'), // Replace with actual image path
    },
    {
        id: 9,
        name: 'Muhammad Daniyal',
        message: 'Call me when you’re free.',
        time: '09:00 AM',
        avatar: require('../../Assets/1.png'), // Replace with actual image path
    },
    {
        id: 10,
        name: 'Muhammad Salar',
        message: 'Call me when you’re free.',
        time: '09:00 AM',
        avatar: require('../../Assets/2.png'), // Replace with actual image path
    },
    {
        id: 11,
        name: 'Muhammad Shayan',
        message: 'Call me when you’re free.',
        time: '09:00 AM',
        avatar: require('../../Assets/4.png'), // Replace with actual image path
    },
    {
        id: 12,
        name: 'Ahtisham',
        message: 'Call me when you’re free.',
        time: '09:00 AM',
        avatar: require('../../Assets/3.png'), // Replace with actual image path
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {chats.map((chat) => (
        <TouchableOpacity key={chat.id} style={styles.chatContainer}>
          <Image source={chat.avatar} style={styles.avatar} />
          <View style={styles.chatDetails}>
            <View style={styles.chatHeader}>
              <Text style={styles.chatName}>{chat.name}</Text>
              <Text style={styles.chatTime}>{chat.time}</Text>
            </View>
            <Text style={styles.chatMessage}>{chat.message}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatContainer: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  chatTime: {
    fontSize: 12,
    color: '#666',
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default Message;
