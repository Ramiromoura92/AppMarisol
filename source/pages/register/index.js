import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert,TouchableOpacity,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const RegisterScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const register = async () => {
    try {
      const newUser = { nome, matricula, email, senha };
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      const updatedUsers = [...users, newUser];
      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
      Alert.alert('Cadastro realizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.cabecalho}>Novo usuário</Text>        
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.botao} onPress={register}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
    cabecalho:{
      marginTop: '1%',
      marginBottom: '5%',
      paddingStart: '12%',
      marginHorizontal: '20%',
      fontSize:20,
      fontWeight:'bold',
    },
    titulo:{
      fontSize:20,
      fontWeight:'bold',
      alignItems:'center',
      
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
  },

});

export default RegisterScreen;
