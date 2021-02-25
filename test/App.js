import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, Pressable, ActivityIndicator} from 'react-native';

export default function App() {

  /*const dim = Dimensions.get('main');
  const width = dim.width;
  const height = dim.height;*/

  /*let {
    height,
    width,
  } = Dimensions.get('window');
  */

 const createButtonAlert = () =>{
   return Alert.alert('Bonjour promo-4')
 }

  return (

    <ScrollView style={styles.container}>
     
      <View style={styles.containerTextes}>
      <Text style={styles.texte1}>Test30</Text>
      <Text style={styles.texte2}>Test-centré</Text>
      <Text style={styles.texte3}>TestGras</Text>
      </View>

      <Image source={{uri:'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}}
      style={{ width:100, height:100 }}/>

      <Image source={require("./imgs/logo_1.png")} 
	      style={{ width: 100, height: 100 }} />

      <Pressable  onPress={createButtonAlert()} style={{backgroundColor:'#fff'}}>
        <Text>Cliquez moi!</Text>
      </Pressable>

      <ActivityIndicator size="large" color="#fff" />

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#3F3FBF',
    marginHorizontal: 20,
  },

  containerTextes:{
   backgroundColor:'#fff',
  },

  texte1:{
    marginTop:80,
    marginBottom:80,
    fontSize:30,
  },

  texte2:{
    marginTop:80,
    marginBottom:80,
    textAlign:'center',
  },

  texte3:{
    marginTop:80,
    marginBottom:80,
    fontWeight:'bold'
  },

});
