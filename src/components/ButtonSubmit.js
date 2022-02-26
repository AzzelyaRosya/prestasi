import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Button, Snackbar, Box, Alert } from '@mui/material';

const SaveButton = styled(Button)({
  transition: ' 1ms smooth',
  marginTop: 0,
  marginBottom: 20,
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 15,
  letterSpacing: '1px',
  width: '95%',
  padding: '11px 81px',
  lineHeight: 1.5,
  backgroundColor: '#F78104',
  fontFamily: ['Roboto', 'poppins', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  '&:hover': {
    backgroundColor: '#F78104',
    padding: '11px 81px',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#F78104',
    borderColor: '#F78104',
  },
  '&:focus': {
    boxShadow: '#F78104',
  },
});

export default function ButtonSubmit() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Box sx={{ mt: 8 }}>
      <AppBar
        position="fixed"
        sx={{
          top: 'auto',
          bottom: 0,
          bgcolor: 'transparent',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            margin: 'auto',
            textAlign: 'center',
            width: '95%',
          }}
        >
          <SaveButton onClick={handleClick} variant="contained" disableRipple>
            Submit
          </SaveButton>
        </Box>
      </AppBar>

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', mb: 7 }}>
          Form Terkirim!
        </Alert>
      </Snackbar>
    </Box>
  );
}
