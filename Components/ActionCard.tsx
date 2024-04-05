import {
    StyleSheet,
    Image,
    Text,
    View,
    Linking,
    TouchableOpacity
} from 'react-native';
import React from 'react';

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in JavaScript 21 -ES
                    </Text>
                </View>
                    <Image
                        source={{
                            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                        }}
                        style={styles.cardImage}
                    />

                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, accusamus reprehenderit! Consequatur delectus praesentium in, veniam consequuntur dolorem aliquid magnam qui, non eveniet illum labore. Quisquam nemo praesentium incidunt mollitia itaque fuga nihil in commodi!
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            openWebsite('https://www.linkedin.com/in/sukhmeet-singh-haryan/')
                        }}
                    >
                        <Text style={styles.socialLinks} >Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            openWebsite('https://www.linkedin.com/in/sukhmeet-singh-haryan/')
                        }}
                    >
                        <Text style={styles.socialLinks}>Follow More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ActionCard;

const styles = StyleSheet.create({

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#333",
        shadowOpacity:0.4,
        shadowRadius:2,

    },

    headingContainer: {
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText: {
        color:"#000",
        fontSize:16,
        fontWeight:'600'
    },
    cardImage: {
        height: 190,
    },
    bodyContainer: {
      padding:10,
    },
    footerContainer: {
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks: {
        color:"#000000",
        fontSize:16,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }

})
