import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {
  useAddNewProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from '../../store/features/Products/productsApiSlice';
import { useGetAllCategoriesQuery } from '../../store/features/Categories/categoriesApiSlice';
import { Product } from '../../store/features/Products/types';

import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import {
  setAllProducts,
  toggleFavoriteProduct,
} from '../../store/features/Products/productsSlice';

import { Button, Layout, List, Text, useTheme } from '@ui-kitten/components';
import { CustomIcon } from '../../common/CustomIcon/CustomIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProductCard } from './components';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from '../../store/features/Favorites/favoritesSlice';

export const HomeScreen = () => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const favoriteProducts = useAppSelector(
    (state) => state.favoritesSlice.favoritesProducts
  );

  const allProducts = useAppSelector(
    (state) => state.productsSlice.allProducts
  );

  const onPressSaveRemoveFavoriteProduct = (item: Product) => {
    dispatch(addFavoriteProduct(item));
    const selectedProduct = favoriteProducts?.find(
      (product) => product.id === item.id
    );
    if (selectedProduct?.favorite) {
      dispatch(removeFavoriteProduct(selectedProduct?.id));
    }
  };

  const { currentData: apiAllProducts } = useGetAllProductsQuery();
  const { currentData: allCategories } = useGetAllCategoriesQuery();
  const [hasSameId, setHasSameId] = useState('');

  const body = {
    title: 'test product',
    price: '13.5',
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  };

  const [addNewProduct, addNewProductResults] = useAddNewProductMutation();
  const [deleteProduct, { isLoading, data, status, originalArgs }] =
    useDeleteProductMutation();

  const getProducts = () => {
    dispatch(setAllProducts(apiAllProducts));
  };

  const getSingleProduct = (id: string) => {
    setHasSameId(id);
  };

  const crearProducto = (body: Partial<Product>) => {
    addNewProduct(body);
    console.log(body);
  };

  const borrarProducto = () => {
    deleteProduct('1');
  };

  //TESTING
  const categorias = [
    { category: 'categoria 1', id: '1' },
    {
      category: 'categoria 2',
      id: '2',
    },
    {
      category: 'categoria 3',
      id: '3',
    },
    {
      category: 'categoria 4',
      id: '4',
    },
  ];

  return (
    <Layout
      style={{
        flex: 1,
        paddingTop: top,
      }}
    >
      <Layout style={{ paddingTop: 30 * 0.35, paddingHorizontal: 30 }}>
        <Text category="h1">Home</Text>
        <Button
          onPress={getProducts}
          accessoryRight={<CustomIcon name="arrow-forward-outline" white />}
        >
          Get Products
        </Button>
      </Layout>

      <Layout style={{ paddingTop: 30 * 0.35, paddingHorizontal: 30 }}>
        <List
          style={{
            backgroundColor: theme['color-basic-800'],
          }}
          data={categorias}
          renderItem={({ item }) => (
            <Layout style={{ marginEnd: 5 }}>
              <Button>{item.category}</Button>
            </Layout>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </Layout>
      <Layout style={{ marginTop: 20, gap: 20 }}>
        {allProducts ? (
          <List
            data={allProducts}
            renderItem={({ item }) => (
              <ProductCard
                title={item.title}
                image={item.image}
                price={item.price}
                description={item.description}
                id={item.id}
                onPress={() => onPressSaveRemoveFavoriteProduct(item)}
                item={item}
              />
            )}
            numColumns={2}
            ListFooterComponent={() => <Layout style={{ height: 150 }} />}
            onEndReachedThreshold={0.8}
          />
        ) : null}
      </Layout>

      <Layout style={{ paddingVertical: 20 }} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
