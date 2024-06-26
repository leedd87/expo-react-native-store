import { View, Image } from 'react-native';
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';

interface DetailProductProps {
  image?: string;
  title?: string;
  price?: string;
  description?: string;
  stock?: number;
}

export const DetailProduct = ({
  image,
  title,
  price,
  description,
  //TESTING
  stock,
}: DetailProductProps) => {
  console.log('🚀 ~ file: DetailProduct.tsx:21 ~ stock:', stock);
  return (
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
      <Layout>
        <Text category="h6">{stock}</Text>
      </Layout>
    </Layout>
  );
};
