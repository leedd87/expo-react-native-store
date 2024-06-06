import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { Product } from '../../../../store/features/Products/types';
import { Image } from 'react-native';

export const ProductCard = ({ title, price, image }: Partial<Product>) => {
  return (
    <Layout
      style={{
        borderWidth: 1,
      }}
    >
      <Image source={{ uri: image }} />
      <Text>{title}</Text>
      <Text>{price}</Text>
    </Layout>
  );
};
