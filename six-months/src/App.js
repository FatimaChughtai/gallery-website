import './App.css';
import RandomImage from './components/RandomImage';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
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
          <RandomImage city="vancouver" className="pictureOne"/>
          <RandomImage city="vancouver" className="pictureTwo"/>
          <RandomImage city="vancouver" className="pictureThree"/>
        </Grid>
      </div>
      <div className="tripSection">
        <h2 id='montrealheader'> MONTREAL!! </h2>
        <Grid container spacing={3}>
          <RandomImage city="vancouver" className="pictureOne"/>
          <RandomImage city="vancouver" className="pictureTwo"/>
          <RandomImage city="vancouver" className="pictureThree"/>
        </Grid>
      </div>
      <div className="tripSection">
        <h2 id='ottawaheader'> OTTAWA!! </h2>
        <Grid container spacing={3}>
          <RandomImage city="vancouver" className="pictureOne"/>
          <RandomImage city="vancouver" className="pictureTwo"/>
          <RandomImage city="vancouver" className="pictureThree"/>
        </Grid>
      </div>
      <div className="tripSection">
        <h2 id='nycheader'> NEW YORK!! </h2>
        <Grid container spacing={3}>
          <RandomImage city="vancouver" className="pictureOne"/>
          <RandomImage city="vancouver" className="pictureTwo"/>
          <RandomImage city="vancouver" className="pictureThree"/>
        </Grid>
      </div>
    </div>
  );
}

export default App;