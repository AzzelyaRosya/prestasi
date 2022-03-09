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
  TextField,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker, MobileDatePicker } from '@mui/lab';

import Navbar from '../components/Navbar';
import ButtonSubmit from '../components/ButtonSubmit';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

// icon
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import UploadIcon from '@mui/icons-material/Upload';

const options = ['Internasional', 'Asia', 'ASEAN', 'Nasional', 'Provinsi'];

const uploadButton = {
  color: '#bfbfbf',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
  },
  width: '100%',
  height: 35,
  fontSize: 16,
  textTransform: 'capitalize',
  boxShadow: 'none',
  paddingRight: '2px',
};

function DialogTambahPrestasi(props) {
  const { onClose, value: valueProp, open, ...other } = props;

  return (
    <Dialog sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 }, color: '#F78104' }} maxWidth="xs" open={open} {...other}>
      <DialogContent dividers>{props.content}</DialogContent>
      <DialogActions color="warning">{props.action}</DialogActions>
    </Dialog>
  );
}

DialogTambahPrestasi.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function TambahPrestasi() {
  // State to store uploaded file
  const [sertifikat, setSertifikat] = React.useState('');

  // Handles file upload event and updates state
  function handleUpload(event) {
    setSertifikat(event.target.files[0]);
  }

  const [open, setOpen] = React.useState(false);
  const radioGroupRef = React.useRef(null);
  const [kegiatan, setKegiatan] = React.useState('');
  const [jenis, setJenis] = React.useState('');
  const [tingkatan, setTingkatan] = React.useState('');
  const [nomor, setNomor] = React.useState('');
  const [tanggal, setTanggal] = React.useState('');
  const [deskripsi, setDeskripsi] = React.useState('');
  const [partisipan, setPartisipan] = React.useState('');

  const [value, setValue] = React.useState('Dione');

  const handleSubmit = (event) => {
    const dataSend = {
      kegiatan,
      jenis,
      tingkatan,
      nomor,
      tanggal,
      deskripsi,
      partisipan,
    };
    console.log(dataSend);
    event.preventDefault();
  };

  // const handleSubmit = function (event) {
  //   event.preventDefault();
  //   console.log(
  //     `Nama Kegiatan: ${kegiatan}`,
  //     `\n`,
  //     `Jenis Prestasi: ${jenis}`,
  //     `\n`,
  //     `Tingkatan: ${tingkatan}`,
  //     `\n`,
  //     `Nomor: ${nomor}`,
  //     `\n`,
  //     `Tanggal: ${tanggal}`,
  //     `\n`,
  //     `Deskripsi: ${deskripsi}`,
  //     `\n`,
  //     `Partisipan: ${partisipan}`,
  //     `\n`,
  //     `Upload Sertifikat: ${sertifikat.name}`
  //   );
  // };

  const handleTingkatan = (event) => {
    setTingkatan(event.target.value);
    console.log(event.target.value);
  };

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  const handleChange = (event) => {
    setTingkatan(event.target.value);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleOk = () => {
    handleClose(value);
  };

  return (
    <>
      <Container>
        <Navbar>Tambah Prestasi</Navbar>
        <form onSubmit={handleSubmit} autocomplete="off">
          <Grid style={{ width: '100%', fontSize: '20px' }}>
            <Typography sx={{ mt: 10, mb: 2, fontWeight: 'bold' }} variant="h6" component="div">
              <TextField InputProps={{ disableUnderline: true }} value={kegiatan} onChange={(e) => setKegiatan(e.target.value)} fullWidth color="warning" placeholder="Nama Kegiatan" variant="standard" />
            </Typography>

            {/* Jenis Prestasi */}
            <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
              <List sx={{ pt: 2, pb: 2 }} component="div" role="group">
                <Grid sx={{ display: 'flex', alignItems: 'flex-end', fontSize: 10 }}>
                  <Grid sx={{ mr: 3, color: '#F78104' }}>
                    <EmojiEventsOutlinedIcon />
                  </Grid>{' '}
                  <TextField InputProps={{ disableUnderline: true }} value={jenis} onChange={(e) => setJenis(e.target.value)} fullWidth color="warning" placeholder="Jenis Prestasi" variant="standard" />
                </Grid>
              </List>
            </Box>

            {/* Tingkatan */}
            <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
              <List sx={{ pt: 2, pb: 2 }} component="div" role="group">
                <Grid onClick={handleClickListItem} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Grid sx={{ mr: 3, color: '#F78104' }}>
                    <StarBorderIcon />
                  </Grid>
                  <TextField InputProps={{ disableUnderline: true }} value={tingkatan} onChange={(e) => setTingkatan(e.target.value)} fullWidth color="warning" placeholder="Tingkatan" variant="standard" />
                </Grid>

                <DialogTambahPrestasi id="ringtone-menu" keepMounted open={open} onClose={handleClose} value={value} />
              </List>
            </Box>

            {/* Nomor Pertandingan */}

            <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
              <List sx={{ pt: 2, pb: 2 }} component="div" role="group">
                <Grid sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Grid sx={{ mr: 3, color: '#F78104' }}>
                    <SettingsApplicationsOutlinedIcon />
                  </Grid>
                  <TextField InputProps={{ disableUnderline: true }} value={nomor} onChange={(e) => setNomor(e.target.value)} fullWidth color="warning" id="input-with-sx" type="number" placeholder="Nomor Pertandingan" variant="standard" />
                </Grid>
              </List>
            </Box>

            {/* Tanggal Pertandingan */}
            <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
              <List sx={{ pt: 2, pb: 2 }} component="div" role="group">
                <Grid sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Grid sx={{ mr: 3, color: '#F78104' }}>
                    <DateRangeOutlinedIcon />
                  </Grid>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      value={tanggal}
                      InputProps={{
                        disableUnderline: true,
                      }}
                      onChange={(newTanggal) => {
                        setTanggal(newTanggal);
                      }}
                      renderInput={(params) => <TextField fullWidth placeholder="Tanggal Pertandingan" variant="standard" {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
              </List>
            </Box>

            {/* Deskripsi */}

            <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
              <List sx={{ pt: 2, pb: 2 }} component="div" role="group">
                <Grid sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Grid sx={{ mr: 3, color: '#F78104' }}>
                    <NotesOutlinedIcon />
                  </Grid>
                  <TextField InputProps={{ disableUnderline: true }} value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} fullWidth color="warning" id="input-with-sx" placeholder="Deskripsi" variant="standard" />
                </Grid>
              </List>
            </Box>

            {/* Tambahkan Partisipan */}
            <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
              <List sx={{ pt: 2, pb: 2 }} component="div" role="group">
                <Grid sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Grid sx={{ mr: 3, color: '#F78104' }}>
                    <PeopleAltOutlinedIcon />
                  </Grid>
                  <TextField InputProps={{ disableUnderline: true }} value={partisipan} onChange={(e) => setPartisipan(e.target.value)} fullWidth color="warning" placeholder="Tambahkan Partisipan" variant="standard" />
                </Grid>
              </List>
            </Box>

            {/* Sertifikat */}
            <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', mt: -1 }}>
              <List Container sx={{ pt: 2, pb: 2, display: 'flex', mb: 0.5, alignItems: 'center' }} component="div" role="group">
                <Grid sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <input type="file" accept=".png, .jpg, .jpeg" id="buttonfile" hidden onChange={handleUpload} />
                  <Grid sx={{ mr: 3, color: '#F78104' }}>
                    <UploadIcon />
                  </Grid>
                  {sertifikat !== '' ? (
                    <Typography pb={1} fontSize={13} fontWeight={'bold'}>
                      {sertifikat.name}
                    </Typography>
                  ) : (
                    <label htmlFor="buttonfile">
                      <Button component="span" fullWidth sx={uploadButton}>
                        Upload Sertifikat
                      </Button>
                    </label>
                  )}
                </Grid>

                {/* File Name */}

                {/* <Typography fontSize={12} fontStyle={'italic'} color={'red'}>
                  *Format: PNG, JPG, JPEG
                </Typography> */}
              </List>
            </Box>

            {/* Submit */}
            <Grid item xs={12} sx={{ mb: 2 }}>
              <ButtonSubmit type="submit" autocomplete="off" />
            </Grid>
          </Grid>
        </form>

        {/* dialog for tingkatan */}
        <DialogTambahPrestasi
          open={open}
          content={
            <RadioGroup ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={tingkatan} onChange={handleChange}>
              {options.map((option) => (
                <FormControlLabel color="warning" value={option} key={option} control={<Radio color="warning" />} label={option} />
              ))}
            </RadioGroup>
          }
          action={
            <>
              <Button color="warning" autoFocus onClick={handleCancel}>
                Cancel
              </Button>
              <Button color="warning" onClick={handleOk}>
                Ok
              </Button>
            </>
          }
        />
      </Container>
    </>
  );
}
