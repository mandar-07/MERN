import Container from '@mui/material/Container';
import Placements from '../components/Placements/Placements';
import PageHero from '../components/common/PageHero';

export default function PlacementsPage() {
  return (
    <>
      <PageHero
        title="Placements"
        subtitle="Training, internships and campus recruitment support for career-ready graduates."
        crumbs={[{ label: 'Placements' }]}
      />
      <Container disableGutters maxWidth={false}>
        <Placements />
      </Container>
    </>
  );
}
