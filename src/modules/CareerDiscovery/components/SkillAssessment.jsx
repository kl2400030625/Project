import { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Slider,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@mui/material'

const skillCategories = {
  'Technical Skills': ['Programming', 'Data Analysis', 'Design Tools', 'Project Management', 'System Administration'],
  'Soft Skills': ['Communication', 'Leadership', 'Problem Solving', 'Teamwork', 'Time Management'],
  'Domain Skills': ['Marketing', 'Sales', 'Finance', 'Research', 'Writing'],
}

const skillLevels = {
  1: 'Beginner',
  2: 'Intermediate',
  3: 'Advanced',
  4: 'Expert',
}

function SkillAssessment({ formData, updateFormData }) {
  const [skills, setSkills] = useState(formData.skills || {})

  const handleSkillChange = (skill, value) => {
    const newSkills = { ...skills, [skill]: value }
    setSkills(newSkills)
    updateFormData({ skills: newSkills })
  }

  const getSkillValue = (skill) => {
    return skills[skill] || 1
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Skill Assessment
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Rate your proficiency level for each skill. Be honest to get the best recommendations.
      </Typography>

      {Object.entries(skillCategories).map(([category, categorySkills]) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            {category}
          </Typography>
          <Grid container spacing={3}>
            {categorySkills.map((skill) => (
              <Grid item xs={12} md={6} key={skill}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                      {skill}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Slider
                        value={getSkillValue(skill)}
                        min={1}
                        max={4}
                        step={1}
                        marks
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => skillLevels[value]}
                        onChange={(e, value) => handleSkillChange(skill, value)}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>
                        Level: {skillLevels[getSkillValue(skill)]}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  )
}

export default SkillAssessment
