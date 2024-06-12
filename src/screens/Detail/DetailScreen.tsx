import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch } from '../../store/hooks/hooks';
import { CustomIcon } from '../../common/CustomIcon/CustomIcon';
import { FAB } from '../../common/FAB/FAB';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/MainStackNavigator/MainStackNavigator';

export const DetailScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute();
  return (
    <Layout
      style={{
        paddingHorizontal: 30,
        flex: 1,
        paddingTop: top,
      }}
    >
      <Layout
        style={{
          paddingTop: 30 * 0.35,

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text category="h1">Detail</Text>
      </Layout>

      <FAB
        iconName="arrow-back"
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', top: top, left: 20 }}
      />
    </Layout>
  );
};
