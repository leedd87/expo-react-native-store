import React from 'react';
import { Layout, Text, Button, List } from '@ui-kitten/components';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { CustomIcon } from '../../common/CustomIcon/CustomIcon';
import { FlatList } from 'react-native-gesture-handler';
import { ProductCard } from '../Home/components';
import { Image } from 'react-native';
import { Product } from '../../store/features/Products/types';
import { FAB } from '../../common/FAB/FAB';

export const FavoritesScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const favoriteProducst = useAppSelector(
    (state) => state.favoritesSlice.favoritesProducts
  );

  console.log(
    '🚀 ~ file: FavoritesScreen.tsx:16 ~ FavoritesScreen ~ favoriteProducst:',
    favoriteProducst?.length
  );

  const FavoriteProduct = ({
    title,
    price,

    image,
    id,
  }: Product) => (
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
        onPress={() => {}}
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

  return (
    <Layout
      style={{
        flex: 1,
        paddingTop: top,
      }}
    >
      <Layout style={{ paddingTop: 30 * 0.35, paddingHorizontal: 30 }}>
        <Text category="h1">Favorites</Text>
      </Layout>
      <Layout style={{ marginTop: 20, gap: 20 }}>
        {favoriteProducst ? (
          <List
            data={favoriteProducst}
            renderItem={({ item }) => (
              <FavoriteProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
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
