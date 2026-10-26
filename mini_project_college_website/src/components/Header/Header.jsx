import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha } from '@mui/material/styles';
import { navLinks, siteInfo, utilityLinks } from '../../data/site';

const drawerWidth = 300;

function handleNavClick(navigate, path) {
  if (path.includes('#')) {
    const [route, hash] = path.split('#');
    if (route === '/' || route === '') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }
  }
  navigate(path);
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: 'primary.dark',
          color: 'grey.200',
          fontSize: 12,
          display: { xs: 'none', md: 'block' },
          borderBottom: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 0.5,
            py: 0.6,
            flexWrap: 'wrap',
          }}
        >
          {utilityLinks.map((item, index) => (
            <Box key={item.label} sx={{ display: 'flex', alignItems: 'center' }}>
              {item.path ? (
                <Link
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  underline="hover"
                  sx={{ px: 1.25, py: 0.25, fontSize: 12, fontWeight: 500 }}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  href={item.href}
                  color="inherit"
                  underline="hover"
                  sx={{ px: 1.25, py: 0.25, fontSize: 12, fontWeight: 500 }}
                >
                  {item.label}
                </Link>
              )}
              {index < utilityLinks.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: alpha('#fff', 0.2), mx: 0.25 }}
                />
              )}
            </Box>
          ))}
        </Container>
      </Box>

      <AppBar
        position="sticky"
        elevation={0}
        color="inherit"
        sx={{
          bgcolor: alpha('#FFFFFF', scrolled ? 0.96 : 1),
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: (theme) => `1px solid ${alpha(theme.palette.primary.main, scrolled ? 0.12 : 0.06)}`,
          transition: 'all 0.25s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: scrolled ? 68 : 84 },
              gap: 2,
              transition: 'min-height 0.25s ease',
            }}
          >
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                textDecoration: 'none',
                color: 'inherit',
                minWidth: 0,
                flexShrink: 1,
              }}
            >
              <Box
                component="img"
                src="/logo.svg"
                alt="DYPCET logo"
                sx={{ width: scrolled ? 42 : 48, height: scrolled ? 42 : 48, transition: 'all 0.25s ease' }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: '"Libre Baskerville", Georgia, serif',
                    fontWeight: 700,
                    color: 'primary.main',
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: scrolled ? '0.95rem' : '1.05rem' },
                    lineHeight: 1.25,
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  {siteInfo.shortName}
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'none', lg: 'block' },
                    color: 'text.secondary',
                    fontSize: scrolled ? 11 : 12,
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: 280,
                  }}
                >
                  {siteInfo.name}
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'none', lg: 'block' },
                    color: 'secondary.dark',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {siteInfo.subtitle}
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    fontFamily: '"Libre Baskerville", Georgia, serif',
                    fontWeight: 700,
                    color: 'primary.main',
                    fontSize: '1rem',
                  }}
                >
                  {siteInfo.shortName}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box
              component="nav"
              aria-label="Primary"
              sx={{
                display: { xs: 'none', xl: 'flex' },
                alignItems: 'center',
                gap: 0.25,
              }}
            >
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Button
                    key={link.label}
                    onClick={() => handleNavClick(navigate, link.path)}
                    color="inherit"
                    sx={{
                      color: active ? 'primary.main' : 'text.primary',
                      fontWeight: active ? 700 : 500,
                      fontSize: 13,
                      px: 1.1,
                      minWidth: 0,
                      borderBottom: active ? '2px solid' : '2px solid transparent',
                      borderColor: active ? 'secondary.main' : 'transparent',
                      borderRadius: 0,
                      '&:hover': { bgcolor: alpha('#0B3A6E', 0.04), color: 'primary.main' },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>

            <Box
              component="nav"
              aria-label="Primary compact"
              sx={{
                display: { xs: 'none', md: 'flex', xl: 'none' },
                alignItems: 'center',
                gap: 0.25,
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                maxWidth: 520,
              }}
            >
              {navLinks.slice(0, 6).map((link) => (
                <Button
                  key={link.label}
                  onClick={() => handleNavClick(navigate, link.path)}
                  sx={{
                    color: 'text.primary',
                    fontSize: 12.5,
                    px: 0.9,
                    minWidth: 0,
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            <Button
              variant="contained"
              color="secondary"
              component={RouterLink}
              to="/admissions"
              sx={{ display: { xs: 'none', sm: 'inline-flex' }, ml: 1 }}
            >
              Admissions
            </Button>

            <IconButton
              edge="end"
              aria-label="Open navigation menu"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'inline-flex', xl: 'none' }, ml: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: drawerWidth } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
          <Typography fontWeight={700} color="primary.main">
            {siteInfo.shortName}
          </Typography>
          <IconButton aria-label="Close navigation menu" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List component="nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <ListItemButton
              key={link.label}
              selected={location.pathname === link.path}
              onClick={() => {
                setOpen(false);
                handleNavClick(navigate, link.path);
              }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ p: 2 }}>
          <Button fullWidth variant="contained" color="secondary" component={RouterLink} to="/admissions">
            Admissions
          </Button>
        </Box>
        <Divider />
        <List dense>
          {utilityLinks.map((item) => (
            <ListItemButton
              key={item.label}
              component={item.path ? RouterLink : 'a'}
              to={item.path}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
