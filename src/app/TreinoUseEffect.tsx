import { View, Text,TextInput } from "react-native";
import { useState, useEffect } from "react";
import FullScreen from "@/components/screen-wrappers/Full";

export default  function treino(){

  const [nome,  setNome] = useState("");

  useEffect(() => { console.log("nome mudou mudou para: " + nome )}, [nome]);

     return(   <FullScreen><View>
            <Text>Nome: {nome}</Text>
            <TextInput onChangeText={(texto:string) => { setNome(texto) }}></TextInput>
        </View>
       </FullScreen>
     )
}

