/**
 * PLACEHOLDER faculty directory.
 * Replace with official faculty data from DYPCET department pages.
 * Names and emails below are fictional placeholders for UI demonstration only.
 */
export const faculty = [
  {
    id: 1,
    name: 'Dr. [Faculty Name]',
    designation: 'Professor & Head',
    department: 'Computer Science & Engineering',
    specialization: 'Distributed Systems, Cloud Computing',
    email: 'faculty.cse@example.dypcet.edu',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    isPlaceholder: true,
  },
  {
    id: 2,
    name: 'Prof. [Faculty Name]',
    designation: 'Associate Professor',
    department: 'Artificial Intelligence & Machine Learning',
    specialization: 'Machine Learning, Computer Vision',
    email: 'faculty.aiml@example.dypcet.edu',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    isPlaceholder: true,
  },
  {
    id: 3,
    name: 'Dr. [Faculty Name]',
    designation: 'Assistant Professor',
    department: 'Electronics & Telecommunication',
    specialization: 'Embedded Systems, IoT',
    email: 'faculty.entc@example.dypcet.edu',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    isPlaceholder: true,
  },
  {
    id: 4,
    name: 'Prof. [Faculty Name]',
    designation: 'Professor',
    department: 'Mechanical Engineering',
    specialization: 'Thermal Engineering, CAD/CAM',
    email: 'faculty.mech@example.dypcet.edu',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    isPlaceholder: true,
  },
  {
    id: 5,
    name: 'Dr. [Faculty Name]',
    designation: 'Associate Professor',
    department: 'Civil Engineering',
    specialization: 'Structural Engineering',
    email: 'faculty.civil@example.dypcet.edu',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    isPlaceholder: true,
  },
  {
    id: 6,
    name: 'Prof. [Faculty Name]',
    designation: 'Assistant Professor',
    department: 'Chemical Engineering',
    specialization: 'Process Design, Reaction Engineering',
    email: 'faculty.chem@example.dypcet.edu',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    isPlaceholder: true,
  },
  {
    id: 7,
    name: 'Dr. [Faculty Name]',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    specialization: 'Data Science, Big Data Analytics',
    email: 'faculty.ds@example.dypcet.edu',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    isPlaceholder: true,
  },
  {
    id: 8,
    name: 'Prof. [Faculty Name]',
    designation: 'Associate Professor',
    department: 'Architecture',
    specialization: 'Urban Design, Sustainable Architecture',
    email: 'faculty.arch@example.dypcet.edu',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    isPlaceholder: true,
  },
];

export const facultyDepartments = [
  'All',
  ...Array.from(new Set(faculty.map((f) => f.department))),
];

export const facultyDesignations = [
  'All',
  ...Array.from(new Set(faculty.map((f) => f.designation))),
];
