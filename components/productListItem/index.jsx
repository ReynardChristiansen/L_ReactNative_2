import { View,Text, Pressable, StyleSheet } from "react-native"

export default function ProductListItem({title, onPress, bgColor}){

    return(
        <View style={styles.productItemOuterContainer}>
            <Pressable android_ripple={{color:"#00BD00"}} onPress={onPress} style={{...styles.pressableView, backgroundColor:bgColor  }}>
                <View style={styles.productItemInnerContainer}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    productItemOuterContainer:{
        flex:1,
        margin:16,
        height:160,
    },
    pressableView:{
        flex:1,
        borderRadius:10,
    },
    productItemInnerContainer:{
        flex:1,
        padding:15,
        justifyContent:'center',
        alignContent:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'black'
    }
})