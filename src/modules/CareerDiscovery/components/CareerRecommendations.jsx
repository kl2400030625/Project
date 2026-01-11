import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  LinearProgress,
  Alert,
} from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

// Mock career recommendations based on interests and skills
const getCareerRecommendations = (formData) => {
  const { interests, skills } = formData
  const allCareers = [
    {
      title: 'Software Developer',
      category: 'Technology',
      match: 95,
      description: 'Design and develop software applications. Requires strong programming skills.',
      requiredSkills: ['Programming', 'Problem Solving', 'Communication'],
      growth: 'High',
      salary: '$70,000 - $120,000',
    },
    {
      title: 'Data Scientist',
      category: 'Technology',
      match: 90,
      description: 'Analyze complex data to help organizations make informed decisions.',
      requiredSkills: ['Data Analysis', 'Programming', 'Research'],
      growth: 'Very High',
      salary: '$80,000 - $140,000',
    },
    {
      title: 'UX/UI Designer',
      category: 'Creative',
      match: 85,
      description: 'Create user-friendly interfaces and experiences for digital products.',
      requiredSkills: ['Design Tools', 'Communication', 'Problem Solving'],
      growth: 'High',
      salary: '$60,000 - $110,000',
    },
    {
      title: 'Product Manager',
      category: 'Business',
      match: 88,
      description: 'Lead product development and coordinate between teams.',
      requiredSkills: ['Project Management', 'Leadership', 'Communication'],
      growth: 'High',
      salary: '$85,000 - $130,000',
    },
    {
      title: 'Marketing Manager',
      category: 'Business',
      match: 82,
      description: 'Develop and execute marketing strategies to promote products or services.',
      requiredSkills: ['Marketing', 'Communication', 'Teamwork'],
      growth: 'Medium',
      salary: '$65,000 - $115,000',
    },
    {
      title: 'Content Writer',
      category: 'Creative',
      match: 80,
      description: 'Create engaging written content for various platforms and audiences.',
      requiredSkills: ['Writing', 'Communication', 'Time Management'],
      growth: 'Medium',
      salary: '$45,000 - $80,000',
    },
  ]

  // Filter careers based on interests
  const matchingCareers = allCareers.filter(career => {
    const interestMatch = interests.some(interest => {
      return career.category.toLowerCase().includes(interest.toLowerCase()) ||
             career.title.toLowerCase().includes(interest.toLowerCase())
    })
    return interestMatch || true // Show all for demo
  })

  return matchingCareers.slice(0, 6)
}

function CareerRecommendations({ formData }) {
  const recommendations = getCareerRecommendations(formData)

  const getMatchColor = (match) => {
    if (match >= 90) return 'success'
    if (match >= 80) return 'primary'
    if (match >= 70) return 'warning'
    return 'default'
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
        Your Career Recommendations
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Based on your interests and skills, here are some career paths that might be a great fit for you:
      </Typography>

      {recommendations.length === 0 ? (
        <Alert severity="info">
          Please complete the previous steps to get personalized recommendations.
        </Alert>
      ) : (
        <Grid container spacing={3}>
          {recommendations.map((career, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {career.title}
                    </Typography>
                    <Chip
                      label={`${career.match}% Match`}
                      color={getMatchColor(career.match)}
                      size="small"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {career.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Required Skills:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {career.requiredSkills.map((skill, idx) => (
                        <Chip key={idx} label={skill} size="small" variant="outlined" />
                      ))}
                    </Box>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2">
                      <strong>Growth:</strong> {career.growth}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Salary Range:</strong> {career.salary}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={career.match}
                    sx={{ mt: 2, height: 8, borderRadius: 4 }}
                    color={getMatchColor(career.match)}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<WorkIcon />}>
                    Learn More
                  </Button>
                  <Button size="small" startIcon={<SchoolIcon />}>
                    View Courses
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Box sx={{ mt: 4, p: 3, bgcolor: 'primary.main', color: 'white', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Next Steps
        </Typography>
        <Typography variant="body2" paragraph>
          1. Explore the career paths that interest you most
        </Typography>
        <Typography variant="body2" paragraph>
          2. Identify skill gaps and create a learning plan
        </Typography>
        <Typography variant="body2" paragraph sx={{ mb: 0 }}>
          3. Visit the Career Advancement section to start building your skills
        </Typography>
      </Box>
    </Box>
  )
}

export default CareerRecommendations
