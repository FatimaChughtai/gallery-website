import './App.css';
import RandomImage from './components/RandomImage';
import Grid from '@mui/material/Grid';
import React, {useState} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography} from '@mui/material';


function App() {
  const [openPopup, setOpenPopup] = useState(true); // Popup state
  
  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
    <div className="App">

      <Dialog open={openPopup} onClose={handleClosePopup} aria-labelledby="welcome-dialog-title" aria-describedby="welcome-dialog-description" PaperProps={{ style: { borderRadius: 15, padding: '20px', textAlign: 'center' }, }} >
        <DialogTitle id="welcome-dialog-title" style={{ fontFamily: 'Comic Sans', color: '#dcb535ff', fontSize: '40px' }}> 🎁 HAPPY 6IX MONTHS!! 🎉 </DialogTitle>
        <DialogContent>
          <Typography id="welcome-dialog-description" variant="body1" style={{ fontFamily: 'Comic Sans', color: '#333' }}>
            Happy six months my love, these past few months have been the best months ever. Getting to wake up everyday and spend time with you, to be able to talk to you and laugh with you.
            Thank you for letting me show you how much I love you and cherish you. I am so incredibly lucky to have made so many memories with you. 
            I hope you like this little scrapbook I made you filled with my favourite memories that we have made on our trips together.
          </Typography>
        </DialogContent>
        <DialogActions> <Button onClick={handleClosePopup} variant="contained" color="primary" style={{ borderRadius: 20, textTransform: 'none', backgroundColor: '#e9c3cfff' }}> I LOVE YOU BABY ❤️! </Button> </DialogActions>
      </Dialog>

      <header className="App-header">
        <h1>
          Shailee's and Fatima's Trip Scrapbook!
        </h1>
      </header>
      <div className="tripSection">
        <h2 id='vancouverheader'> VANCOUVER!! </h2>
        <Grid container spacing={3}>
          <RandomImage city="vancouver" className="pictureOne"/>
          <RandomImage city="vancouver" className="pictureTwo"/>
          <RandomImage city="vancouver" className="pictureThree"/>
        </Grid>
      </div>
      <div className="tripSection">
        <h2 id='tarryheader'> NEW YORK & TARRYTOWN!! </h2>
        <Grid container spacing={3}>
          <RandomImage city="tarrytownNYC" className="pictureOne"/>
          <RandomImage city="tarrytownNYC" className="pictureTwo"/>
          <RandomImage city="tarrytownNYC" className="pictureThree"/>
        </Grid>
      </div>
      <div className="tripSection">
        <h2 id='montrealheader'> MONTREAL!! </h2>
        <Grid container spacing={3}>
          <RandomImage city="montreal" className="pictureOne"/>
          <RandomImage city="montreal" className="pictureTwo"/>
          <RandomImage city="montreal" className="pictureThree"/>
        </Grid>
      </div>
      <div className="tripSection">
        <h2 id='ottawaheader'> OTTAWA!! </h2>
        <Grid container spacing={3}>
          <RandomImage city="ottawa" className="pictureOne"/>
          <RandomImage city="ottawa" className="pictureTwo"/>
          <RandomImage city="ottawa" className="pictureThree"/>
        </Grid>
      </div>
      <div className="tripSection">
        <h2 id='nycheader'> NEW YORK!! </h2>
        <Grid container spacing={3}>
          <RandomImage city="downtownNYC" className="pictureOne"/>
          <RandomImage city="downtownNYC" className="pictureTwo"/>
          <RandomImage city="downtownNYC" className="pictureThree"/>
        </Grid>
      </div>
    </div>
  );
}

export default App;