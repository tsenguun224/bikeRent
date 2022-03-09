import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {useDispatch} from 'react-redux';
import {addBike} from '../redux/actions/bikeActions';
import jwtdecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function BikeInsertModal(props) {
  const dispatch = useDispatch();
  const [bikeName,setBikeName] = useState();
  const [bikeImage,setBikeImage] = useState();
  const [bikePrice, setBikePrice] = useState();
  const [bikeEzen, setBikeEzen] = useState();
  useEffect(async()=>{
    const token = await AsyncStorage.getItem("user_token")
    const decode = jwtdecode(token)
    setBikeEzen(decode.id);
  },[bikeEzen])
  const insertBike = ()=>{

    const bikeData = {
      bikeName:bikeName,
      bikeImage:bikeImage,
      bikePrice:bikePrice,
      bikeEzen:bikeEzen
    }
    dispatch(addBike(bikeData));
    props.modalClose()
    clearInput()
  }
  const clearInput = ()=>{
    setBikeName('')
    setBikeEzen('')
    setBikeImage('')
    setBikePrice('')
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
                  Insert Bike
                </Text>
                <View style={{marginVertical:10}}>
                  <TextInput value={bikeName} onChangeText={setBikeName} style={styles.input} placeholder='Bike Name'/>
                  <TextInput value={bikePrice}onChangeText={setBikePrice} style={styles.input} placeholder='Bike Price'/>
                  <TextInput value={bikePrice}onChangeText={setBikeImage} style={styles.input} placeholder='Bike Image' />
                </View>  
                <View style={{width:150,flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={props.modalClose} style={[styles.buttonClose,styles.button]}>
                        <Text style={styles.modalText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={insertBike} style={[styles.buttonOpen,styles.button]}>
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
