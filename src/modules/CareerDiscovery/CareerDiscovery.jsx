import { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  Alert,
} from '@mui/material'
import PersonalInfoForm from './components/PersonalInfoForm'
import InterestAssessment from './components/InterestAssessment'
import SkillAssessment from './components/SkillAssessment'
import CareerRecommendations from './components/CareerRecommendations'

const steps = ['Personal Info', 'Interest Assessment', 'Skill Assessment', 'Recommendations']

function CareerDiscovery() {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    education: '',
    interests: [],
    skills: {},
    assessmentResults: null,
  })

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    setFormData({
      name: '',
      age: '',
      education: '',
      interests: [],
      skills: {},
      assessmentResults: null,
    })
  }

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfoForm formData={formData} updateFormData={updateFormData} />
      case 1:
        return <InterestAssessment formData={formData} updateFormData={updateFormData} />
      case 2:
        return <SkillAssessment formData={formData} updateFormData={updateFormData} />
      case 3:
        return <CareerRecommendations formData={formData} />
      default:
        return 'Unknown step'
    }
  }

  const canProceed = () => {
    switch (activeStep) {
      case 0:
        return formData.name && formData.age && formData.education
      case 1:
        return formData.interests.length > 0
      case 2:
        return Object.keys(formData.skills).length > 0
      default:
        return true
    }
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          Career Discovery
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, textAlign: 'center' }}>
          Take a comprehensive assessment to discover your ideal career path
        </Typography>

        <Paper sx={{ p: 4, mb: 4 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <Box sx={{ textAlign: 'center' }}>
              <Alert severity="success" sx={{ mb: 3 }}>
                Assessment completed! Review your recommendations.
              </Alert>
              <Button onClick={handleReset} variant="contained" size="large">
                Start Over
              </Button>
            </Box>
          ) : (
            <>
              <Box sx={{ mb: 4, minHeight: 400 }}>
                {getStepContent(activeStep)}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={!canProceed()}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Paper>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Step 1: Personal Info
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tell us about yourself to personalize your career discovery journey
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Step 2: Interest Assessment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Identify your interests and passions to find matching career fields
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Step 3: Skill Assessment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Evaluate your current skills and identify areas for growth
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default CareerDiscovery
