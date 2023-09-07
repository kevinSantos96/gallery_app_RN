import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import { CommonActions } from '@react-navigation/native';

export const SplashScreen = ({navigation}) => {
  function handlePress(){
    navigation.dispatch(
      CommonActions.reset({
        index:0,
        routes:[
          {name:'TabNavigator'}
        ]
      })
    )
  }
  return (
      <View style={styles.content}>
        <Image style={styles.Image} source={require('../assets/BAC_Credomatic.png')}/>
        <View style={{marginVertical:40,width:'50%'}}>
          <Button title='Entrar' onPress={handlePress}/>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content:{
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  },
  Image:{
    width:"60%",
    height:'50%'
  },
  btnOpen:{
       backgroundColor: '#1075BB',
       padding: 15,
       flexDirection:'row',
       borderRadius:5,
       color:'#fff',
       fontSize:14,
       fontWeight:'600',
       textAlign:'center',
  }
});

