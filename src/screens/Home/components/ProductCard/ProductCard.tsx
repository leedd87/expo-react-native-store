import React, { useEffect, useState } from 'react';
import { Button, Layout, Text, useTheme } from '@ui-kitten/components';
import { Product } from '../../../../store/features/Products/types';
import { Image } from 'react-native';
import { CustomIcon } from '../../../../common/CustomIcon/CustomIcon';
import { FAB } from '../../../../common/FAB/FAB';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/MainStackNavigator/MainStackNavigator';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/hooks';
import { toggleFavoriteProduct } from '../../../../store/features/Products/productsSlice';

interface ProductCardProps extends Product {
  onPress?: (item: Product) => void;
  item: Product;
}

export const ProductCard = ({
  title,
  price,
  description,
  image,
  id,
  onPress,
  item,
}: ProductCardProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressFavorite = () => {
    dispatch(toggleFavoriteProduct(item?.id));
    onPress?.(item);
  };

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
      <FAB
        iconName="heart-outline"
        onPress={onPressFavorite}
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          height: 10,
          width: 10,
          backgroundColor: item.favorite ? 'red' : theme['color-primary-400'],
          borderColor: item.favorite ? 'red' : theme['color-primary-400'],
        }}
      />
      <Layout style={{ flex: 1, padding: 10 }}>
        <Layout style={{ paddingBottom: 100 }}>
          <Text category="h6">{title}</Text>
        </Layout>
        <Text
          category="h6"
          style={{ position: 'absolute', left: 10, bottom: 10 }}
        >{`$ ${price}`}</Text>
        <FAB
          iconName="plus-outline"
          onPress={() => {
            navigation.navigate('Detail', {
              title,
              price,
              description,
              image,
              id,
            });
          }}
          style={{ position: 'absolute', right: 10, bottom: 10 }}
        />
      </Layout>
    </Layout>
  );
};
