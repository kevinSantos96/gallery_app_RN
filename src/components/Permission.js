import React,{useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native'
import {check,PERMISSIONS,RESULTS,request, requestMultiple} from 'react-native-permissions';

//react-native librery

function getPermissionsREAD_STORAGE(){
  
  check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
  .then((result)=>{
      switch (result){
        case RESULTS.UNAVAILABLE:
            console.log('Esta funcion no esta disponible en este dispostivo.')
          break;
        case RESULTS.DENIED:
          console.log('El permiso no ha sido solicitado/está denegado pero es solicitable.')
        break;
        case RESULTS.LIMITED:
          console.log('El permiso es limitado: algunas acciones son posibles.')
          break;
        case RESULTS.GRANTED:
          console.log('Se concede el permiso.')
          break;
          case RESULTS.BLOCKED:
            console.log('El permiso es denegado y ya no es solicitable.')
          break;
      }

  })
  .catch((err)=>{console.log(err)})
}
function getPermissionsWRITE_STORAGE(){
  check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
  .then((result)=>{
      switch (result){
        case RESULTS.UNAVAILABLE:
            console.log('Esta funcion no esta disponible en este dispostivo.')
          break;
        case RESULTS.DENIED:
          console.log('El permiso no ha sido solicitado/está denegado pero es solicitable.')
        break;
        case RESULTS.LIMITED:
          console.log('El permiso es limitado: algunas acciones son posibles.')
          break;
        case RESULTS.GRANTED:
          console.log('Se concede el permiso.')
          break;
          case RESULTS.BLOCKED:
            console.log('El permiso es denegado y ya no es solicitable.')
          break;
      }

  })
  .catch((err)=>{console.log(err)})
}

function getPermissionsCAMERA(){
  check(PERMISSIONS.ANDROID.CAMERA)
  .then((result)=>{
      switch (result){
        case RESULTS.UNAVAILABLE:
            console.log('Esta funcion no esta disponible en este dispostivo.')
          break;
        case RESULTS.DENIED:
          console.log('El permiso no ha sido solicitado/está denegado pero es solicitable.')
        break;
        case RESULTS.LIMITED:
          console.log('El permiso es limitado: algunas acciones son posibles.')
          break;
        case RESULTS.GRANTED:
          console.log('Se concede el permiso.')
          break;
          case RESULTS.BLOCKED:
            console.log('El permiso es denegado y ya no es solicitable.')
          break;
      }

  })
  .catch((err)=>{console.log(err)})
}

// const MultiplePermissionAndroid= ()=>{
//   const [permissionsStatus, setPermissionsStatus] = useState({});
  
//   const checkMultiplePermission = async ()=>{
//     const status = await requestMultiplePermissions([
//       PERMISSIONS.ANDROID.CAMERA,
//       PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
//       PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
//     ]);
//     setPermissionsStatus(status)
//   }

//   const requestMultiplePermissions = async(permissions)=>{
//     const status = {}
//     for (const permission of permissions){
//       const permissionStatus= await request(permission)
//       status[permission] = permissionStatus
//     }
//   }
//   useEffect(() => {
//     checkMultiplePermission();
//   }, []);
// }
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
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
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

export {getPermissionsCAMERA,getPermissionsREAD_STORAGE,getPermissionsWRITE_STORAGE}