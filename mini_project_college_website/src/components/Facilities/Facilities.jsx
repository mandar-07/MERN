import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { facilities } from '../../data/content';
import SectionHeading, { Section } from '../common/SectionHeading';

export default function Facilities() {
  return (
    <Section id="facilities">
      <SectionHeading
        overline="Infrastructure"
        title="Campus & Facilities"
        subtitle="Spaces that support learning, research, residential life and student wellbeing."
      />
      <Grid container spacing={2.5}>
        {facilities.map((facility) => (
          <Grid key={facility.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              sx={{
                height: '100%',
                overflow: 'hidden',
                '&:hover': { boxShadow: 4 },
                '&:hover img': { transform: 'scale(1.05)' },
              }}
            >
              <Box sx={{ overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={facility.image}
                  alt={facility.name}
                  loading="lazy"
                  sx={{ transition: 'transform 0.4s ease' }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ fontSize: '1.05rem', mb: 0.75 }}>
                  {facility.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {facility.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
