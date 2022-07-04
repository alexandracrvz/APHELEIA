# APHELEIA

## Project Links

Beta 1 APHELEIA Website: https://apheleiashop.netlify.app
Beta 2: Coming Soon!
## Project Description

APHELEIA a modern E-Commerce website created using React.js, Commerce.js, and Stripe. It is designed for users to browse available items, add them to their cart, and purchase the items.

## Code Snippet

```js
const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    }
```

This function adds the product to the cart. It is an asynchronous function, and it accepts two different parameters. The handleAddToCart is expecting two parameters then it uses these parameters to hand over to the API to then add the product to the cart. "const" is getting some type of response, in this case the response is "item", and then tells "commerce" to add the product, and quantity of the product to the cart.

## Wireframes

Mobile: [(https://imgur.com/oPpuB8W)](https://imgur.com/oPpuB8W)


## Time/Priority Matrix 

|  Key | Feature | Time | Priority
|---|---|---|---|
| 1 | Create React | 30 min | 9
| 2 | Create skeleton of React components, successful API fetch | 1 hr | 8
| 3 | React E-Commerce Home component  | 3 hr | 7
| 4 | React Products Details component | 3 hr | 7
| 5 | React Product component | 3 hr | 7
| 6 | React MVP styling | 7 hr | 6
| 7 | Set up Commerce.js | 1 hr | 9
| 8 | Add To Cart functionality | 2 hr | 9
| 9 | Create Cart Layout | 2 hr | 9
| 10 | Button Functionality | 4 hr | 9

## Code Resources
Material UI
Stack Overflow
JavaScript Mastery



