import Container from '@mui/material/Container';
import Faculty from '../components/Faculty/Faculty';
import PageHero from '../components/common/PageHero';

export default function FacultyPage() {
  return (
    <>
      <PageHero
        title="Faculty"
        subtitle="Search and filter faculty profiles by department and designation."
        crumbs={[{ label: 'People' }]}
      />
      <Container disableGutters maxWidth={false}>
        <Faculty />
      </Container>
    </>
  );
}
