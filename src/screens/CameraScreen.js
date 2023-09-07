import React, { useEffect } from 'react'
import { View,Text, StyleSheet,Button, FlatListComponent } from 'react-native'
import { launchCamera } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { GenerarId } from '../helpers/generarId';


const CameraScreen=()=> {
  const openCamera= ()=>{

    const options={
      mediaType: 'photo',
      quality: 0.6,
      saveToPhotos:false,
      includeBase64: false,
      encoding: 'uft8'
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
      const imagePath = `${RNFS.ExternalStorageDirectoryPath}/DCIM/Camera/${nameImage}.jpg`
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
    openCamera()
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