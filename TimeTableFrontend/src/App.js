import React from 'react';
import { Container, Typography, Button, Box, Paper, Grid } from '@mui/material';
import LoginForm from './components/LoginForm';
import AccessDenied from './components/AccessDenied';
import Timetable from './components/Timetable';
import RegisteredCourses from './components/RegisteredCourses';
import useAuth from './hooks/useAuth';
import useTimetable from './hooks/useTimetable';
import useCourses from './hooks/useCourses';
import { downloadTimetableAsPDF } from './utils/pdfUtils';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import OAuth2RedirectHandler from './components/OAuth2RedirectHandler';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

const App = () => {
    const { studentId, name, loading, handleLogout } = useAuth();
    const timetable = useTimetable(studentId);
    const courses = useCourses(studentId);
    const [showTimetable, setShowTimetable] = React.useState(false);

    // Check for error parameter
    const queryParams = new URLSearchParams(window.location.search);
    const error = queryParams.get('error');

    if (loading) {
        return <div>Loading...</div>;
    }

    // Show Access Denied page if unauthorized
    if (error === 'unauthorized') {
        return <AccessDenied />;
    }

    return (
        <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Routes>
                <Route path="/oauth2/redirect" element={<Navigate to="/" />} />
                <Route path="/" element={!studentId ? (
                    <Container sx={{ mt: 10 }}><LoginForm /></Container>
                ) : (
                    <>
                        <Navbar name={name} onLogout={handleLogout} />

                        <Container maxWidth="lg" sx={{ flexGrow: 1, mb: 4 }}>
                            {/* Hero Section */}
                            <Box sx={{ mb: 4, textAlign: 'center' }}>
                                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#1a237e', mb: 1 }}>
                                    Student Dashboard
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    Manage your schedule and view your registered courses
                                </Typography>
                            </Box>

                            {/* Quick Actions Card */}
                            <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 3, border: '1px solid #e0e0e0' }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
                                    Quick Actions
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Button
                                            onClick={() => setShowTimetable(!showTimetable)}
                                            variant="contained"
                                            startIcon={showTimetable ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            sx={{
                                                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                                                textTransform: 'none',
                                                px: 3
                                            }}
                                        >
                                            {showTimetable ? 'Hide Timetable' : 'View Timetable'}
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            onClick={() => downloadTimetableAsPDF(timetable)}
                                            variant="outlined"
                                            startIcon={<PictureAsPdfIcon />}
                                            sx={{
                                                borderColor: '#2196F3',
                                                color: '#2196F3',
                                                fontWeight: 'bold',
                                                textTransform: 'none',
                                                px: 3,
                                                '&:hover': {
                                                    borderColor: '#1976D2',
                                                    backgroundColor: 'rgba(33, 150, 243, 0.04)'
                                                }
                                            }}
                                        >
                                            Download PDF
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>

                            {showTimetable && (
                                <Box sx={{ mb: 4, animation: 'fadeIn 0.5s ease-in' }}>
                                    <style>{`
                                        @keyframes fadeIn {
                                            from { opacity: 0; transform: translateY(10px); }
                                            to { opacity: 1; transform: translateY(0); }
                                        }
                                    `}</style>
                                    <Timetable timetable={timetable} />
                                </Box>
                            )}

                            <RegisteredCourses courses={courses} />
                        </Container>

                        {/* Footer */}
                        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#fff', borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                © {new Date().getFullYear()} TimeTable App. All rights reserved.
                            </Typography>
                        </Box>
                    </>
                )} />
            </Routes>
        </Box>
    );
};

export default App;
