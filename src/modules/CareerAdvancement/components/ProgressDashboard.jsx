import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import AssignmentIcon from '@mui/icons-material/Assignment'

function ProgressDashboard() {
  // Mock data
  const stats = {
    coursesCompleted: 12,
    totalCourses: 20,
    skillsMastered: 8,
    totalSkills: 15,
    learningStreak: 7,
    hoursLearned: 45,
  }

  const recentActivity = [
    { type: 'course', title: 'JavaScript Fundamentals', date: '2 days ago', status: 'completed' },
    { type: 'skill', title: 'React Development', date: '3 days ago', status: 'improved' },
    { type: 'course', title: 'Data Structures & Algorithms', date: '5 days ago', status: 'in-progress' },
    { type: 'skill', title: 'Node.js', date: '1 week ago', status: 'improved' },
  ]

  const progress = (stats.coursesCompleted / stats.totalCourses) * 100

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Your Progress Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                  <SchoolIcon />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {stats.coursesCompleted}/{stats.totalCourses}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Courses Completed
                  </Typography>
                </Box>
              </Box>
              <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
                  <CheckCircleIcon />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {stats.skillsMastered}/{stats.totalSkills}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Skills Mastered
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={(stats.skillsMastered / stats.totalSkills) * 100}
                color="success"
                sx={{ height: 8, borderRadius: 4 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'warning.main', mr: 2 }}>
                  <TrendingUpIcon />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {stats.learningStreak}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Day Streak
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                  <AssignmentIcon />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {stats.hoursLearned}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hours Learned
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Recent Activity
              </Typography>
              <List>
                {recentActivity.map((activity, index) => (
                  <Box key={index}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: activity.status === 'completed' ? 'success.main' : 'primary.main' }}>
                          {activity.type === 'course' ? <SchoolIcon /> : <WorkIcon />}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={activity.title}
                        secondary={activity.date}
                      />
                      <Chip
                        label={activity.status}
                        color={activity.status === 'completed' ? 'success' : 'primary'}
                        size="small"
                      />
                    </ListItem>
                    {index < recentActivity.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Chip
                  icon={<SchoolIcon />}
                  label="Continue Learning"
                  clickable
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  icon={<AssignmentIcon />}
                  label="Take Assessment"
                  clickable
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  icon={<TrendingUpIcon />}
                  label="View Recommendations"
                  clickable
                  color="primary"
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProgressDashboard
