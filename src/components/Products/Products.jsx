import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Boucles doreilles PERLA', description: 'Fille (en Rouje) with a pearl earring - thanks to these fine gold beauties.', price: '$110', image: 'https://i.postimg.cc/J0g60BHF/59-DEC0-B8-5019-4650-BA95-D9161-C2-A7-D2-F-1-201-a.jpg' },
    { id: 2, name: 'AMELIE necklace', description: 'A heart of gold... literally.', price: '$185', image: 'https://i.postimg.cc/zGY7QNCT/D18-F75-D0-40-EA-4451-B492-0167-FC7290-E9.png' },
    { id: 3, name: 'AUDREY earrings', description: 'Directly from a family jewel box. Here is Audrey: the twisted loops that we do not want to take off.', price: '$110', image: 'https://i.postimg.cc/pVg3PgQL/47-BE3-CF6-4118-4-EE7-B5-A9-EDCDC2-DAD8-AB.png' },
];

const Products = () => {
    return (
    <main>
        <Grid container justify= "center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                    </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;