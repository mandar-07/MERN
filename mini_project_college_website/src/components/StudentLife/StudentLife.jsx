import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { studentLife } from '../../data/content';
import SectionHeading, { Section } from '../common/SectionHeading';

export default function StudentLife() {
  return (
    <Section id="student-life" bgcolor="background.paper">
      <SectionHeading
        overline="Campus Experience"
        title="Student Life"
        subtitle="Clubs, culture, sports and community initiatives that shape a complete engineering education."
      />
      <Box
        sx={{
          columns: { xs: 1, sm: 2, md: 3 },
          columnGap: 2,
        }}
      >
        {studentLife.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              breakInside: 'avoid',
              mb: 2,
              position: 'relative',
              borderRadius: 3,
              overflow: 'hidden',
              border: (theme) => `1px solid ${theme.palette.divider}`,
              '&:hover img': { transform: 'scale(1.04)' },
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              loading="lazy"
              sx={{
                width: '100%',
                display: 'block',
                height: index % 3 === 0 ? 260 : 200,
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 'auto 0 0 0',
                p: 2,
                background: 'linear-gradient(transparent, rgba(7,40,73,0.85))',
              }}
            >
              <Typography fontWeight={700} color="common.white">
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
