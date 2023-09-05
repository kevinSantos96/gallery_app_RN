import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import RNFS from 'react-native-fs';
import Images from './Images';


const ImageListScreen = ()=>{
  const [imagePath, setImagePath] = useState("") 
  const [imageData,setImageData] =  useState([]) 
  

  async function loadImagesFromStorage(){
    try {
      //const externalStoragePath = RNFS.ExternalStorageDirectoryPath;
      // const externalStoragePath = RNFS.ExternalStorageDirectoryPath
      // console.log(externalStoragePath)
      // const files = await RNFS.readDir(externalStoragePath)
      //pictures fotos
      const PicturesFolderPath = RNFS.ExternalStorageDirectoryPath +'/Pictures'
      const files =  await RNFS.readDir(PicturesFolderPath)
      //camara fotos
      const cameraFolderPath = RNFS.ExternalStorageDirectoryPath +'/DCIM/Camera'
      const cameraPhotos =  await RNFS.readDir(cameraFolderPath)
      //whatsapp fotos
      const whatsappFolderPath = RNFS.ExternalStorageDirectoryPath +'/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Images'
      const whatsappImages = await RNFS.readDir(whatsappFolderPath)
      //console.log(whatsappImages)

      const items =[]
      files.map((file)=>{
        const{name,path,mtime}= file
        items.push({
          name,
          path,
          mtime
        })
      })
      cameraPhotos.map((cam)=>{
        const{name,path,mtime}= cam
        items.push({
          name,
          path,
          mtime
        })
      })
      whatsappImages.map((photo)=>{
        const{name,path,mtime}= photo
        items.push({
          name,
          path,
          mtime
        })
      })
      const compararFechas = (a, b) => {
        const fechaA = new Date(a.mtime);
        const fechaB = new Date(b.mtime);
      
        return fechaB - fechaA;
      };
      items.sort(compararFechas)
      setImageData(items.filter((file)=>/\.(jpg|jpeg|png|gif)$/i.test(file.path)))
    } catch (error) {
      console.error('Error al cargar las imágenes:', error);
    }
  }
  useEffect(() => {
    loadImagesFromStorage();
    console.log(imageData)
  }, [])
  
  return(
    <View style={{flex:1,backgroundColor:'#000'}}>
      <View>
      { <FlatList data={imageData} keyExtractor={(item)=> item.name} numColumns={2} renderItem={({item})=>{
            return(<Images path={"file:///"+ item.path}/>)
      }} />}
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  texto:{
    textAlign:'center',
    fontSize:18
  },
  content:{
   display:'flex',
   width:'50%',
   backgroundColor:'#fff'
  },
  
}) 



export default ImageListScreen;
