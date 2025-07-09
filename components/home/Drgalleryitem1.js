import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const Drgalleryitem1 = ({ item }) => {
    return (
         <div
      style={{
        position: 'relative',
        display: 'inline-block',
        borderRadius: '12px',
        padding: '2px',
        backgroundImage: 'linear-gradient(135deg, #e80914, #1e3081)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        width: '100%', // Ensure container takes width
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >

                    <Image
                        alt={'Clinic' + item.id}
                        src={`/images/clinicphotos/mclinic${item}.jpg`}
                        width={100}
                        height={100}
                        layout='responsive' style={{borderRadius:10}}></Image>
                        </div>
                        </div>

            
);
};
export default Drgalleryitem1;
