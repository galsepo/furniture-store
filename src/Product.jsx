import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments } from './utils/firebase/firebase.utils';

import SHOP_DATA from '../src/shop-data';

export const ProductsContext = createContext({
    ProductsContext: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    console.log(1)
    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA);
    }, []);
    console.log(2)
    const value = { products };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
    console.log(3)
};