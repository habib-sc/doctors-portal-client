import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const { price, email, patientName } = appointment;

    useEffect( () => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            if (data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        })

    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null) {
            return;
        }

        const {error, } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        // Setting Error 
        if(error){
            setCardError(error.message);
            setSuccess('');
        }else{
            setCardError('');
        }

        // Confirm Card Payment 
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: email
                },
              },
            },
        );

        if(intentError) {
            setCardError(intentError);
        }else{
            setCardError('');
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats! Your payment is completed.');
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
                <button type="submit" className='btn btn-primary text-white mt-5' disabled={!stripe || !clientSecret}>
                    Pay Now
                </button>
            </form>

            {cardError &&
                <p className='text-red-500'>{cardError}</p>
            }
            {success &&
                <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction Id: <span className='text-orange-500 font-semibold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;