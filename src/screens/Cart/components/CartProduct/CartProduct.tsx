import { View, Image } from 'react-native';
import React from 'react';
import { Product } from '../../../../store/features/Products/types';
import { Layout, Text } from '@ui-kitten/components';
import { FAB } from '../../../../common/FAB/FAB';
import { styles } from './styles';

interface CartProductProps extends Product {
  onPress: () => void;
  quantity?: string;
}

const CartProduct = ({
  title,
  price,
  image,
  id,
  onPress,
  quantity,
}: CartProductProps) => (
  <Layout key={id} style={styles.container}>
    <Image source={{ uri: image }} style={styles.imageStyle} />
    <Layout style={{ flex: 1, paddingHorizontal: 15, padding: 15, gap: 30 }}>
      <Text category="s1">{title}</Text>
      <Text category="h5">{`$ ${price}`}</Text>
      <Layout style={styles.quantityStyle}>
        <Text category="h6">{`${quantity} units`}</Text>
      </Layout>
    </Layout>
    <FAB iconName="close" onPress={onPress} style={styles.fabStyle} />
  </Layout>
);

export default CartProduct;
