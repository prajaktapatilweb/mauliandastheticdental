import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
const PhotoCardItem1 = ({ item }) => {
  return (
    <Box>
      <Box sx={{px: 1,py:3}}>
        <Box>
         
          <Image
            alt='Happy Patients'
            src={`/images/patients/patient${item}.jpg`}
            width={200}
            height={200}
            layout='responsive'
            style={{borderTopLeftRadius:20,borderBottomRightRadius:20, border:'2px solid white',}}
            ></Image>
        </Box>
       
      </Box>
    </Box>);
};
export default PhotoCardItem1;
