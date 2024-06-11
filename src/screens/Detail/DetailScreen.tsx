import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch } from '../../store/hooks/hooks';
import { CustomIcon } from '../../common/CustomIcon/CustomIcon';

export const DetailScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  return (
    <Layout
      style={{
        flex: 1,
        paddingTop: top,
        paddingHorizontal: 30,
      }}
    >
      <Layout style={{ paddingTop: 30 * 0.35 }}>
        <Text category="h1">Detail</Text>
      </Layout>
      <Layout style={{ marginTop: 20, gap: 20 }}>{/*SOMETHING */}</Layout>

      <Layout style={{ paddingVertical: 20 }} />
    </Layout>
  );
};
