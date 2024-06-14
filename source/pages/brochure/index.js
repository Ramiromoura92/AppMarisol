import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Brochure = ({ navigation }) => {
  const [data, setData] = useState([]);

  //Executa o código após a renderização dos componentes ou mudança de variáveis.
  useEffect(() => {

    //addListener -> Registra um ouvinte que sera chamado sempre que um evento acontecer.
    //focus -> Evento que indica que o ouvinte sera acionado quando o componente atual receber foco na navegação.
    //loadData será chamado sempre que o componente for focado.
    
    const unsubscribe = navigation.addListener('focus', () => {
      loadData();
    });

    return unsubscribe;//função de limpeza/ remove o ouvinte para evitar problemas de memória 
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
  const Logout = () => {
  
      navigation.navigate('Login'); 

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de produtos</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          // console.log('Imagem do item:', item.image),
          <View style={styles.item}>

            <Text style={styles.itemText}>Código: {item.codigop}</Text>
            <Text style={styles.itemText}>Lote: {item.lote}</Text>
            <Text style={styles.itemText}>Nome: {item.nome}</Text>
            <Text style={styles.itemText}>Quantidade: {item.quantidade}</Text>
            <Text style={styles.itemText}>Data de Entrada: {item.dataent}</Text>
            {item.image && (<Image source={{ uri: item.image }} style={styles.itemImage} />)}

            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(index)}>
              <Text style={styles.deleteButtonText}>Deletar</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CadastroProduct')}
      >
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={Logout}>

        <Icon name="logout" size={30} color="white" />

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    marginTop:30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: '#D2691E',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
    marginTop: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 100, 
    backgroundColor: '#D2691E',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logoutButton: {
    position:'relative',
    right: 1,
    bottom: 76,
    backgroundColor: '#D2691E',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default Brochure;
