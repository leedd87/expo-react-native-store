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
import { styles } from './styles';

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

  const [quantity, setQuantity] = useState(0);
  const addStock = () => {
    setQuantity(quantity + 1);
  };

  const removeStock = () => {
    setQuantity(quantity - 1);
  };

  const onPressAddCartProduct = () => {
    dispatch(addCartProduct({ ...singleProduct, quantity: quantity }));
    navigation.navigate('TabNavigator', { screen: 'Cart' });
  };

  return (
    <Layout style={[styles.container, { paddingTop: top }]}>
      {isLoading ? (
        <Layout style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color="#FE9000" />
        </Layout>
      ) : (
        <>
          <Layout>
            <Layout style={styles.headerContainer}>
              <Text category="h1">Detail</Text>
            </Layout>

            <FAB
              iconName="arrow-back"
              onPress={() => navigation.goBack()}
              style={styles.fabStyles}
            />
            <Layout style={{ margin: 20 }} />
            <DetailProduct
              title={singleProduct?.title}
              description={singleProduct?.description}
              image={singleProduct?.image}
              price={singleProduct?.price}
              stock={singleProduct?.stock}
            />
            <Layout style={styles.btnStyle}>
              <Button
                onPress={removeStock}
                disabled={quantity <= 0 ? true : false}
              >
                <Text>-</Text>
              </Button>
              <Text category="h4">{quantity}</Text>
              <Button
                onPress={addStock}
                disabled={
                  singleProduct?.stock && quantity >= singleProduct?.stock
                    ? true
                    : false
                }
              >
                <Text>+</Text>
              </Button>
            </Layout>
          </Layout>
          <Layout style={{ gap: 10 }}>
            <FAB
              iconName="shopping-cart"
              onPress={onPressAddCartProduct}
              style={{ marginBottom: 30 }}
            />
          </Layout>
        </>
      )}
    </Layout>
  );
};
