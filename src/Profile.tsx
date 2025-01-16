import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Colors from '../Assets/colors/colors';  // Assuming you have a colors file

const user = {
    employeeId: '350',
    fullName: 'Syed Muhammad Bilal',
    email: 'syedmuhammadbilal@hnhtechsolutions.com',
    designation: 'Frontend Internee',
    department: 'Front End Development',
    mobile: '+92-03363034894',
    gender: 'Male',
    joiningDate: '25-10-2024',
    slackUsername: '@bilal1234',
    hourlyRate: '$0',
    address: 'Karachi, Sindh',
    skills: 'frontend',
};

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 20  }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.primary, marginBottom: 20 }}>
          Profile Information
        </Text>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Employee ID
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.employeeId}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Full Name
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.fullName}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Email
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.email}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Designation
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.designation}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Department
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.department}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Mobile
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.mobile}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Gender
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.gender}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Joining Date
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.joiningDate}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Slack Username
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.slackUsername}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Hourly Rate
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.hourlyRate}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Address
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.address}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.secondary, marginBottom: 5 }}>
            Skills
          </Text>
          <Text style={{ fontSize: 18, color: '#333', marginBottom: 10 }}>
            {user.skills}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
