import { Image } from 'react-native';
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from './styles';

interface DetailProductProps {
  image?: string;
  title?: string;
  price?: string;
  description?: string;
  stock?: number;
}

export const DetailProduct = ({
  image,
  title,
  price,
  description,
}: DetailProductProps) => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.imageStyles} />
      </Layout>
      <Text category="h6">{title}</Text>
      <Text category="h2">{`$ ${price}`}</Text>
      <Text>{description}</Text>
    </Layout>
  );
};
