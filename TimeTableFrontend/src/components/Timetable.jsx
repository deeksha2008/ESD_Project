import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import plannerBg from '../assets/planner_background.jpg';

const Timetable = ({ timetable }) => {
    if (!timetable) return null;

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeslots = [
        { startTime: '08:00', endTime: '09:30' },
        { startTime: '09:30', endTime: '11:00' },
        { startTime: '11:00', endTime: '13:00' },
    ];

    // Vibrant pastel palette for courses
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

    // Helper to get a consistent color for a course name
    const getCourseColor = (courseName) => {
        if (!courseName) return 'transparent';
        let hash = 0;
        for (let i = 0; i < courseName.length; i++) {
            hash = courseName.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % courseColors.length;
        return courseColors[index];
    };

    const createEmptyTimeslot = () => {
        return timeslots.map((slot) => ({
            startTime: slot.startTime,
            endTime: slot.endTime,
            courseName: '',
        }));
    };

    const createTimetableTable = () => {
        return daysOfWeek.map((day) => {
            const daySlots = timetable.weekdays.find((weekday) => weekday.day === day);

            let timeslotsForDay = createEmptyTimeslot();

            if (daySlots) {
                daySlots.timeslots.forEach((slot) => {
                    const timeslotIndex = timeslots.findIndex(
                        (time) => {
                            const startTime = slot.startTime.substring(0, 5);
                            const endTime = slot.endTime.substring(0, 5);
                            return time.startTime === startTime && time.endTime === endTime;
                        }
                    );
                    if (timeslotIndex >= 0) {
                        timeslotsForDay[timeslotIndex].courseName = slot.coursename;
                    }
                });
            }

            return (
                <TableRow key={day} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', backgroundColor: 'rgba(245, 245, 245, 0.9)', color: '#333' }}>
                        {day}
                    </TableCell>
                    {timeslotsForDay.map((slot, index) => {
                        const hasClass = !!slot.courseName;
                        const cellColor = getCourseColor(slot.courseName);

                        return (
                            <TableCell
                                key={index}
                                align="center"
                                sx={{
                                    backgroundColor: hasClass ? cellColor : 'rgba(255, 255, 255, 0.6)',
                                    color: hasClass ? '#333' : '#999',
                                    fontWeight: hasClass ? '500' : 'normal',
                                    fontStyle: hasClass ? 'normal' : 'italic',
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        transform: hasClass ? 'scale(1.02)' : 'none',
                                        boxShadow: hasClass ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
                                        zIndex: hasClass ? 1 : 'auto',
                                    }
                                }}
                            >
                                {slot.courseName ? (
                                    <Box sx={{ p: 1, borderRadius: 1 }}>
                                        {slot.courseName}
                                    </Box>
                                ) : (
                                    'No Class'
                                )}
                            </TableCell>
                        );
                    })}
                </TableRow>
            );
        });
    };


    return (
        <TableContainer component={Paper} elevation={3} sx={{
            borderRadius: 2,
            overflow: 'hidden',
            mt: 4,
            mb: 4,
            backgroundImage: `url(${plannerBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <Box sx={{ p: 2, background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', color: 'white', opacity: 0.95 }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    Weekly Timetable
                </Typography>
            </Box>
            <Table sx={{ minWidth: 650, backgroundColor: 'rgba(255, 255, 255, 0.4)' }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: 'rgba(51, 51, 51, 0.9)' }}>
                        <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Day</TableCell>
                        {timeslots.map((slot, index) => (
                            <TableCell key={index} align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>
                                {slot.startTime} - {slot.endTime}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {createTimetableTable()}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Timetable;
