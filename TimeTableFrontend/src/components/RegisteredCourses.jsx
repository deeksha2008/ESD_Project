import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import RoomIcon from '@mui/icons-material/Room';
import PersonIcon from '@mui/icons-material/Person';

const RegisteredCourses = ({ courses }) => {
    if (!courses) return null;

    // Vibrant pastel palette (matching Timetable)
    const courseColors = [
        '#FFB3BA', // Pastel Red
        '#BAFFC9', // Pastel Green
        '#BAE1FF', // Pastel Blue
        '#FFFFBA', // Pastel Yellow
        '#FFDFBA', // Pastel Orange
        '#E0BBE4', // Pastel Purple
        '#957DAD', // Muted Purple
        '#D291BC', // Pastel Pink
        '#FEC8D8', // Light Pink
        '#FFDFD3'  // Peach
    ];

    const getCourseColor = (courseName) => {
        if (!courseName) return '#fff';
        let hash = 0;
        for (let i = 0; i < courseName.length; i++) {
            hash = courseName.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % courseColors.length;
        return courseColors[index];
    };

    return (
        <Box sx={{ mt: 4, mb: 4 }}>
            <Box sx={{
                p: 2,
                mb: 3,
                background: 'linear-gradient(45deg, #FF512F 30%, #DD2476 90%)',
                color: 'white',
                borderRadius: 2,
                boxShadow: 3
            }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    Registered Courses
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {courses.map((course, index) => {
                    const cardColor = getCourseColor(course.courseName);

                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                elevation={3}
                                sx={{
                                    height: '100%',
                                    background: `linear-gradient(135deg, ${cardColor} 0%, #ffffff 150%)`,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: 6
                                    },
                                    borderRadius: 3,
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
                                        {course.courseName}
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <PersonIcon sx={{ color: '#555', mr: 1, fontSize: 20 }} />
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                                            {course.faculty}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <RoomIcon sx={{ color: '#555', mr: 1, fontSize: 20 }} />
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                                            {course.roomNumber || course.roomNo}
                                        </Typography>
                                    </Box>

                                    <Chip
                                        icon={<SchoolIcon />}
                                        label={course.specialization}
                                        size="small"
                                        sx={{
                                            backgroundColor: 'rgba(255,255,255,0.6)',
                                            fontWeight: 'bold',
                                            color: '#444'
                                        }}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default RegisteredCourses;
