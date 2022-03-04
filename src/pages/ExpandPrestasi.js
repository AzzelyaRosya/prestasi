import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Contact from '../components/Contact';
import { AppBar, Button, Snackbar, Box, Alert } from '@mui/material';
import Navbar from '../components/Navbar';

// icon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import color
import { grey } from '@mui/material/colors';

// import data
import lotsOfData from '../components/DataExpand';

// import medal
import satu from '../img/satu.png';
import dua from '../img/dua.png';
import tiga from '../img/tiga.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  fontWeight: 'bold',
  alignContent: 'center',
  alignItems: 'center',
  width: 138,
  height: 50,
  fontSize: 15,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
  overflow: 'hidden',
  margin: 'auto',
  elevation: 3,
}));

export default function ResponsiveGrid() {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => {
    console.log(panel);
    setExpanded(panel);
  };

  return (
    <>
      <Navbar>Expand Prestasi</Navbar>

      <Grid mt={6} elevation={2} container spacing={3}>
        <Grid item xs>
          <Item>
            Juara 1
            <Typography fontWeight={'bold'} fontSize={30}>
              14
            </Typography>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            Juara 2
            <Typography fontWeight={'bold'} fontSize={30}>
              8
            </Typography>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            Juara 3
            <Typography fontWeight={'bold'} fontSize={30}>
              10
            </Typography>
          </Item>
        </Grid>
      </Grid>

      {lotsOfData.map((data, index) => (
        <>
          <div style={{ padding: '10px', marginTop: 10 }}>
            <Accordion expanded={expanded === data.id} onChange={() => handleChange(data.id)} sx={{ border: 0, bgcolor: 'f2f2f2' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: grey[50] }} style={{ color: '#000' }} />} sx={{ borderRadius: 2, bgcolor: '#f2f2f2' }}>
                <Typography sx={{ width: '37%', flexShrink: 0, fontSize: 20, fontWeight: 'bold' }}>{data.date}</Typography>

                {/* medal1 */}
                <Grid item xs={2} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <img src={satu} style={{ width: 25, height: 30 }} />
                  <Typography sx={{ fontWeight: 'bold', ml: 2, fontSize: 20 }}>{data.medal1}</Typography>
                </Grid>

                {/* medal2 */}
                <Grid item xs={2} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <img p={1} src={dua} style={{ width: 25, height: 30 }} />
                  <Typography sx={{ fontWeight: 'bold', ml: 2, fontSize: 20 }}>{data.medal2}</Typography>
                </Grid>

                {/* medal3 */}
                <Grid item xs={2} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <img src={tiga} style={{ width: 25, height: 30 }} />
                  <Typography sx={{ fontWeight: 'bold', ml: 2, fontSize: 20 }}>{data.medal3}</Typography>
                </Grid>
              </AccordionSummary>

              {/* contact */}
              <AccordionDetails style={{ color: '#fff' }}>
                {data.members.map((x) => (
                  <Contact ava={x.ava} title={x.title} nama={x.nama} date={x.date} medal={x.medal} />
                ))}
              </AccordionDetails>
            </Accordion>
          </div>
        </>
      ))}
    </>
  );
}
