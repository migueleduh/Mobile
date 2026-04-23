import FullScreen from "@/components/screen-wrappers/Full";
import Scrollable from "@/components/screen-wrappers/Scrollable";
import { View,Text,StyleSheet,Button,Image } from "react-native"
import ParkSensor from "@/components/screens/ParkSensor";
import { useState } from "react";

export default function mainScreen(){
const [show,setShow] = useState(true)

if(show){
      return(<FullScreen padding={50} gap={30}  justify>
                <ParkSensor></ParkSensor>
                    <Button title="sair" color={"red"} onPress={() => {setShow(!show)}}/>
            </FullScreen>
    )
    
}

return(
    <FullScreen background="gray" center justify gap={20}>
            <Image style={styles.Picture} source={require("../../assets/images/sensor.png")}></Image>
            <Button title="Iniciar" onPress={() => { setShow(!show) }}/>
    </FullScreen>
)
  


     /*   
    <Scrollable gap={10} onRefresh={() => console.log("atualizado!!")}>
            <Text>Bem vindo User</Text>
             <Text>Esta é a sua Home com Scroll</Text>

             <Text>Curry's Update</Text>
             <Text style={styles.Text}>
                It's really admirable that Curry is making an effort to come back. There are not many star players who would attempt a comeback after dealing with an injury issue for so long, and at the end of a season that has been such a huge disappointing one for the Warriors.

                That speaks to the kind of competitor and showman that Curry is that he wants to be out there with his brothers fighting, even if the team probably won't be making a playoff run this year.

                Yet the pessimistic Warriors fan wold point to all the injuries and all the bad luck this season and say that it's not worth having Curry come back. In some ways this season has felt cursed with Jimmy Butler tearing his ACL and Moses Moody tearing his patellar tendon. Are the Warriors not tempting fate by putting their star out there where he too could go down with a major injury?

                In a worst-case scenario, if Curry did play and did get hurt in a major way, that would be a disaster for the 2026-27 campaign. That would take away whatever small glimmer of hope Golden State might have had for one more run.

                Is it super likely that that will happen? No. But just the thought makes the stomach churn.

                No matter the risk and no matter the curse, it seems likely that Curry is going back out there. At least it will make games much more watchable and the NBA will be thrilled about its Play-In ratings if Curry does indeed suit up against Portland.

                Still, Warriors fans will be watching with bated breath as they hope that Curry doesn't go down with an injury as he makes a valiant comeback to the team.
            </Text>
    </Scrollable>
*/



}

 const styles = StyleSheet.create({
        Text:{
            fontSize: 25,
        },
        Picture:{
            width:200,
            height:200,

        }
    })