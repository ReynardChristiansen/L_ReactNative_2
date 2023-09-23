import { View,Text, ActivityIndicator, Modal, TextInput } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useContext, useEffect, useState } from "react"
import ProductDetailsItem from "../../components/productDetailsItem"
import { useNavigation } from "@react-navigation/native"
import { Button } from "react-native"
import { StyleSheet } from "react-native"
import { Pressable } from "react-native"
import { Context } from "../../context"


export default function ProductDetails(){
    const route = useRoute()
    const navigation = useNavigation()
    const {productID} = route.params

    const [loading, setLoading] = useState(false)
    const [productDetailData, setproductDetailData ] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [reason, setReason] = useState('')

    const {addToFavorites, favoriteItems} = useContext(Context)

    const isCurrentItemPresent = favoriteItems && favoriteItems.length > 0 ?
     favoriteItems.filter(item=>item.id === productID):false;

    useEffect(()=>{
        setLoading(true)

        async function getDataFromApi(){
            const apiRes = await fetch('https://dummyjson.com/products/'+ `${productID}`)
            const final = await apiRes.json()

            if(final){
                setLoading(false)
                setproductDetailData(final)
            }


        }

        getDataFromApi()
    }, [])

    useEffect(()=>{
        navigation.setOptions({
            headerRight : ()=>{
                return(
                    <Button onPress={()=>setModalVisible(true)} title={ isCurrentItemPresent&&isCurrentItemPresent.length > 0 ? "Update Favorites" : "Add Favorites"}></Button>
                )
            }
        })
    },[])
    
    const handelOnChange = ((enteredText)=>{
        setReason(enteredText)
    })

    if(loading){
        return(
            <ActivityIndicator  color={'red'} size="large"/>
        )
    }

    console.log(productDetailData)

    return(
        <View>
            <ProductDetailsItem productDetailData={productDetailData}/>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput style={styles.reasonText} placeholder="Why You Like this Product" onChangeText={handelOnChange} value={reason}/>
                        <View style={styles.buttonWraps}>
                            <View style={styles.buttonWrap}>
                                <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() =>{
                                    addToFavorites (productID, reason)
                                    setModalVisible(!modalVisible)
                                } }>
                                <Text style={styles.textStyle}>{isCurrentItemPresent && isCurrentItemPresent.length >0 ? "Update" : "Add"}</Text>
                                </Pressable>
                            </View>

                            <View>
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonWraps:{
        flexDirection:'row'
    },  
    button: {
      borderRadius: 1,
      padding: 10,
      elevation: 2,
      marginTop:10
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
      marginRigt:5,
      borderRadius:5
    },
    buttonClose: {
      backgroundColor: '#2196F3',
      marginLeft:5,
      borderRadius:5
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    buttonWrap:{
        flexDirection:'row'
    },
    reasonText:{
        borderRadius:1,
        borderWidth:1,
        padding:10,
        borderRadius: 5
    }
  });
  