import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PageHero from '../components/common/PageHero';
import { accreditations } from '../data/site';

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About DYPCET"
        subtitle="An autonomous engineering institute in Kolhapur dedicated to quality technical education since 1984."
        crumbs={[{ label: 'About' }]}
      />
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h4" component="h2" color="primary.main" sx={{ mb: 2 }}>
              Institutional Overview
            </Typography>
            <Typography color="text.secondary" paragraph>
              D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur, was established in
              1984 under the leadership of Padmashree Dr. D. Y. Patil. The institute offers undergraduate and
              postgraduate programs in engineering and architecture with a focus on academic rigor, laboratory
              practice and industry readiness.
            </Typography>
            <Typography color="text.secondary" paragraph>
              Autonomous status was conferred by UGC and Shivaji University in 2020. The institute is approved by
              AICTE, affiliated to Shivaji University, and accredited by NAAC with an A grade (CGPA 3.08). Select
              undergraduate programs have received NBA accreditation as published by the institute.
            </Typography>

            <Box id="vision" sx={{ scrollMarginTop: 120, mt: 4 }}>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={700}>Vision</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    To be a leading centre of engineering education that nurtures competent, ethical and innovative
                    graduates who contribute meaningfully to society and industry.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={700}>Mission</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    To deliver quality technical education through contemporary curricula, research orientation,
                    strong industry connect and holistic student development in a disciplined academic environment.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} id="accreditations" sx={{ scrollMarginTop: 120 }}>
            <Typography variant="h5" component="h3" color="primary.main" sx={{ mb: 2 }}>
              Accreditations & Approvals
            </Typography>
            <Grid container spacing={2}>
              {accreditations.map((item) => (
                <Grid key={item.title} size={{ xs: 12, sm: 6, md: 12 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Typography fontWeight={700} color="primary.main">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
