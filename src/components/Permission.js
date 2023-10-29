import React,{useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native'
import {check,request,PERMISSIONS,RESULTS} from 'react-native-permissions';


//React-native version

export const chekMultiplePermission = async()=>{
  if (Platform.OS ==='android' && Platform.Version === 33){
    const granted = await PermissionsAndroid.requestMultiple([
      android.permission.READ_MEDIA_IMAGES,
      android.permission.CAMERA,
      android.permission.READ_MEDIA_AUDIO,
      android.permission.READ_MEDIA_VIDEO
    ])

    if(granted[android.permission.READ_MEDIA_IMAGES] !=="granted" || granted[android.permission.CAMERA] !=="granted"||
     granted[android.permission.READ_MEDIA_AUDIO] !=="granted" || granted[android.permission.READ_MEDIA_VIDEO] !=="granted")
     {
     throw new Error("Requiere permission not granted")
      //console.log("Requiere permission not granted")
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
  if (Platform.OS==='android'){
    try {
       await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      )
    } catch (error) {
      console.warn(err);
    }
  }
 
}

//Libreria Permission
export const PermissionMediaImages =()=>{
    check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES).then((result)=>{
      switch (result){
        case RESULTS.GRANTED:
          console.log('Permiso a fotos concedido')
          break;
        case RESULTS.UNAVAILABLE:
          console.log('Permiso no disponible en este dispositivo/plataforma.');
              break;
        case RESULTS.DENIED:
          request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES)
                .then((requestResult) => {
                  if (requestResult === RESULTS.GRANTED) {
                    console.log('Permiso concedido después de la solicitud.');
                  }
                });
              break;
        case RESULTS.BLOCKED:
          console.log('Permiso bloqueado. El usuario debe habilitarlo manualmente en la configuración de la aplicación.');
              break;
      }
    })
}
  

export const PermissionMediaVideo =()=>{
    check(PERMISSIONS.ANDROID.READ_MEDIA_VIDEO).then((result)=>{
      switch (result){
        case RESULTS.GRANTED:
          console.log('Permiso a videos concedido')
          break;
        case RESULTS.UNAVAILABLE:
          console.log('Permiso no disponible en este dispositivo/plataforma.');
              break;
        case RESULTS.DENIED:
          request(PERMISSIONS.ANDROID.READ_MEDIA_VIDEO)
                .then((requestResult) => {
                  if (requestResult === RESULTS.GRANTED) {
                    console.log('Permiso concedido después de la solicitud.');
                  }
                });
              break;
        case RESULTS.BLOCKED:
          console.log('Permiso bloqueado. El usuario debe habilitarlo manualmente en la configuración de la aplicación.');
              break;
      }
    })
}

export const PermissionMediaAudio =()=>{
    check(PERMISSIONS.ANDROID.READ_MEDIA_AUDIO).then((result)=>{
      switch (result){
        case RESULTS.GRANTED:
          console.log('Permiso a audio concedido')
          break;
        case RESULTS.UNAVAILABLE:
          console.log('Permiso no disponible en este dispositivo/plataforma.');
              break;
        case RESULTS.DENIED:
          request(PERMISSIONS.ANDROID.READ_MEDIA_AUDIO)
                .then((requestResult) => {
                  if (requestResult === RESULTS.GRANTED) {
                    console.log('Permiso concedido después de la solicitud.');
                  }
                });
              break;
        case RESULTS.BLOCKED:
          console.log('Permiso bloqueado. El usuario debe habilitarlo manualmente en la configuración de la aplicación.');
              break;
      }
    })

}
// export const PermissionsWriteStorage= async()=>{
//   try {
//     const gramtedStorage = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
//       {
//         title: 'Gallery Bac solicita permisos de almacenamiento',
//         message: 'Necesitamos acceder a tu almacenamiento para mostrar las imágenes.',
//         buttonNeutral: 'Preguntar luego',
//         buttonNegative: 'Cancelar',
//         buttonPositive: 'OK',
//       }
//     )
//     if (gramtedStorage === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('Permiso almacenamiento concedido');
//     } else {
//       console.log('Permiso almacenamiento denegado');
//     }
//   } catch (error) {
//     console.warn(err);
//   }
// }