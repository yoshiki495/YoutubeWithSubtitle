import {YouTubeContent, Fetch} from './youtube'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dvr from '@mui/icons-material/Dvr';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fontGrid } from '@mui/material/styles/cssUtils';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Dvr sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            YouTube English
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            justifyContent: 'space-evenly',
            pt: 6,
          }}
        >
            <Grid container>
                <Grid item md={6} sx={{ pl: 6 }}>
                    <YouTubeContent />
                </Grid>
                <Grid item md={6} sx={{ pr: 6 }} >
                    <Container maxWidth="md">
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                          < Fetch />
                        </Typography>
                        <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        >
                        <Button variant="contained">Auto Generation</Button>
                        <Button variant="outlined">Manual Paste</Button>
                        </Stack>
                    </Container>
                </Grid>
            </Grid>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}