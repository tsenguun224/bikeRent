import {View,Modal,Text,TouchableOpacity,StyleSheet,TextInput,Alert} from 'react-native';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from '../url'




export default function LoginRegisterModal(props,{navigation}){
  const [isLogin,setLogin]= useState(false)
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [regEmail,setRegEmail] = useState();
  const [regName, setRegName] = useState() ;
  const [regPassword, setRegPassword] = useState();
  const [regNumber, setRegNumber] = useState();
  const dispatch = useDispatch();
  const users = useSelector(state => state)
  const toLogin = () =>{
    const urle = url  + ':8000/api/v1/users/login'
    
    axios.post(urle,{
      email:email,
      password:password
    }).then(result => {
      
        AsyncStorage.setItem('user_token',result.data.token)
        .then(result =>{

          console.log('Successfull login saved your token')
          resetForm()
          props.goBike()
        }
          
        ).catch(err=>{
          console.log(err)
        })
        
      
    })
    .catch(err =>{
      console.log(err.response);
    })
 
  }
  const resetForm = ()=>{
    setEmail('')
    setPassword('')
    setRegEmail('')
    setRegName('')
    setRegNumber('')
    setRegPassword('')
  }
  const toRegister = async () =>{
    const userData = {
      email:regEmail,
      name:regName,
      number:regNumber,
      password:regPassword
    }
    const {data} = await axios.post(url  + ':8000/api/v1/users/register',userData)
    Alert.alert("Message","Successful",[{text:'OK'}])
    resetForm()
  }
  return (
    <View style={styles.centeredView}>
        {
            isLogin === false ? (
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={props.isModalVisible}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={{flexDirection:'row',justifyContent:'space-between',width:200,marginVertical:15}}>
                          <Text style={{fontSize:28}}>Login</Text>
                      </View>
                      <View>
                        <TextInput
                            value={email}
                            keyboardType="email-address"
                            placeholder="Та имэйл хаягаа оруулна уу"
                            onChangeText={setEmail}
                            style={styles.input}
                        />
                        <TextInput 
                          value={password}
                          secureTextEntry={true}
                          placeholder="Нууц үгээ оруулна уу"
                          onChangeText={setPassword}
                          style={styles.input}
                        />
                      </View>  
                      <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',marginVertical:10}}>
                          <TouchableOpacity
                          style={[styles.button, styles.buttonClose]}
                          onPress={props.hideModal}
                          >
                          <Text style={styles.textStyle}>Cancel</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={toLogin} style={[styles.buttonOpen,styles.button]}>
                              <Text>Login</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={{flexDirection:'row',justifyContent:'space-between',width:200,marginVertical:15}}>
                            <TouchableOpacity>
                              <Text style={{color:'#000'}}>Forgot password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>setLogin(true)}>
                                <Text style={{color:'blue'}}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                  </View>
                </Modal>):
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:200,marginVertical:15}}>
                <Text style={{fontSize:20}}>Register</Text>
                <TouchableOpacity onPress={()=>setLogin(!isLogin)}>
                    <Text style={{color:'blue'}}>Login</Text>
                </TouchableOpacity>
            </View>
            <TextInput value={regEmail} onChangeText={setRegEmail} style={styles.input} placeholderTextColor="#ccc" placeholder='Емайл хаяг'/>
            <TextInput value={regName} onChangeText={setRegName} style={styles.input} placeholderTextColor="#ccc" placeholder='Бүтэн нэр'/>
            <TextInput value={regNumber} onChangeText={setRegNumber} style={styles.input} placeholderTextColor="#ccc" placeholder='Утасны дугаар' />
            <TextInput value={regPassword} onChangeText={setRegPassword} style={styles.input} placeholderTextColor="#ccc" placeholder='Нууц үг' secureTextEntry/>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',marginVertical:10}}>
                <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={props.hideModal}
                >
                <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toRegister} style={[styles.buttonOpen,styles.button]}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
        }
    </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#ccc',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      input:{
          width:200,
          height:35,
          borderBottomColor:'#ccc',
          borderBottomWidth:1,
          marginVertical:15,
          fontSize:22
      }
})