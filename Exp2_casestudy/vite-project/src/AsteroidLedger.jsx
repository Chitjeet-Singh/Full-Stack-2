import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  LinearProgress,
  Chip,
  Avatar,
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WarningIcon from '@mui/icons-material/Warning';
import SavingsIcon from '@mui/icons-material/Savings';
import SpaceBackground from './SpaceBackground';

// --- Theme Configuration ---
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0b0d17',
      paper: '#15192b',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b3b8',
    },
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(21, 25, 43, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(11, 13, 23, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
});

const AsteroidLedger = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SpaceBackground />

      {/* 1. Navigation Bar */}
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 4 }}>
            ASTEROID LEDGER
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
            <Button color="primary" variant="text" sx={{ fontWeight: 'bold', borderBottom: '2px solid #90caf9', borderRadius: 0 }}>
              Mission Control
            </Button>
            <Button color="inherit">Past Deflections</Button>
            <Button color="inherit">Satellite Settings</Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Chip
              icon={<SavingsIcon />}
              label="Bank Balance: $12,450"
              variant="outlined"
              sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
            />
            <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" sx={{ bgcolor: 'secondary.main' }}>
              U
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 2. Hero Section */}
      <div style={{ backgroundColor: 'rgba(11, 13, 23, 0.6)', padding: '60px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(5px)' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Threat Level: <span style={{ color: '#f44336' }}>CRITICAL</span>
              </Typography>
              <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                3 Objects Approaching.
              </Typography>
            </Col>
            <Col md={4} className="text-end">
              <Button
                variant="contained"
                size="large"
                startIcon={<RocketLaunchIcon />}
                sx={{
                  backgroundColor: '#90caf9',
                  color: '#0b0d17',
                  fontWeight: 'bold',
                  padding: '12px 24px'
                }}
              >
                Sync Bank Feed
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. The Asteroid Grid */}
      <div style={{ padding: '60px 0', backgroundColor: 'transparent', minHeight: 'calc(100vh - 250px)' }}>
        <Container>
          <Row>
            {/* Card 1: The Threat */}
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <div>
                      <Typography variant="h6" component="div">
                        Asteroid 99942 Apophis
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Goal: Nintendo Switch
                      </Typography>
                    </div>
                    <WarningIcon color="warning" />
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">Progress</Typography>
                      <Typography variant="body2" color="warning.main">75%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={75}
                      color="warning"
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>

                  <Typography variant="body2">
                    Impact in 12 Days. <br />
                    <strong>$100 / $450 Saved.</strong>
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button size="small" variant="contained" color="warning" fullWidth>Deflect ($50)</Button>
                  <Button size="small" color="inherit">Details</Button>
                </CardActions>
              </Card>
            </Col>

            {/* Card 2: Safe */}
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <div>
                      <Typography variant="h6" component="div">
                        Asteroid Bennu
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Goal: Emergency Fund
                      </Typography>
                    </div>
                    <RocketLaunchIcon color="success" />
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">Progress</Typography>
                      <Typography variant="body2" color="success.main">20%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={20}
                      color="success"
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>

                  <Typography variant="body2">
                    Velocity Stable. <br />
                    <strong>$200 / $1,000 Saved.</strong>
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button size="small" variant="contained" color="success" fullWidth>Deflect ($50)</Button>
                  <Button size="small" color="inherit">Details</Button>
                </CardActions>
              </Card>
            </Col>

            {/* Card 3: Critical */}
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <div>
                      <Typography variant="h6" component="div">
                        Comet Swift-Tuttle
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Goal: Summer Trip
                      </Typography>
                    </div>
                    <WarningIcon color="error" />
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">Progress</Typography>
                      <Typography variant="body2" color="error.main">95%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={95}
                      color="error"
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>

                  <Typography variant="body2" color="error">
                    IMPACT IMMINENT. <br />
                    <strong>$450 / $500 Saved.</strong>
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button size="small" variant="contained" color="error" fullWidth>Deflect ($50)</Button>
                  <Button size="small" color="inherit">Details</Button>
                </CardActions>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default AsteroidLedger;
