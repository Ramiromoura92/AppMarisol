import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable'

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
        navigation.navigate('Brochure'); // Redirecionar para a página de brochura após login bem-sucedido
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
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.cabecalho}>
      <View>
        <Text style={styles.cabecalho}>Login</Text>        
      </View>
    </Animatable.View>
    <Animatable.View animation="fadeInUp" delay={500}>
        
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
      <TouchableOpacity style={styles.botao} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Register')}>
      <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  cabecalho:{
    marginTop: '1%',
      marginBottom: '5%',
      paddingStart: '12%',
      marginHorizontal: '15%',
      fontSize:20,
      fontWeight:'bold',
  },
  titulo:{
    fontSize:20,
    fontWeight:'bold',
  },
  container: {
    flex:1,
      padding: 12,
      alignContent:'center',
      marginTop: '25%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:30,
    
  },
  botao:{
    backgroundColor:'#D2691E',
    paddingVertical:10,
    marginTop:5,
    borderRadius:30,
    width:'100%',
    paddingVertical: 7,
    alignItems:'center',
},
buttonText:{
  fontWeight:'bold',
  color: 'white',
  fontSize:18
}
});

export default LoginScreen;