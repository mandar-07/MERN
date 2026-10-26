import { useMemo, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
import {
  faculty,
  facultyDepartments,
  facultyDesignations,
} from '../../data/faculty';
import SectionHeading, { Section } from '../common/SectionHeading';

const PAGE_SIZE = 6;

export default function Faculty({ preview = false } = {}) {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('All');
  const [designation, setDesignation] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return faculty.filter((person) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        person.name.toLowerCase().includes(q) ||
        person.specialization.toLowerCase().includes(q) ||
        person.department.toLowerCase().includes(q);
      const matchesDept = department === 'All' || person.department === department;
      const matchesDesig = designation === 'All' || person.designation === designation;
      return matchesQuery && matchesDept && matchesDesig;
    });
  }, [query, department, designation]);

  const visible = preview ? filtered.slice(0, 4) : filtered.slice(0, visibleCount);

  return (
    <Section id="faculty" bgcolor={preview ? 'background.paper' : 'transparent'}>
      <SectionHeading
        overline="People"
        title="Our Faculty"
        subtitle="Meet the faculty members who inspire learning, research and innovation."
      />

      <Alert severity="info" sx={{ mb: 3 }}>
        Faculty profiles shown here are placeholders. Replace entries in <strong>src/data/faculty.js</strong> with
        official directory information.
      </Alert>

      {!preview && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
            gap: 2,
            mb: 4,
          }}
        >
          <TextField
            label="Search faculty..."
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="dept-filter-label">Department</InputLabel>
            <Select
              labelId="dept-filter-label"
              label="Department"
              value={department}
              onChange={(event) => {
                setDepartment(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
            >
              {facultyDepartments.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="desig-filter-label">Designation</InputLabel>
            <Select
              labelId="desig-filter-label"
              label="Designation"
              value={designation}
              onChange={(event) => {
                setDesignation(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
            >
              {facultyDesignations.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}

      <Grid container spacing={2.5}>
        {visible.map((person) => (
          <Grid key={person.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Avatar
                    src={person.photo}
                    alt=""
                    sx={{ width: 72, height: 72 }}
                  />
                  <Box>
                    <Typography fontWeight={700}>{person.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {person.designation}
                    </Typography>
                    <Chip label={person.department} size="small" sx={{ mt: 1 }} />
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Specialization:</strong> {person.specialization}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {person.email}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button size="small" component={RouterLink} to="/faculty">
                  Profile
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {!preview && visibleCount < filtered.length && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="outlined" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
            Load More
          </Button>
        </Box>
      )}

      {preview && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button component={RouterLink} to="/faculty" variant="contained">
            View All Faculty
          </Button>
        </Box>
      )}
    </Section>
  );
}
