/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import NewsFeed from './Src/Home/NewsFeed';
import LeadScreen from './Src/Leads/LeadScreen';
import LoginScreen from './Src/Auth/LoginScreen';
import AddLeadInfo from './Src/Leads/AddLeadInfo';
import EmailTemplate from './Src/Leads/EmailTemplate';
import LeadKanboard from './Src/Leads/LeadKanboard';
import ImportLeadScreen from './Src/Leads/ImportLeadScreen';

const App=()=>{
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
    <LoginScreen />
    </SafeAreaView>
  );
};


export default App;
