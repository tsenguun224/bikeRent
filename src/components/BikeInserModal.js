import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';


export default BikeInsertModal = (props) => {
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
       >
            <View style={styles.modalView}>
                <Text style={{fontSize:30,fontWeight:'bold'}}>
                  Insert Bike
                </Text>
                <View style={{marginVertical:10}}>
                  <TextInput style={styles.input} placeholder='BikeName'/>
                  <TextInput style={styles.input} placeholder='BikePrice'/>
                  <TextInput style={styles.input} placeholder='Bike Image' />
                </View>  
                <View style={{width:150,flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={props.modalClose} style={[styles.buttonClose,styles.button]}>
                        <Text style={styles.modalText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonOpen,styles.button]}>
                        <Text style={styles.modalText}>Insert</Text>
                    </TouchableOpacity>
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
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
});
