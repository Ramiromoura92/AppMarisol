import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'
export default function Login() {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.cabecalho}>
        <Text style={styles.titulo}>Entre em sua conta</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={500} style={styles.container2}>
        <Text style={styles.text}>Matricula</Text>
        <TextInput style={styles.boxText} placeholder='Digite sua matricula'
        />
        
        <Text style={styles.text}>Senha</Text>
        <TextInput secureTextEntry={true} style={styles.boxText} placeholder='Digite a sua senha'
        />

        <TouchableOpacity style={styles.botao}
        onPress={ () => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}
        onPress={ () => navigation.navigate('register')}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#8B4513'
  },
  cabecalho:{
    marginTop: '20%',
    marginBottom: '12%',
    paddingStart: '8%'
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
  
  },
  container2:{
    backgroundColor:'#A0522D',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart:'5%',
    paddingEnd:'5%',
  },
  text:{
    fontSize: 15,
    marginTop:28,
  },
  
  boxText:{
    borderBottomWidth: 1,
    height:40,
    marginBottom:12,
    fontSize:15,
  },
  botao:{
    backgroundColor:'#FFDEAD',
    paddingVertical:8,
    marginTop:14,
    borderRadius:30,
    width:'100%',
    paddingVertical: 10,
    alignItems:'center',
  },
  buttonText:{
    fontWeight:'bold',
    color: '#8B4513'
  }
}
)
