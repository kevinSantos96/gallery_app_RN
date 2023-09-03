import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
//Componentes
import Splash from './src/screens/Splash';
import GalleryScreen from './src/screens/Gallery';
import MyTabs from './src/components/TabBar';

const Stack = createStackNavigator();
const App = () => {
  return (
    <PaperProvider>
     {/*  <NavigationContainer>
        <Stack.Navigator
          initialRouteName="splash"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#002E85',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="splash"
            component={Splash}
            options={{animationEnabled: false, header: () => null}}
          />
          <Stack.Screen
            name="Galeria"
            component={GalleryScreen}
            options={{animationEnabled: true, title: 'Galeria'}}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
      <MyTabs/>
    </PaperProvider>
  );
};

export default App;
