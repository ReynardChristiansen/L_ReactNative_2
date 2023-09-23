import { View,Text, StyleSheet } from "react-native"

export default function ProductDetailsItem({productDetailData}){
    

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>{productDetailData.title}</Text>
            <Text style={styles.textStyle}>{productDetailData.description}</Text>
            <Text style={styles.textStyle}>{productDetailData.price}</Text>
            <Text style={styles.textStyle}>{productDetailData.rating}</Text>
            <Text style={styles.textStyle}>{productDetailData.category}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:30,
        paddingHorizontal:15,
        borderWidth:1,
        margin: 10,
        borderColor:"#88da9e"
    },

    textStyle:{
        color:'black',
        fontSize:20,
        paddingBottom:12
    }
})