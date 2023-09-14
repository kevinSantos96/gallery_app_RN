import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet,Button, FlatListComponent } from 'react-native'
import { launchCamera } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { GenerarId } from '../helpers/generarId';
import { PermissonCamera } from '../components/Permission';


const CameraScreen=()=> {
  async function getPermissionCamera(){
    const response = await PermissonCamera();
    if (response){
      openCamera();
    } 
  }

  const openCamera= ()=>{

    const options={
      mediaType: 'photo',
      quality: 0.5,
      saveToPhotos:false,
      cameraType:'back'
    
    }

    launchCamera(options,resp=>{
      if (resp.didCancel){
        console.log("el usuario cancelo la accion")
    }else if (resp.error){
        console.log("error al abrir la camara: ",resp.error)
    }else{
      const nameImage = GenerarId();
      let imageUri = resp.uri || resp.assets?.[0]?.uri;
      console.log(imageUri)
      //valida si el directorio existe
      RNFS.exists(`${RNFS.ExternalStorageDirectoryPath}/DCIM/Camera`).then((response)=>{
       if (response){
        console.log("existe")
       }else{
        RNFS.mkdir(`${RNFS.ExternalStorageDirectoryPath}/DCIM/Camera`).then(()=>{console.log("Carpeta creada con exito")})
        .catch(err=>console.log('error en crear la carpeta'+err))
       }
      }).catch((err) => {         
        console.log(err);
      })

      const imagePath = `${RNFS.ExternalStorageDirectoryPath}/Pictures/${nameImage}.jpg`

      RNFS.moveFile(imageUri,imagePath).then(()=>{
          const source = {uri: imagePath}
          console.log(source)
        })
        .catch((err)=>{
          console.log('Error el almacenar la imagen: ',err)
        })
    }
    })
  }

  useEffect(() => {
    getPermissionCamera()
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={{width:'50%'}}>
        <Button title='Abrir Camara' onPress={openCamera} style={{backgroundColor:'#192CD4' }}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    texto:{
        fontSize:16,
        fontWeight:'600'
    }
})

export default CameraScreen