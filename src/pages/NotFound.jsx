import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  alpha,
  Stack,
} from '@mui/material';
import {
  Home as HomeIcon,
  ArrowBack as ArrowBackIcon,
  HelpOutline as HelpOutlineIcon,
  Lock as LockIcon,
} from '@mui/icons-material';
import Logo from '../Logo.png';

const NotFound = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const suggestions = [
    {
      title: 'Go to Homepage',
      description: 'Return to the main dashboard',
      action: () => navigate('/'),
      icon: <HomeIcon />,
    },
    {
      title: 'Launch Steganography Tool',
      description: 'Start hiding messages in images',
      action: () => navigate('/steganography'),
      icon: <LockIcon />,
    },
    {
      title: 'Contact Support',
      description: 'Get help from our team',
      action: () => window.location.href = 'mailto:support@aediax.com',
      icon: <HelpOutlineIcon />,
    },
  ];

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh' }}>
      {/* Simple Header */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          bgcolor: 'white',
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img
                src={Logo}
                alt="AediaX"
                style={{ height: '40px', width: 'auto' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/40x40?text=AX';
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                AediaX Steganography
              </Typography>
            </Box>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate(-1)}
              variant="outlined"
              sx={{ borderRadius: 2 }}
            >
              Go Back
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 404 Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          {/* Animated 404 Text */}
          <Box sx={{ position: 'relative', mb: 4 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '120px', md: '180px' },
                fontWeight: 800,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ${alpha(theme.palette.primary.dark, 0.2)} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '-0.05em',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              404
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
                borderRadius: '50%',
                zIndex: -1,
              }}
            />
          </Box>

          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            Page Not Found
          </Typography>
          
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: '500px',
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </Typography>

          {/* Search/Quick Actions */}
          <Box
            sx={{
              mb: 6,
              p: 3,
              bgcolor: alpha(theme.palette.primary.main, 0.02),
              borderRadius: 3,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Quick Navigation
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                onClick={() => navigate('/')}
                startIcon={<HomeIcon />}
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  px: 3,
                }}
              >
                Back to Home
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/steganography')}
                startIcon={<LockIcon />}
                sx={{ px: 3 }}
              >
                Steganography Tool
              </Button>
            </Stack>
          </Box>

          {/* Suggestions Grid */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 3,
              mb: 6,
            }}
          >
            {suggestions.map((suggestion, index) => (
              <Box
                key={index}
                onClick={suggestion.action}
                sx={{
                  flex: '1 1 250px',
                  maxWidth: '280px',
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'white',
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                    bgcolor: alpha(theme.palette.primary.main, 0.02),
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    color: theme.palette.primary.main,
                  }}
                >
                  {suggestion.icon}
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {suggestion.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {suggestion.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Fun Fact / Error Tip */}
          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              bgcolor: alpha(theme.palette.primary.main, 0.05),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              💡 Did you know?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Steganography can hide messages in images so effectively that the human eye
              can't detect any difference in the image quality.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          bgcolor: 'white',
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img
                src={Logo}
                alt="AediaX"
                style={{ height: '30px', width: 'auto' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/30x30?text=AX';
                }}
              />
              <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Aediax • Advanced Steganography Solution
              </Typography>
            </Box>
            <Stack direction="row" spacing={3}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                Home
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate('/steganography')}
              >
                Steganography
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: 'pointer' }}
              >
                Support
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default NotFound;