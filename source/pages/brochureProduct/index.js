import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const CadastroProduct = ({ navigation }) => {
  const [codigop, setCodigop] = useState('');
  const [lote, setLote] = useState('');
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [dataent, setDataentrada] = useState('');
  const [image, setImage] = useState(null);

  const saveData = async () => {
    try {
      const newItem = { codigop, lote, nome, quantidade, dataent, image };
      const storedData = await AsyncStorage.getItem('storedData');
      const data = storedData ? JSON.parse(storedData) : []; //verifica se existe uma string válida ou não nula. Se existir então é usado um array vazio como padrão
      const updatedData = [...data, newItem];
      await AsyncStorage.setItem('storedData', JSON.stringify(updatedData));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera is required!');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64:true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.cabecalho}>Novo produto</Text>
      </View>
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
      <View style={styles.imagePicker}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        
        <TouchableOpacity style={styles.botao} onPress={pickImage}>
        <Text style={styles.buttonText}>Galeria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={takePhoto}>
        <Text style={styles.buttonText}>Tirar foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={saveData}>
          <Text style={styles.buttonText} padding={12} paddingHorizontal={15}>Salvar</Text>
        </TouchableOpacity>

      </View>
      
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  cabecalho: {
    marginTop: '1%',
    marginBottom: '5%',
    paddingStart: '12%',
    marginHorizontal: '20%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 12,
    alignContent: 'center',
    marginTop: '10%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  botao: {
    backgroundColor: '#D2691E',
    paddingVertical: 10,
    marginTop: 5,
    borderRadius: 30,
    width: '80%',
    paddingVertical: 7,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  imagePicker: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default CadastroProduct;
