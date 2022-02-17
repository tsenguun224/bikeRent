import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import MyGradientButton from '../components/MyGradientButton';



export default function BikeRentScreen() {
    return <View>
        <View style={styles.layoutOne}>
            <View style={styles.logoSection}>
                <Text style={styles.logo}>br</Text>
                <TouchableOpacity>
                    <Ionicons name="add" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.inputSection}>
                <TextInput placeholder='Search' style={styles.input}/>
                <TouchableOpacity> 
                    <Ionicons name="ios-search-sharp" size={32} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonSection}>
                <MyGradientButton textColor="#fff" width='45%' title='Popular' color1='#7F00FF' color2='#E100FF'/>
                <MyGradientButton borderColor='#ccc' borderWidth={1} textColor='#000' width="45%" title='All' color1='#fff' color2="#fff"/>
            </View>
        </View>
        <View style={styles.layoutTwo}></View>
    </View>
}
const styles = StyleSheet.create({
    layoutOne:{
        flex:1,
        marginHorizontal:20
    },
    layoutTwo:{
        flex:2,
        width:'100%',
        marginHorizontal:20,
        justifyContent:'flex-start',
    },
    logo:{
        width:30,
        height:30,
        fontSize:14,
        borderWidth:1,
        borderColor:'#ccc',
        color:'#000',
        textAlign:'center',
        borderRadius:6
    },
    input:{
        fontSize:30,
        width:130,
        height:40,
    },
    inputSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:20 ,
        height:70,
        borderBottomColor:'#ccc',
        borderBottomWidth:1
    },
    buttonSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20
    },
    logoSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        height:30
    }
})