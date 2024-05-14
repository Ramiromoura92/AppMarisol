import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function CadastroProduct() {
 
  return (
    <View style={styles.container}>
      <Text style={styles.cabecalho}>Cadastro de produtos</Text>
      
      <Text style={styles.text}>Nome</Text>
      <TextInput style={styles.boxText} placeholder='Nome do produto'></TextInput>

      <Text style={styles.text}>Lote</Text>
      <TextInput style={styles.boxText} placeholder='Insira lote do produto'></TextInput>
      
      <Text style={styles.text}>Código de barra</Text>
      <TextInput style={styles.boxText} placeholder='insira o código de barra do produto'></TextInput>
      
      <Text style={styles.text}>Quantidade</Text>
      <TextInput style={styles.boxText} placeholder='Quantidade'></TextInput>
     
      <Text style={styles.text}>Data de chegada</Text>
      <TextInput style={styles.boxText} placeholder='Insira a data'></TextInput>
      
      <Text style={styles.text}>Data de fabricação</Text>
      <TextInput style={styles.boxText} placeholder='Insira a data de fabricação do produto'></TextInput>
      
      <Text style={styles.text}>Data de validade</Text>
      <TextInput style={styles.boxText} placeholder='Data de valdiade do produto'></TextInput>
      
      <Text style={styles.text}></Text>
      <TextInput style={styles.boxText} placeholder='A'></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
})