import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text, View, StyleSheet } from 'react-native';
import { useGetAllProducstsQuery } from '../../store/services/products';
import { Product } from '../../store/services/types';

export const HomeScreen = () => {
  const { currentData } = useGetAllProducstsQuery();

  const Item = ({ title }: Product) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={currentData}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id!.toString()}
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
