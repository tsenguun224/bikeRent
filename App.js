import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'
import BikeRentScreen from './src/screens/BikeRentScreen'
import BikeDeatailScreen from './src/screens/BikeDetailScreen'
import store from './src/redux/store';
import { Provider } from 'react-redux';
import UserProfiles from './src/screens/userProfileScreen';





const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer > 
          <Stack.Navigator screenOptions={{headerShown:false,animation:"fade_from_bottom"}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Bike Rent" component={BikeRentScreen} />
            <Stack.Screen name="Rent" component={BikeDeatailScreen}/>
            <Stack.Screen name="User" component={UserProfiles}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;