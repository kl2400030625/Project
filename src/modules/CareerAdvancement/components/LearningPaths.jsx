import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  LinearProgress,
  Chip,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
} from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const learningPaths = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Master both frontend and backend development to become a full stack developer',
    duration: '6 months',
    level: 'Intermediate',
    progress: 45,
    modules: 12,
    completedModules: 5,
    steps: [
      { label: 'HTML/CSS Fundamentals', completed: true },
      { label: 'JavaScript Basics', completed: true },
      { label: 'React Framework', completed: true },
      { label: 'Node.js & Express', completed: false },
      { label: 'Database Design', completed: false },
      { label: 'Deployment & DevOps', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Data Science Career Path',
    description: 'Learn data analysis, machine learning, and AI to kickstart your data science career',
    duration: '8 months',
    level: 'Beginner',
    progress: 25,
    modules: 15,
    completedModules: 4,
    steps: [
      { label: 'Python Fundamentals', completed: true },
      { label: 'Data Analysis with Pandas', completed: true },
      { label: 'Data Visualization', completed: false },
      { label: 'Machine Learning Basics', completed: false },
      { label: 'Advanced ML Techniques', completed: false },
    ],
  },
  {
    id: 3,
    title: 'UI/UX Design Mastery',
    description: 'Create stunning user interfaces and exceptional user experiences',
    duration: '4 months',
    level: 'Beginner',
    progress: 0,
    modules: 10,
    completedModules: 0,
    steps: [
      { label: 'Design Principles', completed: false },
      { label: 'Figma Basics', completed: false },
      { label: 'User Research', completed: false },
      { label: 'Prototyping', completed: false },
    ],
  },
  {
    id: 4,
    title: 'Digital Marketing Expert',
    description: 'Master SEO, social media marketing, and content strategy',
    duration: '5 months',
    level: 'Beginner',
    progress: 60,
    modules: 8,
    completedModules: 5,
    steps: [
      { label: 'Marketing Fundamentals', completed: true },
      { label: 'SEO Optimization', completed: true },
      { label: 'Social Media Strategy', completed: true },
      { label: 'Content Marketing', completed: true },
      { label: 'Analytics & Measurement', completed: true },
      { label: 'Advanced Strategies', completed: false },
    ],
  },
]

function LearningPaths() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Learning Paths
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Follow structured learning paths designed by industry experts to advance your career
      </Typography>

      <Grid container spacing={3}>
        {learningPaths.map((path) => (
          <Grid item xs={12} md={6} key={path.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {path.title}
                  </Typography>
                  <Chip label={path.level} size="small" color="primary" variant="outlined" />
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {path.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">
                      Progress: {path.completedModules}/{path.modules} modules
                    </Typography>
                    <Typography variant="body2" color="primary.main">
                      {path.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={path.progress} sx={{ height: 8, borderRadius: 4 }} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {path.duration}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  {path.steps.slice(0, 3).map((step, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      {step.completed ? (
                        <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20, mr: 1 }} />
                      ) : (
                        <Box sx={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid', borderColor: 'divider', mr: 1 }} />
                      )}
                      <Typography variant="body2" sx={{ textDecoration: step.completed ? 'line-through' : 'none', color: step.completed ? 'text.secondary' : 'text.primary' }}>
                        {step.label}
                      </Typography>
                    </Box>
                  ))}
                  {path.steps.length > 3 && (
                    <Typography variant="body2" color="text.secondary">
                      +{path.steps.length - 3} more steps
                    </Typography>
                  )}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  startIcon={<PlayCircleIcon />}
                  fullWidth
                >
                  {path.progress > 0 ? 'Continue Learning' : 'Start Path'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default LearningPaths
