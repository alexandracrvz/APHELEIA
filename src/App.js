import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { cart } = await commerce.products.list();

        setProducts(cart);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });

        setCart (cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.remove(productId);

        setCart (cart);

    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart)
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);


    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
        <Routes>
                <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} />
        </Routes>
        </div>
    )
}

export default App;