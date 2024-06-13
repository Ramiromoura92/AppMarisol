import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      const user = users.find(user => user.matricula === matricula && user.senha === senha);

      if (user) {
        Alert.alert('Login bem-sucedido!');
        navigation.navigate('brochure'); // Redirecionar para a página de brochura após login bem-sucedido
      } else {
        Alert.alert('Matrícula ou senha incorreta');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro ao fazer login');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Login" onPress={login} />
      <Button title="Cadastre-se" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
