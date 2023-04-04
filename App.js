import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { colors,parameters } from './src/global/styles';
import HomeScreen from './src/screens/HomeScreen';
import RootNavigator from './src/navigations/RootNavigator';

export default function App() {
  return (
    <RootNavigator/>
  );
}

const styles = StyleSheet.create({
 
})
