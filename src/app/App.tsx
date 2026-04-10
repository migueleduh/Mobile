import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (


    <View style={styles.container}>
      <View style={styles.main}>
      <Text style={styles.title}>Wellcome,</Text>
      <Text style={styles.title2}>Miguel </Text>
      
      <Image source={require("../assets/images/eu.jpg")}
        style={styles.image}
      />

      <Text style={styles.subtitle}>  Web Developer</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#0F172A",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#F8FAFC",
    
  },
  subtitle: {
    fontSize: 30,
    color: "#38BDF8",
    marginBottom: 20,
    textAlign:"center",
  },

  subtitle2: {
    color: "#F8FAFC",
  },

  title2: {
    fontSize: 40,
    color: "#F8FAFC",
    marginBottom: 10,   
    
  },
  image: {
    borderRadius: 75,
    marginHorizontal: "auto",
    justifyContent: "center",
    width: 150,
    height: 150,
    marginBottom:100,
    marginTop:100,
  
  }
});
