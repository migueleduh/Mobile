import { View,Text,TextInput,TouchableOpacity, StyleSheet,Button,Image} from "react-native"
import FullScreen from "@/components/screen-wrappers/Full";
import { useState } from "react";

export default function IndentificationScreen(){

  const [name, setName] = useState<string>("");
  const [accessAuthorized, setAccess] = useState<boolean>(false);


  const WellcomeScreen = () => {
    
    const styles = StyleSheet.create({
        container:{
            backgroundColor: "white",
            borderStyle: "solid",
            borderRadius: 12,
            width:300,
            alignItems: "center",
            gap: 30,
            padding:30
        },
        title1:{
            fontSize:20,
            marginTop: 30,
            textAlign: "center"
        },
        title2:{
            fontSize:30,
            textAlign: "center",
            fontWeight: "300",
        },
        title2Name:{
            fontWeight: "bold",
            color: "#007BFF"
         
        },
        picture:{
            width:200,
            height:200,
            borderRadius: 8,
        },
        button:{
            borderRadius:5,
            paddingVertical:12,
            paddingHorizontal: 30,
            backgroundColor:"#007BFF",
            alignItems: "center"

        },

         textButton:{
            color:"white",
            fontSize: 20,
        }
    })



    return (
        <FullScreen padding={15} background="gray" center>
            <View style={styles.container}>  
                 <Text style={styles.title1}>Access Allowed</Text>
                 <Text style={styles.title2}>Welcome, <Text style={styles.title2Name}>{name}</Text> </Text>
                 <Image  style={styles.picture}source={require("../../assets/images/eu.jpg")}></Image>
               <TouchableOpacity style={styles.button} >
                    <Text style={styles.textButton}>Start Tour</Text>
                </TouchableOpacity>
               <Button title=" Log OuT" color={"red"} onPress={() => { setAccess(false)}}/>
            </View>
        </FullScreen>
    )

  }




  if(!accessAuthorized){

    return(

        <FullScreen center={true} background="gray"> 
            <View style={styles.container}>
                <TextInput style={styles.inputText} placeholder="Digite seu nome Completo" onChangeText={(texto) => setName(texto)}></TextInput>
                <TouchableOpacity style={styles.button} disabled={name === ""} onPress={() => { setAccess(true)}}>
                    <Text style={styles.textButton}>Solicitar Acesso</Text>
                </TouchableOpacity>
            </View>
        </FullScreen>


    );

 }



return WellcomeScreen();

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        padding: 30,
        borderRadius: 12,
        width: 300,
        gap: 12
    },
    inputText:{
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5
    },
    button:{
        borderRadius:5,
        padding:10,
        backgroundColor:"#007BFF",
        alignItems: "center"    
    },

    textButton:{
        color:"white",
    }

});

