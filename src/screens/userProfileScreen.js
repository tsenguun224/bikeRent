import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity,ActivityIndicator,Image,Modal} from 'react-native'
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { AntDesign } from '@expo/vector-icons';
import MoneyInsertModal from '../components/MoneyInsertModal';

export default function UserProfiles({navigation}){
    const [userId,setUserId] = React.useState()
    const [user,setUser] = React.useState()
    const [balances,setBalances] = React.useState()
    const [modalVis,setModalVis] = React.useState(false)
    const modalOpen = () =>{
        setModalVis(true)
    }
    const modalClose = () =>{
        setModalVis(false)
    }
    React.useEffect(async()=>{
        const token = await AsyncStorage.getItem('user_token')
        const decode = jwtDecode(token)
        setUserId(decode.id)
        if(userId === decode.id){
            const getUser = async()=>{
                const {data} = await axios.post('http://192.168.1.5:8000/api/v1/users/getUser/' + userId)
                setUser(data.data)
            }
            getUser() 
        }  
    },[userId,user])
    const userLogout = async()=>{
        const {data} = await axios.get('http://192.168.1.5:8000/api/v1/users/logout')
        if(data.success === true){
            navigation.navigate('Home')
           AsyncStorage.removeItem('user_token').then(result => {
                console.log("Remove user token");
           }).catch(err=>{
               console.log(err);
           })
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
                    <Image style={{width:100,height:100,borderRadius:48,marginBottom:30}} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"}}/>
                     {
                         user ?(
                         <Text style={{fontSize:30}}>{user.name}</Text>):(<ActivityIndicator/>
                         )
                     }   
                    {
                        user ?(

                            <MoneyInsertModal email={user.email} modalVisible={modalVis} modalClose={modalClose} />
                        ):null
                    }
                </View>
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:34,marginVertical:10}}>Total Balance</Text>
                    {
                        user ?(

                            <Text style={{fontSize:34,marginVertical:10}}>{user.balance}₮</Text>
                        ):<ActivityIndicator/>
                    }
                    <TouchableOpacity style={{marginVertical:10,width:120,height:50,backgroundColor:"red",borderRadius:24,justifyContent:'center',alignItems:'center'}}>
                        <Text onPress={modalOpen} style={{fontSize:18,color:'#fff'}}>Insert Money</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <View style={styles.layoutThree}>
                    <TouchableOpacity style={{borderRadius:28,padding:20}}>
                        <AntDesign name="home" onPress={()=>navigation.navigate("Bike Rent"
                        )} size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderBottomWidth:5,padding:20}}>
                        <AntDesign name="user" size={24} color="black" />
                    </TouchableOpacity>
                    
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainLayout:{
        flex:1,
    },
    layoutOne:{
        flex:3,
        marginHorizontal:20,
    },
    layouTwo:{
        flex:6,
        marginHorizontal:20,
        marginTop:60
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
    ,
    layoutThree:{
        flex:1,
        marginHorizontal:20,
        marginTop:15,
        marginBottom:5,
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
})