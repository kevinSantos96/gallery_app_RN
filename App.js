import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {PermissonCamera,PermissonReadStorage,PermissionsWriteStorage, chekMultiplePermission} from './src/components/Permission';
//Componentes

import MyTabs from './src/components/TabBar';
import {SplashScreen} from'./src/screens/Splash';

const Stack = createStackNavigator();
const App = () => {
 function getPermissons(){
      
      PermissionsWriteStorage();
      PermissonReadStorage();
      PermissonCamera();
 }

  useEffect(() => {
    getPermissons()
    //chekMultiplePermission()
  },[])
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='PantallaInicial' component={SplashScreen} options={{header:()=>null}}/>
        <Stack.Screen name='TabNavigator' component={MyTabs}  options={{header:()=>null}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
