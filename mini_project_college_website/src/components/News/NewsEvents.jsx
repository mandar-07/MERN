import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { events, news } from '../../data/content';
import SectionHeading, { Section } from '../common/SectionHeading';

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function NewsEvents() {
  return (
    <Section id="news-events" bgcolor="background.paper">
      <SectionHeading
        overline="Updates"
        title="News & Events"
        subtitle="Stay informed about campus happenings, academic notices and upcoming activities."
      />

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="h5" component="h3" color="primary.main">
              Latest News
            </Typography>
            <Button size="small">View All News</Button>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              gap: 2,
              overflowX: { xs: 'auto', md: 'visible' },
              pb: { xs: 1, md: 0 },
            }}
          >
            {news.map((item) => (
              <Card
                key={item.id}
                sx={{
                  minWidth: { xs: 280, md: 'auto' },
                  flexShrink: 0,
                  '&:hover': { boxShadow: 3 },
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                    <Chip label={formatDate(item.date)} size="small" variant="outlined" />
                    <Chip label={item.category} size="small" color="primary" />
                  </Stack>
                  <Typography variant="h6" component="h4" sx={{ fontSize: '1.05rem', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="h5" component="h3" color="primary.main">
              Upcoming Events
            </Typography>
            <Button size="small">View All Events</Button>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              gap: 2,
              overflowX: { xs: 'auto', md: 'visible' },
              pb: { xs: 1, md: 0 },
            }}
          >
            {events.map((item) => (
              <Card
                key={item.id}
                sx={{
                  minWidth: { xs: 280, md: 'auto' },
                  flexShrink: 0,
                  display: 'flex',
                  '&:hover': { boxShadow: 3 },
                }}
              >
                <Box
                  sx={{
                    minWidth: 88,
                    bgcolor: 'primary.main',
                    color: 'common.white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 1.5,
                    py: 2,
                  }}
                >
                  <Typography variant="caption" sx={{ opacity: 0.85 }}>
                    {new Date(item.date).toLocaleDateString('en-IN', { month: 'short' })}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', lineHeight: 1 }}>
                    {new Date(item.date).getDate()}
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Chip label={item.type} size="small" sx={{ mb: 1 }} />
                  <Typography fontWeight={700} sx={{ mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                    {item.venue}
                  </Typography>
                  <Button size="small">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
