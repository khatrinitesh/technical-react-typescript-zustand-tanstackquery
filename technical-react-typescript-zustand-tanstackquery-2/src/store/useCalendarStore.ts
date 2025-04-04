
import {create} from 'zustand';
import { format, startOfMonth, addMonths, subMonths, eachDayOfInterval } from 'date-fns';


interface CalendarStore {
    currentMonth: Date;
    selectedDate: Date | null;
    setCurrentMonth: (date: Date) => void;
    setSelectedDate: (date: Date | null) => void;
    nextMonth: () => void;
    previousMonth: () => void;
    getDaysInMonth: () => Date[];
  }

  export const useCalendarStore = create<CalendarStore>((set) => ({
    currentMonth: new Date(),
    selectedDate: null,
    setCurrentMonth: (date) => set({ currentMonth: date }),
    setSelectedDate: (date) => set({ selectedDate: date }),
    nextMonth: () =>
      set((state) => ({
        currentMonth: addMonths(state.currentMonth, 1),
      })),
    previousMonth: () =>
      set((state) => ({
        currentMonth: subMonths(state.currentMonth, 1),
      })),
    getDaysInMonth: () =>
      eachDayOfInterval({
        start: startOfMonth(new Date()),
        end: addMonths(startOfMonth(new Date()), 1),
      }),
  }));

