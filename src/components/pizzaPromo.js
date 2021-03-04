 import React from 'react';
 import { View, Text, Image, StyleSheet } from 'react-native';
 
 export default function pizzaPromo(props) {
  return (
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>
                Promoção do dia:
        </Text>
        <View style={styles.promo}>
            <Image
                source={props.img}
                style={styles.promoImg}
            />    
            <View style={{flexDirection: 'column', marginHorizontal: '5%'}}>
                <Text>
                    {props.name}
                </Text>
                <Text style={{color: '#E6321E', textDecorationLine: "line-through", textDecorationStyle:"solid"}}>
                    De: {props.preco}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Para: {props.precoPromo}
                </Text>
            </View>            
        </View>
    </View> 
   );
 }


 const styles = StyleSheet.create ({
    promo:{
        marginLeft: '2%',
        flexDirection: 'row',
    },
    title:{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16, 
        marginVertical: '4%',
        marginLeft: '2%',      
    },
    promoImg:{
        width: 95,
        height: 70
    }    

});