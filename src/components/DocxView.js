import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
//librerias


const DocxView = ({path}) => {
  
  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    docx: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})
export default DocxView