import React from "react";

import { View, Text, StyleSheet, Image} from "react-native";

  export default function mainScreen(){
    
    let userName: string = "Miguel";


    const dataList: {name:string, price:number, category:string, onSale: boolean}[] 
    = [ {
        name: "Toyota Corolla",
        price: 120000,
        category: "Sedan",
        onSale: false
    },
    {
        name: "Honda Civic",
        price: 130000,
        category: "Sedan",
        onSale: true
    },
    {
        name: "Jeep Compass",
        price: 180000,
        category: "SUV",
        onSale: false
    },
    {
        name: "Hyundai Creta",
        price: 140000,
        category: "SUV",
        onSale: true
    },
    {
        name: "Volkswagen Gol",
        price: 60000,
        category: "Hatch",
        onSale: false
    },
    {
        name: "Chevrolet Onix",
        price: 75000,
        category: "Hatch",
        onSale: true
    }
    ];


    return (
    <View style={styles.Container}>
        <View>
            <Text style={styles.Title}>Bem Vindo, <Text style={styles.Name}>{userName}</Text> </Text>
        </View>

            
            { dataList.map((cars,index) => (
            <View key={index} style={styles.Box} >
            <Image style={styles.Picture} source={require("../assets/images/corolla.jpg")}></Image>
                <View>
                    <Text > Model: {cars.name}</Text>
                    <Text >Price: {cars.onSale == true ? <Text style={styles.OnSale}>{cars.price}</Text> : <Text>{cars.price}</Text> }</Text>
                    <Text >Category: {cars.category}</Text>
                </View>
             </View>   
            ))}
    </View> 
        
    )

}
  
const styles = StyleSheet.create({ 
    Container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    Title:{
        color: "black",
        fontSize: 20,
        paddingBottom: 40,
    },
    Name:{
        fontWeight: "bold",
    },
    Box:{
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        paddingInline:20,
        paddingVertical: 10,
        marginBottom: 20,
        flexDirection: "row",
        maxWidth: 295,
    },
    OnSale:{
        color: "red",
    },
    Picture:{
        width:100,
        height:50,
        marginRight:20,
    }

})
