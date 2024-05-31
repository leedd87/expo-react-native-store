import React, { useCallback, useEffect, useState } from 'react';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { CustomIcon } from '../../../common/CustomIcon/CustomIcon';
import { useLogInMutation } from '../../../store/features/Auth/authApiSlice';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { setLogIn } from '../../../store/features/Auth/authSlice';

export const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [logIn, { isSuccess, data }] = useLogInMutation();

  const onPressLogin = async () => {
    const result = await logIn({
      email: form.email,
      password: form.password,
    }).unwrap();
    console.log(result);
    dispatch(setLogIn(result));
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log('EL LOGIN FUE SUCCESS');
  //   }
  // }, [isSuccess]);

  // useEffect(() => {
  //   console.log('RESULTADOS POST LOGIN', data);
  // }, [data]);

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
      }}
    >
      <Layout style={{ paddingTop: 30 * 0.35 }}>
        <Text category="h1">Login</Text>
      </Layout>
      <Layout style={{ marginTop: 20 }}>
        <Input
          placeholder="email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(email) => setForm({ ...form, email })}
          style={{ marginBottom: 10 }}
          accessoryLeft={<CustomIcon name="email-outline" />}
        />
        <Input
          placeholder="password"
          autoCapitalize="none"
          value={form.password}
          onChangeText={(password) => setForm({ ...form, password })}
          secureTextEntry
          style={{ marginBottom: 10 }}
          accessoryLeft={<CustomIcon name="lock-outline" />}
        />
      </Layout>

      <Button
        onPress={onPressLogin}
        accessoryRight={<CustomIcon name="arrow-forward-outline" white />}
      >
        Ingresar
      </Button>
      <Layout style={{ paddingVertical: 20 }} />
      <Layout>
        <Text>{JSON.stringify(form, null, 2)}</Text>
      </Layout>
    </Layout>
  );
};
