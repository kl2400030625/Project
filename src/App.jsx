import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from './components/Layout'
import Home from './pages/Home'
import CareerDiscovery from './modules/CareerDiscovery/CareerDiscovery'
import CareerAdvancement from './modules/CareerAdvancement/CareerAdvancement'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career-discovery" element={<CareerDiscovery />} />
            <Route path="/career-advancement" element={<CareerAdvancement />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
