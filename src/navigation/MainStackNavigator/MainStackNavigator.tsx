import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens';
import { LoginScreen } from '../../screens/auth/Login/LoginScreen';
import { useAppSelector } from '../../store/hooks/hooks';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  //TRAER EL isLogin de redux
  const isLogin = useAppSelector((state) => state.authSlice.status);

  // console.log(
  //   '🚀 ~ file: MainStackNavigator.tsx:17 ~ MainStackNavigator ~ isLogin:',
  //   isLogin
  // );
  //const isLogIn = false;

  return (
    <Stack.Navigator>
      {isLogin === 'authenticated' ? (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      )}
      {/* <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};
