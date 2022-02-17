import {View,Text,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
export default function HomeScreen(){
    const img = 'https://cdn1.photostockeditor.com/c/2312/black-and-white-black-road-bicycle-handle-with-black-background-wallpaper-wallpaper-image.jpg'
    return <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:img}}>
            <View style={styles.layoutOne}>
                
            </View>
            <View style={styles.layoutTwo}>
                <Text style={styles.text}>bike rent</Text>
                <Text style={{color:'#ccc',marginVertical:10}}>Largest bike rent service in Ulaanbaatar</Text>
                <TouchableOpacity style={styles.btn}>
                    <LinearGradient style={styles.linear}  colors={['#dab4e2','#ca29db']}>
                        <Text style={styles.text}>Get started</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ImageBackground>
}
const styles = StyleSheet.create({
    layoutOne:{
        flex:1,
        marginHorizontal:10
    },
    layoutTwo:{
        flex:3,
        width:'100%',
        marginHorizontal:10,
        justifyContent:'flex-start',
    },
    text:{
        color:'#fff',
        fontSize:20,
    },
    btn:{
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
    },
    linear:{
        width:'100%',
        height:'100%',
        borderRadius:12
    }
})