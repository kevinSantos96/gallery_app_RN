import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet,RefreshControl } from 'react-native';
import RNFS from 'react-native-fs';
import Images from './Images';
import requestStoragePermission from './Permission';
import { getImagesCamera, getImagesDownload, getImagesPictures, getImagesWhatsapp, getOpenCameraPictures } from '../helpers/getPictures';


const ImageListScreen = ()=>{
  const [imageData,setImageData] =  useState([])
  const [refreshing,setRefreshing] = useState(false)
   const loadImagesFromStorage = async ()=>{
    try {
      const data=[]
      //pictures fotos
      const pictures = await getImagesPictures();
      if (pictures.status){
        // setImagenesFile([imagenesFiles,...pictures.items])
        pictures.items.map((file)=>{
          const {name,mtime,path} = file
          data.push({
            name,
            mtime,
            path
          })
        })
      
      }
      //camara fotos
       const cameraFolder = await getImagesCamera()
       if (cameraFolder.status){
        cameraFolder.items.map((file)=>{
          const {name,mtime,path} = file
          data.push({
            name,
            mtime,
            path
          })
        })
       }
      //whatsapp fotos
      const whatsappImages = await getImagesWhatsapp()
      if (whatsappImages.status){
        whatsappImages.items.map((file)=>{
          const {name,mtime,path} = file
          data.push({
            name,
            mtime,
            path
          })
        })
       }
      //images download
     const downloadImages = await  getImagesDownload()
     if (downloadImages.status){
      downloadImages.items.map((file)=>{
        const {name,mtime,path} = file
        data.push({
          name,
          mtime,
          path
        })
      })
     }
      //OpenCamera
       const OpenCameraPhotos = await  getOpenCameraPictures()
       if (OpenCameraPhotos.status){
        OpenCameraPhotos.items.map((file)=>{
          const {name,mtime,path} = file
          data.push({
            name,
            mtime,
            path
          })
        })
       }

      const compararFechas = (a, b) => {
        const fechaA = new Date(a.mtime);
        const fechaB = new Date(b.mtime);
      
        return fechaB - fechaA;
      };
      data.sort(compararFechas)
      setImageData(data.filter((file)=>/\.(jpg|jpeg|png|gif)$/i.test(file.path)))
     setRefreshing(false)
     console.log('me repito')
    } catch (error) {
      console.error('Error al cargar las imágenes:', error);
    }
  }
 
  useEffect(() => {
    loadImagesFromStorage();
  },[refreshing])

  function handleRefresh(){
    setRefreshing(true)
  }
  return(
    <View style={{flex:1,backgroundColor:'#000'}}>
      <View>
      {imageData.length > 0 && <FlatList data={imageData} 
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
