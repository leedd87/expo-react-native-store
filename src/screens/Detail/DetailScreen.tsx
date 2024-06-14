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
import { ActivityIndicator, Image } from 'react-native';
import { DetailProduct } from './components';
import { useGetSingleProductQuery } from '../../store/features/Products/productsApiSlice';
import { addCartProduct } from '../../store/features/Cart/cartSlice';
import { Product } from '../../store/features/Products/types';

export const DetailScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  //Two ways to get Single Product Detail
  const { title, price, description, image, id } = route.params;
  //Al hacer dispatch enviar singleProduct => ya que tiene toda la info del producto
  const { currentData: singleProduct, isLoading } =
    useGetSingleProductQuery(id);

  const onPressAddCartProduct = () => {
    dispatch(addCartProduct(singleProduct));
    navigation.navigate('TabNavigator', { screen: 'Cart' });
  };

  return (
    <Layout
      style={{
        paddingHorizontal: 30,
        flex: 1,
        paddingTop: top,
        justifyContent: 'space-between',
      }}
    >
      {isLoading ? (
        <Layout
          style={{
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <ActivityIndicator size="large" color="#FE9000" />
        </Layout>
      ) : (
        <>
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
            <DetailProduct
              title={singleProduct?.title}
              description={singleProduct?.description}
              image={singleProduct?.image}
              price={singleProduct?.price}
            />
          </Layout>
          <Layout style={{ gap: 10 }}>
            <FAB
              iconName="shopping-cart"
              // onPress={() => {
              //   //TODO navigateo to cart Y DISPATCH A CARRITO
              //   navigation.navigate('TabNavigator', { screen: 'Cart' });
              // }}
              onPress={onPressAddCartProduct}
              style={{
                marginBottom: 30,
              }}
            />
          </Layout>
        </>
      )}
    </Layout>
  );
};
