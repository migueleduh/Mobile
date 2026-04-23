import { View,Text,TextInput,StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import FullScreen from "../screen-wrappers/Full";

export default function ParkSensor(){

    const [distance, setDistance] = useState(100)

    useEffect(() => {
       console.log("📡 Sistema de Sensores Iniciado")
       
    },[])

    useEffect(() => {
         const timer = setInterval(() => {console.log("vivo")}, 2000)

         return () => {
            clearInterval(timer)
            console.log("📴 Sistema de Sensores Desligado")
         }
    },[])

    useEffect(() => {
        distance < 20 ? Alert.alert("⚠️ PERIGO: Muito Próximo!") : null
    }, [distance])


    


    return(
        <View>
            <Text>Distancia: </Text>
            <TextInput style={styles.input} placeholder="Digite em cm" onChangeText={(text) => {setDistance(Number(text))}}></TextInput>
        </View>
    )
}


const styles = StyleSheet.create({
    input:{
        borderStyle: "solid",
        borderWidth: 2
    }
})