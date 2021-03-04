import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import {useSelector} from "react-redux"
import PizzaCardapio from "../../components/pizzaCardapio"
import cartQuantitySelector from "../../store/ducks/shoppingCart"

export default function details() {
    const tamanho = useSelector((state)=> state.shoppingCart.length);
    const pizzas = useSelector((state) => state.shoppingCart)
 return (  
   <View style={styles.container}>
       <Text>
           {pizzas2}
       </Text>
        <FlatList
            data={pizzas}
            keyExtractor={(item) => item.id}                    
            renderItem={({item}) => (
                <PizzaCardapio
                    item = {item}                                 
                />
            )}              
         />             
   </View>
  );
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginVertical: '5%',
        
    }    
});