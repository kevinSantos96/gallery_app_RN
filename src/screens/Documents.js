import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Modal} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import DocumentViwer from "../components/Document";
import FilePickerManager from 'react-native-file-picker';
//import Modal from "react-native-modal"

const DocumentScreen = ()=>{
    const [documets, setDocumets] = useState("");
    const [openModal,setOpenModal] = useState(false)
    const options = {
        title: 'Selecciona un archivo PDF o DOCX',
        filetype: ['.pdf'],
      };
    async function loadDocumentsFromStorage(){
        FilePickerManager.showFilePicker(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled file picker');
            }
            else if (response.error) {
              console.log('FilePickerManager Error: ', response.error);
            }
            else {
              setDocumets("file:///"+response.path)
              //console.log(documets)
              setOpenModal(!openModal)
            }
          });
    }

    function closeModal(){
        setOpenModal(!openModal)
    }

    return(
         <View style={{flex:1}}>
            <View style={styles.contentTitle}>
             <TouchableOpacity style={styles.btnOpenFile} onPress={loadDocumentsFromStorage}>
                 <Ionicons name="document-text-outline" color={"#FFF"}size={24} />
                 <Text style={styles.textBtn}>Abrir Documento</Text>
             </TouchableOpacity>
         </View>
         <Modal animationType="slide"
         visible={openModal}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#000', padding: 15, borderRadius: 5 }}>
                    <TouchableOpacity onPress={closeModal} style={{marginLeft:5}}>
                        <Ionicons  name="arrow-back-outline" color={"#FFF"}size={24}/>
                    </TouchableOpacity>
                    <DocumentViwer path={documets}/>
                    </View> 
                </View>
         </Modal>            
        </View>
    )
}

const styles= StyleSheet.create({
    contentTitle:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    btnOpenFile:{
       backgroundColor: '#1075BB',
       padding: 15,
        width:'50%',
        flexDirection:'row',
        borderRadius:5
    },
    textBtn:{
        fontSize:14,
        fontWeight:'600',
        color:'#fff',
        textAlign:'center',
        marginVertical:3,
        marginHorizontal:8
    }
})

export default DocumentScreen;