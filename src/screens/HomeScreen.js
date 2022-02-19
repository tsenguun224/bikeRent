import {View,Text,ImageBackground,StyleSheet} from 'react-native'
import MyGradientButton from '../components/MyGradientButton'
import LoginRegisterModal from '../components/LoginRegisterModal'
import { useState } from 'react'



export default function HomeScreen({navigation}){
    const img = 'https://cdn1.photostockeditor.com/c/2312/black-and-white-black-road-bicycle-handle-with-black-background-wallpaper-wallpaper-image.jpg'
    const [isModalVisible,setIsModalVisible] = useState(false)
    const toBikeRentSection = ()=>{
        setIsModalVisible(true)
    }
    const hideModal=()=>{
        setIsModalVisible(false)
    }
    const goBikeRent = ()=>{
        navigation.navigate('Bike Rent')
        hideModal()
    }
    return <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:img}}>
            <View style={styles.layoutOne}>
                <Text style={styles.logo}>br</Text>
            </View>
            <View style={styles.layoutTwo}>
                <Text style={styles.text}>bike rent</Text>
                <Text style={{color:'#ccc',marginVertical:10}}>Largest bike rent service in Ulaanbaatar</Text>
                <MyGradientButton textColor="#fff"  width={110} title='Get started' onPress={toBikeRentSection} color1='#7F00FF' color2='#E100FF'/>
            </View>
            <LoginRegisterModal goBikeRent={goBikeRent} hideModal={hideModal} isModalVisible={isModalVisible} />
        </ImageBackground>
}
const styles = StyleSheet.create({
    layoutOne:{
        flex:1,
        marginHorizontal:20
    },
    layoutTwo:{
        flex:4,
        width:'100%',
        marginHorizontal:20,
        justifyContent:'flex-start',
    },
    text:{
        color:'#fff',
        fontSize:20,
    },
    logo:{
        width:30,
        height:30,
        fontSize:14,
        borderWidth:1,
        borderColor:'#ccc',
        color:'#ccc',
        textAlign:'center',
        borderRadius:6,
        marginTop:40
    }
})