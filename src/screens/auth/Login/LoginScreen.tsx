import React, { useState } from 'react';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { CustomIcon } from '../../../common/CustomIcon/CustomIcon';

export const LoginScreen = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

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
        onPress={() => {
          console.log('HOLA');
        }}
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
