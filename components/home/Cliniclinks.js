import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


export default function Cliniclinks() {

    const details=[ {
          title:"Aesthetic Dental Clinic",
        description:"From preventive checkups and painless root canals to smile designing and implants, Aesthetic Dental Clinic offers modern, personalized dental care using advanced techniques and equipment.",
        buttonText:" Visit Website",
         link:'/astheticdental'},
         {
          title:"Mauli Pediatric Clinic",
        description:"Mauli Hospital offers complete pediatric care — including NICU, vaccinations, child development, and adolescent health — along with general and emergency medical services for families.",
        buttonText:" Visit Website",
         link:'/maulichildren'},
    ]
  return (
    <div>
        <Grid container spacing={4} >
              {details.map((item, i) => (
                <Grid item xs={12} sm={6}  key={i} >
         <Card className='cards'>
                                             <div className='lines'></div>
                                            <Box sx={{zIndex:99,position:'relative'}}>
                                          
                                               <CardContent sx={{px:3,pt:3}}>
                    <Typography variant="h4" sx={{ color: '#1b3898', fontWeight: 700 }}>
                     {item.title}
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 1.5, textAlign: 'justify' }}>
                      {item.description}
                    </Typography>
                    <Button
                      variant="contained"
                      size="medium"
                      href="/maulichildren"
                      sx={{
                        mt: 3,
                        backgroundColor: '#1b3898',
                        gap: 1.5,
                        '&:hover': { backgroundColor: '#12276A', color: 'white' }

                      }}
                    >

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, letterSpacing: 1 }}>
                       {item.buttonText}
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                        </motion.span>
                      </Box>
                    </Button>


                  </CardContent>
                                            
                                            </Box>
                                            </Card>
                                            
                                            </Grid>
                                            ))}
                                            </Grid>
    </div>
  )
}
