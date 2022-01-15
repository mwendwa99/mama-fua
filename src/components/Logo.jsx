import React from 'react';
import { IconButton, Typography, Box, Grid } from '@mui/material';

import assets from '../assets';

const Logo = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h1">
                        <IconButton fontSize='medium' disableFocusRipple disableRipple disableTouchRipple>
                            <img src={assets.logo} width='100%' height='100%' alt='mama-fua-logo' />
                        </IconButton>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Logo;