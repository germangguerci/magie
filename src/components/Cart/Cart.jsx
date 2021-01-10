import React, { useState, useEffect } from 'react';

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

    return mobileView ? <MobileCart mobileView={mobileView} key="mobileCart"/> : <DesktopCart key="desktopCart" />;
}

export default Cart;

/* 
    PAGO REALIZADO:

    collection_id=1232464712&
    collection_status=approved&
    payment_id=1232464712&
    status=approved&
    external_reference=null&
    payment_type=credit_card&
    merchant_order_id=2167525124&
    preference_id=694878249-0788e0f0-d474-4df3-ac58-19aa9d6b625f&
    site_id=MLA&
    processing_mode=aggregator&
    merchant_account_id=null


    collection_id=1232685524&
    collection_status=approved&
    payment_id=1232685524&
    status=approved&
    external_reference=null&
    payment_type=credit_card&
    merchant_order_id=2201362519&
    preference_id=694878249-57bf0fd9-6b65-4eef-a9c6-cdb8008344ad&
    site_id=MLA&
    processing_mode=aggregator&
    merchant_account_id=null
*/

/*
const data = {
  payment_method: "bacs",
  payment_method_title: "Direct Bank Transfer",
  set_paid: true,
  billing: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US",
    email: "john.doe@example.com",
    phone: "(555) 555-5555"
  },
  shipping: {
    first_name: "John",
    last_name: "Doe",
    address_1: "969 Market",
    address_2: "",
    city: "San Francisco",
    state: "CA",
    postcode: "94103",
    country: "US"
  },
  line_items: [
    {
      product_id: 93,
      quantity: 2
    },
    {
      product_id: 22,
      variation_id: 23,
      quantity: 1
    }
  ],
  shipping_lines: [
    {
      method_id: "flat_rate",
      method_title: "Flat Rate",
      total: "10.00"
    }
  ]
};
*/

/* 
?collection_id=1232684553&collection_status=approved&payment_id=1232684553&status=approved&external_reference=null&payment_type=credit_card&merchant_order_id=2201296071&preference_id=694878249-6d5cd612-d613-485f-a92f-03847fe6f5fd&site_id=MLA&processing_mode=aggregator&merchant_account_id=null
*/

/*
 curl -X GET \
  'https://api.mercadopago.com/merchant_orders/:2201362519' \
  -H 'Authorization: Bearer TEST-7543431084673570-011002-510f1b079bd2dbeb6027d3b12f74eabb-694878448'
*/

/* const fakeUsers = [
    {
        publicKey: "TEST-6669a518-2be6-41a7-9068-4226dbaf3661",
        accessToken: "TEST-1294034537296050-122216-b6f75add24d60a1ee8d7d72a9f7b0953-184851111"
    },
       {
           "id":694878249,
           "nickname":"TEST47MCKCCT",
           "password":"qatest8119",
           "site_status":"active",
           "email":"test_user_80578478@testuser.com",
           "public_key":"TEST-ffa64a00-32d1-4bd6-8e6e-65cacd1a8193",
           "access_token":"TEST-1335658861277365-123120-9be6c87d563467b9d0b9c9c2b63b16df-694878249"
        }
    {
        "id":694878448,
        "nickname":"TETE4073168",
        "password":"qatest7658",
        "site_status":"active",
        "email":"test_user_51660888@testuser.com"
    }
];
*/
/* const apiKey = [
    {
        clientKey: "ck_9be9e390810677fc9eb7ae2c51c2533a9e58669e",
        clientSecretKey: "cs_cfdc41e2cff98ba78c5820d13666b2e51cdb9a9c"
    }
];
*/

/* curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer TEST-1294034537296050-122216-b6f75add24d60a1ee8d7d72a9f7b0953-184851111' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"MLA"}'
*/

/* 
    Tarjetas de Prueba:
    5031 7557 3453 0604 - 11/25 - 123
    4509 9535 6623 3704 - 11/25 - 123
    3711 803032 57522   - 11/25 - 1234
*/