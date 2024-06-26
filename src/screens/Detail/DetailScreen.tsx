import React, { useState } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch } from '../../store/hooks/hooks';
import { FAB } from '../../common/FAB/FAB';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/MainStackNavigator/MainStackNavigator';
import { ActivityIndicator } from 'react-native';
import { DetailProduct } from './components';
import { useGetSingleProductQuery } from '../../store/features/Products/productsApiSlice';
import { addCartProduct } from '../../store/features/Cart/cartSlice';

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

  const [count, setCount] = useState(0);
  const addStock = () => {
    setCount(count + 1);
  };

  const removeStock = () => {
    setCount(count - 1);
  };

  const onPressAddCartProduct = () => {
    dispatch(addCartProduct({ ...singleProduct, stock: 2 }));
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
              stock={singleProduct?.stock}
            />
            <Layout
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Button onPress={removeStock}>
                <Text>-</Text>
              </Button>
              <Text category="h4">{count}</Text>
              <Button onPress={addStock} disabled={true}>
                <Text>+</Text>
              </Button>
            </Layout>
          </Layout>
          <Layout style={{ gap: 10 }}>
            <FAB
              iconName="shopping-cart"
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
