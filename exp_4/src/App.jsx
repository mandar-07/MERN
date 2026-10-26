import { useState } from "react";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Drawer,
  IconButton,
  Slider,
  Stack,
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
  const [tab, setTab] = useState(0);
  const [volume, setVolume] = useState(50);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f3ff" }}>
      {/* App Bar */}
      <AppBar
        position="static"
        sx={{ bgcolor: "#6d28d9" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{ ml: 2, flexGrow: 1 }}
          >
            MUI Dashboard
          </Typography>

          {/* Notification */}
          <Tooltip title="Notifications">
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Avatar */}
          <Avatar
            sx={{ ml: 2 }}
            src="https://i.pravatar.cc/150?img=12"
          />
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, color: "#6d28d9" }}
          >
            Navigation
          </Typography>

          <Stack spacing={1}>
            <Button
              startIcon={<Home />}
              sx={{ justifyContent: "flex-start" }}
            >
              Home
            </Button>

            <Button
              startIcon={<Person />}
              sx={{ justifyContent: "flex-start" }}
            >
              Profile
            </Button>

            <Button
              startIcon={<Settings />}
              sx={{ justifyContent: "flex-start" }}
            >
              Settings
            </Button>
          </Stack>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#4c1d95" }}
        >
          Dashboard
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          A simple Material UI dashboard.
        </Typography>

        {/* Tabs */}
        <Card sx={{ mb: 3 }}>
          <Tabs
            value={tab}
            onChange={(event, value) => setTab(value)}
            sx={{
              "& .MuiTabs-indicator": {
                bgcolor: "#6d28d9",
              },
              "& .Mui-selected": {
                color: "#6d28d9 !important",
              },
            }}
          >
            <Tab label="Components" />
            <Tab label="Settings" />
            <Tab label="About" />
          </Tabs>

          <CardContent>
            {tab === 0 && (
              <Typography>
                Explore the components below.
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
          </CardContent>
        </Card>

        {/* Components */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {/* Volume */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Volume
              </Typography>

              <Typography color="text.secondary">
                Value: {volume}
              </Typography>

              <Slider
                value={volume}
                onChange={(event, value) =>
                  setVolume(value)
                }
                valueLabelDisplay="auto"
                sx={{ color: "#6d28d9" }}
              />
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Notifications
              </Typography>

              <Stack direction="row" spacing={4}>
                <Badge
                  badgeContent={4}
                  color="primary"
                  sx={{
                    "& .MuiBadge-badge": {
                      bgcolor: "#6d28d9",
                    },
                  }}
                >
                  <Notifications sx={{ color: "#6d28d9" }} />
                </Badge>

                <Badge
                  badgeContent={10}
                  color="error"
                >
                  <Notifications />
                </Badge>

                <Badge
                  variant="dot"
                  color="success"
                >
                  <Notifications />
                </Badge>
              </Stack>
            </CardContent>
          </Card>

          {/* Avatar */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Avatar
              </Typography>

              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: "#6d28d9" }}>
                  S
                </Avatar>

                <Avatar
                  src="https://i.pravatar.cc/150?img=12"
                />

                <Avatar sx={{ bgcolor: "#4c1d95" }}>
                  <Person />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default App;