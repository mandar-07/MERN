import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useCountUp from '../../hooks/useCountUp';
import { glanceStats } from '../../data/site';
import SectionHeading, { Section } from '../common/SectionHeading';

function StatCard({ stat }) {
  const [ref, value] = useCountUp(stat.isText ? 0 : stat.value, {
    enabled: !stat.isText,
    duration: 1500,
  });

  const display = stat.isText ? stat.value : `${Math.round(value)}${stat.suffix}`;

  return (
    <Paper
      ref={ref}
      elevation={0}
      sx={{
        p: { xs: 2.5, md: 3 },
        height: '100%',
        textAlign: 'center',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        '&:hover': {
          boxShadow: 3,
          transform: 'translateY(-4px)',
        },
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Libre Baskerville", Georgia, serif',
          fontWeight: 700,
          fontSize: { xs: '1.85rem', md: '2.35rem' },
          color: 'primary.main',
          lineHeight: 1.1,
          mb: 0.75,
        }}
      >
        {display}
      </Typography>
      <Typography fontWeight={700} sx={{ mb: 0.35 }}>
        {stat.label}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {stat.note}
      </Typography>
    </Paper>
  );
}

export default function Stats() {
  return (
    <Section id="glance" bgcolor="background.paper">
      <SectionHeading
        overline="Institutional Snapshot"
        title="DYPCET at a Glance"
        subtitle="Four decades of excellence in engineering education, innovation and student development."
      />
      <Grid container spacing={2.5}>
        {glanceStats.map((stat) => (
          <Grid key={stat.id} size={{ xs: 6, sm: 4, md: 2 }}>
            <StatCard stat={stat} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Key figures referenced from the official DYPCET website; update locally as newer verified data becomes available.
        </Typography>
      </Box>
    </Section>
  );
}
