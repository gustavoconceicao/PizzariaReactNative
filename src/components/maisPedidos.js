import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default function maisPedidos(props) {
 return (    
    <View style={styles.container}>
        <Image
              source= {props.img}
              style={styles.img}
          />
          <Text style={styles.nome}>
              {props.name}
          </Text>

        <View style={{opacity: 0.4}}>
            <Text style={styles.preco}>
                {props.preco}
            </Text>
        </View>

    </View>      
  );
}

const styles = StyleSheet.create ({
  container:{
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,    
    margin: 8
    
  },
  img:{
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  nome:{
    fontSize: 16,
  },
  preco:{
      fontSize: 14,
  },
})