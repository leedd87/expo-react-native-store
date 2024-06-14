import { View, Image } from 'react-native';
import React from 'react';
import { Product } from '../../../../store/features/Products/types';
import { Layout, Text } from '@ui-kitten/components';
import { FAB } from '../../../../common/FAB/FAB';

interface CartProductProps extends Product {
  onPress: () => void;
}

const CartProduct = ({
  title,
  price,
  image,
  id,
  onPress,
}: CartProductProps) => (
  <Layout
    key={id}
    style={{
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      borderWidth: 1,
      alignItems: 'center',
    }}
  >
    <Image
      source={{ uri: image }}
      style={{
        height: 100,
        width: '30%',
        resizeMode: 'contain',
      }}
    />
    <Layout style={{ flex: 1, paddingHorizontal: 15, padding: 15, gap: 30 }}>
      <Text category="s1">{title}</Text>
      <Text category="h5">{`$ ${price}`}</Text>
    </Layout>
    <FAB
      iconName="close"
      onPress={onPress}
      style={{
        position: 'absolute',
        right: 10,
        bottom: 10,
        width: 20,
        height: 20,
      }}
    />
  </Layout>
);

export default CartProduct;
