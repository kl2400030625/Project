import { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Chip,
} from '@mui/material'

const interestCategories = {
  'Technology': ['Programming', 'Web Development', 'Mobile Apps', 'Data Science', 'AI/ML', 'Cybersecurity'],
  'Business': ['Finance', 'Marketing', 'Entrepreneurship', 'Management', 'Sales', 'Consulting'],
  'Creative': ['Design', 'Writing', 'Photography', 'Video Production', 'Music', 'Art'],
  'Healthcare': ['Medicine', 'Nursing', 'Psychology', 'Public Health', 'Research', 'Therapy'],
  'Education': ['Teaching', 'Curriculum Development', 'Educational Technology', 'Research', 'Administration'],
  'Engineering': ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Software Engineering', 'Chemical Engineering'],
  'Science': ['Biology', 'Chemistry', 'Physics', 'Environmental Science', 'Research', 'Laboratory Work'],
}

function InterestAssessment({ formData, updateFormData }) {
  const [selectedInterests, setSelectedInterests] = useState(formData.interests || [])

  const handleInterestToggle = (interest) => {
    const newInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter(i => i !== interest)
      : [...selectedInterests, interest]
    setSelectedInterests(newInterests)
    updateFormData({ interests: newInterests })
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Interest Assessment
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 2 }}>
        Select all areas that interest you. This helps us match you with suitable career paths.
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" color="primary.main">
          Selected: {selectedInterests.length} interest(s)
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {Object.entries(interestCategories).map(([category, interests]) => (
          <Grid item xs={12} md={6} key={category}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  {category}
                </Typography>
                <FormGroup>
                  {interests.map((interest) => (
                    <FormControlLabel
                      key={interest}
                      control={
                        <Checkbox
                          checked={selectedInterests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                        />
                      }
                      label={interest}
                    />
                  ))}
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedInterests.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Selected Interests:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
            {selectedInterests.map((interest) => (
              <Chip key={interest} label={interest} color="primary" />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default InterestAssessment
