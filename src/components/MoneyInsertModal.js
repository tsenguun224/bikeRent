import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import axios from 'axios'




export default function MoneyInsertModal(props) {
const [moneyValue,setMoenyValue] = useState()
const manageBalance = async () => {
    
    const data = await axios.post('http://192.168.1.5:8000/api/v1/users/balance',{
        email:props.email,
        transaction:{
            type:'inc',
            value:parseInt(moneyValue)
        }
    })
    if(data.success === true){
        Alert.alert('Inserted money','Tanii balance amjilttai tseneglegdlee',[{text:"ok"}])
    }
    props.modalClose()
}
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
       >
         <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{fontSize:30,fontWeight:'bold'}}>
                   Deposit
                </Text>
                <View style={{marginVertical:10}}>
                  <TextInput value={moneyValue} onChangeText={setMoenyValue} style={styles.input} placeholder='Your value' placeholderTextColor="#ccc"/>
                </View>  
                <View style={{width:150,flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={props.modalClose} style={[styles.buttonClose,styles.button]}>
                        <Text style={styles.modalText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={manageBalance} style={[styles.buttonOpen,styles.button]}>
                        <Text style={styles.modalText}>Insert</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>  
        </Modal>
    </View>
  );
};

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
    backgroundColor:'#F194FF',
  },
  buttonClose: {
    backgroundColor:'#2196F3',
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
    width:270,
    height:55,
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    marginVertical:20,
    fontSize:22
}
});
