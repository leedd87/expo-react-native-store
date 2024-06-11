import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, FavoritesScreen, HomeScreen } from '../../screens';
import { FAB } from '../../common/FAB/FAB';
import { CustomIcon } from '../../common/CustomIcon/CustomIcon';
import { useTheme } from '@ui-kitten/components';
import { CartScreen } from '../../screens/Cart/CartScreen';

const Tab = createBottomTabNavigator();

export const TabStackNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'color-basic-700',
        tabBarStyle: {
          backgroundColor: '#FE9000',
          paddingVertical: 15,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name="heart" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name="shopping-cart" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name="person" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
