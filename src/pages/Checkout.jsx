import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Logo } from '../components/Logo';
import { PaymentMethod } from '../components/PaymentMethod';

const useStyles = makeStyles({
    root: {
        padding: '1rem',
    },
    paymentGrid: {
        backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const Checkout = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container sx={{ backgroundColor: 'blue' }}>
                <Grid item xs={6} className={classes.paymentGrid}>
                    <Logo />
                    <Container maxWidth='md'>
                        <PaymentMethod />
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    <Container maxWidth='md' sx={{ backgroundColor: 'pink' }}>
                        <Logo />
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Checkout;