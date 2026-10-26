import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Departments from '../components/Departments/Departments';
import PageHero from '../components/common/PageHero';

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        title="Departments"
        subtitle="Discipline communities that drive teaching, laboratories and student mentoring."
        crumbs={[{ label: 'Departments' }]}
      />
      <Container disableGutters maxWidth={false}>
        <Departments />
        <Container sx={{ pb: 6 }}>
          <Typography variant="body2" color="text.secondary">
            Department pages can be expanded with official faculty directories, laboratories and outcome data.
          </Typography>
        </Container>
      </Container>
    </>
  );
}
