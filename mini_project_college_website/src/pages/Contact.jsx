import Container from '@mui/material/Container';
import Contact from '../components/Contact/Contact';
import PageHero from '../components/common/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Reach the campus office for admissions, academics and general enquiries."
        crumbs={[{ label: 'Contact' }]}
      />
      <Container disableGutters maxWidth={false}>
        <Contact />
      </Container>
    </>
  );
}
