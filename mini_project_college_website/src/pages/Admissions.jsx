import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Admissions from '../components/Admissions/Admissions';
import PageHero from '../components/common/PageHero';
import { admissionCards } from '../data/content';

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Begin your engineering journey at DYPCET with clear guidance on programs and process."
        crumbs={[{ label: 'Admissions' }]}
      />
      <Container sx={{ py: { xs: 5, md: 7 } }}>
        <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 720 }}>
          Join a community of aspiring engineers, innovators and future leaders. Review eligibility, process steps
          and key dates, then apply through the official admission channels published by the institute.
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {admissionCards.map((card) => (
            <Grid key={card.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button variant="contained" color="secondary" size="large" href="https://dypcet.dypgroup.edu.in/" target="_blank" rel="noopener noreferrer">
            Apply Now
          </Button>
          <Button variant="outlined" size="large" href="https://dypcet.dypgroup.edu.in/" target="_blank" rel="noopener noreferrer">
            Official Admissions Portal
          </Button>
        </Stack>
      </Container>
      <Box>
        <Admissions />
      </Box>
    </>
  );
}
