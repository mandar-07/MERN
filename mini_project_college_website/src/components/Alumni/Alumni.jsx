import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { alumniHighlights, testimonials } from '../../data/content';
import SectionHeading, { Section } from '../common/SectionHeading';

export default function Alumni() {
  return (
    <Section id="alumni">
      <SectionHeading
        overline="Community"
        title="Our Alumni"
        subtitle="A growing network of graduates contributing across industry, research and entrepreneurship."
      />

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {alumniHighlights.map((item) => (
          <Grid key={item.label} size={{ xs: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                textAlign: 'center',
                border: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Libre Baskerville", Georgia, serif',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: 'primary.main',
                }}
              >
                {item.value}
              </Typography>
              <Typography fontWeight={600}>{item.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {testimonials.slice(0, 2).map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                  “{item.quote}”
                </Typography>
                <Typography fontWeight={700}>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.program} · {item.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" color="primary">
          Join the Alumni Network
        </Button>
      </Box>
    </Section>
  );
}
