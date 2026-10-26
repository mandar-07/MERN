import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { siteInfo } from '../../data/site';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=1000&fit=crop&q=80';

export default function Hero() {
  return (
    <Box
      component="section"
      aria-label="Hero"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: 'calc(100vh - 120px)' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(105deg, rgba(7,40,73,0.92) 0%, rgba(11,58,110,0.78) 48%, rgba(11,58,110,0.45) 100%), url(${HERO_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'common.white',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              animation: 'fadeUp 0.7s ease both',
              '@keyframes fadeUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'none' },
              },
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.light',
                mb: 1.5,
                display: 'inline-block',
                bgcolor: alpha('#000', 0.25),
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                border: `1px solid ${alpha('#E8A317', 0.35)}`,
              }}
            >
              Established {siteInfo.established} | Autonomous Institute
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontFamily: '"Libre Baskerville", Georgia, serif',
                fontWeight: 700,
                fontSize: { xs: '1.85rem', sm: '2.35rem', md: '2.75rem' },
                lineHeight: 1.15,
                mb: 1.5,
                maxWidth: 620,
              }}
            >
              {siteInfo.name}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1.15rem', md: '1.35rem' },
                fontWeight: 600,
                color: 'secondary.light',
                mb: 1.5,
              }}
            >
              Engineering minds. Creating the future.
            </Typography>

            <Typography
              sx={{
                color: 'grey.200',
                maxWidth: 520,
                mb: 3.5,
                fontSize: { xs: '0.98rem', md: '1.05rem' },
              }}
            >
              Empowering students through quality education, innovation, research and industry-oriented
              learning.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button
                component={RouterLink}
                to="/about"
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
                size="large"
              >
                Explore DYPCET
              </Button>
              <Button
                component={RouterLink}
                to="/admissions"
                variant="outlined"
                size="large"
                sx={{
                  color: 'common.white',
                  borderColor: alpha('#fff', 0.45),
                  '&:hover': { borderColor: 'common.white', bgcolor: alpha('#fff', 0.08) },
                }}
              >
                Admissions
              </Button>
              <Button
                component={RouterLink}
                to="/academics"
                variant="text"
                size="large"
                sx={{ color: 'grey.100', '&:hover': { bgcolor: alpha('#fff', 0.08) } }}
              >
                Explore Programs
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              animation: 'fadeUp 0.85s ease 0.12s both',
              '@keyframes fadeUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'none' },
              },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: alpha('#FFFFFF', 0.1),
                border: `1px solid ${alpha('#fff', 0.2)}`,
                backdropFilter: 'blur(8px)',
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&h=700&fit=crop"
                alt="Engineering students collaborating in a modern laboratory"
                loading="lazy"
                sx={{
                  width: '100%',
                  height: 280,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 2.5,
                }}
              />
              <Typography variant="overline" sx={{ color: 'secondary.light' }}>
                Kasaba Bawada, Kolhapur
              </Typography>
              <Typography sx={{ fontWeight: 700, mb: 1, fontSize: '1.15rem' }}>
                A legacy of technical education since 1984
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="NAAC A" size="small" sx={{ bgcolor: alpha('#E8A317', 0.2), color: 'common.white' }} />
                <Chip label="AICTE Approved" size="small" sx={{ bgcolor: alpha('#fff', 0.12), color: 'common.white' }} />
                <Chip label="Autonomous" size="small" sx={{ bgcolor: alpha('#fff', 0.12), color: 'common.white' }} />
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
