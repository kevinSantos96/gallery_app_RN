import React from "react";
import { View,StyleSheet,Text } from "react-native";

const AudioRecoderScreen = ({navigation})=>{
    return(
        <View style={styles.content}>
            <Text style={styles.texto}>Grabador</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    content:{
        flex:1,
    },
    texto:{fontSize:24,
        textAlign:'center',
        fontWeight:'600',
        color:'#000'}
})

export default AudioRecoderScreen