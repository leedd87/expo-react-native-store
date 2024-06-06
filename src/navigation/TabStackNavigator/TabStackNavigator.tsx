import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, HomeScreen } from '../../screens';

const Tab = createBottomTabNavigator();

export const TabStackNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};
