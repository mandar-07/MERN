import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link as RouterLink } from 'react-router-dom';
import { siteInfo } from '../../data/site';

const columns = [
  {
    title: 'About DYPCET',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Vision & Mission', to: '/about#vision' },
      { label: 'Leadership', to: '/about' },
      { label: 'Accreditations', to: '/about#accreditations' },
      { label: 'Governance', to: '/about' },
    ],
  },
  {
    title: 'Academics',
    links: [
      { label: 'Departments', to: '/academics#departments' },
      { label: 'Programs', to: '/academics' },
      { label: 'Academic Calendar', to: '/academics' },
      { label: 'Examination', to: '/academics' },
      { label: 'Library', to: '/#facilities' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { label: 'Admission Process', to: '/admissions' },
      { label: 'Eligibility', to: '/admissions' },
      { label: 'Fee Structure', to: '/admissions' },
      { label: 'Scholarships', to: '/admissions' },
      { label: 'Important Dates', to: '/admissions' },
    ],
  },
  {
    title: 'Career',
    links: [
      { label: 'Placements', to: '/placements' },
      { label: 'Internships', to: '/placements' },
      { label: 'Training', to: '/placements' },
      { label: 'Alumni', to: '/#alumni' },
      { label: 'Industry Connect', to: '/research' },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'grey.300',
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box component="img" src="/logo.svg" alt="" sx={{ width: 48, height: 48 }} />
              <Box>
                <Typography sx={{ color: 'common.white', fontWeight: 700, fontFamily: '"Libre Baskerville", Georgia, serif' }}>
                  {siteInfo.shortName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.400', maxWidth: 280 }}>
                  {siteInfo.name}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, maxWidth: 340, color: 'grey.400' }}>
              Established {siteInfo.established}. An autonomous institute dedicated to quality technical
              education, research and industry-ready graduates in Kolhapur.
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400' }}>
              {siteInfo.location}
            </Typography>
            <Stack direction="row" spacing={0.5} sx={{ mt: 2 }}>
              <IconButton
                aria-label="Facebook"
                href={siteInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'grey.300' }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                href={siteInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'grey.300' }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href={siteInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'grey.300' }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                href={siteInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'grey.300' }}
              >
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Grid>

          {columns.map((column) => (
            <Grid key={column.title} size={{ xs: 6, sm: 3, md: 2 }}>
              <Typography
                variant="overline"
                sx={{ color: 'secondary.main', display: 'block', mb: 1.5 }}
              >
                {column.title}
              </Typography>
              <Stack spacing={1}>
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    component={RouterLink}
                    to={link.to}
                    color="inherit"
                    underline="hover"
                    sx={{ fontSize: 14, color: 'grey.400', '&:hover': { color: 'common.white' } }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.12)' }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          spacing={1.5}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <Typography variant="body2" sx={{ color: 'grey.500' }}>
            © 2026 {siteInfo.name}. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: 13, color: 'grey.500' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: 13, color: 'grey.500' }}>
              Terms
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" underline="hover" sx={{ fontSize: 13, color: 'grey.500' }}>
              Contact
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
