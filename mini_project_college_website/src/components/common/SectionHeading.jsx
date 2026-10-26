import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useInView from '../../hooks/useInView';

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = 'center',
  light = false,
  maxWidth = 720,
}) {
  const [ref, inView] = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: align,
        mb: { xs: 4, md: 6 },
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(18px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
      }}
    >
      {overline && (
        <Typography
          variant="overline"
          sx={{ color: light ? 'secondary.light' : 'secondary.dark', display: 'block', mb: 1 }}
        >
          {overline}
        </Typography>
      )}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: '1.75rem', md: '2.35rem' },
          color: light ? 'common.white' : 'primary.main',
          mb: subtitle ? 1.5 : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: light ? 'grey.300' : 'text.secondary',
            maxWidth,
            mx: align === 'center' ? 'auto' : 0,
            fontSize: { xs: '1rem', md: '1.05rem' },
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export function Section({ id, children, bgcolor, sx = {}, disableGutters = false }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: bgcolor || 'transparent',
        ...sx,
      }}
    >
      <Container maxWidth="lg" disableGutters={disableGutters}>
        {children}
      </Container>
    </Box>
  );
}
