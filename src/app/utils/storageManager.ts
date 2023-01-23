export interface CartItem {
    id: number
    title: string
    image: string
    description: string
    price: number
    quantity: number
    subtotal : number 
  }

export const setCart = (product: any) => {
    let cartItems = getCart() as CartItem[];
    cartItems.push(product)
    localStorage.setItem('cart', JSON.stringify(cartItems))
}

export const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

