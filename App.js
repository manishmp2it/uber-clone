import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { colors,parameters } from './src/global/styles';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <View>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
 
})
