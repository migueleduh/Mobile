import { View,ScrollView,StyleSheet,RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

 type Props = {
        padding?:number,
        gap?: number,
        onRefresh?:() => void,
        children:React.ReactNode
    }

export default function Scrollable({padding = 20, gap, onRefresh, children}:Props){


            return(<SafeAreaView style={styles.Container}>
                        <StatusBar/>
                        <ScrollView   
                        refreshControl={onRefresh ?  <RefreshControl refreshing={false} onRefresh={onRefresh}/> : undefined}
                        contentContainerStyle={{
                           padding: padding,
                           gap:  gap,
                        }}>
                            {children}
                        </ScrollView>
                    </SafeAreaView>
            )
    }

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        borderWidth:2,
    }
})