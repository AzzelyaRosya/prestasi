import React, { useState } from 'react';
import { Button, Box, Container, Grid, IconButton, InputAdornment, TextField, Avatar, Card, Typography } from '@mui/material';
// Import Icon
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
// Import Component
import Navbar from '../components/Navbar';
// Import React router
import { Link } from 'react-router-dom';

import prestasiData from '../components/DataPrestasi';
import _ from 'lodash';

export default function ListPrestasi() {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(prestasiData);

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    var searchQuery = value.toString().toLowerCase();

    let listdata = ['img', 'nama', 'desc', 'pelatih', 'harga', 'rating'].map((x, i) => {
      return prestasiData.filter((el) => {
        if (el[x]) {
          return el[x].toString().toLowerCase().indexOf(searchQuery) !== -1;
        }
      });
    });

    var dataset = _.maxBy(listdata, function (o) {
      return o.length;
    });
    setData(dataset);
  };
  return (
    <>
      <Container>
        <Navbar>Prestasi</Navbar>

        <Box sx={{ mt: 10 }}>
          <Grid container direction="row">
            <Grid item xs={10.7}>
              <TextField
                value={searchText}
                onChange={(e) => handleChange(e.target.value)}
                align="center"
                style={{ height: 57, backgroundColor: '#f2f2f2', width: '100%', marginBottom: 10 }}
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: 7,
                  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e6e6e6',
                    borderRadius: 7,
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e6e6e6',
                    borderRadius: 7,
                  },
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    border: 2,
                    borderRadius: 7,
                    borderColor: '#e6e6e6',
                  },
                }}
              />
            </Grid>
            {/* Button Setting */}
            <Grid item xs={1.3}>
              <IconButton>
                <FilterListIcon sx={{ fontSize: 35, color: '#249EA0' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>

        {/* card */}
        {data.map((x, index) => (
          <Card elevation={2} key={index} sx={{ maxWidth: 5000, my: 1, p: 2, mt: 2 }} style={{ backgroundColor: '#fff' }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar sx={{ width: 80, height: 80 }} src={x.ava}></Avatar>
              </Grid>
              <Grid item xs>
                <Typography style={{ fontSize: 20, fontWeight: 'bold' }}>{x.title}</Typography>
                <Typography style={{ fontSize: 15, fontWeight: 'bold', marginTop: -2 }}>{x.nama}</Typography>
                <Grid item xs container direction="row">
                  <Grid item xs>
                    <Typography color="text.secondary" style={{ fontSize: 14, fontWeight: 'bold' }} sx={{ mt: 2 }}>
                      {x.date}
                    </Typography>
                  </Grid>
                  <Grid item sx={{ pr: 1 }}>
                    <img src={`${x.medal}`} style={{ width: 25, height: 30 }} />{' '}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        ))}

        <Grid container justifyContent="right">
          <Grid item align="right">
            <Link to="/tambah-prestasi" style={{ textDecoration: 'none' }}>
              <Button
                onClick
                variant="contained"
                color="warning"
                sx={{
                  borderRadius: 2,
                  mt: 0,
                  mb: 3,
                  width: 50,
                  height: 60,
                  fontSize: 30,
                  textDecoration: 'none',
                }}
              >
                +
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
