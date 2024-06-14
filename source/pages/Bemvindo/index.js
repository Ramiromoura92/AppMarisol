import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function Bemvindo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.Logo}>
        <Animatable.Image 
        animation="flipInY"
        source={require('../../assets/Logo-Marisol.png')}
        style={{ width:'100%', resizeMode:'center'}}
        />
      </View>

    <Animatable.View delay={500} animation="fadeInUp" style={styles.caixaTexto}>

        <Text style={styles.text}>Bem vindo(a){'\n'}</Text>
        
        <TouchableOpacity style={styles.button}
        onPress={ () => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Animatable.View>

    
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#D2691E'
    },
    Logo:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    caixaTexto:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:'5%'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:40,
        marginTop:20,
        marginHorizontal: '32%',
    },
    button:{
        backgroundColor:'#D2691E',
        position:'absolute',
        alignSelf:'center',
        bottom:'30%',
        borderRadius:30,
        width:'50%',
        paddingVertical: 10,
        alignItems:'center' 
    },
    buttonText:{
        fontSize:17,
        color: 'white',
        fontWeight: 'bold',
    }
  });