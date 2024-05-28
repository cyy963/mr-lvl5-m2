const express = require('express');
const cors = require('cors');
const calculateCarValue = require('./carValue');

const calculateRiskRating = require('./riskRating');

const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.post('/car-value', (req, res) => {
  const { model, year } = req.body;

  if (!model || typeof year !== 'number' || year < 0) {
      return res.status(400).json({ error: "there is an error" });
  }

  const carValue = calculateCarValue(model, year);

  res.json({ car_value: carValue });
});

app.post('/risk-rating', (req, res) => {
  const claimHistory  = req.body.claim_history;
  const riskRating = calculateRiskRating(claimHistory);
  
  if (riskRating === 'error'){
      return res.status(400).json({ error: "there is an error" });
  } else {
    res.json({ risk_rating: riskRating });
  }
});

module.exports = app;
