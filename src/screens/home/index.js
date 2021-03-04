import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/header'
import MaisPedidos from '../../components/maisPedidos'
import PizzaPromo from '../../components/pizzaPromo'
import Pizzas from "../../pizzas/mockPizzas"

export default function home() {
 return (
     <>
   <View style={styles.container}>
     <Header/>
     <PizzaPromo name="Pizza de mussarela" preco="39,99" precoPromo="19,99" img= {require("../../assets/mussarela.jpg")}/>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}}></View>
                <Text style={[styles.title]}>As mais pedidos</Text>            
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}}></View>
        </View>
    <View style = {{ justifyContent: 'flex-end'}}>
        <ScrollView>
                <FlatList
                    data={Pizzas}
                    keyExtractor={(item) => item.id}
                    horizontal= {true}
                    renderItem={({item}) => (
                        <MaisPedidos
                            name = {item.nome}
                            preco = {item.preco}
                            img = {item.img}
                        />
                    )}              
                />                
        </ScrollView>
    </View>
    </View>   
    </>
  );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,        
        marginTop: '5%',         
        backgroundColor: 'white'    
    },
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