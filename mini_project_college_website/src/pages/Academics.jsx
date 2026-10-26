import Container from '@mui/material/Container';
import Academics from '../components/Academics/Academics';
import Departments from '../components/Departments/Departments';
import PageHero from '../components/common/PageHero';

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics"
        subtitle="Explore undergraduate and postgraduate programs across engineering and architecture."
        crumbs={[{ label: 'Academics' }]}
      />
      <Container disableGutters maxWidth={false}>
        <Academics />
        <Departments />
      </Container>
    </>
  );
}
