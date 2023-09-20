import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet,RefreshControl,Text } from 'react-native';
import Images from '../components/Images';
import { getImagesCamera, getImagesDownload, getImagesPictures, getImagesWhatsapp, getOpenCameraPictures } from '../helpers/getPictures';
import OpenCamera from '../components/OpenCamera';

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
      {imageData.length > 0 ? <FlatList data={imageData} 
                  refreshControl={(<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />)} 
                  keyExtractor={(item)=> item.name} numColumns={3}  renderItem={({item})=>{
                                return(<Images path={"file:///"+ item.path} uri={item.path} setRefreshing={setRefreshing} />)}} />:
                              <Text style={styles.texto}>No se encontrarón imagenes</Text>
                              }
      </View>
      {/* button open cam */}
      <OpenCamera setRefreshing={setRefreshing}/>
    </View>
  )

}

const styles = StyleSheet.create({
  texto:{
    textAlign:'center',
    fontSize:18,
    color:'#fff',
    fontWeight:'600',
    marginVertical:5,
    justifyContent:'center',
    alignItems:'center'
  },
  
}) 



export default ImageListScreen;
