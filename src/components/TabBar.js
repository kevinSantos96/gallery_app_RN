import React from "react";
import { View,Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons'
//Screens
import AudioRecoderScreen from "../screens/AudioRecoder";
import GalleryScreen from "../screens/Gallery";
import Splash from "../screens/Splash";
import DocumentScreen from "../screens/Documents";
const Tab = createBottomTabNavigator()

const MyTabs=()=>{
    return(
        <NavigationContainer>
        <Tab.Navigator initialRouteName="Galeria"
                        screenOptions={({route})=>({
                            tabBarIcon:({focused,color,size})=>{
                                let iconName;
                                let rn= route.name;

                                if(rn==="Galeria"){
                                    iconName = focused ? 'image':'image-outline'
                                }else if(rn==="Grabador"){
                                    iconName = focused ? 'play-circle':'play-circle-outline'
                                }else if(rn==="Archivos"){
                                    iconName= focused ? 'folder':'folder-outline'
                                }
                                return <Ionicons name={iconName} size={size} color={color}/>
                            },
                            tabBarActiveTintColor: '#FF3F2E',
                            tabBarInactiveTintColor: 'grey',
                            labelStyle:{ paddingBottom:10, fontSize:14 },
                            tabBarStyle:{padding:10, height:70},
                            headerTitleAlign:'center',
                            headerStyle: {
                                backgroundColor: '#FF3F2E'
                            },
                            headerTintColor:'#FFF',
                            headerTitleStyle: {
                                fontWeight: '500',
                            }
                        })}
                        >
            <Tab.Screen name="Galeria" component ={GalleryScreen} />
            <Tab.Screen name="Grabador" component ={AudioRecoderScreen} />
            <Tab.Screen name="Archivos" component ={DocumentScreen} />
           {/*  <Tab.Screen  name="splash"  component={Splash} options={{animationEnabled: false, header: () => null}}/> */}
        </Tab.Navigator>
        </NavigationContainer>
        
    )
}

export default MyTabs