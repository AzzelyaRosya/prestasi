import * as React from 'react';
import { Typography, Card, Avatar, Grid, Paper, Button } from '@mui/material';
import partisipanData from './DataPartisipan';

export default function PartisipanContact(props) {
  return (
    <>
      <Card sx={{ textAlign: 'left', my: 1, p: 2, width: '100%', border: 'none' }} component={'button'}>
        <Grid onClick={props.onclick} fullwidth container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar sx={{ width: 60, height: 60 }} src={props.ava}></Avatar>
          </Grid>
          <Grid item xs>
            <Typography sx={{ mt: 1 }} style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>
              {props.nama}
            </Typography>
            <Grid item xs container direction="row">
              <Grid item xs>
                <Typography color="text.secondary" style={{ fontSize: 14, fontWeight: 'bold' }} sx={{ mt: 1 }}>
                  {props.sabuk}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
