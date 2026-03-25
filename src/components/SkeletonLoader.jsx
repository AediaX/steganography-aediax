import React from 'react';
import { Box, Container, Skeleton, useTheme, alpha } from '@mui/material';

const SkeletonLoader = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh' }}>
      {/* Navigation Skeleton */}
      <Box
        sx={{
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={150} height={32} />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Skeleton variant="rectangular" width={100} height={40} sx={{ borderRadius: 2 }} />
              <Skeleton variant="rectangular" width={120} height={40} sx={{ borderRadius: 2 }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Hero Skeleton */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <Skeleton
            variant="circular"
            width={80}
            height={80}
            sx={{ mx: 'auto', mb: 3 }}
          />
          <Skeleton
            variant="rectangular"
            width="80%"
            height={60}
            sx={{ mx: 'auto', mb: 2, borderRadius: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="60%"
            height={32}
            sx={{ mx: 'auto', mb: 4, borderRadius: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Skeleton variant="rectangular" width={150} height={50} sx={{ borderRadius: 2 }} />
            <Skeleton variant="rectangular" width={150} height={50} sx={{ borderRadius: 2 }} />
          </Box>
        </Box>
      </Container>

      {/* Stats Skeleton */}
      <Box sx={{ bgcolor: theme.palette.background.paper, py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            {[1, 2, 3, 4].map((item) => (
              <Box key={item} sx={{ textAlign: 'center' }}>
                <Skeleton variant="rectangular" width={80} height={48} sx={{ mb: 1, borderRadius: 2 }} />
                <Skeleton variant="rectangular" width={60} height={20} sx={{ borderRadius: 2 }} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Features Skeleton */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Skeleton
            variant="rectangular"
            width={300}
            height={48}
            sx={{ mx: 'auto', mb: 2, borderRadius: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width={400}
            height={24}
            sx={{ mx: 'auto', borderRadius: 2 }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {[1, 2, 3].map((item) => (
            <Box
              key={item}
              sx={{
                flex: '1 1 300px',
                maxWidth: '350px',
                p: 4,
              }}
            >
              <Skeleton
                variant="rectangular"
                width={64}
                height={64}
                sx={{ mb: 3, borderRadius: 2 }}
              />
              <Skeleton
                variant="rectangular"
                width="80%"
                height={32}
                sx={{ mb: 2, borderRadius: 2 }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={60}
                sx={{ borderRadius: 2 }}
              />
            </Box>
          ))}
        </Box>
      </Container>

      {/* CTA Skeleton */}
      <Box sx={{ bgcolor: theme.palette.background.paper, py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Skeleton
              variant="rectangular"
              width={400}
              height={48}
              sx={{ mx: 'auto', mb: 2, borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              width={300}
              height={24}
              sx={{ mx: 'auto', mb: 4, borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              width={250}
              height={56}
              sx={{ mx: 'auto', borderRadius: 2 }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SkeletonLoader;