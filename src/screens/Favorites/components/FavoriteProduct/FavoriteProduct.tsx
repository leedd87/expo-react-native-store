import { View, Image } from 'react-native';
import React from 'react';
import { Product } from '../../../../store/features/Products/types';
import { Layout, Text } from '@ui-kitten/components';
import { FAB } from '../../../../common/FAB/FAB';
import { CustomIcon } from '../../../../common/CustomIcon/CustomIcon';

interface FavoriteProductProps extends Product {
  onPress: (item: Product) => void;
  item: Product;
}

export const FavoriteProduct = ({
  title,
  price,
  image,
  id,
  onPress,
  item,
}: FavoriteProductProps) => {
  const onPressRemove = () => {
    onPress(item);
  };
  return (
    <Layout
      key={id}
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: 200,
          width: '50%',
          resizeMode: 'contain',
          margin: 5,
        }}
      />
      <Layout style={{ flex: 1, paddingHorizontal: 15, gap: 30, padding: 15 }}>
        <Text category="h6">{title}</Text>

        <Text category="h5">{`$ ${price}`}</Text>
      </Layout>
      <FAB
        iconName="trash-outline"
        onPress={onPressRemove}
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
};
