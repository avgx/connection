import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QRCode } from 'react-qrcode-logo';
import './App.css';

const defaultTheme = createTheme();

function App() {

  const [u, setU] = React.useState<URL | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const urlString = data.get('url') as string;
    var url = new URL(urlString);
    url.username = data.get('user') as string
    url.password = data.get('password') as string

    console.log(url.href)

    setU(url);
    //qr = <QRCode value={url.href} />
    
    // console.log({
    //   url: data.get('url'),
    //   email: data.get('user'),
    //   password: data.get('password'),
    // });
  };

  let qr = u != null ? (<QRCode value={u!.href} />) : (<></>);
  
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >          
          <Typography component="h1" variant="h5">
            Connection
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="url"
              label="URL (IP address or domain)"
              name="url"
              autoComplete="url"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="User"
              name="user"
              //autoComplete="email"              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>            
          </Box>

          {qr}
          

        </Box>        
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default App;
