import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';

import Logo from '../components/Logo';
import Selector from '../components/Selector';
import Table from '../components/BasicTable';

const Checkout = () => {

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
                        <Table />
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