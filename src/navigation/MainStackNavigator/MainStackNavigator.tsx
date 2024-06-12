import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../../screens/auth/Login/LoginScreen';
import { useAppSelector } from '../../store/hooks/hooks';
import { TabStackNavigator } from '../TabStackNavigator/TabStackNavigator';
import { DetailScreen } from '../../screens/Detail/DetailScreen';
import { Product } from '../../store/features/Products/types';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  TabNavigator: undefined;
  Detail: {
    title?: string;
    price?: string;
    description?: string;
    image?: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  const isLogin = useAppSelector((state) => state.authSlice.status);

  return (
    <Stack.Navigator>
      {isLogin === 'authenticated' ? (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabNavigator" component={TabStackNavigator} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
