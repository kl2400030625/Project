import { useState } from 'react'
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from '@mui/material'

function PersonalInfoForm({ formData, updateFormData }) {
  const [localData, setLocalData] = useState({
    name: formData.name || '',
    age: formData.age || '',
    education: formData.education || '',
  })

  const handleChange = (field) => (event) => {
    const newData = { ...localData, [field]: event.target.value }
    setLocalData(newData)
    updateFormData(newData)
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Personal Information
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Help us understand your background to provide personalized career recommendations
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Full Name"
            value={localData.name}
            onChange={handleChange('name')}
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Age"
            type="number"
            value={localData.age}
            onChange={handleChange('age')}
            required
            variant="outlined"
            inputProps={{ min: 16, max: 100 }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth required>
            <InputLabel>Education Level</InputLabel>
            <Select
              value={localData.education}
              label="Education Level"
              onChange={handleChange('education')}
            >
              <MenuItem value="high-school">High School</MenuItem>
              <MenuItem value="bachelors">Bachelor's Degree</MenuItem>
              <MenuItem value="masters">Master's Degree</MenuItem>
              <MenuItem value="phd">Ph.D.</MenuItem>
              <MenuItem value="vocational">Vocational/Technical</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PersonalInfoForm
