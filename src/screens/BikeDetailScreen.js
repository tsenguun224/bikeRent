import { useEffect,useState } from 'react';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,ImageBackground,ActivityIndicator} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function BikeDetailScreen({route}){
    const [currentBike,setCurrenBike] = useState();
    const bike = route.params;
    return (
        <View>
            <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:bike.bike.bikeImage}}>
                 <View style={styles.layoutOne}>
                    <View style={{flex:1,width:'100%'}}>
                        <View>
                            <View style={styles.logoSection}>
                                <Text style={styles.logo}>br</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.textDetail}>
                            <Text style={{color:'#000',fontSize:22,marginVertical:10}}>{bike.bike.bikeName}</Text>
                            <Text style={{color:'#000',fontSize:22}}>24H-{bike.bike.bikePrice}₮</Text>
                            <TouchableOpacity style={styles.button}>
                                <Text style={{textAlign:'center'}}>check out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    layoutOne:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        width:120,
        height:35,
        backgroundColor:'#F194FF',
        borderRadius:18,
        justifyContent:'center',
        marginVertical:30
    },
    logo:{
        width:30,
        height:30,
        fontSize:14,
        borderWidth:1,
        borderColor:'#a8a29e',
        color:'#a8a29e',
        textAlign:'center',
        borderRadius:6
    },
    logoSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:55,
        height:30,
        marginHorizontal:20
    },
    textDetail:{
        width:250,
        height:200,
        borderRadius:12,
        backgroundColor:"#f5f5f4",
        alignItems:'center'
    }
})