const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(cors());


const directoryPathVancouver = path.join(__dirname, 'public/trip-pictures/vancouver');
const directoryPathOttawa = path.join(__dirname, 'public/trip-pictures/ottawa');
const directoryPathMontreal = path.join(__dirname, 'public/trip-pictures/montreal');
const directoryPathDowntownNYC = path.join(__dirname, 'public/trip-pictures/NYC-Downtown');
const directoryPathTarrytownNYC = path.join(__dirname, 'public/trip-pictures/NYC-Tarrytown');


app.get('/api/images/vancouver', (req, res) => {
  fs.readdir(directoryPathVancouver, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read directory' });
    }
    res.json(files);
  });
});

app.get('/api/images/montreal', (req, res) => {
  fs.readdir(directoryPathMontreal, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read directory' });
    }
    res.json(files);
  });
});

app.get('/api/images/ottawa', (req, res) => {
  fs.readdir(directoryPathOttawa, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read directory' });
    }
    res.json(files);
  });
});

app.get('/api/images/downtownNYC', (req, res) => {
  fs.readdir(directoryPathDowntownNYC, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read directory' });
    }
    res.json(files);
  });
});

app.get('/api/images/tarrytownNYC', (req, res) => {
  fs.readdir(directoryPathTarrytownNYC, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read directory' });
    }
    res.json(files);
  });
});

app.use('/trip-images/vancouver', express.static(path.join(__dirname, 'public/trip-pictures/vancouver')));
app.use('/trip-images/ottawa', express.static(path.join(__dirname, 'public/trip-pictures/ottawa')));
app.use('/trip-images/montreal', express.static(path.join(__dirname, 'public/trip-pictures/montreal')));
app.use('/trip-images/downtownNYC', express.static(path.join(__dirname, 'public/trip-pictures/NYC-Downtown')));
app.use('/trip-images/tarrytownNYC', express.static(path.join(__dirname, 'public/trip-pictures/NYC-Tarrytown')));

app.listen(5000, () => console.log('Server running on http://localhost:5000'));