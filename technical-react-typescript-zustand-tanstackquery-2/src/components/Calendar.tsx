// Calendar.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useCalendarStore } from '../store/useCalendarStore';

// Calendar component
const Calendar: React.FC = () => {
  const {
    currentMonth,
    selectedDate,
    setSelectedDate,
    nextMonth,
    previousMonth,
    getDaysInMonth,
  } = useCalendarStore();

  const daysInMonth = getDaysInMonth();

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div style={styles.calendarContainer}>
      {/* Header with month navigation */}
      <div style={styles.header}>
        <motion.button
          onClick={previousMonth}
          style={styles.navButton}
          whileTap={{ scale: 0.9 }}
        >
          Prev
        </motion.button>
        <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
        <motion.button
          onClick={nextMonth}
          style={styles.navButton}
          whileTap={{ scale: 0.9 }}
        >
          Next
        </motion.button>
      </div>

      {/* Days of the week */}
      <div style={styles.weekdays}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} style={styles.weekday}>
            {day}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div style={styles.daysGrid}>
        {daysInMonth.map((date) => (
          <motion.div
            key={date.toString()}
            style={{
              ...styles.day,
              backgroundColor: selectedDate?.toDateString() === date.toDateString() ? '#4CAF50' : '#fff',
              color: selectedDate?.toDateString() === date.toDateString() ? '#fff' : '#000',
            }}
            onClick={() => handleDateClick(date)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {format(date, 'd')}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  calendarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    margin: '0 auto',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: '10px',
  },
  navButton: {
    backgroundColor: '#f0f0f0',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  weekdays: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    width: '100%',
    marginBottom: '5px',
  },
  weekday: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  daysGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '5px',
    width: '100%',
  },
  day: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default Calendar;
