import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import requestStoragePermission from './src/components/Permission';
//Componentes
import Splash from './src/screens/Splash';
import MyTabs from './src/components/TabBar';

const Stack = createStackNavigator();
const App = () => {
  useEffect(() => {
    requestStoragePermission()
  }, [])
  
  return (
    <PaperProvider>
      <MyTabs/>
    </PaperProvider>
  );
};

export default App;
