import { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Slider,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import EditIcon from '@mui/icons-material/Edit'

const skillLevels = {
  1: 'Beginner',
  2: 'Intermediate',
  3: 'Advanced',
  4: 'Expert',
}

const initialSkills = [
  { id: 1, name: 'JavaScript', level: 3, target: 4, category: 'Programming' },
  { id: 2, name: 'React', level: 2, target: 4, category: 'Frontend' },
  { id: 3, name: 'Node.js', level: 2, target: 3, category: 'Backend' },
  { id: 4, name: 'Python', level: 3, target: 4, category: 'Programming' },
  { id: 5, name: 'UI/UX Design', level: 1, target: 3, category: 'Design' },
  { id: 6, name: 'Data Analysis', level: 2, target: 3, category: 'Data Science' },
]

function SkillTracker() {
  const [skills, setSkills] = useState(initialSkills)
  const [openDialog, setOpenDialog] = useState(false)
  const [editingSkill, setEditingSkill] = useState(null)
  const [newSkill, setNewSkill] = useState({ name: '', level: 1, target: 4, category: '' })

  const handleOpenDialog = (skill = null) => {
    if (skill) {
      setEditingSkill(skill)
      setNewSkill({ name: skill.name, level: skill.level, target: skill.target, category: skill.category })
    } else {
      setEditingSkill(null)
      setNewSkill({ name: '', level: 1, target: 4, category: '' })
    }
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditingSkill(null)
    setNewSkill({ name: '', level: 1, target: 4, category: '' })
  }

  const handleSaveSkill = () => {
    if (editingSkill) {
      setSkills(skills.map(s => s.id === editingSkill.id ? { ...editingSkill, ...newSkill } : s))
    } else {
      setSkills([...skills, { id: skills.length + 1, ...newSkill }])
    }
    handleCloseDialog()
  }

  const getProgress = (level, target) => {
    return (level / target) * 100
  }

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'success'
    if (progress >= 50) return 'primary'
    if (progress >= 25) return 'warning'
    return 'error'
  }

  const categories = [...new Set(skills.map(s => s.category))]

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Skill Tracker
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add Skill
        </Button>
      </Box>

      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Track your skill development and set goals to advance in your career
      </Typography>

      {categories.map((category) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            {category}
          </Typography>
          <Grid container spacing={3}>
            {skills
              .filter(skill => skill.category === category)
              .map((skill) => {
                const progress = getProgress(skill.level, skill.target)
                return (
                  <Grid item xs={12} md={6} key={skill.id}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {skill.name}
                          </Typography>
                          <Box>
                            <Chip
                              label={skillLevels[skill.level]}
                              size="small"
                              color="primary"
                              sx={{ mr: 1 }}
                            />
                            <Button
                              size="small"
                              startIcon={<EditIcon />}
                              onClick={() => handleOpenDialog(skill)}
                            >
                              Edit
                            </Button>
                          </Box>
                        </Box>
                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              Current: {skillLevels[skill.level]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Target: {skillLevels[skill.target]}
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={progress}
                            color={getProgressColor(progress)}
                            sx={{ height: 10, borderRadius: 5 }}
                          />
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>
                            {Math.round(progress)}% towards target
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                          <TrendingUpIcon sx={{ color: 'success.main', mr: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            Keep learning to reach {skillLevels[skill.target]} level
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
          </Grid>
        </Box>
      ))}

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingSkill ? 'Edit Skill' : 'Add New Skill'}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Skill Name"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Category"
            value={newSkill.category}
            onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
            margin="normal"
          />
          <Box sx={{ mt: 3, mb: 2 }}>
            <Typography gutterBottom>
              Current Level: {skillLevels[newSkill.level]}
            </Typography>
            <Slider
              value={newSkill.level}
              min={1}
              max={4}
              step={1}
              marks
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => skillLevels[value]}
              onChange={(e, value) => setNewSkill({ ...newSkill, level: value })}
            />
          </Box>
          <Box sx={{ mt: 4, mb: 2 }}>
            <Typography gutterBottom>
              Target Level: {skillLevels[newSkill.target]}
            </Typography>
            <Slider
              value={newSkill.target}
              min={1}
              max={4}
              step={1}
              marks
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => skillLevels[value]}
              onChange={(e, value) => setNewSkill({ ...newSkill, target: value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveSkill} variant="contained" disabled={!newSkill.name || !newSkill.category}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default SkillTracker
