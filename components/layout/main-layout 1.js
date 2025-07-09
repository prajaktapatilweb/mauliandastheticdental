import React from 'react';
import Box from '@mui/material/Box';
import AppThemeSetting from './AppThemeSetting';
import Mauliheader from '../header/mauliheader';
import Footer1 from '../footer/footer1';

const MainLayout1 = ({ children }) => {
  return (<Box component="main">
    <Mauliheader/>
    <AppThemeSetting/>
    {children}
    <Footer1 />
  </Box>);
};
export default MainLayout1;
