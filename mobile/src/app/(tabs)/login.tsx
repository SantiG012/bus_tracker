import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setErrorMessage('Por favor, ingresa tus credenciales');
    } else {
      setErrorMessage('request to api');
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="cloud-done" style={styles.headerImage} />}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Ingresar" onPress={handleLogin} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center'
  },
});
