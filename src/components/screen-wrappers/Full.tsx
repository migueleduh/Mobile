import { View,Text, StyleSheet,TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar"

type Props = {
    center?: boolean;
    children:React.ReactNode;
    padding?: number ;
    gap?:number;


}


export default  function FullScreen({padding = 20,gap,children,center}:Props){
    return (
        <SafeAreaView style={[ styles.Container, padding ? {padding: padding} : null,
        gap !== undefined ? {gap: gap} : null,
        center ? {alignItems:"center", justifyContent:"center"} : null,]}>

            <StatusBar style="light" ></StatusBar>
            {children}
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
    Container:{
        flex:1,
    }
})