import About from '../components/About/About';
import Academics from '../components/Academics/Academics';
import Achievements from '../components/Achievements/Achievements';
import Admissions from '../components/Admissions/Admissions';
import Alumni from '../components/Alumni/Alumni';
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar';
import Contact from '../components/Contact/Contact';
import Departments from '../components/Departments/Departments';
import Facilities from '../components/Facilities/Facilities';
import Faculty from '../components/Faculty/Faculty';
import Hero from '../components/Hero/Hero';
import NewsEvents from '../components/News/NewsEvents';
import Placements from '../components/Placements/Placements';
import QuickLinks from '../components/QuickLinks/QuickLinks';
import Research from '../components/Research/Research';
import Stats from '../components/Stats/Stats';
import StudentLife from '../components/StudentLife/StudentLife';
import Testimonials from '../components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <AnnouncementBar />
      <Stats />
      <About />
      <Academics limit={6} />
      <Departments />
      <Faculty preview />
      <Research />
      <Admissions />
      <Placements />
      <Achievements />
      <NewsEvents />
      <Facilities />
      <StudentLife />
      <Alumni />
      <Testimonials />
      <QuickLinks />
      <Contact />
    </>
  );
}
