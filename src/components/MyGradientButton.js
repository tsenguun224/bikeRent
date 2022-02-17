import { TouchableOpacity,Text ,StyleSheet} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

const MyGradientButton = (props)=>{
    return <TouchableOpacity onPress={props.goBikeRent} style={[styles.btn,{width:props.width}]}>
                <LinearGradient style={[styles.linear,{borderWidth:props.borderWidth,borderColor:props.borderColor}]}  colors={[props.color1,props.color2]}>
                    <Text style={[styles.text,{color:props.textColor}]}>{props.title}</Text>
                </LinearGradient>
           </TouchableOpacity>
}
const styles = StyleSheet.create({
    btn:{
        height:45,
        marginVertical:10,
    },
    linear:{
        width:'100%',
        height:'100%',
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        color:'#fff',
        fontSize:20,
    }
})
export default MyGradientButton;