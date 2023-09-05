import React from "react";
import { View, StyleSheet,Dimensions } from "react-native";
import Pdf from "react-native-pdf";


const DocumentViwer = ({path})=>{
   console.log("ruta:", path)
    //const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true}
    return(
        <View style={styles.container}>
          <Pdf
            trustAllCerts={false}
            source={{uri:path}}
            style={styles.pdf}
          />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})

export default DocumentViwer