import React from "react";
import { View, Text, StyleSheet} from "react-native";

const DocumentScreen = ()=>{
    return(
        <View style={styles.content}>
            <View style={styles.contentTitle}>
                <Text style={styles.titulo}> Documentos</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    content:{
        flex:1,
    },
    contentTitle:{
        justifyContent:"center",
        alignItems: "center"
    },
    titulo:{
        fontSize:24,
        textAlign:'center',
        fontWeight:'600',
        color:'#000'
    }
})

export default DocumentScreen;