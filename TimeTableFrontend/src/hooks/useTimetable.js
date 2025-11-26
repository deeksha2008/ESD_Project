import { useState, useEffect } from 'react';
import { fetchTimetable } from '../api/studentApi';

const useTimetable = (studentId) => {
    const [timetable, setTimetable] = useState(null);

    useEffect(() => {
        if (studentId) {
            fetch(`http://localhost:8082/api/v1/student/${studentId}/timetable`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })
                .then(response => response.json())
                .then(data => setTimetable(data))
                .catch(error => console.error('Error fetching timetable:', error));
        }
    }, [studentId]);

    return timetable;
};

export default useTimetable;
