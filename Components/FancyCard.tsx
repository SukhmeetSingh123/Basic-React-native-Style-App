import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const FancyCard =()=> {
    return (
      <View>
        <Text style={styles.headingText}> Trending Places </Text>
        <View style={[styles.card,styles.cardElevated]}>
            <Image
            source={{
                uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
            
            }}
            style={styles.cardImage}
            />

            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                
                Sit qui ipsam illo ea ex eveniet sequi sunt cupiditate beatae placeat.</Text>
                <Text style={styles.cardFooter}>12 min Away</Text>
            </View>
             
        </View>
      </View>
    )
  }

export default FancyCard
const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    container:{

    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    cardElevated:{
       backgroundColor:'#FFFFFF',
       elevation:4,
       shadowOffset:{
        width:1,
        height:1,
       },
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:"#000000",
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLabel:{
        color:"#000000",
        fontSize:14,
    },
    cardDescription:{
        color:"#242B2E",
        fontSize:12,
        marginBottom:12,
        flexShrink:1,
        marginTop:6,
    },
    cardFooter:{
        color:"#000000"
    }

   
   
  })