import { useEffect,useState } from 'react';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,ImageBackground,ActivityIndicator, Alert} from 'react-native';
import Timer from '../components/RentTime';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BikeDetailScreen({route,navigation},props){
    const [currentBike,setCurrenBike] = useState();
    const [timer,setTimer] = useState(24);
    const [isPressed,setIsPressed] = useState(false)
    const [user,setUser] = useState()
    useEffect(async()=>{
        const token = await AsyncStorage.getItem('user_token')
        const decode = jwtDecode(token)
        
        const getUser = async()=>{
        const {data} = await axios.post('http://172.20.10.5:8000/api/v1/users/getUser/' + decode.id)
            setUser(data.data)
        }
        getUser() 
    },
    [user])
    const bikeRent = ()=>{
            if(user.balance === 0 || user.balance < parseInt(bike.bike.bikePrice)){
                Alert.alert("Check your value","Please deposit",[{title:"ok",onPress:()=>{navigation.goBack()}}])
            }else{
                setIsPressed(true)
                manageBalance() 
            }
        }

    const bikeRentCost = ()=>{
        setIsPressed(false)
        navigation.navigate('Bike Rent')
    }
    const manageBalance = async () => {

        
        
            const {data} = await axios.post('http://172.20.10.5:8000/api/v1/users/balance',{
            email:user.email,
            transaction:{
                type:'exp',
                value:parseInt(bike.bike.bikePrice)
            }
        })
            
    }
    const bike = route.params;
    console.log()
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
                        {
                            isPressed !== true ? (
                                <View style={styles.textDetail}>
                                    <Text style={{color:'#000',fontSize:22,marginVertical:10}}>{bike.bike.bikeName}</Text>
                                    <Text style={{color:'#000',fontSize:22}}>24H-{bike.bike.bikePrice}₮</Text>
                                    <TouchableOpacity onPress={bikeRent} style={styles.button}>
                                        <Text style={{textAlign:'center'}}>rent bike</Text>
                                     </TouchableOpacity>
                                </View>
                            ) : (
                                <View style={styles.rentHour}>
                                    <Timer pressed={isPressed} bikeRentCost={bikeRentCost}/>
                                </View>
                            )
                        }
                        
                        
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
    },
    rentHour:{
        width:250,
        height:200,
        borderRadius:12,
        backgroundColor:"#f5f5f4",
        alignItems:'center',
        justifyContent:'center'
    }
})