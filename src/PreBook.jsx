import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import './PreBook.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });


const PreBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    upiId: '',
    vehicle: '',
    amount: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const vehicleOptions = [
    { type: 'Rhyno SE03 Lite', amount: 599 },
    { type: 'Rhyno SE03', amount: 799 },
    { type: 'Rhyno SE03 Max', amount: 999 },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'vehicle') {
      const selectedVehicle = vehicleOptions.find(option => option.type === value);
      setFormData({
        ...formData,
        [name]: value,
        amount: selectedVehicle.amount,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <>
        <div className='message'>
            <h1>Thank you for pre-booking {formData.vehicle}.</h1>
            <div className="btns">
                <Button  size='large' sx={{ fontSize : "x-large", color : "white", backgroundColor : "black", borderRadius : "10px", borderColor : "yellow", color : "yellow"}} variant="outlined">More Products </Button>
            </div>
        </div>
        </>
    )
  }

  return (
    <div className="formbook">
    <form className="vehicle-rental-form" onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="UPI ID"
        name="upiId"
        value={formData.upiId}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Type of Vehicle</InputLabel>
        <Select
          name="vehicle"
          value={formData.vehicle}
          onChange={handleChange}
        >
          {vehicleOptions.map((option) => (
            <MenuItem key={option.type} value={option.type}>
              {option.type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Amount"
        name="amount"
        value={formData.amount}
        fullWidth
        margin="normal"
        disabled
      />
      <Button sx={{marginTop : "1rem", bgcolor: theme.palette.ochre.light}} type="submit" variant="contained" color='success' size='large' >
        Submit
      </Button>
    </form>
    </div>
  );
};

export default PreBook;
