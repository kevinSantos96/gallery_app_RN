import React from 'react'
import { TouchableOpacity,View,StyleSheet } from 'react-native';
import { PermissonCamera } from './Permission'
import { GenerarId } from '../helpers/generarId'
import { launchCamera } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import Ionicons from 'react-native-vector-icons/Ionicons'

const OpenCamera = ({setRefreshing}) => {
  const openCameraRN= ()=>{
    
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
      //console.log(imageUri)
      //valida si el directorio existe
      RNFS.exists(`${RNFS.ExternalStorageDirectoryPath}/Pictures`).then((response)=>{
       if (response){
        console.log("existe")
       }else{
        RNFS.mkdir(`${RNFS.ExternalStorageDirectoryPath}/Pictures`).then(()=>{console.log("Carpeta creada con exito")})
        .catch(err=>console.log('error en crear la carpeta'+err))
       }
      }).catch((err) => {         
        console.log(err);
      })

      const imagePath = `${RNFS.ExternalStorageDirectoryPath}/Pictures/${nameImage}.jpg`

      RNFS.moveFile(imageUri,imagePath).then(()=>{
          const source = {uri: imagePath}
          setRefreshing(true)
        }) 
        .catch((err)=>{
          console.log('Error el almacenar la imagen: ',err)
        })
    }
    })
  }

  async function handleNavCamera(){
    // navigation.navigate('Camara')
    const response = await PermissonCamera();
    if (response){
      openCameraRN();
    } 
   }
  return(
    <TouchableOpacity style={styles.btnAdd} onPress={handleNavCamera}>
        <View
          style={{
            position: 'absolute',
            marginHorizontal:12,
            marginVertical:9
          }}>
          <Ionicons name="camera" color="#FFF" size={35} />
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: 'rgba(242, 5, 5, 0.7)',
    borderRadius: 50,
    bottom: 10,
    width: 30,
    height: 30,
    padding: 30,
    right: 15,
    position: 'absolute',
  },
})


export default OpenCamera