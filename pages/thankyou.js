import React from 'react'
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';

export default function Thankyou() {
    return (
        <div>
            {/* <HomeHero /> */}
            <Box
                sx={{
            backgroundImage:'linear-gradient(rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.5)),url("/images/hero1.jpg")',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    display: 'flex',
                    // width: '100%',
                    height: '100vh',
                    alignItems: 'center',
                    justifyItems: 'center'
                }}
            >
                {/* "thank you " : null} */}
                <Container maxWidth="lg">
                    <Grid container alignItems='center' justifyContent='center'>
                        <Grid item xs={12} md={12}>
                            <Box>
                                <Typography
                                    component="h3"
                                    sx={{
                                        // width: { md: 850 },
                                        position: 'relative',
                                        fontSize: { xs: 20, md: 28 },
                                        mb: { xs: 3, sm: 0 },
                                        letterSpacing: 1.5,
                                        fontWeight: 'bold',
                                        color: 'white',
                                        lineHeight: 1.5,
                                        textAlign: 'center'
                                    }}
                                >
                                  Thank you for contacting us! Your smile matters, and we’ll be in touch soon!
                                </Typography>
                                <Box sx={{textAlign:'center',color:'wheat'}}>
                                <h4>We appreciate your message! Get ready for a healthier, happier smile—our team will be in touch shortly!</h4>
                                </Box>
                                <Stack direction='column' alignItems='center' >
                                    <Button size="large" variant="contained" sx={{ mt: 2, fontSize: 17, backgroundColor: 'primary.light', alignContent: 'center', color: 'white' }}>
                                        <Link href="/#"  sx={{color:'white'}}>
                                            Home
                                        </Link>
                                    </Button>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </div>
    )
}
// Thankyou.getLayout = (page) => <MainLayout>{page}</MainLayout>;