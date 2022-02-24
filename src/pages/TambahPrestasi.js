import * as React from 'react';
import { List, ListItem, Container, Grid, ListItemIcon, ListItemText, Alert, Button, Snackbar, Typography, Divider } from '@mui/material';
import Navbar from '../components/Navbar';
import tambahData from '../components/DataTambahPrestasi';

// icon
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const style = {
  width: '100%',
  height: 60,
  maxWidth: 700,
  bgcolor: 'background.paper',
};

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
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 10, mb: 2, fontWeight: 'bold' }} variant="h6" component="div">
            Nama Kegiatan
          </Typography>

          {tambahData.map((x, index) => (
            <List key={index} sx={style} component="nav" aria-label="mailbox folders">
              <ListItem>
                <ListItemIcon style={{ color: '#F78104' }}>{x.icon}</ListItemIcon>
                <ListItemText primary={x.title} />
              </ListItem>
              <Divider />
            </List>
          ))}

          <Grid item xs={12}>
            {/* Button  */}
            <Button
              variant="contained"
              color="warning"
              onClick={handleClick}
              sx={{
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
            <Snackbar open={open} autoHideDuration={700} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '60%' }}>
                Form telah terkirim!
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
