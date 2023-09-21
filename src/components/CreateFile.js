import RNFS from "react-native-fs"

export const CreateFile = ()=>{
    const path = `${RNFS.ExternalDirectoryPath}/Pictures/Trash`
    RNFS.exists(path).then((resp)=>{
        if(resp){
            console.log('existe')
        }else{
            RNFS.mkdir(path).then(()=>{console.log("Carpeta creada con exito")})
        .catch(err=>console.log('error en crear la carpeta'+err))
        }
    }).catch(err=>console.log(err))
}