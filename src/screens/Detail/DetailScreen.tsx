import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch } from '../../store/hooks/hooks';
import { CustomIcon } from '../../common/CustomIcon/CustomIcon';
import { FAB } from '../../common/FAB/FAB';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/MainStackNavigator/MainStackNavigator';
import { Image } from 'react-native';

export const DetailScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const { title, price, description, image } = route.params;

  return (
    <Layout
      style={{
        paddingHorizontal: 30,
        flex: 1,
        paddingTop: top,
        justifyContent: 'space-between',
      }}
    >
      <Layout>
        <Layout
          style={{
            paddingTop: 30 * 0.35,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text category="h1">Detail</Text>
        </Layout>

        <FAB
          iconName="arrow-back"
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <Layout style={{ margin: 20 }} />
        <Layout
          style={{
            gap: 10,

            justifyContent: 'space-between',
          }}
        >
          <Layout
            style={{
              backgroundColor: 'white',
              paddingBottom: 15,
            }}
          >
            <Image
              source={{ uri: image }}
              style={{
                height: 200,
                width: '100%',
                resizeMode: 'contain',
                marginTop: 15,
              }}
            />
          </Layout>
          <Text category="h6">{title}</Text>
          <Text category="h2">{`$ ${price}`}</Text>
          <Text>{description}</Text>
        </Layout>
      </Layout>
      <Layout style={{ gap: 10 }}>
        <FAB
          iconName="shopping-cart"
          onPress={() => {
            //TODO navigateo to cart Y DISPATCH A CARRITO
            navigation.navigate('TabNavigator', { screen: 'Cart' });
          }}
          style={{
            marginBottom: 30,
          }}
        />
      </Layout>
    </Layout>
  );
};
