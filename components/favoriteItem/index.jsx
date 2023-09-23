import { View,Text, Pressable } from "react-native"
import { StyleSheet } from "react-native"


export default function FavoriteItem({title, reason, handleRemoveFav, id}){

    return(
        <View style={styles.favContainer}>
            <Pressable onPress={()=> handleRemoveFav(id)}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.text}>{reason}</Text>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    favContainer:{
        padding:8,
        backgroundColor:"#d0f0c0",
        marginVertical:10,
        marginHorizontal:20,
        borderRadius: 10
    },
    textTitle:{
        fontWeight:'bold'
    },
    text:{
        fontWeight: '100'
    }
})

