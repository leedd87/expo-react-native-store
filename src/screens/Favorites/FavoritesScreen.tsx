import React from 'react';
import { Layout, Text, List } from '@ui-kitten/components';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

import { FavoriteProduct } from './components';
import { removeFavoriteProduct } from '../../store/features/Favorites/favoritesSlice';
import { Product } from '../../store/features/Products/types';
import { toggleFavoriteProduct } from '../../store/features/Products/productsSlice';
import { styles } from './styles';
import { commonStyles } from '../../common/commonStyles';

export const FavoritesScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const favoriteProducst = useAppSelector(
    (state) => state.favoritesSlice.favoritesProducts
  );

  const removeFavorite = (item: Product) => {
    dispatch(removeFavoriteProduct(item?.id));
    dispatch(toggleFavoriteProduct(item?.id));
  };

  return (
    <Layout style={[commonStyles.container, { paddingTop: top }]}>
      <Layout style={commonStyles.layoutContainer}>
        <Text category="h1">Favorites</Text>
      </Layout>
      <Layout style={styles.listContainer}>
        {favoriteProducst ? (
          <List
            data={favoriteProducst}
            renderItem={({ item }) => (
              <FavoriteProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                onPress={() => removeFavorite(item)}
                item={item}
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
