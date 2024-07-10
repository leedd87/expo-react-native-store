import React, { useCallback, useEffect, useState } from 'react';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { CustomIcon } from '../../../common/CustomIcon/CustomIcon';
import { useLogInMutation } from '../../../store/features/Auth/authApiSlice';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { setLogIn } from '../../../store/features/Auth/authSlice';
import { styles } from './styles';
import { commonStyles } from '../../../common/commonStyles';

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
    //TODO isSuccess?():()
    console.log(result);
    dispatch(setLogIn(result));
  };

  return (
    <Layout style={styles.container}>
      <Layout style={[commonStyles.layoutContainer, { paddingHorizontal: 0 }]}>
        <Text category="h1">Login</Text>
      </Layout>
      <Layout style={styles.inputContainer}>
        <Input
          placeholder="email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(email) => setForm({ ...form, email })}
          accessoryLeft={<CustomIcon name="email-outline" />}
        />
        <Input
          placeholder="password"
          autoCapitalize="none"
          value={form.password}
          onChangeText={(password) => setForm({ ...form, password })}
          secureTextEntry
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
