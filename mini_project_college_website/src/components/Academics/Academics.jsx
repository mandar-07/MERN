import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { programs } from '../../data/departments';
import SectionHeading, { Section } from '../common/SectionHeading';

const filters = [
  { value: 'all', label: 'All' },
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'postgraduate', label: 'Postgraduate' },
];

export default function Academics({ limit } = {}) {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(() => {
    const list =
      filter === 'all' ? programs : programs.filter((program) => program.category === filter);
    return typeof limit === 'number' ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <Section id="academics" bgcolor="background.paper">
      <SectionHeading
        overline="Programs"
        title="Academic Excellence"
        subtitle="Undergraduate and postgraduate programs designed for rigorous fundamentals and industry relevance."
      />

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Tabs
          value={filter}
          onChange={(_, value) => setFilter(value)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Program filters"
        >
          {filters.map((item) => (
            <Tab key={item.value} value={item.value} label={item.label} />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={2.5}>
        {visible.map((program) => (
          <Grid key={program.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                  <Chip label={program.degree} size="small" color="primary" />
                  <Chip label={program.duration} size="small" variant="outlined" />
                </Stack>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontSize: '1.1rem' }}>
                  {program.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {program.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button component={RouterLink} to="/academics" size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {limit && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button component={RouterLink} to="/academics" variant="outlined">
            View All Programs
          </Button>
        </Box>
      )}
    </Section>
  );
}
