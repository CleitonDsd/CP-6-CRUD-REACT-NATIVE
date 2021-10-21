import React, {
  useEffect,
  useState
} from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { View, Button} from 'react-native';

import auth from '@react-native-firebase/auth';
import Login from './src/components/screens/Login';
import Cadastro from './src/components/screens/Cadastro';
import AreaRestrita from './src/components/screens/AreaRestrita';
import { UserProvider } from './src/context/UserContext'

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen 
            name='Login' 
            component={ Login } 
            options={ { title: 'Tela de Login' } } />

          <Stack.Screen 
            name='Cadastro' 
            component={ Cadastro } 
            options={ { title: 'Tela de Cadastro' } } />

          <Stack.Screen 
            name='AreaRestrita' 
            component={ AreaRestrita } 
            options={ { title: 'Seja Bem-Vindo(a)' } } />


        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
  
}

export default App
