import React, { useState } from 'react';
import { Button, Layout, Text, useTheme } from '@ui-kitten/components';
import { Product } from '../../../../store/features/Products/types';
import { Image } from 'react-native';
import { CustomIcon } from '../../../../common/CustomIcon/CustomIcon';
import { FAB } from '../../../../common/FAB/FAB';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/MainStackNavigator/MainStackNavigator';

export const ProductCard = ({
  title,
  price,
  description,
  image,
}: Partial<Product>) => {
  const theme = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressFavorite = () => {
    setIsFavorite(!isFavorite);
    !isFavorite ? console.log('IS FAVORITE') : console.log('NOT FAVORITE');
  };
  return (
    <Layout
      style={{
        borderWidth: 1,
        width: '50%',
        gap: 10,
        backgroundColor: 'white',
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: 200,
          width: '100%',
          resizeMode: 'contain',
          marginTop: 15,
        }}
      />
      <FAB
        iconName="heart-outline"
        onPress={onPressFavorite}
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          height: 10,
          width: 10,
          backgroundColor: isFavorite ? 'red' : theme['color-primary-400'],
          borderColor: isFavorite ? 'red' : theme['color-primary-400'],
        }}
      />
      <Layout style={{ flex: 1, padding: 10 }}>
        <Layout style={{ paddingBottom: 100 }}>
          <Text category="h6">{title}</Text>
        </Layout>
        <Text
          category="h6"
          style={{ position: 'absolute', left: 10, bottom: 10 }}
        >{`$ ${price}`}</Text>
        <FAB
          iconName="plus-outline"
          onPress={() => {
            navigation.navigate('Detail');
          }}
          style={{ position: 'absolute', right: 10, bottom: 10 }}
        />
      </Layout>
    </Layout>
  );
};
