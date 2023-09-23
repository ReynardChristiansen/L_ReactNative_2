import { useContext } from "react"
import { View,Text , StyleSheet, ActivityIndicator, FlatList} from "react-native"
import { Context } from "../../context"
import ProductListItem from "../../components/productListItem"
import { useNavigation } from "@react-navigation/native"

function createRandomColor(){
    let letters = "0123456789ABCDEF"
    let color ="#"

    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }

    return color
}


export default function ProductListing(){
    const {loading, products} = useContext(Context) 
    const navigation = useNavigation()

    if(loading){
        return(
            <ActivityIndicator style={styles.loader} color={'red'} size="large"/>
        )
    }

    const handleOnPress = (getId)=>{
        navigation.navigate('productDetails',{
            productID : getId
        })
    };
    

    return(
        <View>
            <FlatList data={products} renderItem={(itemData) => <ProductListItem title={itemData.item.title} bgColor={'#d0f0c0'} onPress={()=>handleOnPress(itemData.item.id)}></ProductListItem>} keyExtractor={(itemData) =>itemData.id} numColumns={2}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    loader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})