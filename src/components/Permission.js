import React from "react";
import {PermissionsAndroid} from 'react-native'

async function requestStoragePermission(){
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
        console.log('Permiso concedido');
      } else {
        console.log('Permiso denegado');
       
      }

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
        console.log('Permiso concedido');
      } else {
        console.log('Permiso denegado');
      }

    } catch (err) {
      console.warn(err);
    }
}

export default requestStoragePermission;