interface Product {
    title: string
    image: string
    description: string
    price: number
  
  }

export const setCart = (product: Product) => {
    let cartItems: [] = getCart();
    // localStorage.setItem('cart', [ ...cartItems, product ])
    console.log(product);

    cartItems.push(  )

    console.log(cartItems);

}

export const getCart = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]');;
}