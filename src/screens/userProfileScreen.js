import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native'
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';



export default function UserProfiles({navigation}){
    const [userId,setUserId] = React.useState()
    const [user,setUser] = React.useState()
    React.useEffect(async()=>{
        const token = await AsyncStorage.getItem('user_token')
        const decode = jwtDecode(token)
        setUserId(decode.id)
        const getUser = async()=>{
            const {data} = await axios.post('http://192.168.1.2:8000/api/v1/users/getUser/' + userId)
            setUser(data.data)
        }
        getUser()   
    },[userId])
    const userLogout = async()=>{
        const {data} = await axios.get('http://192.168.1.2:8000/api/v1/users/logout')
        if(data.success === true){
            navigation.navigate('Home')
        }
    }
    return (
        <View style={styles.mainLayout}>
            <View style={styles.layoutOne}>
                <View style={styles.logoSection}>    
                    <Text style={styles.logo}>br</Text>
                    <TouchableOpacity onPress={userLogout} style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{marginHorizontal:5}}>Logout</Text>    
                        <MaterialIcons name="logout" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.layouTwo}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     {
                         user ? (<Text style={{fontSize:30}}>{user.name}</Text>):(<ActivityIndicator/>)
                     }   
                    
                </View>
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:34,marginVertical:10}}>Total Balance</Text>
                    <Text style={{fontSize:34,marginVertical:10}}>0</Text>
                    <TouchableOpacity style={{marginVertical:10,width:120,height:50,backgroundColor:"red",borderRadius:24,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:18,color:'#fff'}}>Insert Money</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainLayout:{
        flex:1,
    },
    layoutOne:{
        flex:1,
        marginHorizontal:20
    },
    layouTwo:{
        flex:3,
        marginHorizontal:20
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
    logoSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:40,
        height:30
    }
})