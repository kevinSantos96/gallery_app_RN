import React, { useState } from 'react'
import { Text,Image, StyleSheet,View, TouchableOpacity,Modal } from 'react-native'
import ImageViewer from "react-native-image-zoom-viewer";
import Ionicons from 'react-native-vector-icons/Ionicons'
//import Modal from "react-native-modal"

function Images({path}) {
  const [imageSelect, setimageSelect] = useState([])
  const[openModal,setOpenModal] = useState(false)
  function toggleModal(){
    setimageSelect([{url:path,props:{}}])
    setOpenModal(!openModal)
}
  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={toggleModal}>
          <Image source={{uri: path}}  style={styles.imagen} />
      </TouchableOpacity>
        
        <Modal animationType='slide' visible={openModal}>
          <View style={{flex:1,backgroundColor:'#000'}}>
              <TouchableOpacity onPress={toggleModal} style={{alignItems:"flex-end"}}>
                  <Ionicons name="close-outline" color={"#FFF"}size={24} style={{marginTop:10, marginRight:5}} />
              </TouchableOpacity>
             <ImageViewer style={styles.imageOpen} imageUrls={imageSelect}/>
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
    }
})
export default Images