import React, {  useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  alpha,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Paper,
  Fab,
  Fade,
  Zoom,
  Grow,
} from '@mui/material';
import {
  Security as SecurityIcon,
  Image as ImageIcon,
  Speed as SpeedIcon,
  ArrowForward as ArrowForwardIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Lock,
  CloudUpload,
  Download,
  TrendingUp,
  People,
  CheckCircle,
  Star,
} from '@mui/icons-material';
import Logo from "../Logo.png"

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [visibleFeatures, setVisibleFeatures] = React.useState([]);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Animate features on scroll
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible && visibleFeatures.length === 0) {
          setVisibleFeatures(features.map((_, i) => i));
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Military-Grade Security',
      description: 'AES-256 encryption combined with steganography for double-layer protection',
      color: '#1976d2',
      delay: 0,
    },
    {
      icon: <ImageIcon sx={{ fontSize: 40 }} />,
      title: 'Multiple Format Support',
      description: 'Support for PNG, JPG, BMP, and WebP formats with lossless encoding',
      color: '#7b1fa2',
      delay: 0.1,
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'High-Performance Engine',
      description: 'Process images up to 100MB with lightning-fast encoding and decoding',
      color: '#ed6c02',
      delay: 0.2,
    },
    {
      icon: <CloudUpload sx={{ fontSize: 40 }} />,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud storage providers for easy access',
      color: '#0288d1',
      delay: 0.3,
    },
    {
      icon: <Download sx={{ fontSize: 40 }} />,
      title: 'Batch Processing',
      description: 'Process multiple images simultaneously with advanced queue management',
      color: '#2e7d32',
      delay: 0.4,
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics and monitoring of your steganography operations',
      color: '#d32f2f',
      delay: 0.5,
    },
  ];

  const stats = [
    { value: '99.9%', label: 'Success Rate', icon: <CheckCircle sx={{ fontSize: 24 }} /> },
    { value: '<1s', label: 'Processing Time', icon: <SpeedIcon sx={{ fontSize: 24 }} /> },
    { value: '256-bit', label: 'Encryption', icon: <Lock sx={{ fontSize: 24 }} /> },
    { value: '50+', label: 'Countries', icon: <People sx={{ fontSize: 24 }} /> },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Security Analyst',
      content: 'The best steganography tool I\'ve ever used. Military-grade security with an intuitive interface.',
      rating: 5,
    },
    {
      name: 'Amresh Bhuyan',
      role: 'CEO, AediaX Tech Private Limited',
      content: 'AediaX has revolutionized how we handle sensitive data. The performance is outstanding.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Cybersecurity Expert',
      content: 'Double-layer encryption with steganography - this is the future of data security.',
      rating: 5,
    },
  ];

  const handleSteganographyClick = () => {
    navigate('/steganography');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));

    return (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {particles.map((particle) => (
          <Box
            key={particle.id}
            sx={{
              position: 'absolute',
              width: particle.size,
              height: particle.size,
              backgroundColor: alpha(theme.palette.primary.main, 0.3),
              borderRadius: '50%',
              left: `${particle.left}%`,
              top: '-10%',
              animation: `float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
              '@keyframes float': {
                '0%': {
                  transform: 'translateY(0) rotate(0deg)',
                  opacity: 0,
                },
                '10%': {
                  opacity: 0.5,
                },
                '90%': {
                  opacity: 0.5,
                },
                '100%': {
                  transform: 'translateY(110vh) rotate(360deg)',
                  opacity: 0,
                },
              },
            }}
          />
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Add keyframes animation */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          @keyframes slideInUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes slideInLeft {
            from {
              transform: translateX(-30px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes slideInRight {
            from {
              transform: translateX(30px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 5px rgba(25, 118, 210, 0.3); }
            50% { box-shadow: 0 0 20px rgba(25, 118, 210, 0.6); }
          }
        `}
      </style>

      {/* Navigation */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          bgcolor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          borderBottom: scrolled ? `1px solid ${alpha(theme.palette.primary.main, 0.2)}` : 'none',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: { xs: 1.5, sm: 2 },
            }}
          >
            <Zoom in={true} style={{ transitionDelay: '100ms' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 }, cursor: 'pointer' }}>
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -5,
                      left: -5,
                      right: -5,
                      bottom: -5,
                      borderRadius: '50%',
                          opacity: 0.3,
                      animation: 'pulse 2s infinite',
                    },
                  }}
                >
                  <img
                    src={Logo}
                    alt="AediaX"
                    style={{ height: isMobile ? '32px' : '40px', width: 'auto', position: 'relative', zIndex: 1 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/40x40?text=AX';
                    }}
                  />
                </Box>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  sx={{
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  }}
                >
                  AediaX
                </Typography>
              </Box>
            </Zoom>
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack direction="row" spacing={2}>
                <Button
                  variant="text"
                  color="primary"
                  onClick={handleSteganographyClick}
                  sx={{ 
                    fontWeight: 500,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                    transition: 'transform 0.2s ease',
                  }}
                >
                  Launch App
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSteganographyClick}
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(25, 118, 210, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started
                </Button>
              </Stack>
            )}
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={toggleMobileMenu}
                sx={{ 
                  color: theme.palette.primary.main,
                  '&:hover': {
                    transform: 'rotate(90deg)',
                  },
                  transition: 'transform 0.3s ease',
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: '80%',
            maxWidth: '300px',
            bgcolor: 'white',
            background: `linear-gradient(135deg, #ffffff 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={toggleMobileMenu}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleSteganographyClick}>
                <ListItemText primary="Launch App" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleSteganographyClick}>
                <ListItemText primary="Get Started" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Hero Section with Particles */}
      <Box
        ref={heroRef}
        sx={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: `radial-gradient(circle at 20% 50%, ${alpha(theme.palette.primary.main, 0.03)} 0%, transparent 50%)`,
        }}
      >
        <FloatingParticles />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Zoom in={true} timeout={800}>
              <Box
                component="img"
                src={Logo}
                alt="AediaX"
                sx={{
                  height: { xs: '80px', sm: '100px' },
                  width: 'auto',
                  mb: 3,
                  display: 'inline-block',
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/100x100?text=AX';
                }}
              />
            </Zoom>
            
            <Fade in={true} timeout={1000}>
              <Typography
                variant={isMobile ? "h3" : "h1"}
                sx={{
                  mb: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.primary.dark} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: { xs: '2rem', sm: '3rem', md: '4.5rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                Hide Secrets in Plain Sight
              </Typography>
            </Fade>
            
            <Fade in={true} timeout={1200}>
              <Typography
                variant={isMobile ? "body1" : "h5"}
                color="text.secondary"
                sx={{ 
                  mb: 4, 
                  fontWeight: 400,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Advanced steganography solution for secure data hiding in images with military-grade encryption
              </Typography>
            </Fade>
            
            <Grow in={true} timeout={1400}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size={isMobile ? "medium" : "large"}
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleSteganographyClick}
                  sx={{
                    px: { xs: 4, sm: 5 },
                    py: { xs: 1.5, sm: 2 },
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    borderRadius: '50px',
                    boxShadow: '0 10px 30px rgba(25, 118, 210, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 15px 40px rgba(25, 118, 210, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Start Encoding
                </Button>
                <Button
                  variant="outlined"
                  size={isMobile ? "medium" : "large"}
                  onClick={handleSteganographyClick}
                  sx={{ 
                    px: { xs: 4, sm: 5 }, 
                    py: { xs: 1.5, sm: 2 }, 
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    borderRadius: '50px',
                    borderWidth: '2px',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      borderWidth: '2px',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </Grow>
          </Box>
        </Container>
        
        {/* Animated Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            cursor: 'pointer',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
              '50%': { transform: 'translateX(-50%) translateY(-10px)' },
            },
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <Box
            sx={{
              width: 30,
              height: 50,
              border: `2px solid ${theme.palette.primary.main}`,
              borderRadius: '15px',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: 4,
                height: 10,
                backgroundColor: theme.palette.primary.main,
                left: '50%',
                transform: 'translateX(-50%)',
                top: 8,
                borderRadius: '2px',
                animation: 'scrollIndicator 2s infinite',
                '@keyframes scrollIndicator': {
                  '0%': { transform: 'translateX(-50%) translateY(0)', opacity: 1 },
                  '100%': { transform: 'translateX(-50%) translateY(20px)', opacity: 0 },
                },
              },
            }}
          />
        </Box>
      </Box>

      {/* Stats Section with Creative Cards */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.02), py: { xs: 6, sm: 8 }, position: 'relative' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            {stats.map((stat, index) => (
              <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    flex: '1 1 200px',
                    minWidth: '180px',
                    textAlign: 'center',
                    p: 3,
                    background: 'white',
                    borderRadius: '20px',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.primary.dark, 0.1)})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      mb: 1,
                      fontSize: { xs: '2rem', sm: '2.5rem' },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Zoom>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Features Section with Animated Cards */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }} ref={featuresRef}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            Why Choose AediaX
          </Typography>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
            }}
          >
            Powerful Features
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            Enterprise-grade steganography with cutting-edge technology for ultimate security
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Fade
              in={visibleFeatures.includes(index)}
              timeout={800}
              style={{ transitionDelay: `${feature.delay}s` }}
              key={index}
            >
              <Box
                sx={{
                  flex: '1 1 300px',
                  maxWidth: '350px',
                  position: 'relative',
                  animation: visibleFeatures.includes(index) ? 'slideInUp 0.6s ease-out' : 'none',
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '24px',
                    background: 'white',
                    border: `1px solid ${alpha(feature.color, 0.2)}`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${feature.color}, ${alpha(feature.color, 0.5)})`,
                      transform: 'scaleX(0)',
                      transition: 'transform 0.4s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: `0 20px 40px ${alpha(feature.color, 0.15)}`,
                      borderColor: alpha(feature.color, 0.4),
                      '&::before': {
                        transform: 'scaleX(1)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '20px',
                      background: `linear-gradient(135deg, ${alpha(feature.color, 0.1)}, ${alpha(feature.color, 0.05)})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      color: feature.color,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                  <Button
                    size="small"
                    sx={{
                      mt: 3,
                      color: feature.color,
                      '&:hover': {
                        background: alpha(feature.color, 0.1),
                      },
                    }}
                    onClick={handleSteganographyClick}
                  >
                    Learn More →
                  </Button>
                </Paper>
              </Box>
            </Fade>
          ))}
        </Box>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.02), py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              Trusted by Experts
            </Typography>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                mb: 2,
                fontWeight: 800,
              }}
            >
              What Our Users Say
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Grow in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    flex: '1 1 300px',
                    maxWidth: '350px',
                    p: 4,
                    borderRadius: '24px',
                    background: 'white',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: '#ffc107', fontSize: 20 }} />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', lineHeight: 1.6 }}>
                    "{testimonial.content}"
                  </Typography>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Paper>
              </Grow>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section with Floating Animation */}
      <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              p: { xs: 4, sm: 6, md: 8 },
              borderRadius: '40px',
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              position: 'relative',
              overflow: 'hidden',
              animation: 'glow 2s infinite',
            }}
          >
            <Typography 
              variant={isMobile ? "h4" : "h3"} 
              sx={{ mb: 2, fontWeight: 800, color: 'white' }}
            >
              Ready to Secure Your Data?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: alpha('#fff', 0.9) }}>
              Join thousands of users who trust AediaX for their steganography needs
            </Typography>
            <Button
              variant="contained"
              size={isMobile ? "medium" : "large"}
              onClick={handleSteganographyClick}
              sx={{
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                backgroundColor: 'white',
                color: theme.palette.primary.main,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: alpha('#fff', 0.9),
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Launch Steganography Tool
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: { xs: 4, sm: 5 },
          borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: { xs: 2, sm: 0 },
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
            <Stack 
              direction="row" 
              spacing={3}
            >
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: theme.palette.primary.main } }}>
                Privacy
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: theme.palette.primary.main } }}>
                Terms
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: theme.palette.primary.main } }}>
                Support
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Floating Action Button for Mobile */}
      {isMobile && (
        <Fab
          color="primary"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            '&:hover': {
              transform: 'scale(1.1)',
            },
            transition: 'transform 0.3s ease',
          }}
          onClick={handleSteganographyClick}
        >
          <SecurityIcon />
        </Fab>
      )}
    </Box>
  );
};

export default Home;