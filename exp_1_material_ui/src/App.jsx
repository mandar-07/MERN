import Button from '@mui/material/Button';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationIcon from '@mui/icons-material/Notifications';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import Switch from '@mui/material/Switch';
import Popover from '@mui/material/Popover';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function handleBreadcrumbClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#7c3aed',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
      text: {
        primary: '#212121',
        secondary: '#757575',
      },
    },
  });

  const label = {
    slotProps: {
      input: {
        'aria-label': 'Switch demo',
      },
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <ThemeProvider theme={theme}>

      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          color: 'text.primary',
          p: 3,
        }}
      >

        <Typography variant="h3" gutterBottom>
          Material UI
        </Typography>

        {/* Buttons */}
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button variant="contained" color="primary">
            Click Me
          </Button>

          <Button variant="outlined" color="primary">
            Cancel
          </Button>

          <Button color="primary">
            Learn More
          </Button>
        </Stack>


        {/* Box */}
        <Box
          sx={{
            p: 4,
            mb: 3,
            backgroundColor: '#ffffff',
            color: 'primary.main',
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="h4">
            Box component
          </Typography>
        </Box>


        {/* Card */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5">
              Product
            </Typography>

            <Typography variant="body1">
              MUI Card
            </Typography>
          </CardContent>
        </Card>


        {/* Avatars */}
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Avatar>H</Avatar>

          <Avatar sx={{ bgcolor: deepOrange[500] }}>
            N
          </Avatar>
        </Stack>


        {/* Icons + Badges */}
        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>

          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton>
            <Badge badgeContent={8} color="primary">
              <NotificationIcon />
            </Badge>
          </IconButton>

          <Tooltip title="Delete" arrow>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>

        </Stack>


        {/* Circular Progress */}
        <Box sx={{ display: 'flex', mb: 3 }}>
          <CircularProgress aria-label="Loading..." />
        </Box>


        {/* Switch */}
        <Box sx={{ mb: 3 }}>
          <Switch {...label} defaultChecked />
        </Box>


        {/* Popover */}
        <Box sx={{ mb: 3 }}>

          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            Open Popover
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Typography sx={{ p: 2 }}>
              The content of the Popover.
            </Typography>
          </Popover>

        </Box>


        {/* Breadcrumbs */}
        <Box
          role="presentation"
          onClick={handleBreadcrumbClick}
          sx={{ mb: 3 }}
        >

          <Breadcrumbs aria-label="breadcrumb">

            <Link
              underline="hover"
              color="inherit"
              href="/"
            >
              MUI
            </Link>

            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>

            <Typography color="text.primary">
              Breadcrumbs
            </Typography>

          </Breadcrumbs>

        </Box>


        {/* Skeleton */}
        <Stack spacing={1}>

          <Skeleton
            variant="text"
            sx={{ fontSize: '1rem' }}
          />

          <Skeleton
            variant="circular"
            width={40}
            height={40}
          />

          <Skeleton
            variant="rectangular"
            width={210}
            height={60}
          />

          <Skeleton
            variant="rounded"
            width={210}
            height={60}
          />

        </Stack>

      </Box>

    </ThemeProvider>
  );
}

export default App;