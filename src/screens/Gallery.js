import React,{useState} from "react";
import { View,StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import ImageViewer from "react-native-image-zoom-viewer";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Modal from "react-native-modal"


const GalleryScreen = ({navigation})=>{
    const [seletedImage, setSeletectImage]= useState("")
    const[openModal,setOpenModal] = useState(false)
    const [imageZoom, setImageZoom] = useState([])

    function toggleModal(){
        setOpenModal(!openModal)
    }

    const openImagePicker = async ()=>{
        const options={
            mediaType: 'photo',
            includeBase64: false,
            quality:1,
            
        };
       await launchImageLibrary(options,(response)=>{
            if (response.didCancel){
                console.log("el usuario cancelo la accion")
            }else if (response.error){
                console.log("error en la seleccion de la imagen: ",response.error)
            }else{
                let imageUri = response.uri|| response.assets?.[0]?.uri;
                setSeletectImage(imageUri)
                setImageZoom([{url:imageUri,props:{}}])
                
            }
        })
    }
    
    return(
        <View style={styles.content}>
            <View style={styles.contentBtn}>
                <Button style={styles.btnOpen} title="Abrir Imagen" onPress={openImagePicker}/>
            </View>
            <TouchableOpacity style={styles.contentImage} onPress={toggleModal}>
                {
                    seletedImage !=="" &&<Image style={styles.imageOpen} source={{uri: seletedImage}}/> 
                }
            </TouchableOpacity>
             <View>
                <Modal isVisible={openModal}>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={toggleModal} style={{alignItems:"flex-end"}}>
                            <Ionicons name="close-outline" color={"#FFF"}size={24} />
                        </TouchableOpacity>
                       {/*  <Image style={styles.imageOpen} source={{uri: seletedImage}}/> */}
                       <ImageViewer style={styles.imageOpen} imageUrls={imageZoom}/>
                    </View>
                </Modal>
             </View>
        </View>
    )
}

const styles= StyleSheet.create({
    content:{
        flex:1,
    },
    texto:{color:"#000"},
    contentBtn:{
        marginTop:16,
        marginHorizontal:"25%"
    },
    btnOpen:{
        backgroundColor:'#192CD4',
        paddingHorizontal: 4,
        color:'#fff',
    },
    contentImage:{
        marginTop:20,
        flex:1,
        backgroundColor:"black",
        justifyContent:'center',
        alignItems:'center',
    },
    imageOpen:{
        resizeMode:"contain",
        flex:1,
        width:'100%',
        height:'100%'
    }
})

export default GalleryScreen