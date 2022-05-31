import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';


import HomeScreen from './components/HomeScreen';
import DashboardScreen from './components/DashboardScreen';
import PaymentScreen from './components/PaymentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            title: 'PFS',
          }}  
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
        <Stack.Screen name="Payment" component={PaymentScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}