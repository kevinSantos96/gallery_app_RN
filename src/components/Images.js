import React, { useState } from 'react'
import { Image, StyleSheet,View, TouchableOpacity,Modal, Alert } from 'react-native'
import ImageViewer from "react-native-image-zoom-viewer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNFS from  'react-native-fs'
import ImagePicker from 'react-native-image-crop-picker';
//import Modal from "react-native-modal"

function Images({path,uri,name,refreshing}) {
  const [imageSelect, setimageSelect] = useState([])
  const[openModal,setOpenModal] = useState(false)
  
  function toggleModal(){
    setimageSelect([{url:path,props:{}}])
    setOpenModal(!openModal)
  }

  //Cortar la imagen
  function handleCropImg(){
    ImagePicker.openCropper({
      path: path,
      freeStyleCropEnabled:true,
    }).then(image=>{
      const imagePath = `${RNFS.ExternalStorageDirectoryPath}/Pictures/${image.modificationDate}.jpg`
      RNFS.copyFile(image.path,imagePath)
      .then(()=>{console.log('Imagen almacenada con exito: ',image.path); 
      refreshing(true);
      setimageSelect([{url:image.path,props:{}}]);
      
    })
      .catch((error)=>{console.log('error al alamacenamiento de la imagen: ',error)})
    })
    .catch(err=>console.log(err))
  }

  //Elimina la imagen
  function handleDeleteImg(){
    const trashPath = RNFS.ExternalDirectoryPath + '/.Trash'
    const filePath = path.split('////').pop()
    RNFS.exists(filePath)
    .then((res)=>{
      if (res){
       return RNFS.moveFile(path,trashPath)
       .then(() => {
         console.log('deleted');
         refreshing(true)
         setOpenModal(!openModal)
       })
       .catch((err) => {         
           console.log(err);
       })
      }
    }).catch(()=>console.log('no existe'))
  }
  const handleAlert=()=>{
    Alert.alert('Desea eliminar esta imagen?','',[
      {text:'Cancelar',style:'cancel'},
      {text:'Aceptar',onPress:handleDeleteImg}
    ])
  }

  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={toggleModal}>
          <Image source={{uri: path}}  style={styles.imagen} />
      </TouchableOpacity>
        
        <Modal animationType='slide' visible={openModal}>
          <View style={{flex:1,backgroundColor:'#000'}}>
              <TouchableOpacity onPress={toggleModal} style={{alignItems:"flex-end"}}>
                  <Ionicons name="close-outline" color={"#FFF"}size={30} style={{marginTop:10, marginRight:5}} />
              </TouchableOpacity>
             <ImageViewer style={styles.imageOpen} imageUrls={imageSelect}/>
             <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',marginHorizontal:50}}>
             <TouchableOpacity onPress={handleCropImg} >
                  <Ionicons name="create-outline" color={"#FFF"}size={30} style={{marginBottom:8, marginRight:5}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleAlert}>
                  <Ionicons name="trash-outline" color={"#FFF"}size={30} style={{marginBottom:8, marginRight:5}} />
              </TouchableOpacity>
             </View>
             
          </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        borderBottomColor: '#94a3B8',
        borderBottomWidth: 1
    },
    content:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:10,
      margin: 2,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
     },
    imagen:{
        width: 110,
        height:110
    },
    cropImg:{
      backgroundColor:'#000',
      alignItems:'center',
      justifyContent:'center'
    }

})
export default Images