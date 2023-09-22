import { createContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
//create the context

//provide the context

//consume the context

export const Context = createContext(null)

const ProductContext = ({children}) =>{
    //list of products
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        async function getProductFromApi(){
            
            const apiRes = await fetch('https://dummyjson.com/products')
            const final = await apiRes.json()
            if(final){
                setTimeout(()=>{
                    setLoading(false)
                }, 2000)
                
                setProducts(final.products)
            }
            
            
        }

        getProductFromApi()
    },[])


    return(
        

        <Context.Provider value={{products, loading}}>
            {children}
        </Context.Provider>
    )
}

export default ProductContext;