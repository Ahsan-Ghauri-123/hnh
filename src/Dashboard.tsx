import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Assets/colors/colors';
import { Calendar } from 'react-native-calendars';
// import ScreenNavigator from '../src/Profile'

const Dashboard = () => {
  return (
    // <SafeAreaView  style={{flex: 1, backgroundColor: '#191D35' }}>
      <SafeAreaView  style={{flex: 1, backgroundColor: 'white', marginTop: 5 }}>
    {/* <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#2E8B57',
            borderRadius: 120,
            padding: 10,
            margin: 10,
        }}>
          */}

              {/* Right-aligned content */}
              {/* <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',  width: '100%'}}>
                <Image source={require('./../Assets/search.png')} />
                <Image source={require('./../Assets/note.png')} />
                <Image source={require('./../Assets/time.png')} />
                <Image source={require('./../Assets/plus.png')} />
                <Image source={require('./../Assets/notification.png')} />
                <Image source={require('./../Assets/power.png')} />
              </View> */}
{/* </View> */}
<ScrollView>
        <View
          style={{
            
            backgroundColor: Colors.primary,
            borderRadius: 40,
            padding: 15,
            margin: 5,

        }}>
          {/* <Text style={{
            color: 'white',
            fontSize: 28,
            fontWeight: 'bold'
          }}>
            Dashboard
          </Text> */}
          <View>
          <Text style={{
            color: Colors.secondary,
            fontSize: 25,
            fontWeight: 'bold'
          }}>
            Welcome Syed Bilal
          </Text>
        </View >
        <View >
        <View style={{flexDirection: 'row', width: '100%'}}>
        <TouchableOpacity 
        //  onPress={() => router.push("/(screens)/currentNeeds")}
         
            // onPress = {signOut}
        style={{
          backgroundColor: 'white',
          borderRadius:25,
          // paddingHorizontal: 10,
          margin: 5,
          width: '35%',
          // justifyContent: 'center', // Centers text vertically
          // alignItems: 'center',
          
        }}
        >
              <Text 
                    style={{ textAlign: 'center', padding:10, fontSize: 15, fontWeight:'bold' , color: Colors.secondary}} >
                     Break In
        </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        //  onPress={() => router.push("/(screens)/currentNeeds")}
         
            // onPress = {signOut}
        style={{
          backgroundColor: Colors.red,
          borderRadius: 25,
          // paddingHorizontal: 10,
          margin: 5,
          width: '35%',
          // boxShadow: 20,
          // justifyContent: 'center', // Centers text vertically
          // alignItems: 'center',
          
        }}
        >
              <Text 
                    style={{ textAlign: 'center', padding:10 , fontSize: 15, fontWeight:'bold', color:'white'}} >
                     Clock Out
        </Text>
        </TouchableOpacity>
        </View>
        </View>
        
        </View>
        {/* <View style={{
           backgroundColor: Colors.primary,
           borderRadius: 30,
           padding: 10,
           margin: 5,
            }}>
        <View
          style={{
            flexDirection: 'row',
           
            
            }}>
            <View style={{ justifyContent: 'center', marginHorizontal: 20 }}>
           <Image  source={require('./../Assets/profile.png')} />
           </View>
           <View>
           <Text style={{
            color: Colors.secondary,
            fontSize: 26,
            fontWeight: 'bold'
          }}>
            Syed Muhammad Bilal
          </Text>
          <Text style={{
            color: Colors.secondary,
            fontSize: 20,
            fontWeight: 'bold'
          }}>
            Mobile App Developer
          </Text>
          <Text style={{
            color: Colors.secondary,
            fontSize: 18,
            
          }}>
            Employee ID: 350
          </Text>
           </View>
            
        </View>
        <View style={{ 
          }}>

         
        <View style={{ margin: 5,
        marginTop:15,
                      backgroundColor: Colors.secondary,
                      borderRadius: 20,
                      padding: 15,
                      flexDirection: 'row',
          }}>
            <View style= {{width: '40%',justifyContent: 'center' }}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            
            }}>
            Open Tasks
          </Text>
          <Text style={{
            color: 'white',
            fontSize: 18,
            
          }}>
            1
          </Text>
          </View>
        
          <View style= {{width: '40%', justifyContent: 'center'}}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            }}>
            Projects
          </Text>
          <Text style={{
            color: 'white',
            fontSize: 18,
            
          }}>
            1
          </Text>
          </View>
        </View>
        <View style={{ margin: 5,
                      backgroundColor: Colors.secondary,
                      borderRadius: 20,
                      padding: 15,
                      flexDirection: 'row',
          }}>
            <View style= {{width: '40%',justifyContent: 'center' }}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            
            }}>
            Hours Logged 
          </Text>
          <Text style={{
            color: 'white',
            fontSize: 18,
            
          }}>
            2
          </Text>
          </View>
        
          <View style= {{width: '40%', justifyContent: 'center'}}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            }}>
            asual Leaves
          </Text>
          <Text style={{
            color: 'white',
            fontSize: 18,
            
          }}>
            1
          </Text>
          </View>
        </View>
        <View style={{ margin: 5,
                      backgroundColor: Colors.secondary,
                      borderRadius: 20,
                      padding: 15,
                      flexDirection: 'row',
          }}>
            <View style= {{width: '40%',justifyContent: 'center' }}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            
            }}>
            Annual Leaves 
          </Text>
          <Text style={{
            color: 'white',
            fontSize: 18,
            
          }}>
            1
          </Text>
          </View>
        
          <View style= {{width: '40%', justifyContent: 'center'}}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            }}>
            Sick Leaves 
          </Text>
          <Text style={{
            color: 'white',
            fontSize: 18,
            
          }}>
            1
          </Text>
          </View>
        </View>
        </View>
        </View> */}

<View
  style={{
    backgroundColor: Colors.primary,
    borderRadius: 30,
    padding: 20,
    margin: 10,
  }}
>
  {/* Header Section */}
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      
    }}
  >
    <View style={{ justifyContent: 'center', marginHorizontal: 20 }}>
      <Image
        source={require('./../Assets/profile.png')}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35, // Circular profile image
        }}
      />
    </View>
    <View>
      <Text
        style={{
          color: Colors.secondary,
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 5,
        }}
      >
        Syed Muhammad Bilal
      </Text>
      <Text
        style={{
          color: Colors.secondary,
          fontSize: 16,
          marginBottom: 5,
        }}
      >
        Mobile App Developer
      </Text>
      <Text
        style={{
          color: Colors.secondary,
          fontSize: 14,
        }}
      >
        Employee ID: 350
      </Text>
    </View>
  </View>

  {/* Card Section */}
  <View>
    {/* Card 1 - Open Tasks & Projects */}
    <View
      style={{
        marginBottom: 10,
        backgroundColor: Colors.secondary,
        borderRadius: 20,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ alignItems: 'center', width: '40%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Open Tasks</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
      </View>
      <View style={{ alignItems: 'center', width: '40%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Projects</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
      </View>
    </View>

    {/* Card 2 - Hours Logged & Casual Leaves */}
    <View
      style={{
        marginBottom: 10,
        backgroundColor: Colors.secondary,
        borderRadius: 20,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ alignItems: 'center', width: '40%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Hours Logged</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>2</Text>
      </View>
      <View style={{ alignItems: 'center', width: '40%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Casual Leaves</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
      </View>
    </View>

    {/* Card 3 - Annual Leaves & Sick Leaves */}
    <View
      style={{
        backgroundColor: Colors.secondary,
        borderRadius: 20,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ alignItems: 'center', width: '40%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Annual Leaves</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
      </View>
      <View style={{ alignItems: 'center', width: '40%' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Sick Leaves</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>1</Text>
      </View>
    </View>
  </View>
</View>


        <View style={{
           backgroundColor: Colors.primary,
           borderRadius: 30,
           padding: 10,
           margin: 5,
            }}>
              <Text 
                    style={{ padding:5, fontSize: 22, fontWeight:'bold', color: Colors.secondary }} >
                     Notices
        </Text>
            </View>

        
            <View style = {{ marginBottom : 20 , borderRadius: 40 , padding: 10, paddingBottom: 20, backgroundColor: Colors.primary , margin: 10}}>
            <Calendar
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: Colors.primary,
                textSectionTitleColor: Colors.secondary,
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: 'white',
                dayTextColor: '#2d4150',
                textDisabledColor: '#dd99ee',
                
                
              }}
            // onDayPress={handleDayPress}
            // markedDates={markedDates}
            markingType={"period"}
          />
          </View>
            </ScrollView>    
    </SafeAreaView>
  )
}

export default Dashboard