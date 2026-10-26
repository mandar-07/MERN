import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

export default function PageHero({ title, subtitle, crumbs = [] }) {
  return (
    <Box
      sx={{
        pt: { xs: 14, md: 16 },
        pb: { xs: 5, md: 7 },
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 55%, #1A5A9E 100%)`,
        color: 'common.white',
      }}
    >
      <Container>
        {crumbs.length > 0 && (
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              mb: 2,
              '& .MuiBreadcrumbs-separator': { color: 'grey.400' },
              '& a': { color: 'grey.300' },
            }}
          >
            <Link component={RouterLink} to="/" underline="hover" color="inherit">
              Home
            </Link>
            {crumbs.map((crumb) =>
              crumb.to ? (
                <Link key={crumb.label} component={RouterLink} to={crumb.to} underline="hover" color="inherit">
                  {crumb.label}
                </Link>
              ) : (
                <Typography key={crumb.label} color="common.white">
                  {crumb.label}
                </Typography>
              ),
            )}
          </Breadcrumbs>
        )}
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '1.85rem', md: '2.6rem' }, mb: subtitle ? 1.25 : 0 }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography sx={{ maxWidth: 680, color: 'grey.200', fontSize: { xs: '1rem', md: '1.1rem' } }}>
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
