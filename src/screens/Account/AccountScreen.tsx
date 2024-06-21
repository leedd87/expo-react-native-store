import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { CustomIcon } from '../../common/CustomIcon/CustomIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch } from '../../store/hooks/hooks';
import { logOut } from '../../store/features/Auth/authSlice';

export const AccountScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const cerrarSesion = () => {
    dispatch(logOut());
  };
  return (
    <Layout
      style={{
        flex: 1,
        paddingTop: top,
        paddingHorizontal: 30,
      }}
    >
      <Layout style={{ paddingTop: 30 * 0.35 }}>
        <Text category="h1">Account</Text>
      </Layout>
      <Layout style={{ marginTop: 20 }}>
        <Button
          onPress={cerrarSesion}
          accessoryRight={<CustomIcon name="arrow-forward-outline" white />}
        >
          Log out
        </Button>
      </Layout>

      <Layout style={{ paddingVertical: 20 }} />
    </Layout>
  );
};
