import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import{useNavigation} from '@react-navigation/native'
import { IoAddCircle } from 'react-icons/io5';

 export default function brochure() {
 const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Produtos cadastrados</Text>
      <TouchableOpacity
   style={styles.ButtomCadastro}
 onPress={() => navigation.navigate('CadastroProduct')}>
 </TouchableOpacity>
 <Text><IoAddCircle/>a</Text>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
    backgroundColor: '#8B4513'
},
ButtomCadastro:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    justifyContent:'center',
    alignItems:'center',
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius:50,
    position:'absolute',
 left:320,
top:480 
}
})
