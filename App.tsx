import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens';
import { Provider } from 'react-redux';
import { store } from './src/store/index';
import { MainStackNavigator } from './src/navigation/MainStackNavigator/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './src/theme/theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <NavigationContainer>
          <Provider store={store}>
            <MainStackNavigator />
            <StatusBar style="auto" />
          </Provider>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
