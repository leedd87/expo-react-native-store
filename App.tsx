import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens';
import { Provider } from 'react-redux';
import { store } from './src/store/index';
import { MainStackNavigator } from './src/navigation/MainStackNavigator/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainStackNavigator />
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}
