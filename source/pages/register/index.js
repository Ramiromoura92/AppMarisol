import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, } from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'


export default function register() {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.topoPagina}>
        <Text style={styles.titulo}>Cadastro</Text>
      </Animatable.View>
    
    <Animatable.View animation="fadeInUp" delay={500} style={styles.container2}>
      <ScrollView>
      <Text style={styles.text}>Nome Completo</Text>
      <TextInput style={styles.textBox} placeholder='Digite seu nome'/>

      <Text style={styles.text}>CPF</Text>
      <TextInput style={styles.textBox} placeholder='Digite o seu CPF'/>

      <Text style={styles.text}>E-mail</Text>
      <TextInput style={styles.textBox} placeholder='digite o seu e-mail'/>

      <Text style={styles.text}>Senha</Text>
      <TextInput style={styles.textBox} placeholder='digite a sua senha'/>

      <Text style={styles.text}>Confirmar senha</Text>
      <TextInput style={styles.textBox} placeholder='Digite novamente a senha'/>

      <Text style={styles.text}>CEP</Text>
      <TextInput style={styles.textBox} placeholder='Digite o seu CEP'/>

      <Text style={styles.text}>Endereço</Text>
      <TextInput style={styles.textBox} placeholder='Digite o seu endereço'/>

      <Text style={styles.text}>Telefone</Text>
      <TextInput style={styles.textBox} placeholder='Digite o telefone'/>
      
      <Text style={styles.text}>Celular</Text>
      <TextInput style={styles.textBox} placeholder='Digite o celular'/>
      
      <TouchableOpacity style={styles.botao}
      onPress={ () => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Confirmar Cadastro</Text>
      </TouchableOpacity>
      </ScrollView>
    </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#8B4513',
    overflowY:'scroll'
  },
  topoPagina:{
    marginTop: '10%',
    marginBottom: '6%',
    paddingStart: '5%'
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold'
  },
  container2:{
    backgroundColor:'#A0522D',
    flex:1,
    borderTopLeftRadius:25,
  borderTopRightRadius:25,
  paddingStart:'5%',
  paddingEnd:'5%',
  overflowY:'scroll'
  },
  text:{
    fontSize:15,
    marginTop:15
  },
  textBox:{
    borderBottomWidth:1,
    height:40,
    fontSize:15
  },
  botao:{
    backgroundColor:'#FFDEAD',
    paddingVertical:8,
    marginTop:14,
    borderRadius:30,
    width:'100%',
    alignItems:'center'
  },
  buttonText:{
    fontWeight: 'bold',
    color: '#8B4513'
  }
});