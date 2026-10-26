import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { admissionCards } from '../../data/content';
import SectionHeading, { Section } from '../common/SectionHeading';

export default function Admissions() {
  return (
    <Section
      id="admissions"
      sx={{
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 60%, #1A5A9E 100%)`,
        color: 'common.white',
      }}
    >
      <SectionHeading
        light
        overline="Admissions"
        title="Begin Your Journey at DYPCET"
        subtitle="Join a community of aspiring engineers, innovators and future leaders."
      />

      <Grid container spacing={2}>
        {admissionCards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                height: '100%',
                bgcolor: alpha('#FFFFFF', 0.08),
                border: `1px solid ${alpha('#fff', 0.18)}`,
                color: 'common.white',
                '&:hover': {
                  bgcolor: alpha('#FFFFFF', 0.12),
                  transform: 'translateY(-3px)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.300' }}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <Button
          component={RouterLink}
          to="/admissions"
          variant="contained"
          color="secondary"
          size="large"
        >
          Apply Now
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
          View Admission Process
        </Button>
      </Stack>

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="caption" sx={{ color: 'grey.400' }}>
          Admission details should be verified against the official DYPCET admissions notifications.
        </Typography>
      </Box>
    </Section>
  );
}
