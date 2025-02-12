import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView} from 'react-native'
import React from 'react'
import { useTheme, useNavigation } from '@react-navigation/native';



const Home = () => {
      const navigation = useNavigation();

  const Top = [
    { id: '1', imageSource: require('../../Assets/topProduct.png'), text: 'Vaccinations' },
    { id: '2', imageSource: require('../../Assets/topProduct.png'), text: 'Operations' },
    { id: '3', imageSource: require('../../Assets/topProduct.png'), text: 'Grooming' },
    { id: '4', imageSource: require('../../Assets/topProduct.png'), text: 'Dentistry' },
    { id: '5', imageSource: require('../../Assets/topProduct.png'), text: 'Dentistry' },
    { id: '6', imageSource: require('../../Assets/topProduct.png'), text: 'Dentistry' },
    { id: '7', imageSource: require('../../Assets/topProduct.png'), text: 'Dentistry' },
    { id: '8', imageSource: require('../../Assets/topProduct.png'), text: 'Dentistry' },
  ];

  const Product = [
    { id: '1', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
    { id: '2', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
    { id: '3', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },
    { id: '4', imageSource: require('../../Assets/productpop.png'), title: 'Vaccinations', time: '00:00:00', price:'$302.00' },

  ];

  return (
    <SafeAreaView style={{ flex:1, }}>
    <View >
      <View style={styles.headerView}>
          <View>
          <Image source={require('../../Assets/Hamburger.png')} style={{ marginHorizontal: 1 }} />
          </View>
          <View style= {styles.headerTextView}>
            <Text style= {{marginHorizontal:'3%'}}>Collubi</Text>
          </View>
          <View style= {styles.bagView}>
            <Image source={require('../../Assets/bag.png')} style={{ marginHorizontal: 1, padding:'3%' }} />
          </View>
          <View>
            <Image source={require('../../Assets/login.png')} style={{ marginHorizontal: 1 }} />
          </View>
      </View>

      <View style= {styles.view} >
            <View style={styles.image}>
            {/* <Icon  name= {"arrow-back-sharp"} size={25} /> */}
            </View>
           
            <View style={styles.searchView}>
                {/* <Icon color= {'#6A6A6A'} style= {styles.search} name= {"search-outline"} size={20} /> */}
              <Image source={require('../../Assets/search.png')} style={{ marginHorizontal: '3%' }} />

                <TextInput 
                placeholder='Search'
                placeholderTextColor={'#6A6A6A'}
                style={{color:'#6A6A6A', fontSize:12, width:'75%'}}
                >
                </TextInput>
              <Image source={require('../../Assets/mic.png')} style={{ marginHorizontal: 1 }} />
            </View>

            <View style= {styles.iconsView}>
                <TouchableOpacity style={styles.image} >
                {/* <Icon  name= {"cart-outline"} size={25} /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.image} >
                <Image source={require('../../Assets/settings.png')} style={{ marginHorizontal: 1,padding:'8%'}} />

                </TouchableOpacity>
            </View>
        </View>
        <Text style= {{marginHorizontal:'3%'}}>Select Category</Text>
        <View style={styles.buttonView}>
                            
            <TouchableOpacity style={styles.cartView}>
                <Text style={styles.cartButtonText}>All Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Selling</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartView}>
                <Text style={styles.cartButtonText}>Deals</Text>
            </TouchableOpacity>
        </View>
        <Text style= {{marginHorizontal:'3%'}}>Top Products on Collubi</Text>
        <View style={styles.servicesView}>
               <FlatList
                    data={Top}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor:'white', borderRadius:60, marginHorizontal:5, padding:10}}>
                          <Image source={item.imageSource}/>
                        </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatlist}
                />
               </View>
               <View style= {{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style= {{marginHorizontal:'3%'}}>Fashion Items</Text>
                  <TouchableOpacity
                        onPress={() => navigation.navigate('AllProds')}>
                      <Text style= {{marginHorizontal:'3%', fontSize:12 , color:'#D72329'}}>See All</Text>
                    </TouchableOpacity> 
              </View>
          <View style={styles.productView}>
               <FlatList
                    data={Product}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor:'white', borderRadius:20, marginHorizontal:5, padding:5, alignItems:'center'}}>
                          <Image style={{ padding:5}} source={item.imageSource}/>
                          <Text>{item.title}</Text>
                          <Text>Deal Ends In:</Text>
                          <Text>{item.time}</Text>
                          <View style= {{flexDirection:'row' }}>
                          <Text>{item.price}</Text>
                          <View style= {{marginLeft:5 }}>
                          <Image source={require('../../Assets/rectangle.png')}/>
                          </View>
                          </View>
                        </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatlist}
                />
               </View>
              
    </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  headerView: {flexDirection:'row', marginVertical:'3%', paddingHorizontal:'5%', alignItems:'center', justifyContent:'space-evenly'},
  headerTextView: {width:'70%', marginHorizontal:'2%'},
  bagView: {backgroundColor:'white', borderRadius:25, padding:'1%' },
  view: { flexDirection:'row',   justifyContent:'space-between', alignItems:'center',marginHorizontal:'2%', width:'100%'},
  searchView:{flexDirection:'row', width:'75%', borderRadius:20, alignItems:'center', backgroundColor:'white',},
  iconsView:{flexDirection:'row', marginHorizontal:'2%'},
  search: {marginLeft:'2%'},
  image:{marginHorizontal:'1%'},
  txt: { fontSize:12},
  buttonView:{width:'100%', flexDirection:'row', justifyContent:'space-between', marginVertical:'3%'},
    buyButton:{width:'32%', backgroundColor: '#D72329', justifyContent:'center',alignItems:'center', borderRadius: 10, paddingVertical:'3%'},
    round:{backgroundColor:'#D9D9D9', borderRadius:25, width:50, height:50},
    buyButtonText: {color: 'white', fontSize:12,},
    buyButtonView: { justifyContent:'center'},
    cartView:{borderRadius: 13,backgroundColor:'white', width:'32%',justifyContent:'center', alignItems:'center', padding:'1%'},
    cart:{},
    cartButtonText: {color: '#000000', fontSize:12},
    servicesView: {flexDirection:'row' , width:'100%',},
    flatlist: {justifyContent:'space-between', padding:'2%', },
    productView: { width:'100%',},



})