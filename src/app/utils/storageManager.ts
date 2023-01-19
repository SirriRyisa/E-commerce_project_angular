interface Product {
    title: string
    image: string
    description: string
    price: number
  
  }

export const setCart = (product: Product) => {
    let cartItems = getCart() as Product[];
    cartItems.push(product)
    localStorage.setItem('cart', JSON.stringify(cartItems))
}

export const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}