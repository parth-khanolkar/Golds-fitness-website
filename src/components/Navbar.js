import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
// import { Typography } from '@mui/material';

// import Logo from '../assets/images/Logo.png';
import Logo from '../assets/images/Logo-1.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Link>
    {/* <Typography color="#FF2625" fontWeight="600" fontSize="26px">Goldy da Gym</Typography> */}
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
