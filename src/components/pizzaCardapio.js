import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Icon} from 'react-native';


export default function pizzaCardapio({item, addItemCart}) {
 return (
   <View style = {styles.container}>
     <Image 
        source = {item.img}
        style = {styles.img}
     />
     <View style={{flexDirection: 'column', marginHorizontal: '5%'}}>
        <Text style={styles.title}> {item.nome} </Text>
        <Text> R$: {item.preco} </Text>        
      </View> 
      <View style={{justifyContent: 'flex-end'}}>
        <TouchableOpacity style={{}} onPress={() => addItemCart(item)}>
            <Image
                  source= {require("../assets/banner.jpg")}  
                  style={styles.icon}        
            />
            <Text>ADD</Text>

          </TouchableOpacity>
      </View> 

   </View>
  );
}

const styles = StyleSheet.create ({
  title:{
    fontWeight: 'bold',
    fontSize: 16
  },
  container:{
    flexDirection: 'row',
    marginHorizontal: '3%',
    marginBottom: '3%',
    justifyContent: 'space-around'
    
  },
  img:{
    width: 80,
    height: 60
  },
  icon:{
    height: 30,
    width: 30
  }
})