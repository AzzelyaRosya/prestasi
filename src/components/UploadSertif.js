import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
// Import Icon
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

function UploadFile() {
  // State to store uploaded file
  const [file, setFile] = React.useState('');

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  // Costum Button
  const UploadButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#f2f2f2'),
    backgroundColor: 'gray',
    border: '#f2f2f2',
    '&:hover': {
      backgroundColor: '#f2f2f2',
      border: '#f2f2f2',
    },
  }));

  return (
    <>
      <Grid Container sx={{ display: 'flex', mt: 2, mb: 0.5, alignItems: 'center' }}>
        {/* Button */}
        <Grid item sx={{ mr: 2 }}>
          <input type="file" accept=".png, .jpg, .jpeg" id="buttonfile" hidden onChange={handleUpload} />
          <label htmlFor="buttonfile">
            <UploadButton variant="outlined" startIcon={<AddIcon />} component="span" fullWidth>
              Upload Sertifikat
            </UploadButton>
          </label>
        </Grid>

        {/* File Name */}
        <Grid item>
          <Typography fontSize={13} fontWeight={'bold'}>
            {file.name}
          </Typography>
        </Grid>
      </Grid>

      {/* Format description */}
      <Typography fontSize={12} fontStyle={'italic'} color={'red'}>
        *Format: PNG, JPG, JPEG
      </Typography>
    </>
  );
}
export default function UploadCertificateButton() {
  return <UploadFile />;
}
