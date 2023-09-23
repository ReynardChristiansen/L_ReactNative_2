import { View,Text, FlatList } from "react-native"
import { useContext } from "react"
import { Context } from "../../context"
import { StyleSheet } from "react-native"
import FavoriteItem from "../../components/favoriteItem"

export default function Favorites(){
    const {favoriteItems, handleRemoveFav} = useContext(Context)

    
    if(favoriteItems== ''){
        return(
            <View style={styles.nofav}>
                <Text>There is No Favorite Product</Text>
            </View>
        )
    }
    else{
        return(
            <View>
                <FlatList data={favoriteItems} renderItem={(itemData)=> <FavoriteItem title={itemData.item.title} reason={itemData.item.reason} handleRemoveFav={handleRemoveFav} id={itemData.item.id}></FavoriteItem>} keyExtractor={(itemData) =>itemData.id}/>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    nofav:{
        alignItems:'center',
        flex:1,
        justifyContent:'center',
    }
})