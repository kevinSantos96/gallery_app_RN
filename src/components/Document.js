import React from "react";
import { View, StyleSheet,Dimensions } from "react-native";
import Pdf from "react-native-pdf";


const DocumentViwer = ({path})=>{
    return(
        <View style={styles.container}>
          <Pdf
            ref={(pdf) => { this.pdf = pdf; }}
            trustAllCerts={false}
            source={{uri:path}}
            onLoadComplete={(numberOfPages,filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages) => {
                console.log(`Current page: ${page}`);
            }}
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