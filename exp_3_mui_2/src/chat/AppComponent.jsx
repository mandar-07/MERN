"use client";

import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  LinearProgress,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  Add,
  Analytics,
  ArrowForward,
  Bookmark,
  CalendarMonth,

  Close,
  Cloud,
  Dashboard,
  Explore,
  Favorite,
  FilterList,
  Home,
  KeyboardArrowDown,
  Layers,
  LocationOn,
  Map,
  MoreHoriz,
  NotificationsNone,
  People,
  PhotoCamera,
  Place,
  Search,
  Settings,
  Share,
  Star,
  TaskAlt,
  TrendingUp,
  Workspaces,
  ZoomIn,
  ZoomOut,
} from "@mui/icons-material";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const locations = [
  {
    name: "Blue Bottle Coffee",
    type: "Coffee • Workspace",
    rating: "4.8",
    reviews: "1.2k",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
    x: "43%",
    y: "36%",
  },
  {
    name: "The Green Garden",
    type: "Restaurant • Italian",
    rating: "4.7",
    reviews: "846",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800",
    x: "65%",
    y: "57%",
  },
  {
    name: "Skyline Workspace",
    type: "Coworking",
    rating: "4.9",
    reviews: "523",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    x: "26%",
    y: "65%",
  },
];

const posts = [
  {
    user: "alexmorgan",
    name: "Alex Morgan",
    avatar:
      "https://i.pravatar.cc/150?img=12",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200",
    caption:
      "Found my new favorite place to work. The coffee is dangerously good ☕",
    likes: 1842,
    location: "Skyline Workspace",
  },
  {
    user: "sarahlee",
    name: "Sarah Lee",
    avatar:
      "https://i.pravatar.cc/150?img=32",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    caption:
      "Design sprint day. Four coffees later and we finally have something beautiful.",
    likes: 921,
    location: "Downtown",
  },
];

const tasks = [
  {
    title: "Design discovery page",
    tag: "Design",
    progress: 80,
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    title: "Implement map interactions",
    tag: "Development",
    progress: 55,
    avatar: "https://i.pravatar.cc/100?img=13",
  },
  {
    title: "User onboarding flow",
    tag: "Product",
    progress: 35,
    avatar: "https://i.pravatar.cc/100?img=44",
  },
];

const navItems = [
  { label: "Overview", icon: <Dashboard /> },
  { label: "Explore", icon: <Explore /> },
  { label: "Map", icon: <Map /> },
  { label: "Social", icon: <People /> },
  { label: "Projects", icon: <Workspaces /> },
];

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function Component() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const [active, setActive] = useState("Overview");
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState([]);
  const [saved, setSaved] = useState([]);
  const [drawer, setDrawer] = useState(false);

  const dark = {
    background: "#08090d",
    panel: "#101218",
    panel2: "#151821",
    border: "rgba(255,255,255,.08)",
    text: "#f5f7fb",
    muted: "#8d94a6",
    accent: "#7c5cff",
    accent2: "#9b87ff",
  };

  const toggleLike = (index) => {
    setLiked((current) =>
      current.includes(index)
        ? current.filter((x) => x !== index)
        : [...current, index]
    );
  };

  const toggleSave = (index) => {
    setSaved((current) =>
      current.includes(index)
        ? current.filter((x) => x !== index)
        : [...current, index]
    );
  };

  /* ---------------------------------------------------------------------- */
  /*                                  SIDEBAR                               */
  /* ---------------------------------------------------------------------- */

  const Sidebar = () => (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: dark.panel,
        borderRight: `1px solid ${dark.border}`,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        zIndex: 20,
      }}
    >
      <Box sx={{ p: 3 }}>
        <Stack direction="row" alignItems="center" spacing={1.3}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "11px",
              display: "grid",
              placeItems: "center",
              background:
                "linear-gradient(135deg,#7c5cff,#b25cff)",
              boxShadow: "0 8px 30px rgba(124,92,255,.35)",
            }}
          >
            <Layers sx={{ color: "white", fontSize: 21 }} />
          </Box>

          <Typography
            sx={{
              fontWeight: 800,
              letterSpacing: "-.04em",
              fontSize: 20,
            }}
          >
            atlas
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ px: 1.5 }}>
        <Typography
          sx={{
            color: dark.muted,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: ".12em",
            px: 1.5,
            mb: 1,
          }}
        >
          WORKSPACE
        </Typography>

        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            selected={active === item.label}
            onClick={() => setActive(item.label)}
            sx={{
              borderRadius: "10px",
              mb: 0.5,
              minHeight: 44,
              color:
                active === item.label ? dark.text : dark.muted,
              "&.Mui-selected": {
                background: "rgba(124,92,255,.13)",
                color: "#a895ff",
              },
              "&.Mui-selected:hover": {
                background: "rgba(124,92,255,.17)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 38,
                color: "inherit",
                "& svg": { fontSize: 20 },
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: 13,
                fontWeight: active === item.label ? 700 : 500,
              }}
            />

            {item.label === "Social" && (
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#ff4f87",
                }}
              />
            )}
          </ListItemButton>
        ))}
      </Box>

      <Box sx={{ px: 1.5, mt: 3 }}>
        <Typography
          sx={{
            color: dark.muted,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: ".12em",
            px: 1.5,
            mb: 1,
          }}
        >
          PERSONAL
        </Typography>

        {[
          ["Saved places", <Bookmark />],
          ["Calendar", <CalendarMonth />],
          ["Analytics", <Analytics />],
        ].map(([label, icon]) => (
          <ListItemButton
            key={String(label)}
            sx={{
              borderRadius: "10px",
              mb: 0.5,
              color: dark.muted,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 38,
                color: "inherit",
              }}
            >
              {icon}
            </ListItemIcon>

            <ListItemText
              primary={label}
              primaryTypographyProps={{ fontSize: 13 }}
            />
          </ListItemButton>
        ))}
      </Box>

      <Box sx={{ mt: "auto", p: 2 }}>
        <Paper
          sx={{
            p: 1.5,
            borderRadius: "14px",
            background:
              "linear-gradient(145deg,rgba(124,92,255,.14),rgba(124,92,255,.04))",
            border: "1px solid rgba(124,92,255,.18)",
            boxShadow: "none",
          }}
        >
          <Stack direction="row" spacing={1.2} alignItems="center">
            <Avatar
              src="https://i.pravatar.cc/100?img=68"
              sx={{ width: 34, height: 34 }}
            />

            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                fontSize={12}
                fontWeight={700}
                noWrap
              >
                Soham
              </Typography>

              <Typography
                fontSize={10}
                color={dark.muted}
                noWrap
              >
                Personal workspace
              </Typography>
            </Box>

            <MoreHoriz sx={{ color: dark.muted, fontSize: 18 }} />
          </Stack>
        </Paper>
      </Box>
    </Box>
  );

  /* ---------------------------------------------------------------------- */
  /*                                  HEADER                                */
  /* ---------------------------------------------------------------------- */

  const Header = () => (
    <Box
      sx={{
        height: 72,
        px: { xs: 2, md: 3 },
        borderBottom: `1px solid ${dark.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(8,9,13,.82)",
        backdropFilter: "blur(20px)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        {mobile && (
          <IconButton
            onClick={() => setDrawer(true)}
            sx={{ color: dark.text }}
          >
            <Dashboard />
          </IconButton>
        )}

        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            color: dark.muted,
            fontSize: 12,
          }}
        >
          Workspace
        </Box>

        <KeyboardArrowDown
          sx={{
            color: dark.muted,
            display: { xs: "none", sm: "block" },
            fontSize: 18,
          }}
        />

        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          Overview
        </Typography>
      </Stack>

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "38%", sm: 300, md: 400 },
          display: { xs: "none", sm: "block" },
        }}
      >
        <TextField
          fullWidth
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search places, people, projects..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search
                  sx={{ color: dark.muted, fontSize: 19 }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              background: "#11131a",
              fontSize: 12,
              "& fieldset": {
                borderColor: dark.border,
              },
              "&:hover fieldset": {
                borderColor: "rgba(255,255,255,.14)",
              },
            },
          }}
        />
      </Box>

      <Stack direction="row" spacing={1} alignItems="center">
        <Tooltip title="Notifications">
          <IconButton sx={{ color: dark.muted }}>
            <Badge
              variant="dot"
              color="error"
              overlap="circular"
            >
              <NotificationsNone />
            </Badge>
          </IconButton>
        </Tooltip>

        <IconButton sx={{ color: dark.muted }}>
          <Settings />
        </IconButton>

        <Avatar
          src="https://i.pravatar.cc/100?img=68"
          sx={{
            width: 32,
            height: 32,
            ml: 0.5,
            border: "2px solid rgba(255,255,255,.1)",
          }}
        />
      </Stack>
    </Box>
  );

  /* ---------------------------------------------------------------------- */
  /*                               STAT CARDS                               */
  /* ---------------------------------------------------------------------- */

  const Stats = () => (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        },
        gap: 1.5,
      }}
    >
      {[
        {
          title: "Places explored",
          value: "248",
          change: "+18%",
          icon: <Place />,
        },
        {
          title: "Project progress",
          value: "72%",
          change: "+8.4%",
          icon: <TrendingUp />,
        },
        {
          title: "Social reach",
          value: "12.8K",
          change: "+24%",
          icon: <People />,
        },
        {
          title: "Saved locations",
          value: "86",
          change: "+12",
          icon: <Bookmark />,
        },
      ].map((stat) => (
        <Paper
          key={stat.title}
          sx={{
            p: 2,
            borderRadius: "15px",
            background: dark.panel,
            border: `1px solid ${dark.border}`,
            boxShadow: "none",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                fontSize={11}
                color={dark.muted}
                mb={0.8}
              >
                {stat.title}
              </Typography>

              <Typography
                fontSize={24}
                fontWeight={800}
                letterSpacing="-.04em"
              >
                {stat.value}
              </Typography>
            </Box>

            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: "10px",
                display: "grid",
                placeItems: "center",
                bgcolor: "rgba(124,92,255,.1)",
                color: "#9885ff",
              }}
            >
              {React.cloneElement(stat.icon, {
                sx: { fontSize: 18 },
              })}
            </Box>
          </Stack>

          <Typography
            fontSize={10}
            color="#63d69b"
            mt={1}
            fontWeight={700}
          >
            {stat.change}{" "}
            <Box
              component="span"
              sx={{ color: dark.muted, fontWeight: 400 }}
            >
              this month
            </Box>
          </Typography>
        </Paper>
      ))}
    </Box>
  );

  /* ---------------------------------------------------------------------- */
  /*                                   MAP                                  */
  /* ---------------------------------------------------------------------- */

  const MapPanel = () => (
    <Paper
      sx={{
        height: { xs: 440, md: 540 },
        borderRadius: "18px",
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${dark.border}`,
        background: "#d8d7d1",
        boxShadow: "none",
      }}
    >
      {/* fake map terrain */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#deddd7",
          backgroundImage: `
            linear-gradient(35deg, transparent 45%, rgba(150,150,145,.28) 46%, rgba(150,150,145,.28) 47%, transparent 48%),
            linear-gradient(145deg, transparent 45%, rgba(150,150,145,.2) 46%, rgba(150,150,145,.2) 47%, transparent 48%),
            linear-gradient(90deg, transparent 49%, rgba(255,255,255,.45) 50%, transparent 51%)
          `,
          backgroundSize: "130px 130px, 170px 170px, 90px 90px",
        }}
      />

      {/* rivers */}
      <Box
        sx={{
          position: "absolute",
          width: "160%",
          height: 80,
          left: "-20%",
          top: "42%",
          transform: "rotate(-13deg)",
          background:
            "rgba(100,175,210,.32)",
          filter: "blur(2px)",
        }}
      />

      {/* roads */}
      {[
        ["-10%", "20%", "125%", "3px", "rotate(18deg)"],
        ["-20%", "70%", "140%", "4px", "rotate(-8deg)"],
        ["30%", "-20%", "4px", "130%", "rotate(62deg)"],
      ].map((r, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            left: r[0],
            top: r[1],
            width: r[2],
            height: r[3],
            bgcolor: "rgba(255,255,255,.85)",
            transform: r[4],
            boxShadow: "0 0 0 1px rgba(120,120,120,.1)",
          }}
        />
      ))}

      {/* Map controls */}
      <Stack
        spacing={1}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <IconButton
          sx={{
            bgcolor: "rgba(255,255,255,.94)",
            color: "#333",
            boxShadow: "0 4px 15px rgba(0,0,0,.12)",
            "&:hover": {
              bgcolor: "white",
            },
          }}
        >
          <ZoomIn />
        </IconButton>

        <IconButton
          sx={{
            bgcolor: "rgba(255,255,255,.94)",
            color: "#333",
            boxShadow: "0 4px 15px rgba(0,0,0,.12)",
            "&:hover": {
              bgcolor: "white",
            },
          }}
        >
          <ZoomOut />
        </IconButton>
      </Stack>

      <Box
        sx={{
          position: "absolute",
          left: 16,
          top: 16,
          display: "flex",
          gap: 1,
        }}
      >
        {["Explore", "Restaurants", "Coffee", "Workspace"].map(
          (x, i) => (
            <Chip
              key={x}
              label={x}
              icon={i === 0 ? <Explore /> : undefined}
              sx={{
                display: {
                  xs: i > 1 ? "none" : "flex",
                  sm: "flex",
                },
                bgcolor:
                  i === 0
                    ? "#17191f"
                    : "rgba(255,255,255,.92)",
                color: i === 0 ? "white" : "#303038",
                fontWeight: 600,
                fontSize: 11,
                backdropFilter: "blur(10px)",
              }}
            />
          )
        )}
      </Box>

      {/* Map markers */}
      {locations.map((location, index) => (
        <Box
          key={location.name}
          onClick={() => setSelectedLocation(location)}
          sx={{
            position: "absolute",
            left: location.x,
            top: location.y,
            transform: "translate(-50%,-50%)",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: selectedLocation.name === location.name ? 42 : 34,
              height: selectedLocation.name === location.name ? 42 : 34,
              borderRadius: "50%",
              bgcolor:
                selectedLocation.name === location.name
                  ? "#7c5cff"
                  : "#181a20",
              border: "3px solid white",
              display: "grid",
              placeItems: "center",
              color: "white",
              boxShadow:
                "0 7px 20px rgba(0,0,0,.28)",
              transition: ".2s",
            }}
          >
            {index === 0 ? (
              <CoffeeIcon />
            ) : index === 1 ? (
              <RestaurantIcon />
            ) : (
              <Workspaces sx={{ fontSize: 17 }} />
            )}
          </Box>

          {selectedLocation.name === location.name && (
            <Box
              sx={{
                position: "absolute",
                bottom: "calc(100% + 10px)",
                left: "50%",
                transform: "translateX(-50%)",
                width: 190,
                bgcolor: "#17191f",
                color: "white",
                p: 1.2,
                borderRadius: "11px",
                boxShadow: "0 12px 30px rgba(0,0,0,.3)",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -5,
                  left: "50%",
                  transform: "translateX(-50%) rotate(45deg)",
                  width: 10,
                  height: 10,
                  bgcolor: "#17191f",
                },
              }}
            >
              <Typography
                fontSize={11}
                fontWeight={800}
              >
                {location.name}
              </Typography>

              <Typography
                fontSize={9}
                color="#9da3b2"
                mt={0.3}
              >
                {location.type}
              </Typography>

              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                mt={0.6}
              >
                <Star
                  sx={{
                    fontSize: 11,
                    color: "#ffb84d",
                  }}
                />

                <Typography fontSize={9}>
                  {location.rating}
                </Typography>
              </Stack>
            </Box>
          )}
        </Box>
      ))}

      {/* Current location */}
      <Box
        sx={{
          position: "absolute",
          left: "52%",
          top: "49%",
        }}
      >
        <Box
          sx={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            bgcolor: "#3685ff",
            border: "3px solid white",
            boxShadow:
              "0 0 0 8px rgba(54,133,255,.2)",
          }}
        />
      </Box>

      {/* Bottom location card */}
      <Paper
        sx={{
          position: "absolute",
          left: 16,
          bottom: 16,
          width: { xs: "calc(100% - 32px)", sm: 330 },
          p: 1.2,
          borderRadius: "14px",
          bgcolor: "rgba(20,22,28,.94)",
          color: "white",
          backdropFilter: "blur(20px)",
        }}
      >
        <Stack direction="row" spacing={1.2}>
          <Box
            component="img"
            src={selectedLocation.image}
            sx={{
              width: 70,
              height: 70,
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />

          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography
              fontSize={12}
              fontWeight={800}
              noWrap
            >
              {selectedLocation.name}
            </Typography>

            <Typography
              fontSize={9}
              color="#9298a8"
              mt={0.3}
            >
              {selectedLocation.type}
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              spacing={0.4}
              mt={0.8}
            >
              <Star
                sx={{
                  fontSize: 12,
                  color: "#ffb84d",
                }}
              />

              <Typography fontSize={10}>
                {selectedLocation.rating}
              </Typography>

              <Typography
                fontSize={9}
                color="#777d8b"
              >
                ({selectedLocation.reviews})
              </Typography>
            </Stack>

            <Button
              size="small"
              endIcon={<ArrowForward />}
              sx={{
                mt: 0.4,
                p: 0,
                minWidth: 0,
                color: "#a895ff",
                fontSize: 9,
                textTransform: "none",
              }}
            >
              View place
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Paper>
  );

  /* ---------------------------------------------------------------------- */
  /*                              SOCIAL FEED                               */
  /* ---------------------------------------------------------------------- */

  const SocialFeed = () => (
    <Stack spacing={1.5}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            fontWeight={800}
            fontSize={16}
            letterSpacing="-.02em"
          >
            Community
          </Typography>

          <Typography
            fontSize={10}
            color={dark.muted}
          >
            Discover where people are going
          </Typography>
        </Box>

        <Button
          startIcon={<Add />}
          sx={{
            color: "#a895ff",
            textTransform: "none",
            fontSize: 11,
          }}
        >
          Create
        </Button>
      </Stack>

      {posts.map((post, index) => (
        <Paper
          key={post.user}
          sx={{
            overflow: "hidden",
            borderRadius: "16px",
            background: dark.panel,
            border: `1px solid ${dark.border}`,
            boxShadow: "none",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.2}
            sx={{ p: 1.5 }}
          >
            <Avatar
              src={post.avatar}
              sx={{ width: 32, height: 32 }}
            />

            <Box sx={{ flex: 1 }}>
              <Typography
                fontSize={11}
                fontWeight={800}
              >
                {post.name}
              </Typography>

              <Stack
                direction="row"
                spacing={0.4}
                alignItems="center"
              >
                <LocationOn
                  sx={{
                    fontSize: 10,
                    color: "#8c78ff",
                  }}
                />

                <Typography
                  fontSize={9}
                  color={dark.muted}
                >
                  {post.location}
                </Typography>
              </Stack>
            </Box>

            <MoreHoriz
              sx={{
                color: dark.muted,
                fontSize: 20,
              }}
            />
          </Stack>

          <Box
            component="img"
            src={post.image}
            sx={{
              width: "100%",
              height: { xs: 220, sm: 280 },
              objectFit: "cover",
              display: "block",
            }}
          />

          <Box sx={{ p: 1.5 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
            >
              <Stack direction="row">
                <IconButton
                  onClick={() => toggleLike(index)}
                  sx={{
                    color: liked.includes(index)
                      ? "#ff527d"
                      : dark.text,
                    p: 0.7,
                  }}
                >
                  <Favorite
                    sx={{
                      fontSize: 20,
                      fill: liked.includes(index)
                        ? "currentColor"
                        : "none",
                    }}
                  />
                </IconButton>

                <IconButton
                  sx={{
                    color: dark.text,
                    p: 0.7,
                  }}
                >
                  <Share sx={{ fontSize: 20 }} />
                </IconButton>
              </Stack>

              <IconButton
                onClick={() => toggleSave(index)}
                sx={{
                  color: saved.includes(index)
                    ? "#a895ff"
                    : dark.text,
                  p: 0.7,
                }}
              >
                <Bookmark
                  sx={{
                    fontSize: 20,
                    fill: saved.includes(index)
                      ? "currentColor"
                      : "none",
                  }}
                />
              </IconButton>
            </Stack>

            <Typography
              fontSize={10}
              fontWeight={800}
              mt={0.4}
            >
              {(post.likes +
                (liked.includes(index) ? 1 : 0)
              ).toLocaleString()}{" "}
              likes
            </Typography>

            <Typography
              fontSize={11}
              color="#d5d8e0"
              mt={0.7}
              lineHeight={1.6}
            >
              <Box
                component="span"
                sx={{
                  fontWeight: 800,
                  color: "white",
                  mr: 0.7,
                }}
              >
                {post.user}
              </Box>
              {post.caption}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );

  /* ---------------------------------------------------------------------- */
  /*                               PROJECTS                                 */
  /* ---------------------------------------------------------------------- */

  const Projects = () => (
    <Paper
      sx={{
        p: 2,
        borderRadius: "16px",
        background: dark.panel,
        border: `1px solid ${dark.border}`,
        boxShadow: "none",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box>
          <Typography
            fontSize={15}
            fontWeight={800}
          >
            Project workspace
          </Typography>

          <Typography
            fontSize={10}
            color={dark.muted}
          >
            Atlas redesign
          </Typography>
        </Box>

        <IconButton
          sx={{
            color: dark.muted,
          }}
        >
          <MoreHoriz />
        </IconButton>
      </Stack>

      <Stack spacing={1.1}>
        {tasks.map((task) => (
          <Box
            key={task.title}
            sx={{
              p: 1.4,
              borderRadius: "12px",
              background: "#14161d",
              border: `1px solid ${dark.border}`,
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: "7px",
                  display: "grid",
                  placeItems: "center",
                  bgcolor: "rgba(124,92,255,.12)",
                  color: "#9d8bff",
                }}
              >
                <TaskAlt sx={{ fontSize: 14 }} />
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  fontSize={10}
                  fontWeight={700}
                  noWrap
                >
                  {task.title}
                </Typography>

                <Stack
                  direction="row"
                  spacing={0.7}
                  mt={0.5}
                >
                  <Chip
                    label={task.tag}
                    size="small"
                    sx={{
                      height: 17,
                      fontSize: 8,
                      bgcolor:
                        "rgba(255,255,255,.06)",
                      color: dark.muted,
                    }}
                  />

                  <Typography
                    fontSize={8}
                    color={dark.muted}
                  >
                    {task.progress}%
                  </Typography>
                </Stack>
              </Box>

              <Avatar
                src={task.avatar}
                sx={{
                  width: 25,
                  height: 25,
                }}
              />
            </Stack>

            <LinearProgress
              variant="determinate"
              value={task.progress}
              sx={{
                mt: 1.2,
                height: 3,
                borderRadius: 5,
                bgcolor: "rgba(255,255,255,.06)",
                "& .MuiLinearProgress-bar": {
                  borderRadius: 5,
                },
              }}
            />
          </Box>
        ))}
      </Stack>

      <Button
        fullWidth
        startIcon={<Add />}
        sx={{
          mt: 1.3,
          borderRadius: "9px",
          border: `1px dashed ${dark.border}`,
          color: dark.muted,
          textTransform: "none",
          fontSize: 10,
        }}
      >
        Add task
      </Button>
    </Paper>
  );

  /* ---------------------------------------------------------------------- */
  /*                                ACTIVITY                                */
  /* ---------------------------------------------------------------------- */

  const Activity = () => (
    <Paper
      sx={{
        p: 2,
        borderRadius: "16px",
        background: dark.panel,
        border: `1px solid ${dark.border}`,
        boxShadow: "none",
      }}
    >
      <Typography
        fontSize={15}
        fontWeight={800}
        mb={2}
      >
        Recent activity
      </Typography>

      <Stack spacing={2}>
        {[
          {
            text: "You saved Blue Bottle Coffee",
            time: "12 min ago",
            icon: <Bookmark />,
          },
          {
            text: "Alex commented on your post",
            time: "38 min ago",
            icon: <People />,
          },
          {
            text: "Design discovery reached 80%",
            time: "2 hr ago",
            icon: <TaskAlt />,
          },
          {
            text: "You explored 5 new places",
            time: "Yesterday",
            icon: <Explore />,
          },
        ].map((item) => (
          <Stack
            key={item.text}
            direction="row"
            spacing={1.2}
          >
            <Box
              sx={{
                width: 29,
                height: 29,
                flexShrink: 0,
                borderRadius: "8px",
                display: "grid",
                placeItems: "center",
                bgcolor: "rgba(124,92,255,.1)",
                color: "#9885ff",
              }}
            >
              {React.cloneElement(item.icon, {
                sx: { fontSize: 14 },
              })}
            </Box>

            <Box>
              <Typography
                fontSize={10}
                fontWeight={600}
                lineHeight={1.4}
              >
                {item.text}
              </Typography>

              <Typography
                fontSize={8}
                color={dark.muted}
                mt={0.3}
              >
                {item.time}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );

  /* ---------------------------------------------------------------------- */
  /*                                  DRAWER                                */
  /* ---------------------------------------------------------------------- */

  const MobileDrawer = () => (
    <Drawer
      open={drawer}
      onClose={() => setDrawer(false)}
      PaperProps={{
        sx: {
          width: 250,
          bgcolor: dark.panel,
          color: dark.text,
          borderRight: `1px solid ${dark.border}`,
        },
      }}
    >
      <Box sx={{ p: 2.5 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1}>
            <Box
              sx={{
                width: 34,
                height: 34,
                display: "grid",
                placeItems: "center",
                borderRadius: "10px",
                background:
                  "linear-gradient(135deg,#7c5cff,#b25cff)",
              }}
            >
              <Layers sx={{ color: "white" }} />
            </Box>

            <Typography
              fontSize={20}
              fontWeight={800}
            >
              atlas
            </Typography>
          </Stack>

          <IconButton
            onClick={() => setDrawer(false)}
            sx={{ color: dark.muted }}
          >
            <Close />
          </IconButton>
        </Stack>
      </Box>

      <Divider sx={{ borderColor: dark.border }} />

      <List sx={{ p: 1.5 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            selected={active === item.label}
            onClick={() => {
              setActive(item.label);
              setDrawer(false);
            }}
            sx={{
              borderRadius: "10px",
              color: dark.muted,
              mb: 0.5,
              "&.Mui-selected": {
                color: "#a895ff",
                bgcolor: "rgba(124,92,255,.12)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "inherit",
                minWidth: 38,
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: 13,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );

  /* ---------------------------------------------------------------------- */
  /*                                CONTENT                                 */
  /* ---------------------------------------------------------------------- */

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: dark.background,
        color: dark.text,
        fontFamily:
          '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      <Sidebar />
      <MobileDrawer />

      <Box
        sx={{
          ml: { xs: 0, md: "240px" },
          minHeight: "100vh",
        }}
      >
        <Header />

        <Box
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            maxWidth: 1700,
            mx: "auto",
          }}
        >
          {/* Hero */}
          <Box sx={{ mb: 3 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "flex-end" }}
              spacing={2}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 26, md: 32 },
                    fontWeight: 850,
                    letterSpacing: "-.055em",
                    lineHeight: 1.05,
                  }}
                >
                  Good afternoon, Soham.
                </Typography>

                <Typography
                  sx={{
                    mt: 0.8,
                    fontSize: 12,
                    color: dark.muted,
                  }}
                >
                  Your world, your people, your work — all in one
                  place.
                </Typography>
              </Box>

              <Stack direction="row" spacing={1}>
                <Button
                  startIcon={<Add />}
                  variant="contained"
                  sx={{
                    bgcolor: "#7c5cff",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: 11,
                    fontWeight: 700,
                    px: 1.8,
                    "&:hover": {
                      bgcolor: "#6e4ef0",
                    },
                  }}
                >
                  Create
                </Button>

                <IconButton
                  sx={{
                    border: `1px solid ${dark.border}`,
                    borderRadius: "10px",
                    color: dark.muted,
                  }}
                >
                  <FilterList />
                </IconButton>
              </Stack>
            </Stack>
          </Box>

          <Stats />

          {/* Main grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "minmax(0,1.6fr) minmax(320px,.75fr)",
              },
              gap: 1.5,
              mt: 1.5,
            }}
          >
            {/* LEFT */}
            <Box>
              <Paper
                sx={{
                  p: 2,
                  mb: 1.5,
                  borderRadius: "16px",
                  bgcolor: dark.panel,
                  border: `1px solid ${dark.border}`,
                  boxShadow: "none",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1.5}
                >
                  <Box>
                    <Typography
                      fontSize={15}
                      fontWeight={800}
                    >
                      Explore your city
                    </Typography>

                    <Typography
                      fontSize={10}
                      color={dark.muted}
                    >
                      Places worth discovering nearby
                    </Typography>
                  </Box>

                  <Button
                    endIcon={<ArrowForward />}
                    sx={{
                      color: "#a895ff",
                      textTransform: "none",
                      fontSize: 10,
                    }}
                  >
                    View all
                  </Button>
                </Stack>

                <MapPanel />
              </Paper>
            </Box>

            {/* RIGHT */}
            <Stack spacing={1.5}>
              <Projects />
              <Activity />
            </Stack>
          </Box>

          {/* Bottom area */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1.2fr .8fr",
              },
              gap: 1.5,
              mt: 1.5,
            }}
          >
            <SocialFeed />

            <Stack spacing={1.5}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: "16px",
                  bgcolor: dark.panel,
                  border: `1px solid ${dark.border}`,
                  boxShadow: "none",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Box>
                    <Typography
                      fontSize={15}
                      fontWeight={800}
                    >
                      Your week
                    </Typography>

                    <Typography
                      fontSize={10}
                      color={dark.muted}
                    >
                      Productivity overview
                    </Typography>
                  </Box>

                  <Chip
                    label="This week"
                    size="small"
                    deleteIcon={
                      <KeyboardArrowDown
                        sx={{ fontSize: 15 }}
                      />
                    }
                    onDelete={() => { }}
                    sx={{
                      bgcolor: "rgba(255,255,255,.05)",
                      color: dark.muted,
                      fontSize: 9,
                    }}
                  />
                </Stack>

                <Stack
                  direction="row"
                  alignItems="flex-end"
                  spacing={1}
                  sx={{ height: 140 }}
                >
                  {[42, 67, 51, 88, 72, 94, 63].map(
                    (height, index) => (
                      <Box
                        key={index}
                        sx={{
                          flex: 1,
                          height: `${height}%`,
                          minHeight: 15,
                          borderRadius: "6px 6px 2px 2px",
                          background:
                            index === 5
                              ? "linear-gradient(180deg,#a895ff,#6046d8)"
                              : "rgba(124,92,255,.2)",
                          transition: ".2s",
                          "&:hover": {
                            background:
                              "linear-gradient(180deg,#a895ff,#6046d8)",
                          },
                        }}
                      />
                    )
                  )}
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  mt={1}
                >
                  {["M", "T", "W", "T", "F", "S", "S"].map(
                    (day) => (
                      <Typography
                        key={day}
                        fontSize={8}
                        color={dark.muted}
                        sx={{
                          width: "14%",
                          textAlign: "center",
                        }}
                      >
                        {day}
                      </Typography>
                    )
                  )}
                </Stack>
              </Paper>

              <Paper
                sx={{
                  p: 2,
                  borderRadius: "16px",
                  bgcolor: dark.panel,
                  border: `1px solid ${dark.border}`,
                  boxShadow: "none",
                  backgroundImage:
                    "radial-gradient(circle at 100% 0%,rgba(124,92,255,.14),transparent 45%)",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "12px",
                      bgcolor: "rgba(124,92,255,.12)",
                      display: "grid",
                      placeItems: "center",
                      color: "#a895ff",
                    }}
                  >
                    <Cloud />
                  </Box>

                  <Box>
                    <Typography
                      fontSize={11}
                      color={dark.muted}
                    >
                      YOUR CLOUD
                    </Typography>

                    <Typography
                      fontSize={18}
                      fontWeight={800}
                    >
                      7.4 GB
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      ml: "auto",
                      fontSize: 10,
                      color: dark.muted,
                    }}
                  >
                    / 15 GB
                  </Typography>
                </Stack>

                <LinearProgress
                  variant="determinate"
                  value={49}
                  sx={{
                    mt: 2,
                    height: 5,
                    borderRadius: 5,
                    bgcolor: "rgba(255,255,255,.05)",
                  }}
                />

                <Button
                  endIcon={<ArrowForward />}
                  sx={{
                    mt: 1.2,
                    color: "#a895ff",
                    textTransform: "none",
                    fontSize: 10,
                    p: 0,
                  }}
                >
                  Manage storage
                </Button>
              </Paper>
            </Stack>
          </Box>

          {/* Footer */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              py: 4,
              color: dark.muted,
            }}
          >
            <Typography fontSize={9}>
              © 2026 Atlas
            </Typography>

            <Stack direction="row" spacing={2}>
              <Typography fontSize={9}>
                Privacy
              </Typography>
              <Typography fontSize={9}>
                Terms
              </Typography>
              <Typography fontSize={9}>
                Help
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/*                          SMALL ICON COMPONENTS                             */
/* -------------------------------------------------------------------------- */

function CoffeeIcon() {
  return <PhotoCamera sx={{ fontSize: 16 }} />;
}

function RestaurantIcon() {
  return <Home sx={{ fontSize: 16 }} />;
}