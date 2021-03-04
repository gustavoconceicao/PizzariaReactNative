import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text} from 'react-native';

import Home from '../pizzaria-app/src/screens/home';
import Detalhes from '../pizzaria-app/src/screens/shoppingCart';
import Cardapio from '../pizzaria-app/src/screens/cardapio';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import {Provider} from "react-redux";
import store from "./src/store";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>    
    <NavigationContainer>      
        <Tab.Navigator
              tabBarOptions = {{
                activeBackgroundColor: '#33FF6C',
                inactiveBackgroundColor: '#A0FAC0',

                labelStyle:{
                  color: 'black',   
                  fontWeight: 'bold',              
                }
             }}
        >
            <Tab.Screen 
              name="Home"
              component={Home}
              options= {{
                tabBarLabel: "Pagina inicial",
                tabBarIcon: ({}) => (
                  <AntDesign name="home" size={24} color="black" />
                ),
              }}
              />
            <Tab.Screen
             name="Detalhes"
             component={Cardapio}
             options= {{
               tabBarLabel: "Cardapio",
               tabBarIcon: ({}) => (
                <SimpleLineIcons name="book-open" size={24} color="black" />
               )
             }}
             />
            <Tab.Screen
             name="Carrinho"
             component={Detalhes}
             options= {{
               tabBarLabel: "Carrinho",
               tabBarIcon: ({}) => (
                <AntDesign name="shoppingcart" size={24} color="black" />
               )
             }}
             />

             
            <Tab.Screen
             name="Ajustes"
             component={Detalhes}
             options= {{
               tabBarLabel: "Configurações",
               tabBarIcon: ({}) => (
                <AntDesign name="setting" size={24} color="black" />
               )
             }}
             />

        </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


