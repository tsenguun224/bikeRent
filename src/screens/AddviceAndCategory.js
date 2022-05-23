import {View,StyleSheet} from 'react-native'
import axios from 'axios'
import {url} from '../url'
import { AntDesign } from "@expo/vector-icons";
import { Touchable, TouchableOpacity } from 'react-native-web';


export default function AddviceAndCategory({route,navigation},props){

    return (
        <View style={{flex:1}}>
            <View style={styles.layoutThree}>
				<TouchableOpacity style={{ borderBottomWidth: 5, padding: 20 }}>
					<AntDesign name="home" size={24} color="black" />
				</TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="" />
                </TouchableOpacity>
				<TouchableOpacity
					style={{ borderRadius: 28, padding: 20 }}
					onPress={() => navigation.navigate("User")}
				>
					<AntDesign name="user" size={24} color="black" />
				</TouchableOpacity>
			</View>
        </View>
        
    )
}

const styles = StyleSheet.create({
	layoutOne: {
		flex: 3,
		marginHorizontal: 20,
		marginBottom: 30
	},
	layoutTwo: {
		flex: 6,
		marginHorizontal: 20,
		justifyContent: "center",
		marginTop: 60
	},
	layoutThree: {
		flex: 1,
		marginHorizontal: 20,
		marginTop: 15,
		marginBottom: 5,
		flexDirection: "row",
		justifyContent: "space-evenly"
	},
	logo: {
		width: 30,
		height: 30,
		fontSize: 14,
		borderWidth: 1,
		borderColor: "#ccc",
		color: "#000",
		textAlign: "center",
		borderRadius: 6
	},
	input: {
		fontSize: 30,
		width: 130,
		height: 40
	},
	inputSection: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 20,
		height: 70,
		borderBottomColor: "#ccc",
		borderBottomWidth: 1
	},
	buttonSection: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 20
	},
	logoSection: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 40,
		height: 30
	}
});
