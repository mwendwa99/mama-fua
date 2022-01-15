import React from 'react';
import { Fab, Typography, Box, Grid } from '@mui/material';

import assets from '../assets';

const Logo = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h1">
                        <Fab fontSize='medium'>
                            <img src={assets.logo} alt='mama-fua-logo' />
                        </Fab>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export { Logo };