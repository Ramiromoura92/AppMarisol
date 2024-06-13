import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Brochure = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadData();
    });

    return unsubscribe;
  }, [navigation]);

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('storedData');
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (index) => {
    try {
      const updatedData = data.filter((_, i) => i !== index);
      await AsyncStorage.setItem('storedData', JSON.stringify(updatedData));
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Cadastrar Produto" onPress={() => navigation.navigate('CadastroProduct')} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text>Código: {item.codigop}</Text>
            <Text>Lote: {item.lote}</Text>
            <Text>Nome: {item.nome}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text>Data de Entrada: {item.dataent}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(index)}>
              <Text style={styles.deleteButtonText}>Deletar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Brochure;
