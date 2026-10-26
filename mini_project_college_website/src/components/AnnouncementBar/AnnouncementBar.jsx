import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CampaignIcon from '@mui/icons-material/Campaign';
import { announcements } from '../../data/site';

export default function AnnouncementBar() {
  return (
    <Box
      component="section"
      aria-label="Announcements"
      sx={{
        bgcolor: 'background.paper',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        py: 1.5,
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
            <CampaignIcon color="secondary" fontSize="small" />
            <Typography
              variant="overline"
              sx={{ display: { xs: 'none', sm: 'block' }, color: 'primary.main', lineHeight: 1 }}
            >
              Announcements
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              overflowX: 'auto',
              pb: 0.5,
              scrollbarWidth: 'thin',
              '&::-webkit-scrollbar': { height: 4 },
            }}
          >
            {announcements.map((item) => (
              <Chip
                key={item.id}
                label={`${item.type}: ${item.text}`}
                variant="outlined"
                size="small"
                sx={{
                  flexShrink: 0,
                  borderColor: 'primary.light',
                  color: 'text.primary',
                  bgcolor: 'common.white',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
