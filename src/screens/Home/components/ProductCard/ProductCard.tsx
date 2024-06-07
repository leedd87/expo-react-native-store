import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { Product } from '../../../../store/features/Products/types';
import { Image } from 'react-native';
import { CustomIcon } from '../../../../common/CustomIcon/CustomIcon';
import { FAB } from '../../../../common/FAB/FAB';

export const ProductCard = ({
  title,
  price,
  description,
  image,
}: Partial<Product>) => {
  return (
    <Layout
      style={{
        borderWidth: 1,
        width: '50%',
        gap: 10,
        backgroundColor: 'white',
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
      <Layout style={{ flex: 1 }}>
        <Text category="h6">{title}</Text>
        <Text>{description}</Text>
        <Text category="h4">{`$ ${price}`}</Text>

        <FAB
          iconName="plus-outline"
          onPress={() => {}}
          style={{ position: 'absolute', right: 15, bottom: 15 }}
        />
      </Layout>
    </Layout>
  );
};
