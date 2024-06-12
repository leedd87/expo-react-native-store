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
import { setAllProducts } from '../../store/features/Products/productsSlice';

import { logOut } from '../../store/features/Auth/authSlice';
import {
  Button,
  Input,
  Layout,
  List,
  Text,
  useTheme,
} from '@ui-kitten/components';
import { CustomIcon } from '../../common/CustomIcon/CustomIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DetailProduct, ProductCard } from './components';

export const HomeScreen = () => {
  const theme = useTheme();
  const { top, bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(
    (state) => state.productsSlice.allProducts
  );

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
