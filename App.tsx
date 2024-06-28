import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import { persistor, store } from './src/store/index';
import { MainStackNavigator } from './src/navigation/MainStackNavigator/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './src/theme/theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { PersistGate } from 'redux-persist/integration/react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <NavigationContainer>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <MainStackNavigator />
              <StatusBar style="auto" />
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
