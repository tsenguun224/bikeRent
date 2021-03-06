import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	FlatList,
	ActivityIndicator,
	ImageBackground,
	BackHandler,
	Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MyGradientButton from "../components/MyGradientButton";
import BikeInsertModal from "../components/BikeInsertModal";
import { loadBike,getOwnBikes } from "../redux/actions/bikeActions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

export default function BikeRentScreen({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false);
	const [searchField, setSearchField] = useState("");
	const openInsertBikeModal = () => {
		setModalVisible(true);
	};
	const closeModal = () => {
		setModalVisible(false);
	};
	const bikes = useSelector((state) => {
		return state.bikes;
	});
	const dispatch = useDispatch();
	
	useEffect(async () => {
		dispatch(loadBike(""));
	}, [modalVisible]);

	const searchBike = () => {
		dispatch(loadBike(searchField));
	};
	const getAllBike = () => {
		dispatch(loadBike(""));
	};
	const getOwnBike = () =>{
		dispatch(getOwnBikes())
	}
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.layoutOne}>
				<View style={styles.logoSection}>
					<Text style={styles.logo}>br</Text>
					<TouchableOpacity
						onPress={openInsertBikeModal}
						style={{ flexDirection: "row", justifyContent: "center" }}
					>
						<Text style={{ fontSize: 18, marginHorizontal: 10 }}>Add own bike</Text>
						<Ionicons name="add" size={18} color="black" />
					</TouchableOpacity>
				</View>
				<View style={styles.inputSection}>
					<TextInput
						value={searchField}
						onChangeText={setSearchField}
						placeholder="Search"
						style={styles.input}
					/>
					<TouchableOpacity onPress={searchBike}>
						<Ionicons name="ios-search-sharp" size={32} color="black" />
					</TouchableOpacity>
				</View>
				<View style={styles.buttonSection}>
					<MyGradientButton
						textColor="#fff"
						width="45%"
						title="Your bikes"
						color1="#7F00FF"
						color2="#E100FF"
						onPress={getOwnBike}
					/>
					<MyGradientButton
						borderColor="#ccc"
						borderWidth={1}
						textColor="#000"
						width="45%"
						title="All"
						color1="#fff"
						color2="#fff"
						onPress={getAllBike}
					/>
				</View>
				<BikeInsertModal modalClose={closeModal} modalVisible={modalVisible} />
			</View>
			<View style={styles.layoutTwo}>
				{bikes.bikes ? (
					<FlatList
						showsVerticalScrollIndicator={false}
						keyExtractor={(item) => item._id}
						data={bikes.bikes}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => navigation.navigate("Rent", { bike: item })}
								style={[
									{
										width: "100%",
										height: 150,
										backgroundColor: "black",
										flex: 1,
										alignItems: "center",
										justifyContent: "center",
										marginTop: 10
									}
								]}
							>
								<ImageBackground
									style={{
										width: "100%",
										height: "100%",
										alignItems: "center",
										justifyContent: "center"
									}}
									source={{ uri: item.bikeImage }}
								></ImageBackground>
							</TouchableOpacity>
						)}
					/>
				) : (
					<ActivityIndicator />
				)}
			</View>
			<View style={styles.layoutThree}>
				<TouchableOpacity style={{ borderBottomWidth: 5, padding: 20 }}>
					<AntDesign name="home" size={24} color="black" />
				</TouchableOpacity>
				<TouchableOpacity
					style={{ borderRadius: 28, padding: 20 }}
					onPress={() => navigation.navigate("User")}
				>
					<AntDesign name="user" size={24} color="black" />
				</TouchableOpacity>
			</View>
		</View>
	);
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
