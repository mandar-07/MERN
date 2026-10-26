import Container from '@mui/material/Container';
import Research from '../components/Research/Research';
import PageHero from '../components/common/PageHero';

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="Research & Innovation"
        subtitle="Interdisciplinary research, publications, patents and industry collaboration pathways."
        crumbs={[{ label: 'Research' }]}
      />
      <Container disableGutters maxWidth={false}>
        <Research />
      </Container>
    </>
  );
}
