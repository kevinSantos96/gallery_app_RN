import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

export const getImagesCamera=async()=>{
    const data = {
        items:{},
        status: true
    }
    try {
        const cameraFolderPath = RNFS.ExternalStorageDirectoryPath +'/DCIM/Camera';
        const response =await RNFS.readDir(cameraFolderPath);
        data.items=response
        data.status= true
    } catch (error) {
        data.status=false 
        console.log(error + ': camera')
    }
    return data;
}

export const getImagesWhatsapp=async()=>{
    const data = {
        items:{},
        status: true
    }
    try {
        let path = `${RNFS.ExternalStorageDirectoryPath}/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Images`
        const existWp= await RNFS.exists(path)

        if (existWp){
            const response =await RNFS.readDir(path);
            data.items=response
            data.status= true   
        }else{
            var WhatsAppFolderPath = RNFS.ExternalStorageDirectoryPath +'/WhatsApp/Media/WhatsApp Images';
            const response =await RNFS.readDir(WhatsAppFolderPath);
            data.items=response
            data.status= true  
        }

        // if (Platform.Version<32){
        //     const WhatsAppFolderPath = RNFS.ExternalStorageDirectoryPath +'/WhatsApp/Media/WhatsApp Images';
        //     const response =await RNFS.readDir(WhatsAppFolderPath);
        //     data.items=response
        //     data.status= true   
        // }else{
        //     const WhatsAppFolderPath = RNFS.ExternalStorageDirectoryPath +'/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Images';
        //     const response =await RNFS.readDir(WhatsAppFolderPath);
        //     data.items=response
        //     data.status= true    
        // }
    } catch (error) {
        data.status=false 
        console.log(error + ': whatsapp')
    }
    return data
}

export const getImagesDownload= async()=>{
    const data = {
        items:[],
        status: true
    }
    try {
        const DownloadFolderPath = RNFS.ExternalStorageDirectoryPath +'/Download';
        const response =await RNFS.readDir(DownloadFolderPath);
        data.items=response
        data.status= true
    } catch (error) {
        data.status=false 
        console.log(error + ': download')
    }   
    return data;
}

export const getOpenCameraPictures= async()=>{
    const data = {
        items:{},
        status: true
    }
    try {
        const OpenCameraFolderPath = RNFS.ExternalStorageDirectoryPath +'/DCIM/OpenCamera';
        const response =await RNFS.readDir(OpenCameraFolderPath);
        data.items=response
        data.status= true
    } catch (error) {
        data.status=false 
        console.log(error + ': OpenCamera')
    }
    return data;
}

export const getImagesPictures= async()=>{
    const data = {
        items:{},
        status: true
    }
    try {
        const PicturesFolderPath = RNFS.ExternalStorageDirectoryPath +'/Pictures';
        const response =await RNFS.readDir(PicturesFolderPath);
            data.items=response
            data.status= true
    } catch (error) {
        data.status=false 
        console.log(error + ': pictures')
    }
    return data;
}