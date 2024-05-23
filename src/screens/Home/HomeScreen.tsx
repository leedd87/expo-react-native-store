import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from '../../store/features/Products/productsApiSlice';
import { useGetAllCategoriesQuery } from '../../store/features/Categories/categoriesApiSlice';
import { Product } from '../../store/features/Products/types';

import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setAllProducts } from '../../store/features/Products/productsSlice';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(
    (state) => state.productsSlice.allProducts
  );
  const { currentData: apiAllProducts } = useGetAllProductsQuery();
  const { currentData: allCategories } = useGetAllCategoriesQuery();
  const { currentData: singleProduct } = useGetSingleProductQuery('1');
  // console.log(
  //   '🚀 ~ file: HomeScreen.tsx:12 ~ HomeScreen ~ allProducts:',
  //   JSON.stringify(allProducts, null, 2)
  // );

  const getProducts = () => {
    dispatch(setAllProducts(apiAllProducts));
    console.log('dispatch hecho');
  };

  const Item = ({ title, price, description }: Product) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{price}</Text>
    </View>
  );

  return (
    //CHANGE SafeAreaView WHEN USING REACT NAVIGATION
    <SafeAreaView>
      <TouchableOpacity
        style={{ backgroundColor: 'gray', padding: 10, borderWidth: 1 }}
        onPress={getProducts}
      >
        <Text style={{ fontSize: 18 }}>DAME PRODUCTOS</Text>
      </TouchableOpacity>
      {allProducts ? (
        <FlatList
          data={allProducts}
          renderItem={({ item }) => (
            <Item title={item.title} price={item.price} />
          )}
          keyExtractor={(item) => item.id!.toString()}
        />
      ) : null}
    </SafeAreaView>
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
