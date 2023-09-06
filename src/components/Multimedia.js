import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet,RefreshControl } from 'react-native';
import RNFS from 'react-native-fs';
import Images from './Images';


const ImageListScreen = ()=>{
  const [imageData,setImageData] =  useState([]) 
  const [refreshing,setRefreshing] = useState(false)
  async function loadImagesFromStorage(){
    try {
      //pictures fotos
      const PicturesFolderPath = RNFS.ExternalStorageDirectoryPath +'/Pictures'
      const files =  await RNFS.readDir(PicturesFolderPath)
      //camara fotos
      const cameraFolderPath = RNFS.ExternalStorageDirectoryPath +'/DCIM/Camera'
      const cameraPhotos =  await RNFS.readDir(cameraFolderPath)
      //whatsapp fotos
      const whatsappFolderPath = RNFS.ExternalStorageDirectoryPath +'/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Images'
      const whatsappImages = await RNFS.readDir(whatsappFolderPath)
      //images download
      const downloadFolderPath = RNFS.ExternalStorageDirectoryPath +'/Download'
      const downloadImages = await RNFS.readDir(downloadFolderPath)
      //console.log(downloadImages)
      //OpenCamera
      // const OpenCameraFolderPath = RNFS.ExternalStorageDirectoryPath +'/DCIM/OpenCamera'
      // const OpenCameraPhotos =  await RNFS.readDir(OpenCameraFolderPath)


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

      downloadImages.map((down)=>{
        const{name,path,mtime}= down
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
      setRefreshing(false)
    } catch (error) {
      console.error('Error al cargar las imágenes:', error);
    }
  }
  useEffect(() => {
    loadImagesFromStorage();
  }, [])
  
  function handleRefresh(){
    setRefreshing(true)
    loadImagesFromStorage()
  }
  return(
    <View style={{flex:1,backgroundColor:'#000'}}>
      <View>
      { <FlatList data={imageData} 
                  refreshControl={(<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />)} 
                  keyExtractor={(item)=> item.name} numColumns={3}  renderItem={({item})=>{
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
