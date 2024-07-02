import React from 'react';
import { Layout, Text, List, Button } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import CartProduct from './components/CartProduct/CartProduct';
import { removeCartProduct } from '../../store/features/Cart/cartSlice';
import { styles } from './styles';
import { commonStyles } from '../../common/commonStyles';

export const CartScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cartSlice.cartProducts);

  const onPressRemoveCartProduct = (id: string) => {
    dispatch(removeCartProduct(id));
  };

  return (
    <Layout style={[styles.container, { paddingTop: top }]}>
      <Layout>
        <Layout style={commonStyles.layoutContainer}>
          <Text category="h1">Cart</Text>
        </Layout>
        <Layout style={styles.listContainer}>
          {cartProducts ? (
            <List
              data={cartProducts}
              renderItem={({ item }) => (
                <CartProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  onPress={() => {
                    onPressRemoveCartProduct(item.id);
                  }}
                  quantity={item.quantity}
                />
              )}
              ListFooterComponent={() => <Layout style={{ height: 100 }} />}
              onEndReachedThreshold={0.8}
            />
          ) : null}
        </Layout>
      </Layout>
      {cartProducts!.length > 0 ? (
        <Layout style={styles.buyBtn}>
          <Button onPress={() => {}}>Finalizar compra</Button>
        </Layout>
      ) : null}
    </Layout>
  );
};
