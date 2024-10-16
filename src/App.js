import React from 'react';
import { Container, Typography, Box, Grid, Button, Link, Avatar, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from './assets/profile.jpg'; // Path to your profile image

const App = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#f0f0f0',
          padding: '50px 20px',
        }}
      >
        <Avatar
          alt="Jay Buranpuri"
          src={profileImage}
          sx={{ width: 150, height: 150, mb: 3 }}
        />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" gutterBottom>
            Jay Buranpuri
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Lead UI Developer | React | AWS | Java
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            href="#contact"
          >
            Contact Me
          </Button>
        </motion.div>
      </Box>

      {/* About Section */}
      <Box sx={{ padding: '50px 20px' }}>
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I am a passionate Lead UI Developer with extensive experience in cloud-native solutions using React, AWS, and Java. I specialize in building scalable, impactful applications that drive business growth and customer satisfaction. My core expertise lies in serverless architecture and leading UI/UX teams.
        </Typography>
      </Box>

      {/* Experience Section */}
      <Box sx={{ padding: '50px 20px', backgroundColor: '#fafafa' }}>
        <Typography variant="h3" gutterBottom>
          Experience
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Box p={3} boxShadow={3} borderRadius={2} sx={{ backgroundColor: '#fff' }}>
                <Typography variant="h6">Lead UI Developer, Cloudnova Technologies</Typography>
                <Typography variant="body2" color="textSecondary">Dec 2022 - Present</Typography>
                <Typography variant="body1">
                  Led a team to integrate cloud-native security modules, reducing infrastructure costs by 90%.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Box p={3} boxShadow={3} borderRadius={2} sx={{ backgroundColor: '#fff' }}>
                <Typography variant="h6">Senior Software Engineer, Veracity Solutions</Typography>
                <Typography variant="body2" color="textSecondary">Jun 2022 - Dec 2022</Typography>
                <Typography variant="body1">
                  Developed a healthcare app, improving patient engagement by 30% and reducing hospital visits by 25%.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Education Section */}
      <Box sx={{ padding: '50px 20px' }}>
        <Typography variant="h3" gutterBottom>
          Education
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6">Master of Science, Computer Science</Typography>
              <Typography variant="body2" color="textSecondary">University of Maryland, Baltimore County</Typography>
              <Typography variant="body2" color="textSecondary">Jan 2021 - Dec 2022</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6">Bachelor of Engineering, Information Technology</Typography>
              <Typography variant="body2" color="textSecondary">Charusat University, India</Typography>
              <Typography variant="body2" color="textSecondary">Apr 2016 - Jun 2020</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Skills Section */}
      <Box sx={{ padding: '50px 20px', backgroundColor: '#fafafa' }}>
        <Typography variant="h3" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">JavaScript</Typography>
            <LinearProgress variant="determinate" value={90} sx={{ height: 10, borderRadius: 5, mb: 2 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">React</Typography>
            <LinearProgress variant="determinate" value={95} sx={{ height: 10, borderRadius: 5, mb: 2 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">AWS</Typography>
            <LinearProgress variant="determinate" value={85} sx={{ height: 10, borderRadius: 5, mb: 2 }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Docker</Typography>
            <LinearProgress variant="determinate" value={80} sx={{ height: 10, borderRadius: 5, mb: 2 }} />
          </Grid>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box sx={{ padding: '50px 20px' }} id="contact">
        <Typography variant="h3" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to reach out via any of the following platforms:
        </Typography>
        <Box>
          <Link href="https://linkedin.com/in/jay140299" target="_blank" sx={{ marginRight: 2 }}>
            LinkedIn
          </Link>
          <Link href="https://github.com/buranpurijay" target="_blank" sx={{ marginRight: 2 }}>
            GitHub
          </Link>
          <Link href="mailto:buranpurijay@gmail.com">Email</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
