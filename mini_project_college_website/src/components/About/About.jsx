import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { aboutHighlights } from '../../data/site';
import SectionHeading, { Section } from '../common/SectionHeading';

const CAMPUS_IMAGE =
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&h=750&fit=crop';

export default function About() {
  return (
    <Section id="about">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 6 },
          alignItems: 'center',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box
            component="img"
            src={CAMPUS_IMAGE}
            alt="University campus buildings representing DYPCET campus atmosphere"
            loading="lazy"
            sx={{
              width: '100%',
              height: { xs: 280, md: 420 },
              objectFit: 'cover',
              borderRadius: 3,
              transition: 'transform 0.4s ease',
              '&:hover': { transform: 'scale(1.015)' },
            }}
          />
          <Paper
            elevation={4}
            sx={{
              position: 'absolute',
              left: { xs: 16, md: 24 },
              bottom: { xs: 16, md: 24 },
              p: 2,
              maxWidth: 220,
              bgcolor: 'common.white',
            }}
          >
            <Typography variant="overline" color="secondary.dark">
              Since 1984
            </Typography>
            <Typography fontWeight={700} color="primary.main">
              40+ years of engineering excellence in Kolhapur
            </Typography>
          </Paper>
        </Box>

        <Box>
          <SectionHeading
            align="left"
            overline="About DYPCET"
            title="Building Tomorrow's Leaders and Innovators"
            subtitle="Established in 1984, D. Y. Patil College of Engineering & Technology focuses on quality technical education, creativity, innovation, discipline and industry readiness."
            maxWidth={520}
          />
          <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 520 }}>
            As a self-financing autonomous institute affiliated to Shivaji University and approved by AICTE,
            DYPCET nurtures technically competent, quality-conscious engineers committed to nation building
            and lifelong learning.
          </Typography>

          <Stack spacing={1.25} sx={{ mb: 3.5 }}>
            {aboutHighlights.map((item) => (
              <Stack key={item} direction="row" spacing={1} alignItems="center">
                <CheckCircleIcon color="secondary" fontSize="small" />
                <Typography fontWeight={600}>{item}</Typography>
              </Stack>
            ))}
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button component={RouterLink} to="/about" variant="contained" color="primary">
              Learn More About DYPCET
            </Button>
            <Button component={RouterLink} to="/about#vision" variant="outlined" color="primary">
              Vision & Mission
            </Button>
          </Stack>
        </Box>
      </Box>
    </Section>
  );
}
