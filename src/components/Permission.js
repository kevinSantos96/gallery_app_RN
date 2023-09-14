import React,{useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native'
import {check,PERMISSIONS,RESULTS,request, requestMultiple} from 'react-native-permissions';


//React-native version

export const chekMultiplePermission = async()=>{
  if (Platform.OS ==='android' && Platform.Version < 33){
    const granted = await PermissionsAndroid.requestMultiple([
      android.permission.READ_EXTERNAL_STORAGE,
      android.permission.READ_MEDIA_IMAGES,
      android.permission.WRITE_EXTERNAL_STORAGE,
      android.permission.CAMERA
    ])

    if(granted[android.permission.READ_EXTERNAL_STORAGE] !=="granted" || granted[android.permission.READ_MEDIA_IMAGES] !=="granted" || 
    granted[android.permission.WRITE_EXTERNAL_STORAGE] !=="granted" || granted[android.permission.CAMERA] !=="granted" ){
      throw new Error("Requiere permission not granted")
    } 
  }
}

export const PermissonCamera= async()=>{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Gallery Bac solicita permisos a la camara del dispositivo',
        message: '¿Permitir que Gallery Bac acceda a la camara?',
        buttonNeutral: 'Preguntar luego',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permiso camara concedido');
      return true
    } else {
      console.log('Permiso camara denegado');
      return false
    }
  } catch (error) {
    console.warn(err);
  }
}

export const PermissonReadStorage = async()=>{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Gallery Bac solicita permisos de almacenamiento',
        message: 'Necesitamos acceder a tu almacenamiento para mostrar las imágenes.',
        buttonNeutral: 'Preguntar luego',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      }
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permiso a leer fotos concedido');
    } else {
      console.log('Permiso a leer fotos denegado');
     
    }
  } catch (error) {
    console.warn(err);
  } 
}

export const PermissionsWriteStorage= async()=>{
  try {
    const gramtedStorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Gallery Bac solicita permisos de almacenamiento',
        message: 'Necesitamos acceder a tu almacenamiento para mostrar las imágenes.',
        buttonNeutral: 'Preguntar luego',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      }
    )
    if (gramtedStorage === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permiso almacenamiento concedido');
    } else {
      console.log('Permiso almacenamiento denegado');
    }
  } catch (error) {
    console.warn(err);
  }
}
