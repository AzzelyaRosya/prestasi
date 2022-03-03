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
import Navbar from '../components/Navbar';
import ButtonSubmit from '../components/ButtonSubmit';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

// icon
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const options = ['Internasional', 'Asia', 'ASEAN', 'Nasional', 'Provinsi'];

const CustomCheckbox = styled(RadioGroup)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function DialogTambahPrestasi(props) {
  const { onClose, value: valueProp, open, ...other } = props;

  // React.useEffect(() => {
  //   if (!open) {
  //     setValue(valueProp);
  //   }
  // }, [valueProp, open]);

  // const handleEntering = () => {
  //   if (radioGroupRef.current != null) {
  //     radioGroupRef.current.focus();
  //   }
  // };

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
  const [open, setOpen] = React.useState(false);
  const radioGroupRef = React.useRef(null);
  const [jenis, setJenis] = React.useState('');
  const [tingkatan, setTingkatan] = React.useState('');
  const [nomor, setNomor] = React.useState('');
  const [tanggal, setTanggal] = React.useState('');
  const [deskripsi, setDeskripsi] = React.useState('');
  const [partisipan, setPartisipan] = React.useState('');
  const [value, setValue] = React.useState('Dione');

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log(`\n`, `Jenis Prestasi: ${jenis}`, `\n`, `Tingkatan: ${tingkatan}`, `\n`, `Nomor: ${nomor}`, `\n`, `Tanggal: ${tanggal}`, `\n`, `Deskripsi: ${deskripsi}`, `\n`, `Partisipan: ${partisipan}`);
  };

  const handleTingkatan = (event) => {
    setTingkatan(event.target.value);
    console.log(event.target.value);
  };

  // const handleJenis = (event) => {
  //   setJenis(event.target.value);
  //   console.log(event.target.value);
  // };

  // const handleNomor = (event) => {
  //   setNomor(event.target.value);
  //   console.log(event.target.value);
  // };

  // const handleTanggal = (event) => {
  //   setTanggal(event.target.value);
  //   console.log(event.target.value);
  // };

  // const handleDeskripsi = (event) => {
  //   setDeskripsi(event.target.value);
  //   console.log(event.target.value);
  // };

  // const handlePartisipan = (event) => {
  //   setPartisipan(event.target.value);
  //   console.log(event.target.value);
  // };

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
        <Grid style={{ width: '100%', fontSize: '20px' }}>
          <Typography sx={{ mt: 10, mb: 2, fontWeight: 'bold' }} variant="h6" component="div">
            Nama Kegiatan
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Jenis Prestasi */}
            <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
              <List sx={{ pt: 2, pb: 2 }} component="div" role="group">
                <Grid sx={{ display: 'flex', alignItems: 'flex-end', fontSize: 10 }}>
                  <Grid sx={{ mr: 3, color: '#F78104' }}>
                    <EmojiEventsOutlinedIcon />
                  </Grid>{' '}
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    value={jenis}
                    onChange={(e) => setJenis(e.target.value)}
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    color="warning"
                    id="input-with-sx"
                    label="Jenis Prestasi"
                    variant="standard"
                  />
                </Grid>
              </List>
            </Box>

            {/* Tingkatan */}
            <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
              <List sx={{ pt: 2, pb: 2 }} component="div" role="group">
                <Grid onClick={handleClickListItem} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Grid sx={{ mr: 3, color: '#F78104' }}>
                    <StarBorderIcon />{' '}
                  </Grid>
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    value={tingkatan}
                    onChange={(e) => setTingkatan(e.target.value)}
                    value={tingkatan}
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    color="warning"
                    id="input-with-sx"
                    label="Tingkatan"
                    variant="standard"
                  />
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
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    value={nomor}
                    onChange={(e) => setNomor(e.target.value)}
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    color="warning"
                    id="input-with-sx"
                    label="Nomor Pertandingan"
                    variant="standard"
                  />
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
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    color="warning"
                    id="input-with-sx"
                    label="Tanggal Pertandingan"
                    variant="standard"
                  />
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
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    color="warning"
                    id="input-with-sx"
                    label="Deskripsi"
                    variant="standard"
                  />
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
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    value={partisipan}
                    onChange={(e) => setPartisipan(e.target.value)}
                    fullWidth
                    label="fullWidth"
                    id="fullWidth"
                    color="warning"
                    id="input-with-sx"
                    label="Tambahkan Partisipan"
                    variant="standard"
                  />
                </Grid>
              </List>
            </Box>

            <Grid item xs={12} sx={{ mb: 2 }}>
              <ButtonSubmit type="submit" />
            </Grid>
          </form>
        </Grid>
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
