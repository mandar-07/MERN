import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { achievements } from '../../data/content';
import SectionHeading, { Section } from '../common/SectionHeading';

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        overline="Recognition"
        title="Achievements & Recognition"
        subtitle="Celebrating student and faculty milestones across academics, research, innovation and competitions."
      />

      <Alert severity="info" sx={{ mb: 3 }}>
        Achievement cards include placeholder names. Replace with verified recognitions from official circulars and department updates.
      </Alert>

      <Box
        sx={{
          display: 'flex',
          gap: 2.5,
          overflowX: 'auto',
          pb: 1,
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { height: 6 },
        }}
      >
        {achievements.map((item) => (
          <Card
            key={item.id}
            sx={{
              minWidth: { xs: 280, sm: 320 },
              maxWidth: 340,
              scrollSnapAlign: 'start',
              flexShrink: 0,
              '&:hover': { boxShadow: 4 },
            }}
          >
            <CardMedia
              component="img"
              height="170"
              image={item.image}
              alt=""
              loading="lazy"
              sx={{
                transition: 'transform 0.35s ease',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            />
            <CardContent>
              <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                <Chip label={item.year} size="small" color="secondary" />
              </Stack>
              <Typography variant="h6" component="h3" sx={{ fontSize: '1.05rem', mb: 0.5 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                {item.person}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="outlined">View All Achievements</Button>
      </Box>
    </Section>
  );
}
