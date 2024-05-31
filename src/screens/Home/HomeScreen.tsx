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
  useAddNewProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from '../../store/features/Products/productsApiSlice';
import { useGetAllCategoriesQuery } from '../../store/features/Categories/categoriesApiSlice';
import { Product } from '../../store/features/Products/types';

import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setAllProducts } from '../../store/features/Products/productsSlice';
import { SingleProduct } from './components';
import { setLogOut } from '../../store/features/Auth/authSlice';

export const HomeScreen = () => {
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

  const cerrarSesion = async () => {
    await dispatch(setLogOut());
  };

  const Item = ({ title, price, description, id }: Product) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{price}</Text>
      {hasSameId === id && (
        <SingleProduct title={title} price={price} id={id} />
      )}
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
      <TouchableOpacity
        style={{ backgroundColor: 'gray', padding: 10, borderWidth: 1 }}
        onPress={() => crearProducto(body)}
      >
        <Text style={{ fontSize: 18 }}>Crear PRODUCTOS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: 'gray', padding: 10, borderWidth: 1 }}
        onPress={borrarProducto}
      >
        <Text style={{ fontSize: 18 }}>BORRAR PRODUCTOS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: 'gray', padding: 10, borderWidth: 1 }}
        onPress={cerrarSesion}
      >
        <Text style={{ fontSize: 18 }}>CERRAR SESION</Text>
      </TouchableOpacity>
      {allProducts ? (
        <FlatList
          data={allProducts}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity onPress={() => getSingleProduct(item.id)}>
                <Item title={item.title} price={item.price} id={item.id} />
              </TouchableOpacity>
            </>
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
