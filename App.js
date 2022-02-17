import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'
import BikeRentScreen from './src/screens/BikeRentScreen'


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer > 
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Bike Rent" component={BikeRentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;