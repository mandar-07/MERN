import ApartmentIcon from '@mui/icons-material/Apartment';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ComputerIcon from '@mui/icons-material/Computer';
import FunctionsIcon from '@mui/icons-material/Functions';
import MemoryIcon from '@mui/icons-material/Memory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { departments } from '../../data/departments';
import SectionHeading, { Section } from '../common/SectionHeading';

const icons = {
  Computer: ComputerIcon,
  Memory: MemoryIcon,
  PrecisionManufacturing: PrecisionManufacturingIcon,
  Apartment: ApartmentIcon,
  Science: ScienceIcon,
  Psychology: PsychologyIcon,
  Architecture: ArchitectureIcon,
  Functions: FunctionsIcon,
};

export default function Departments() {
  return (
    <Section id="departments">
      <SectionHeading
        overline="Departments"
        title="Academic Departments"
        subtitle="Explore discipline communities that shape teaching, laboratories and student development."
      />
      <Grid container spacing={2.5}>
        {departments.map((dept) => {
          const Icon = icons[dept.icon] || ComputerIcon;
          return (
            <Grid key={dept.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: 'primary.main',
                      color: 'common.white',
                      mb: 2,
                    }}
                  >
                    <Icon />
                  </Stack>
                  <Typography variant="h6" component="h3" sx={{ mb: 1, fontSize: '1.05rem' }}>
                    {dept.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {dept.shortDescription}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 1.5 }}>
                    {dept.programs.map((program) => (
                      <Chip key={program} label={program} size="small" variant="outlined" />
                    ))}
                  </Stack>
                  <Typography variant="caption" color="text.secondary">
                    Faculty count: {dept.facultyCount} ({dept.facultyNote})
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button component={RouterLink} to="/academics#departments" size="small">
                    View Department
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
