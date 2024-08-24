import React, {useState} from 'react';
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/reducers/cartSlice';
import swal from 'sweetalert';

const PaypalCheckoutButton = (props) => {
    // const {desc,price} = props;
    // useSelector(state=>state.cart)
    const dispatch= useDispatch()
    const {product,initialOptions} = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderId) => {
        setPaidFor(true);
        swal("Good job!", "You order Done SuccessFully", "success");
    }

  return (
    <PayPalScriptProvider options={initialOptions}  >
        <PayPalButtons 
            onClick={(data, actions) => {
                const hasAlreadyBoughtCourse = false;
                if(hasAlreadyBoughtCourse){
                    setError("You Already bough this course");
                    return actions.reject();
                }else{
                    return actions.resolve();
                }
            }}
            createOrder = {(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price,
                            },
                        },
                    ],
                });
            }}
            onApprove = { async (data, action) => {
                const order = await action.order.capture();
                console.log("order", order);
                dispatch(clearCart())
                
                handleApprove(data.orderID);
            }}
            onCancel={() => {}}
            onError={(err) => {
                setError(err);
                console.log("PayPal Checkout onError", err);
            }}
        />
    </PayPalScriptProvider>
  )
}

export default PaypalCheckoutButton