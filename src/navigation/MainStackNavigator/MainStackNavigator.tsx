import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../../screens/auth/Login/LoginScreen';
import { useAppSelector } from '../../store/hooks/hooks';
import { TabStackNavigator } from '../TabStackNavigator/TabStackNavigator';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  TabNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  const isLogin = useAppSelector((state) => state.authSlice.status);

  return (
    <Stack.Navigator>
      {isLogin === 'authenticated' ? (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabNavigator" component={TabStackNavigator} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
