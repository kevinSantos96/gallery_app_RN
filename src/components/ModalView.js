import React from 'react'
import { StyleSheet,View, TouchableOpacity,Modal} from 'react-native'

const ModalView= ({openModal,handleAlert,handleCropImg,imageSelect,setOpenModal})=> {
 function handlePress(){
    setOpenModal(!openModal)
 }

  return (
    <Modal animationType='slide' visible={openModal}>
    <View style={{flex:1,backgroundColor:'#000'}}>
        <TouchableOpacity onPress={handlePress} style={{alignItems:"flex-end"}}>
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
  )
}

const styles = StyleSheet.create({
    content:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:0,
      margin: 2,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
     },
    imagen:{
        width: 110,
        height:140
    },
    cropImg:{
      backgroundColor:'#000',
      alignItems:'center',
      justifyContent:'center'
    }

})

export default ModalView
