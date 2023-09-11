import React from "react";
import {PermissionsAndroid} from 'react-native'


export const PermissonCamera= async()=>{
  try {
    const grantedCam = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Permiso de camara',
        message: 'Necesitamos acceder a la camara del dispositivo.',
        buttonNeutral: 'Preguntar luego',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      }
    )
    if (grantedCam === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permiso camara concedido');
    } else {
      console.log('Permiso camara denegado');
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
        title: 'Permiso de almacenamiento',
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
        title: 'Permiso de alamacenamiento',
        message: 'Necesitamos guardar archivos.',
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

