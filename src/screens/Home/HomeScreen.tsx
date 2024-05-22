import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text, View, StyleSheet } from 'react-native';

interface ProductsProps {
  title: string;
  id: string;
}

export const HomeScreen = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
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
