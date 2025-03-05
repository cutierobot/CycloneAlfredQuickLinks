import './App.css'
import { Box, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import QuickLinks from './components/QuickLinks';
import EmergencyContact from './components/EmergencyContact';
import Grouping from './components/Grouping';
import Reference from './components/Reference';
import Disclaimer from './components/Disclaimer';

function App() {
    // #3d3d3d

    // Set DarkMode to be default
    const darkTheme = createTheme({
        palette: {
            // mode: 'dark',
            primary: {
                main: "#3d3d3d"
            },
            secondary: {
                main: '#a02e41',
            }
        },
        typography: {
            fontFamily: 'Roboto, Arial',
        }
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ m: 5 }}>
                <Typography
                    variant="h2"
                    id="TitleHeading"
                    padding={5}
                >
                    🌀 Cyclone Alfred Quick Links 🌀
                </Typography>
                <Grid
                    container
                    id="GroupOne"
                    spacing={3}
                    alignItems={'stretch'}
                    sx={{ justifyContent: 'left', textAlign: 'left', pb: 5 }}
                >
                    <Grid size={{ xs: 12, md: 6 }} >
                        <QuickLinks />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <EmergencyContact />
                    </Grid>
                </Grid>

                <Grid
                    container
                    id="BodyGrid"
                    spacing={3}
                    alignItems={'stretch'}
                    sx={{ justifyContent: 'left' }}
                >
                    <Grid size={{ xs: 12, md: 6 }} >
                        <Grouping groupHeading='Creek Flooding Locations'>
                            <Reference
                                referenceText='Google Maps Creek Flooding was created by Brisbane City Council. Link to original can be found'
                                referenceURL="https://www.brisbane.qld.gov.au/community-and-safety/community-safety/disasters-and-emergencies/creek-flooding-alerts"
                            />
                            <iframe src="https://www.google.com/maps/d/embed?mid=1O8DXyiUdiO6058LFEIF__lmVfmI54GM&ehbc=2E312F" /*width="640" height="480"*/ width="100%" height="480"></iframe>
                        </Grouping>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Grouping groupHeading='Cyclone Alfred Live'>
                            <Reference
                                referenceText='ABC Alfred Interactive Map is property of ABC News, article can be found'
                                referenceURL="https://www.abc.net.au/news/2025-03-05/what-are-the-cyclone-categories-alfred-queensland-nsw/105011886"
                            />
                            <iframe src="https://www.abc.net.au/res/sites/news-projects/cyclone-tracker/3.2.10/?cyclone=AU202425_22U.gml&cities=6x85x227x55x9x84x526x17x29x25x64x4&abcnewsembedheight=600" title="ABC Cyclone Alfred" /*width="640"*/ width="100%" height="480"></iframe>
                        </Grouping>
                    </Grid>
                    <Grid size={12}>
                        <Grouping groupHeading='Brisbane Council Emergency Dashboard'>
                            <Reference
                                referenceText='Brisbane City Council Dashboard pulled from'
                                referenceURL="https://www.brisbane.qld.gov.au/community-and-safety/community-safety/disasters-and-emergencies/emergency-dashboard"
                            />
                            <p style={{ padding: 0 }}>Note: This page was never designed for mobile, this card will only work on desktop</p>
                            <iframe src="https://experience.arcgis.com/experience/18c83a3bb54845b4a3e6321f88a4b880" title="Brisbane Council Emergency Dashboard" width="100%" height="650"></iframe>
                        </Grouping>

                    </Grid>
                </Grid>
            </Box>
            <Disclaimer />
        </ThemeProvider >
    )
}

export default App
