import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
} from '@mui/material'
import ExploreIcon from '@mui/icons-material/Explore'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SchoolIcon from '@mui/icons-material/School'
import AssessmentIcon from '@mui/icons-material/Assessment'

function Home() {
  const navigate = useNavigate()

  const features = [
    {
      title: 'Career Discovery',
      description: 'Explore different career paths, assess your interests, and find the perfect career match for your skills and passions.',
      icon: <ExploreIcon sx={{ fontSize: 60 }} />,
      path: '/career-discovery',
      color: '#1976d2',
    },
    {
      title: 'Career Advancement',
      description: 'Enhance your skills, track your progress, and advance in your chosen career with personalized learning paths.',
      icon: <TrendingUpIcon sx={{ fontSize: 60 }} />,
      path: '/career-advancement',
      color: '#dc004e',
    },
  ]

  const benefits = [
    {
      icon: <AssessmentIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Career Assessment',
      text: 'Take comprehensive assessments to understand your strengths and interests',
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Skill Development',
      text: 'Access curated learning resources to build skills in your chosen field',
    },
    {
      icon: <ExploreIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Career Exploration',
      text: 'Discover various career paths and opportunities aligned with your profile',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Progress Tracking',
      text: 'Monitor your learning journey and career growth milestones',
    },
  ]

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Find Your Career Path
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
          Discover your ideal career and advance with personalized learning paths designed just for you
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature) => (
            <Grid item xs={12} md={6} key={feature.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', py: 4 }}>
                  <Box sx={{ color: feature.color, mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate(feature.path)}
                    sx={{ px: 4 }}
                  >
                    Get Started
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper elevation={3} sx={{ p: 4, bgcolor: 'primary.main', color: 'white', mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Why Choose Career Roadmap?
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2">
                    {benefit.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  )
}

export default Home
