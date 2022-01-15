import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Logo from '../components/Logo';
import Selector from '../components/Selector';

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
        <Container maxWidth='xl' className={classes.root}>
            <Grid container sx={{ backgroundColor: 'blue' }}>
                <Grid item xs={6} className={classes.paymentGrid}>
                    <Logo />
                    <Box style={{ padding: '1rem' }}>
                        <Typography variant='h5'>
                            <strong>Payment Method</strong>
                        </Typography>
                        <Selector />
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