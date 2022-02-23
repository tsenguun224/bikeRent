import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';


export default BikeInsertModal = (props) => {
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}>
            <View style={styles.modalView}>
                <Text style={{fontSize:30,fontWeight:'bold'}}></Text>
                <TextInput placeholder='BikeName'/>
                <TextInput placeholder='BikePrice'/>
                <TextInput placeholder='Bike Image' />
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.buttonClose}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOpen}>
                        <Text>Insert</Text>
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
});
