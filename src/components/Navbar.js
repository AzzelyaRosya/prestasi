import React from 'react';
import { AppBar, Box, IconButton, Typography } from '@mui/material';

// icon
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <AppBar
        position="fixed"
        elevation="none"
        sx={{
          width: '100%',
          height: '55px',
          alignItem: 'center',
          bgcolor: '#249EA0',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Link to="/">
            {/* Icon */}
            <IconButton
              onClick
              sx={{
                pt: 1.5,
                mr: 0.5,
                ml: 0.5,
                color: '#fff',
              }}
            >
              <ArrowBackTwoToneIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Link>

          {/* Title */}
          <Typography sx={{ fontSize: 18, pt: 1.7, fontWeight: 'bold' }}>{props.children}</Typography>
        </Box>
      </AppBar>
    </>
  );
}
