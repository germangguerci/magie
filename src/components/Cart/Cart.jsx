import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import DesktopCart from './DesktopCart';
import MobileCart from './MobileCart';

const Cart = () => {
    const [state, setState] = useState({
        mobileView: false
    })
    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
      }, []);

    return mobileView ? <MobileCart mobileView={mobileView} /> : <DesktopCart />;


    // return (
    //     <div className={styles.cart} >
    //         <h1>Cart</h1>
    //         <div className={styles.productsIncart} >
    //             { productsInCart.length ? productsInCart.map(product => <CartItem product={product} />) 
    //             : <p>There's nothing in the cart! Go buy something!</p>
    //             }
    //             <h2>Total: ${productsInCart.reduce((acc, product) => acc + product.price * product.quantityInCart, 0)}</h2>               
    //             <form action="http://localhost:3001/checkout" method="POST" >
    //                 <input type="hidden" name="items" value={JSON.stringify(items)} />
    //                 <input type="submit" className={styles.payButton} value="Pay" />
    //             </form>                
    //         </div>
    //     </div>
    // )
}

export default Cart;

/* 
    PAGO REALIZADO:
    collection_id=1232464712
    &collection_status=approved
    &payment_id=1232464712
    &status=approved
    &external_reference=null
    &payment_type=credit_card
    &merchant_order_id=2167525124
    &preference_id=694878249-0788e0f0-d474-4df3-ac58-19aa9d6b625f
    &site_id=MLA
    &processing_mode=aggregator
    &merchant_account_id=null
*/



// const fakeUsers = [
//     {
//         publicKey: "TEST-6669a518-2be6-41a7-9068-4226dbaf3661",
//         accessToken: "TEST-1294034537296050-122216-b6f75add24d60a1ee8d7d72a9f7b0953-184851111"
//     },
    //    {
    //        "id":694878249,
    //        "nickname":"TEST47MCKCCT",
    //        "password":"qatest8119",
    //        "site_status":"active",
    //        "email":"test_user_80578478@testuser.com",
    //        "public_key":"TEST-ffa64a00-32d1-4bd6-8e6e-65cacd1a8193",
    //        "access_token":"TEST-1335658861277365-123120-9be6c87d563467b9d0b9c9c2b63b16df-694878249"
    //     }
//     {
//         "id":694878448,
//         "nickname":"TETE4073168",
//         "password":"qatest7658",
//         "site_status":"active",
//         "email":"test_user_51660888@testuser.com"
//     }
// ];

// const apiKey = [
//     {
//         clientKey: "ck_9be9e390810677fc9eb7ae2c51c2533a9e58669e",
//         clientSecretKey: "cs_cfdc41e2cff98ba78c5820d13666b2e51cdb9a9c"
//     }
// ];

// curl -X POST \
// -H "Content-Type: application/json" \
// -H 'Authorization: Bearer TEST-1294034537296050-122216-b6f75add24d60a1ee8d7d72a9f7b0953-184851111' \
// "https://api.mercadopago.com/users/test_user" \
// -d '{"site_id":"MLA"}'

/* 
    Tarjetas de Prueba:
    5031 7557 3453 0604 - 11/25 - 123
    4509 9535 6623 3704 - 11/25 - 123
    3711 803032 57522   - 11/25 - 1234
*/