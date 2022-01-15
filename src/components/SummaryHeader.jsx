import React from 'react';
import { Typography, Box } from '@mui/material';

const SummaryHeader = ({ title }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#D58E48',
                filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))'
            }}
        >
            <Typography align='center' variant='h5' sx={{ color: '#fff', p: '1rem' }}>
                <strong>{title}</strong>
            </Typography>
        </Box>
    );
}

export default SummaryHeader;