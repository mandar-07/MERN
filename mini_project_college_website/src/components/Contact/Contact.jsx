import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { siteInfo } from '../../data/site';
import SectionHeading, { Section } from '../common/SectionHeading';

export default function Contact() {
  return (
    <Section id="contact" bgcolor="background.paper">
      <SectionHeading
        overline="Reach Us"
        title="Get in Touch"
        subtitle="Visit the campus or connect with the institute office for admissions and general enquiries."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1.1fr' },
          gap: 3,
          alignItems: 'stretch',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography variant="h5" component="h3" color="primary.main" sx={{ mb: 2 }}>
            {siteInfo.name}
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <LocationOnIcon color="secondary" />
              <Box>
                <Typography fontWeight={700}>Address</Typography>
                <Typography color="text.secondary">
                  {siteInfo.location}
                  <br />
                  {siteInfo.state}
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <PhoneIcon color="secondary" />
              <Box>
                <Typography fontWeight={700}>Phone</Typography>
                <Typography
                  component="a"
                  href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                  color="text.secondary"
                  sx={{ textDecoration: 'none' }}
                >
                  {siteInfo.phone}
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <PhoneInTalkIcon color="secondary" />
              <Box>
                <Typography fontWeight={700}>Landline</Typography>
                <Typography color="text.secondary">{siteInfo.landline}</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems="flex-start">
              <EmailIcon color="secondary" />
              <Box>
                <Typography fontWeight={700}>Email</Typography>
                <Typography
                  component="a"
                  href={`mailto:${siteInfo.email}`}
                  color="primary.main"
                  sx={{ textDecoration: 'none', fontWeight: 600 }}
                >
                  {siteInfo.email}
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Button
            href={siteInfo.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{ mt: 3 }}
          >
            Get Directions
          </Button>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            overflow: 'hidden',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            minHeight: { xs: 280, md: 420 },
          }}
        >
          <Box
            component="iframe"
            title="DYPCET campus location map"
            src={siteInfo.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sx={{ border: 0, width: '100%', height: '100%', minHeight: { xs: 280, md: 420 } }}
            allowFullScreen
          />
        </Paper>
      </Box>
    </Section>
  );
}
