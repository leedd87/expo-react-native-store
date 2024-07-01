import React from 'react';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { Product } from '../../../../store/features/Products/types';
import { Image } from 'react-native';

import { FAB } from '../../../../common/FAB/FAB';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/MainStackNavigator/MainStackNavigator';
import { useAppDispatch } from '../../../../store/hooks/hooks';
import { toggleFavoriteProduct } from '../../../../store/features/Products/productsSlice';
import { styles } from './styles';

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
    <Layout style={styles.container}>
      <Image source={{ uri: image }} style={styles.imageContainer} />
      <FAB
        iconName="heart-outline"
        onPress={onPressFavorite}
        style={[
          styles.fabContainer,
          {
            backgroundColor: item.favorite ? 'red' : theme['color-primary-400'],
            borderColor: item.favorite ? 'red' : theme['color-primary-400'],
          },
        ]}
      />
      <Layout style={styles.textContainer}>
        <Layout style={{ paddingBottom: 100 }}>
          <Text category="h6">{title}</Text>
        </Layout>
        <Text category="h6" style={styles.textStyle}>{`$ ${price}`}</Text>
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
          style={styles.plusStyle}
        />
      </Layout>
    </Layout>
  );
};
