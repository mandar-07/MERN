import AssignmentIcon from '@mui/icons-material/Assignment';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CampaignIcon from '@mui/icons-material/Campaign';
import DnsIcon from '@mui/icons-material/Dns';
import DownloadIcon from '@mui/icons-material/Download';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { quickLinks } from '../../data/content';
import SectionHeading, { Section } from '../common/SectionHeading';

const iconMap = {
  CalendarMonth: CalendarMonthIcon,
  Assignment: AssignmentIcon,
  FactCheck: FactCheckIcon,
  Schedule: ScheduleIcon,
  MenuBook: MenuBookIcon,
  LocalLibrary: LocalLibraryIcon,
  Dns: DnsIcon,
  School: SchoolIcon,
  Badge: BadgeIcon,
  Work: WorkIcon,
  HowToReg: HowToRegIcon,
  VolunteerActivism: VolunteerActivismIcon,
  Campaign: CampaignIcon,
  Download: DownloadIcon,
};

const routeHints = {
  Placements: '/placements',
  Admissions: '/admissions',
};

export default function QuickLinks() {
  return (
    <Section id="quick-links">
      <SectionHeading
        overline="Resources"
        title="Quick Links"
        subtitle="Fast access to frequently used academic and student services."
      />
      <Grid container spacing={2}>
        {quickLinks.map((item) => {
          const Icon = iconMap[item.icon] || SchoolIcon;
          const to = routeHints[item.label] || '#';
          return (
            <Grid key={item.label} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
              <Card sx={{ height: '100%', '&:hover': { boxShadow: 3, transform: 'translateY(-2px)' } }}>
                <CardActionArea
                  component={to === '#' ? 'button' : RouterLink}
                  to={to === '#' ? undefined : to}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ textAlign: 'center', py: 2.5 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        mx: 'auto',
                        mb: 1.25,
                        borderRadius: 2,
                        bgcolor: 'primary.main',
                        color: 'common.white',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      <Icon fontSize="small" />
                    </Box>
                    <Typography variant="body2" fontWeight={700}>
                      {item.label}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
