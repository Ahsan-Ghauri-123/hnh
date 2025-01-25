import { Text, View, TouchableOpacity, Image, TextInput } from "react-native"
import Icon from 'react-native-ionicons'
import { SafeAreaView } from "react-native-safe-area-context"


const ShamNewTwo = () => {
    return(
        <SafeAreaView style= {{flex: 1}}>
        <View style= {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        
            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>
                Verify Seller Paypal
            </Text>
            <Text style={{ fontSize: 18}}>
                @personal.example.com
            </Text>

            <View style= {{width: '80%', alignItems: 'center'}}>
                <Text
                >Add Email</Text>
                <TextInput
                    style={{
                        backgroundColor: '#F5F5F5',
                        padding: 15,
                        borderRadius: 40,
                        marginBottom: 16,
                        color: '#263238',
                        // width: '80%',
                        // height: 70
                    }}
                    placeholder="Email"
                    placeholderTextColor="#B0BEC5"
                    // value={name}
                    // onChangeText={setName}
                 />
                 </View>
              

               
            <TouchableOpacity>

            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

export default ShamNewTwo;