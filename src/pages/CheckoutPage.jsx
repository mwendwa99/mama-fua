import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// stripe imports
import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_PUBLISHABLE } from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';


import Logo from '../components/Logo';
import Selector from '../components/Selector';
import BasicTable from '../components/BasicTable';
import SummaryHeader from '../components/SummaryHeader';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

// send notification on successful payment
const notifySuccess = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_CENTER
    });
};

// send notification ON ERROR
const notifyError = (message) => {
    toast.error(message, {
        position: toast.POSITION.TOP_CENTER
    });
};

const onToken = (amount, description) => token =>
    axios.post(PAYMENT_SERVER_URL,
        {
            description,
            source: token.id,
            currency: CURRENCY,
            amount: fromDollarToCent(amount) //converts to cents
        })
        .then(({ data }) => {
            notifySuccess('Payment successful');
        })
        .catch(({ response }) => {
            notifyError(response.data.error.message);
        });

const CheckoutPage = ({ name, description, amount }) => {
    return (
        <Container maxWidth='xl' sx={{ p: '2rem' }}>
            <ToastContainer />
            <Grid container>
                <Grid item xs={8} sx={{ backgroundColor: '#f5f5f5', p: '1rem' }}>
                    <Box sx={{
                        p: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Logo />
                    </Box>
                    <Box sx={{ p: '1rem' }}>
                        <Typography variant='h5'>
                            <strong>Payment Method</strong>
                        </Typography>
                        <Selector />
                    </Box>
                    <Box sx={{ p: '1rem' }}>
                        <Typography variant='h5'>
                            <strong>Payment Details</strong>
                        </Typography>
                        <StripeCheckout
                            name={name}
                            description={description}
                            amount={fromDollarToCent(amount)}
                            token={onToken(amount, description)}
                            currency={CURRENCY}
                            stripeKey={STRIPE_PUBLISHABLE}
                            zipCode
                            email
                            allowRememberMe
                        />
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ backgroundColor: '#EAC7A3', p: '1rem' }}>
                    <SummaryHeader title='Booking Summary' />
                    <Container maxWidth='sx'>
                        <BasicTable />
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CheckoutPage;