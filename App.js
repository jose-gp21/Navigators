import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './src/navigations/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigations/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
