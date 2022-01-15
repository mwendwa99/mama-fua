import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import assets from '../assets';

export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('M-PESA');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Box sx={{ pt: '2rem' }}>
            <ToggleButtonGroup
                size='small'
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="M-PESA" color='success' size='small'>
                    <img src={assets.mpesa} alt="mpesa" width={'30%'} height={'auto'} style={{ objectFit: 'cover' }} />
                </ToggleButton>
                <ToggleButton value="Paypal" color='primary' size='small'>
                    <img src={assets.paypal} alt="paypal" width={'30%'} height={'auto'} style={{ objectFit: 'cover' }} />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}
