import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { Product } from '../../../../store/features/Products/types';
import { useGetSingleProductQuery } from '../../../../store/features/Products/productsApiSlice';

export const SingleProduct = ({ id }: Product) => {
  const { currentData: singleProduct, isLoading } =
    useGetSingleProductQuery(id);

  return (
    <>
      {isLoading ? (
        <View>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      ) : (
        <View>
          <Text>{singleProduct?.title}</Text>
          <Text>{singleProduct?.price}</Text>
          <Text>{singleProduct?.description}</Text>
        </View>
      )}
    </>
  );
};
