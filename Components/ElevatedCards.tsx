import React, { Component } from 'react'
import { Text, View,StyleSheet, ScrollView } from 'react-native'

const ElevatedCards=()=> {
 
    return (
      <View>
        <Text style={styles.headingText}> Eleveted Cards </Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>Me</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>To</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>more....</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>more........</Text>
            </View>
        </ScrollView>
      </View>
    )
  }

export default ElevatedCards;
const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"#333",
        shadowOpacity:0.4,
        shadowRadius:2,

    },
   
  })