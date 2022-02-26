import * as React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Container,
  Grid,
  ListItemIcon,
  ListItemText,
  Button,
  Snackbar,
  Typography,
  Divider,
  Box,
  ListItemButton,
  Backdrop,
  DialogTitle,
  DialogActions,
  DialogContent,
  Dialog,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import Navbar from '../components/Navbar';
import tambahData from '../components/DataTambahPrestasi';
import ButtonSubmit from '../components/ButtonSubmit';

const options = ['Internasional', 'Asia', 'ASEAN', 'Nasional', 'Provinsi'];

function DialogTambahPrestasi(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }} maxWidth="xs" TransitionProps={{ onEntering: handleEntering }} open={open} {...other}>
      <DialogContent dividers>
        <RadioGroup ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={value} onChange={handleChange}>
          {options.map((option) => (
            <FormControlLabel color="warning" value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

DialogTambahPrestasi.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function TambahPrestasi() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Dione');

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <>
      <Container>
        <Navbar>Tambah Prestasi</Navbar>
        <Grid style={{ width: '100%', fontSize: '20px' }}>
          <Typography sx={{ mt: 10, mb: 2, fontWeight: 'bold' }} variant="h6" component="div">
            Nama Kegiatan
          </Typography>

          {tambahData.map((x, index) => (
            <Box key={index} sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }} fullWidth label="fullWidth" id="fullWidth">
              <List sx={{ pt: 2, pb: 2 }} component="div" role="group">
                <ListItem button divider aria-haspopup="true" aria-controls="ringtone-menu" aria-label="phone ringtone" onClick={handleClickListItem}>
                  <ListItemIcon style={{ color: '#F78104' }}>{x.icon}</ListItemIcon>
                  <ListItemText primary={x.title} />
                </ListItem>

                <DialogTambahPrestasi id="ringtone-menu" keepMounted open={open} onClose={handleClose} value={value} />
              </List>
            </Box>
          ))}

          <Grid item xs={12}>
            <ButtonSubmit />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
