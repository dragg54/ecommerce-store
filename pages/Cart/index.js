import React, {useState, useEffect} from 'react'
import { CartContainer, CartProductsContainer } from './StyledCartSection'

function Cart() {
    const[cartProducts, setCartProducts] = useState([])
    useEffect(()=>{
        const cartProducts = JSON.parse(localStorage.getItem("storedProducts"))
        if(cartProducts){
            setCartProducts(cartProducts)
        }
    },[])

    console.log(cartProducts)
  return (
    <CartContainer>
        <CartProductsContainer>hello</CartProductsContainer>
        <CartProductsContainer>hello</CartProductsContainer>
    </CartContainer>
  )
}

export default Cart