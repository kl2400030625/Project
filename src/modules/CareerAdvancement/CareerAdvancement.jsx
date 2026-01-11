import { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Button,
} from '@mui/material'
import LearningPaths from './components/LearningPaths'
import SkillTracker from './components/SkillTracker'
import Courses from './components/Courses'
import ProgressDashboard from './components/ProgressDashboard'

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`advancement-tabpanel-${index}`}
      aria-labelledby={`advancement-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  )
}

function CareerAdvancement() {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          Career Advancement
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, textAlign: 'center' }}>
          Develop your skills and advance in your chosen career with personalized learning paths
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="career advancement tabs">
            <Tab label="Dashboard" />
            <Tab label="Learning Paths" />
            <Tab label="Courses" />
            <Tab label="Skill Tracker" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <ProgressDashboard />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <LearningPaths />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Courses />
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <SkillTracker />
        </TabPanel>
      </Box>
    </Container>
  )
}

export default CareerAdvancement
