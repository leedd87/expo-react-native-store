import React from 'react';
import { Layout, Text, List } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import CartProduct from './components/CartProduct/CartProduct';

export const CartScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cartSlice.cartProducts);

  return (
    <Layout
      style={{
        flex: 1,
        paddingTop: top,
      }}
    >
      <Layout style={{ paddingTop: 30 * 0.35, paddingHorizontal: 30 }}>
        <Text category="h1">Cart</Text>
      </Layout>
      <Layout style={{ marginTop: 20, gap: 20 }}>
        {cartProducts ? (
          <List
            data={cartProducts}
            renderItem={({ item }) => (
              <CartProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                onPress={() => {}}
              />
            )}
            ListFooterComponent={() => <Layout style={{ height: 100 }} />}
            onEndReachedThreshold={0.8}
          />
        ) : null}
      </Layout>

      <Layout style={{ paddingVertical: 20 }} />
    </Layout>
  );
};