import { useState } from "react";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  CircularProgress,
  Drawer,
  FormControlLabel,
  IconButton,
  Paper,
  Slider,
  Stack,
  Switch,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Home,
  Settings,
  Person,
  Notifications,
} from "@mui/icons-material";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [enabled, setEnabled] = useState(true);
  const [tab, setTab] = useState(0);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ ml: 2, flexGrow: 1 }}>
            MUI Components
          </Typography>

          {/* Badge + Avatar */}
          <Tooltip title="Notifications">
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          <Avatar
            alt="Soham"
            src="https://i.pravatar.cc/150?img=12"
            sx={{ ml: 2 }}
          />
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 260 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Box sx={{ p: 3 }}>
            <Typography variant="h6">
              Navigation
            </Typography>
          </Box>

          <Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 3,
                py: 2,
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <Home />
              <Typography>Home</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 3,
                py: 2,
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <Person />
              <Typography>Profile</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 3,
                py: 2,
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <Settings />
              <Typography>Settings</Typography>
            </Box>
          </Stack>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",
          p: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Material UI Components
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          A small React application demonstrating common MUI components.
        </Typography>

        {/* Tabs */}
        <Paper sx={{ mb: 4 }}>
          <Tabs
            value={tab}
            onChange={(event, newValue) => setTab(newValue)}
            variant="fullWidth"
          >
            <Tab label="Components" />
            <Tab label="Settings" />
            <Tab label="About" />
          </Tabs>

          <Box sx={{ p: 3 }}>
            {tab === 0 && (
              <Typography>
                Explore the MUI components below.
              </Typography>
            )}

            {tab === 1 && (
              <Typography>
                Configure your application settings.
              </Typography>
            )}

            {tab === 2 && (
              <Typography>
                Built with React and Material UI.
              </Typography>
            )}
          </Box>
        </Paper>

        {/* Components Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: 3,
          }}
        >
          {/* Slider */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Slider
            </Typography>

            <Typography color="text.secondary">
              Value: {sliderValue}
            </Typography>

            <Slider
              value={sliderValue}
              onChange={(event, value) => setSliderValue(value)}
              aria-label="Volume"
              valueLabelDisplay="auto"
            />
          </Paper>

          {/* Switch */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Switch
            </Typography>

            <FormControlLabel
              control={
                <Switch
                  checked={enabled}
                  onChange={(event) =>
                    setEnabled(event.target.checked)
                  }
                />
              }
              label={enabled ? "Enabled" : "Disabled"}
            />
          </Paper>

          {/* Avatar */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Avatar
            </Typography>

            <Stack direction="row" spacing={2}>
              <Avatar>S</Avatar>

              <Avatar
                alt="User"
                src="https://i.pravatar.cc/150?img=12"
              />

              <Avatar sx={{ bgcolor: "secondary.main" }}>
                <Person />
              </Avatar>
            </Stack>
          </Paper>

          {/* Badge */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Badge
            </Typography>

            <Stack direction="row" spacing={4}>
              <Badge badgeContent={4} color="primary">
                <Notifications />
              </Badge>

              <Badge badgeContent={99} color="error">
                <Notifications />
              </Badge>

              <Badge
                variant="dot"
                color="success"
              >
                <Notifications />
              </Badge>
            </Stack>
          </Paper>

          {/* Circular Progress */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Circular Progress
            </Typography>

            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
            >
              <CircularProgress />

              <Box position="relative" display="inline-flex">
                <CircularProgress
                  variant="determinate"
                  value={75}
                  size={80}
                />

                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="caption">
                    75%
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Paper>

          {/* Tooltip */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Tooltip
            </Typography>

            <Stack direction="row" spacing={2}>
              <Tooltip title="This is a helpful tooltip">
                <Typography
                  sx={{
                    display: "inline-block",
                    cursor: "help",
                    textDecoration: "underline",
                  }}
                >
                  Hover over me
                </Typography>
              </Tooltip>

              <Tooltip title="Settings">
                <IconButton>
                  <Settings />
                </IconButton>
              </Tooltip>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default App;