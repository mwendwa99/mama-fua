import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

// stripe imports
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';


import Logo from '../components/Logo';
import Selector from '../components/Selector';
import BasicTable from '../components/BasicTable';
import SummaryHeader from '../components/SummaryHeader';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const options = {
    // passing the client secret obtained from the server
    // clientSecret: '{{CLIENT_SECRET}}',
    clientSecret: process.env.REACT_APP_STRIPE_CLIENT_SECRET,
};

const Checkout = ({ children }) => {

    return (
        <Container maxWidth='xl' sx={{ p: '2rem' }}>
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
                        <Elements stripe={stripePromise} options={options}>
                            {children}
                        </Elements>
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

export default Checkout;