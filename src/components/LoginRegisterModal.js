import {View,Modal,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import { useState } from 'react';



export default function LoginRegisterModal(props){
  const [isLogin,setLogin]= useState(false)  
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
                          <Text style={{fontSize:20}}>Login</Text>
                          <TouchableOpacity onPress={()=>setLogin(true)}>
                              <Text style={{color:'blue'}}>Register</Text>
                          </TouchableOpacity>
                      </View>
                      <TextInput style={styles.input} placeholderTextColor="#ccc" placeholder='Email'/>
                      <TextInput style={styles.input} placeholderTextColor="#ccc" placeholder='Password'/>
                      <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%',marginVertical:10}}>
                          <TouchableOpacity
                          style={[styles.button, styles.buttonClose]}
                          onPress={props.hideModal}
                          >
                          <Text style={styles.textStyle}>Cancel</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={props.goBikeRent} style={[styles.buttonOpen,styles.button]}>
                              <Text>Login</Text>
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
            <TextInput style={styles.input} placeholderTextColor="#ccc" placeholder='Email'/>
            <TextInput style={styles.input} placeholderTextColor="#ccc" placeholder='Name'/>
            <TextInput style={styles.input} placeholderTextColor="#ccc" placeholder='Password'/>
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