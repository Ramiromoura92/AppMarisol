import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Button, StyleSheet } from 'react-native';
//import * as AsyncStorage from '../../../AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CadastroProduct = ({ navigation }) => {
  const [codigop, setCodigop] = useState('');
  const [lote, setLote] = useState('');
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [dataent, setDataentrada] = useState('');

  const saveData = async () => {
    try {
      const newItem = { codigop, lote, nome, quantidade, dataent };
      const storedData = await AsyncStorage.getItem('storedData');
      const data = storedData ? JSON.parse(storedData) : [];
      const updatedData = [...data, newItem];
      await AsyncStorage.setItem('storedData', JSON.stringify(updatedData));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Código do Produto"
        value={codigop}
        onChangeText={setCodigop}
      />
      <TextInput
        style={styles.input}
        placeholder="Lote"
        value={lote}
        onChangeText={setLote}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Entrada"
        value={dataent}
        onChangeText={setDataentrada}
      />
      <Button title="Salvar" onPress={saveData} />
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

export default CadastroProduct;