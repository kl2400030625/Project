import { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Rating,
  TextField,
  InputAdornment,
  LinearProgress,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'

const courses = [
  {
    id: 1,
    title: 'Programming Foundations',
    instructor: 'Platform Team',
    rating: 4.9,
    students: 32000,
    duration: '15 hours',
    level: 'Absolute Beginner',
    image: 'https://via.placeholder.com/400x250/455a64/ffffff?text=Programming+Basics',
    category: 'Foundations',
    stage: 'Foundation',
    progress: 10,
    skillsGained: ['Logic Building', 'Flowcharts', 'Problem Solving'],
  },
  {
    id: 2,
    title: 'C Programming Language',
    instructor: 'Platform Team',
    rating: 4.8,
    students: 28000,
    duration: '20 hours',
    level: 'Beginner',
    image: 'https://via.placeholder.com/400x250/2e7d32/ffffff?text=C+Language',
    category: 'Programming',
    stage: 'Core',
    progress: 0,
    skillsGained: ['Pointers', 'Memory Management', 'Loops'],
  },
  {
    id: 3,
    title: 'C++ Programming',
    instructor: 'Platform Team',
    rating: 4.7,
    students: 24000,
    duration: '25 hours',
    level: 'Intermediate',
    image: 'https://via.placeholder.com/400x250/1565c0/ffffff?text=C%2B%2B',
    category: 'Programming',
    stage: 'Core',
    progress: 0,
    skillsGained: ['OOP', 'STL', 'Classes'],
  },
  {
    id: 4,
    title: 'Java Programming',
    instructor: 'Platform Team',
    rating: 4.9,
    students: 31000,
    duration: '30 hours',
    level: 'Intermediate',
    image: 'https://via.placeholder.com/400x250/f57c00/ffffff?text=Java',
    category: 'Programming',
    stage: 'Core',
    progress: 40,
    skillsGained: ['OOP', 'Collections', 'Exception Handling'],
  },
  {
    id: 5,
    title: 'Python Programming',
    instructor: 'Platform Team',
    rating: 4.9,
    students: 35000,
    duration: '25 hours',
    level: 'Beginner',
    image: 'https://via.placeholder.com/400x250/6a1b9a/ffffff?text=Python',
    category: 'Programming',
    stage: 'Core',
    progress: 60,
    skillsGained: ['Scripting', 'Data Structures', 'Automation'],
  },
  {
    id: 6,
    title: 'JavaScript Programming',
    instructor: 'Platform Team',
    rating: 4.8,
    students: 33000,
    duration: '22 hours',
    level: 'Beginner',
    image: 'https://via.placeholder.com/400x250/ffca28/000000?text=JavaScript',
    category: 'Programming',
    stage: 'Core',
    progress: 0,
    skillsGained: ['DOM', 'Events', 'Async Programming'],
  },
  {
    id: 7,
    title: 'React (JavaScript Framework)',
    instructor: 'Platform Team',
    rating: 4.9,
    students: 21000,
    duration: '18 hours',
    level: 'Advanced',
    image: 'https://via.placeholder.com/400x250/0288d1/ffffff?text=React',
    category: 'Programming',
    stage: 'Specialization',
    progress: 30,
    skillsGained: ['Components', 'Hooks', 'State Management'],
  },
  {
    id: 8,
    title: 'Node.js Programming',
    instructor: 'Platform Team',
    rating: 4.7,
    students: 19000,
    duration: '20 hours',
    level: 'Advanced',
    image: 'https://via.placeholder.com/400x250/388e3c/ffffff?text=Node.js',
    category: 'Programming',
    stage: 'Specialization',
    progress: 0,
    skillsGained: ['Backend Logic', 'APIs', 'Asynchronous JS'],
  },
]


function Courses() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Courses
        </Typography>
        <TextField
          placeholder="Search courses..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: 300 }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
                  <Chip label={course.level} size="small" color="primary" variant="outlined" />
                  <Chip label={course.category} size="small" />
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 1 }}>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  by {course.instructor}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={course.rating} precision={0.1} readOnly size="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {course.rating}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {course.duration}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PeopleIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {course.students.toLocaleString()}
                    </Typography>
                  </Box>
                </Box>
                {course.progress > 0 && (
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">Progress</Typography>
                      <Typography variant="body2" color="primary.main">
                        {course.progress}%
                      </Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={course.progress} sx={{ height: 6, borderRadius: 3 }} />
                  </Box>
                )}
              </CardContent>
              <CardActions>
                <Button
                  variant={course.progress > 0 ? "outlined" : "contained"}
                  startIcon={<PlayCircleIcon />}
                  fullWidth
                >
                  {course.progress > 0 ? 'Continue' : 'Enroll Now'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Courses
