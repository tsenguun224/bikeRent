import {View,Modal,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { loginUser,registerUser } from '../redux/actions/authAction';
import axios from 'axios';



export default function LoginRegisterModal(props){
  const [isLogin,setLogin]= useState(false)
  const [loginEmail,setLoginEmail] = useState();
  const [loginPass,setLoginPass] = useState();
  const [regEmail,setRegEmail] = useState();
  const [regName, setRegName] = useState() ;
  const [regPassword, setRegPassword] = useState();
  const dispatch = useDispatch();
  const users = useSelector(state => state)
  const toLogin = async () =>{
    const loginUserData  = {
      email:loginEmail,
      password:loginPass
    }
    const {data} = await axios({method:'POST',url:'http://localhost:3001/bikeRent/loginUser',data:loginUserData,headers:{"Content-Type":'application/json'}})
    console.log(data)    
  }
  const toRegister = () =>{
    const userData = {
      email:regEmail,
      name:regName,
      password:regPassword
    }
    dispatch(registerUser(userData));

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
                      <TextInput onChange={e => setLoginEmail(e.target.value)} style={styles.input} placeholderTextColor="#ccc" placeholder='Email'/>
                      <TextInput onChange={e => setLoginPass(e.target.value)} style={styles.input} placeholderTextColor="#ccc" placeholder='Password'/>
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
            <TextInput onChange={e => setRegEmail(e.target.value)} style={styles.input} placeholderTextColor="#ccc" placeholder='Email'/>
            <TextInput onChange={e => setRegName(e.target.value)} style={styles.input} placeholderTextColor="#ccc" placeholder='Name'/>
            <TextInput onChange={e => setRegPassword(e.target.value)} style={styles.input} placeholderTextColor="#ccc" placeholder='Password'/>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',marginVertical:10}}>
                <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={props.hideModal}
                >
                <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonOpen,styles.button]}>
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