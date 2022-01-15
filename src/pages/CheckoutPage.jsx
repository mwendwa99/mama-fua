import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

// stripe imports
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';


import Logo from '../components/Logo';
import Selector from '../components/Selector';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');

const Checkout = () => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };


    return (
        <Container maxWidth='xl' sx={{ p: '1rem' }}>
            <Grid container sx={{ backgroundColor: 'gray' }}>
                <Grid item xs={6} sx={{ backgroundColor: '#fafafa' }}>
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
                        <Elements stripe={stripePromise} options={options}>
                            <CheckoutForm />
                        </Elements>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Container maxWidth='md' sx={{ backgroundColor: 'pink' }}>
                        <Logo />
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Checkout;