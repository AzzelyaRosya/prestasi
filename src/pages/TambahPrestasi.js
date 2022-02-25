import * as React from 'react';
import { List, ListItem, Container, Grid, ListItemIcon, ListItemText, Button, Snackbar, Typography, Divider, Box, ListItemButton, Backdrop } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Navbar from '../components/Navbar';
import tambahData from '../components/DataTambahPrestasi';

// icon
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CircularProgress from '@mui/material/CircularProgress';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TambahPrestasi() {
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
    <>
      <Container>
        <Navbar>Tambah Prestasi</Navbar>
        <Grid style={{ width: '100%' }}>
          <Typography sx={{ mt: 10, mb: 2, fontWeight: 'bold' }} variant="h6" component="div">
            Nama Kegiatan
          </Typography>

          {tambahData.map((x, index) => (
            <Box key={index} sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }} fullWidth label="fullWidth" id="fullWidth">
              <List sx={{ pt: 2, pb: 2 }}>
                <ListItem disablePadding>
                  <ListItemIcon style={{ color: '#F78104' }}>{x.icon}</ListItemIcon>
                  <ListItemText primary={x.title} />
                </ListItem>
              </List>
              <Divider />
            </Box>
          ))}

          <Grid item xs={12}>
            {/* Button  */}
            <Button
              variant="contained"
              color="warning"
              onClick={handleClick}
              sx={{
                mt: 40,
                width: '100%',
                height: 45,
                fontSize: 15,
                textTransform: 'capitalize',
                display: 'flex',
                alignContent: 'flex-end',
                alignSelf: 'flex-end',
              }}
            >
              Submit
            </Button>

            {/* Snackbar */}
            {/* <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Form Terkirim!
              </Alert>
            </Snackbar> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
