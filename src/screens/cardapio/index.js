import React from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import PizzaCardapio from '../../components/pizzaCardapio'
import Pizzas from "../../pizzas/mockPizzas"
import {addItem} from "../../store/ducks/shoppingCart"
import { useSelector, useDispatch } from 'react-redux'

export default function cardapio() {

const dispatch = useDispatch()

function addItemCart (item){   
    dispatch(addItem(item))
}
 return (
   <View style={{backgroundColor: '#fff', flex:1}}>
     <View style={styles.container}>
          <FlatList
            data={Pizzas}
            keyExtractor={(item) => item.id}                    
            renderItem={({item}) => (
                <PizzaCardapio
                    item = {item}
                    addItemCart = {addItemCart}                   
                />
            )}              
           />             
      </View>
   </View>

  );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginVertical: '12%',       
    }    
});
