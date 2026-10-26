import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Alert from '@mui/material/Alert';
import { testimonials } from '../../data/content';
import SectionHeading, { Section } from '../common/SectionHeading';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <Section id="testimonials" bgcolor="background.paper">
      <SectionHeading
        overline="Voices"
        title="Testimonials"
        subtitle="Perspectives from students and alumni on learning and growth at DYPCET."
      />

      <Alert severity="info" sx={{ mb: 3 }}>
        Testimonial names are placeholders pending official alumni/student quotes.
      </Alert>

      <Card
        sx={{
          maxWidth: 760,
          mx: 'auto',
          p: { xs: 1, md: 2 },
        }}
      >
        <CardContent>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2.5 }}>
            <Avatar src={item.photo} alt="" sx={{ width: 64, height: 64 }} />
            <Box>
              <Typography fontWeight={700}>{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.program}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Graduation year: {item.year}
              </Typography>
            </Box>
          </Stack>
          <Typography
            sx={{
              fontSize: { xs: '1.05rem', md: '1.2rem' },
              fontStyle: 'italic',
              color: 'text.primary',
              lineHeight: 1.7,
              minHeight: 96,
            }}
          >
            “{item.quote}”
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              {index + 1} / {testimonials.length}
            </Typography>
            <Stack direction="row">
              <IconButton
                aria-label="Previous testimonial"
                onClick={() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                aria-label="Next testimonial"
                onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
              >
                <ChevronRightIcon />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Section>
  );
}
