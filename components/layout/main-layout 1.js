import React from 'react';
import Box from '@mui/material/Box';
import Mauliheader from '../header/mauliheader';
import Footer1 from '../footer/footer1';
import AppThemeSetting1 from './AppThemeSetting1';

const MainLayout1 = ({ children }) => {
  return (<Box component="main">
    <Mauliheader/>
    <AppThemeSetting1/>
    {children}
    <Footer1 />
  </Box>);
};
export default MainLayout1;
