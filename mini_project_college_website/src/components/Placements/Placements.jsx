import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { placementStats, recruiters } from '../../data/content';
import SectionHeading, { Section } from '../common/SectionHeading';

const placementTopics = [
  {
    title: 'Training & Development',
    description: 'Aptitude, communication and technical readiness programs for career preparation.',
  },
  {
    title: 'Placement Process',
    description: 'Structured campus recruitment support from eligibility to offer management.',
  },
  {
    title: 'Recruiters',
    description: 'Engagement with companies across software, core engineering and consulting domains.',
  },
  {
    title: 'Internships',
    description: 'Industry exposure opportunities that strengthen practical learning.',
  },
  {
    title: 'Career Services',
    description: 'Guidance for resumes, interviews and professional pathway planning.',
  },
  {
    title: 'Alumni Network',
    description: 'Mentorship and industry connections through the DYPCET alumni community.',
  },
];

export default function Placements() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((value) => (value + 1) % recruiters.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const visibleRecruiters = [...recruiters, ...recruiters].slice(offset, offset + 6);

  return (
    <Section id="placements" bgcolor="background.paper">
      <SectionHeading
        overline="Careers"
        title="Placements & Career"
        subtitle="Preparing students for successful careers through industry exposure, training and placement opportunities."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
          gap: 2,
          mb: 4,
        }}
      >
        {placementStats.map((stat) => (
          <Paper
            key={stat.label}
            elevation={0}
            sx={{
              p: 2.5,
              height: '100%',
              textAlign: 'center',
              border: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Libre Baskerville", Georgia, serif',
                fontWeight: 700,
                fontSize: { xs: '1.35rem', md: '1.6rem' },
                color: 'primary.main',
                mb: 0.5,
              }}
            >
              {stat.value}
            </Typography>
            <Typography fontWeight={700} variant="body2">
              {stat.label}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {stat.note}
            </Typography>
          </Paper>
        ))}
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="overline" color="secondary.dark" sx={{ display: 'block', mb: 1.5 }}>
          Recruiters Snapshot
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            overflow: 'hidden',
            py: 1,
          }}
        >
          {visibleRecruiters.map((name, index) => (
            <Paper
              key={`${name}-${index}`}
              elevation={0}
              sx={{
                px: 3,
                py: 1.5,
                minWidth: 140,
                textAlign: 'center',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                fontWeight: 700,
                color: 'primary.main',
              }}
            >
              {name}
            </Paper>
          ))}
        </Stack>
        <Typography variant="caption" color="text.secondary">
          Company names shown as illustrative placeholders — replace with official recruiter branding where permitted.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {placementTopics.map((topic) => (
          <Grid key={topic.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 } }}>
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  {topic.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {topic.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button component={RouterLink} to="/placements" variant="contained">
          Explore Placements
        </Button>
      </Box>
    </Section>
  );
}
