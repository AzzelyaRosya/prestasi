import * as React from 'react';
import { Typography, Card, Avatar, Grid } from '@mui/material';

export default function Contact(props) {
  return (
    <>
      <Grid sx={{ p: 1, mb: 3 }} style={{ borderTop: '1px solid rgba(0, 0, 0, .125)' }} fullwidth container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar sx={{ width: 80, height: 80 }} src={props.ava}></Avatar>
        </Grid>
        <Grid item xs>
          <Typography style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>{props.title}</Typography>
          <Typography style={{ fontSize: 15, fontWeight: 'bold', marginTop: -2, color: '#000' }}>{props.nama}</Typography>
          <Grid item xs container direction="row">
            <Grid item xs>
              <Typography color="text.secondary" style={{ fontSize: 14, fontWeight: 'bold' }} sx={{ mt: 2 }}>
                {props.date}
              </Typography>
            </Grid>
            <Grid item sx={{ pr: 1 }}>
              <img src={`${props.medal}`} style={{ width: 25, height: 30 }} />{' '}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
