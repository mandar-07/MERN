import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { researchAreas, researchStats } from '../../data/content';
import SectionHeading, { Section } from '../common/SectionHeading';

export default function Research() {
  return (
    <Section
      id="research"
      sx={{
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <SectionHeading
        overline="Discovery"
        title="Research & Innovation"
        subtitle="Driving innovation through interdisciplinary research and collaboration."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
          gap: 4,
          mb: 4,
          alignItems: 'stretch',
        }}
      >
        <Grid container spacing={2}>
          {researchAreas.map((area) => (
            <Grid key={area.id} size={{ xs: 12, sm: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  '&:hover': { boxShadow: 4, transform: 'translateY(-3px)' },
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ mb: 1, fontSize: '1.05rem' }}>
                    {area.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {area.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          component="img"
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=1100&fit=crop"
          alt="Research laboratory with engineering equipment"
          loading="lazy"
          sx={{
            width: '100%',
            height: { xs: 260, md: '100%' },
            minHeight: { md: 480 },
            objectFit: 'cover',
            borderRadius: 3,
          }}
        />
      </Box>

      <Grid container spacing={2}>
        {researchStats.map((stat) => (
          <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                textAlign: 'center',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                bgcolor: 'common.white',
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                  fontWeight: 700,
                  fontSize: '1.75rem',
                  color: 'primary.main',
                }}
              >
                {stat.value}
              </Typography>
              <Typography fontWeight={700}>{stat.label}</Typography>
              <Typography variant="caption" color="text.secondary">
                {stat.note}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
