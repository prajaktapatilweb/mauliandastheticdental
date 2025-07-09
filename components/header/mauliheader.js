import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Grid, Hidden, Link, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Link as ScrollLink } from "react-scroll";
import { StyledButton } from "../styled-button";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { contactdetails } from "../constants/contactdetails";
import Navbar1 from "./navbar1";

function Mauliheader() {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },

        animate: {
            x: 0,
            opacity: 1,
            transition: {

                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollbutton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }

    }

    return (

        <AppBar
            position="static"
            sx={{
                backgroundImage: {
                    xs: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/nashikclinic/clinics9.webp")`,
                    md: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('/images/headerback4.jpg')`
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
              
            }}
        >
            <section style={{
                background: '#e80914',
                width: '100%',
                padding: '3px 0',
            }}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            "@media (min-width: 768px)": {
                                flexDirection: "row",
                            },
                        }}
                    >
                        <Hidden mdDown>
                            <Box
                                sx={{
                                    width: "100%",
                                    // maxHeight: 300,
                                    "@media (min-width: 768px)": {
                                        width: "70%",
                                    },
                                }}
                            >
                                <IconButton aria-label="phone" style={{ color: 'white' }}>
                                    {" "}
                                    <CallTwoToneIcon />
                                </IconButton>

                                <Link href={`tel:${contactdetails.phone}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white', marginRight: 10 }}>
                                        {contactdetails.phone}
                                    </a>
                                </Link>


                                {/* <Link  href={`tel:${contactno2}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    9923708233

                                    </a>
                                </Link>{" "} */}
                                <IconButton aria-label="email" style={{ color: 'white' }}>
                                    <EmailTwoToneIcon />{" "}
                                </IconButton>
                                <Link
                                    href={`mailto:${contactdetails.email}`} target="_blank">
                                    <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                        {contactdetails.email}

                                    </a>
                                </Link>
                            </Box>
                        </Hidden>
                        <Box
                            sx={{
                                width: "100%",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "right",
                                },
                                // textAlign: 'right',
                                "@media (min-width: 768px)": {
                                    width: "30%",
                                },
                            }}
                        >
                            <IconButton aria-label="facebook">
                                {" "}
                                <a
                                    href={contactdetails.socialLinks.facebook}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <FacebookIcon sx={{ color: "white" }} />{" "}
                                </a>
                            </IconButton>

                            <IconButton aria-label="instagram">
                                <a
                                    href={contactdetails.socialLinks.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="instagram"
                                >
                                    <InstagramIcon
                                        sx={{ color: "white", Width: 30, Height: 30 }}
                                    ></InstagramIcon>
                                </a>
                            </IconButton>

                            <IconButton aria-label="youtube">
                                <a
                                    href={contactdetails.socialLinks.youtube}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="youtube"
                                >
                                    <YouTubeIcon sx={{ color: "white" }}></YouTubeIcon>
                                </a>
                            </IconButton>

                        </Box>
                    </Box>
                </Container>
            </section>

            <section style={{
                padding: 3,
                background: 'white',
                boxShadow: ' 0 10px 10px 1px #0000001f',
                backdropFilter: 'blur( 8px )',
                display: 'flex'
            }}>
                <Navbar1 />
            </section>
            <Box sx={{ mt: 12,mb:4 }}>
                {/* <Container> */}
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    textAlign="left"
                >
                    <Grid item xs={12} md={8} sx={{ px: { xs: 2, sm: 3, md: 9 }, py: 3, mt: { xs: -7, sm: -7, md: -7 } }}>
                        <motion.div className="textcontainer" variants={textVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <Box sx={{
                                position: "relative",
                                fontSize: { xs: '32px', sm: '30px', md: '37px' },
                                letterSpacing: 1.5,
                                color: { xs: 'white', sm: 'white', md: "white" },
                                lineHeight: 1.2,
                                mb: -2,

                            }}>
                                <motion.h2 variants={textVariants} style={{ fontFamily: "Inter, sans-serif", fontWeight: '800',  textShadow: '2px 2px 8px rgba(0,0,0,0.8)', }} >

                                    Nurturing Your Child’s Health, Every Step of the Way
                                </motion.h2>
                            </Box>
                            <Hidden smDown>
                                <Typography
                                    variant="p"
                                    sx={{ color: "white", lineHeight: 0, fontSize: 23, lineHeight: 1.4, }}
                                >
                                    Expert pediatric care for newborns, toddlers, and growing kids — by Dr. Parmeshwar Taware at Mauli Children & Multi-Speciality Hospital, Kalamboli.
                                </Typography>
                            </Hidden>
                            <Box sx={{ "& button": { mt: 3, mb: 7, } }}>
                                <ScrollLink
                                    to="contactform"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={350}
                                >
                                    <StyledButton
                                        size="large"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: 'secondary.dark',
                                            color: 'secondary.light',
                                            fontWeight: 600,
                                            borderRadius: 2,
                                            fontSize: 18,
                                            padding: '10px 24px',
                                            '&:hover': {
                                                backgroundColor: '#ffcb66',
                                            },
                                        }}
                                    >
                                        Enquire Now
                                    </StyledButton>

                                </ScrollLink>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    </Grid>
                </Grid>
                {/* </Container> */}
            </Box>
        </AppBar>
    );
}
export default Mauliheader;
